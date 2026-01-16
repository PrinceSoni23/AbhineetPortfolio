import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    console.log("Received contact form submission:", { name, email });
    console.log("Environment variables check:", {
      hasEmailUser: !!process.env.EMAIL_USER,
      hasEmailPassword: !!process.env.EMAIL_PASSWORD,
      hasRecipientEmail: !!process.env.RECIPIENT_EMAIL,
      emailUser: process.env.EMAIL_USER,
      recipientEmail: process.env.RECIPIENT_EMAIL,
    });

    // Validate input
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    // Create transporter using Gmail
    // You'll need to set up environment variables for this
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL_USER, // Your Gmail address
        pass: process.env.EMAIL_PASSWORD, // Your Gmail App Password
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    // Email options
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.RECIPIENT_EMAIL || "professor@example.com", // Professor's email
      replyTo: email,
      subject: `Portfolio Contact: Message from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9fafb; border-radius: 10px;">
          <div style="background-color: white; padding: 30px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
            <h2 style="color: #2563eb; margin-bottom: 20px; border-bottom: 3px solid #2563eb; padding-bottom: 10px;">
              New Contact Form Submission
            </h2>
            
            <div style="margin-bottom: 20px;">
              <p style="margin: 0; color: #6b7280; font-size: 14px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Name</p>
              <p style="margin: 5px 0 0 0; color: #111827; font-size: 16px; font-weight: 500;">${name}</p>
            </div>
            
            <div style="margin-bottom: 20px;">
              <p style="margin: 0; color: #6b7280; font-size: 14px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Email</p>
              <p style="margin: 5px 0 0 0;">
                <a href="mailto:${email}" style="color: #2563eb; text-decoration: none; font-size: 16px;">${email}</a>
              </p>
            </div>
            
            <div style="margin-bottom: 20px;">
              <p style="margin: 0; color: #6b7280; font-size: 14px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Message</p>
              <div style="margin: 10px 0 0 0; padding: 15px; background-color: #f9fafb; border-left: 4px solid #2563eb; border-radius: 4px;">
                <p style="margin: 0; color: #111827; line-height: 1.6; white-space: pre-wrap;">${message}</p>
              </div>
            </div>
            
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
              <p style="margin: 0; color: #9ca3af; font-size: 12px; text-align: center;">
                This message was sent from your portfolio contact form
              </p>
            </div>
          </div>
        </div>
      `,
      text: `
Name: ${name}
Email: ${email}

Message:
${message}
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Email sent successfully!" },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Error sending email:", error);
    console.error("Error details:", {
      message: error.message,
      code: error.code,
      command: error.command,
    });
    return NextResponse.json(
      {
        error: "Failed to send email. Please try again later.",
        details: error.message,
      },
      { status: 500 }
    );
  }
}
