# Email Setup Instructions

The contact form now sends emails directly without opening an email client! Follow these steps to configure it:

## Step 1: Set up Gmail App Password

1. Go to your Google Account: https://myaccount.google.com/
2. Click on "Security" in the left sidebar
3. Under "Signing in to Google", enable **2-Step Verification** (if not already enabled)
4. Once 2-Step Verification is enabled, go back to Security
5. Under "Signing in to Google", click on **App passwords**
6. Select "Mail" as the app and "Other" as the device
7. Name it "Portfolio Contact Form"
8. Click "Generate"
9. **Copy the 16-character password** that appears (you won't see it again!)

## Step 2: Update Environment Variables

1. Open the `.env.local` file in the root of your project
2. Replace the placeholder values:

```env
# Your Gmail address (the email that will SEND the messages)
EMAIL_USER=youremail@gmail.com

# The 16-character App Password you just generated (NOT your regular password)
EMAIL_PASSWORD=abcd efgh ijkl mnop

# The professor's email (where messages will be RECEIVED)
RECIPIENT_EMAIL=professor@university.edu
```

## Step 3: Restart the Development Server

After updating `.env.local`, restart your dev server:

```bash
# Stop the current server (Ctrl+C)
# Then restart it:
npm run dev
```

## Step 4: Test the Contact Form

1. Go to the Contact section on your website
2. Fill in the form with test data
3. Click "Send Message"
4. Check the professor's email inbox for the message!

## How It Works

- User fills out the contact form
- Form data is sent to `/api/contact` endpoint
- Backend API uses Nodemailer to send email via Gmail
- Email is sent from `EMAIL_USER` to `RECIPIENT_EMAIL`
- The sender's email is set as the reply-to address
- User sees success/error message

## Email Format

The professor will receive a beautifully formatted HTML email with:

- Sender's name
- Sender's email (clickable)
- The message content
- Professional styling matching your website theme

## Troubleshooting

**"Failed to send email" error:**

- Make sure you're using an App Password, NOT your regular Gmail password
- Verify 2-Step Verification is enabled on your Google account
- Check that all environment variables are set correctly
- Restart the dev server after changing `.env.local`

**Email not arriving:**

- Check spam/junk folder
- Verify the RECIPIENT_EMAIL is correct
- Check the terminal/console for error messages

## Alternative Email Providers

If you don't want to use Gmail, you can use other providers:

### Outlook/Hotmail:

```javascript
service: "hotmail";
```

### Custom SMTP:

```javascript
host: 'smtp.yourprovider.com',
port: 587,
secure: false,
auth: {
  user: process.env.EMAIL_USER,
  pass: process.env.EMAIL_PASSWORD,
}
```

## Security Notes

- ✅ Environment variables are safe and not exposed to the browser
- ✅ `.env.local` is in `.gitignore` (not committed to GitHub)
- ✅ App Passwords are safer than using your main Gmail password
- ✅ Input validation prevents spam and malicious content
- ✅ Email validation ensures proper email format

## Production Deployment

When deploying (Vercel, Netlify, etc.):

1. Add the same environment variables in your hosting platform's settings
2. Go to your project settings → Environment Variables
3. Add: `EMAIL_USER`, `EMAIL_PASSWORD`, `RECIPIENT_EMAIL`
4. Redeploy your application

---

Need help? Check the logs in your terminal for detailed error messages!
