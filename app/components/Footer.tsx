"use client";

import Link from "next/link";
import {
  FaFlask,
  FaLinkedin,
  FaTwitter,
  FaGithub,
  FaResearchgate,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaUser,
} from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/#about" },
    { name: "Research", href: "/#research" },
    { name: "Students", href: "/students" },
    { name: "Gallery", href: "/gallery" },
    { name: "Publications", href: "/#publications" },
    { name: "Contact", href: "/#contact" },
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: FaLinkedin,
      href: "https://linkedin.com",
      color: "hover:text-blue-600",
    },
    {
      name: "ResearchGate",
      icon: FaResearchgate,
      href: "https://researchgate.net",
      color: "hover:text-green-600",
    },
    {
      name: "Twitter",
      icon: FaTwitter,
      href: "https://twitter.com",
      color: "hover:text-sky-500",
    },
    {
      name: "GitHub",
      icon: FaGithub,
      href: "https://github.com",
      color: "hover:text-gray-800",
    },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 py-10 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* About Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <FaFlask className="text-white text-xl" />
              </div>
              <div>
                <h3 className="text-white font-bold text-lg">
                  Dr. Abhineet Verma
                </h3>
                <p className="text-gray-400 text-xs">Ph.D. in Chemistry</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed">
              Advancing research in organic chemistry and molecular sciences
              with a commitment to academic excellence and innovation.
            </p>
            <a
              href="/cv/Dr_Abhineet_Verma_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <button className="mt-2 px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300 hover:scale-105 shadow-md">
                Download CV
              </button>
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map(link => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm hover:text-blue-400 transition-colors duration-300 hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-4">
              Contact Info
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm">
                <FaEnvelope className="text-blue-400 mt-1 flex-shrink-0" />
                <a
                  href="mailto:professor@example.com"
                  className="hover:text-blue-400 transition-colors"
                >
                  abhineet.chy@mnit.ac.in
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <FaPhone className="text-blue-400 mt-1 flex-shrink-0" />
                <div className="flex items-center gap-2">
                  <span>+91 95496 51671</span>
                  <span className="text-gray-500">|</span>
                  <span>+91 95496 51671</span>
                </div>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <FaMapMarkerAlt className="text-blue-400 mt-1 flex-shrink-0" />
                <span>MNIT Jaipur, Rajasthan, India</span>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-4">Follow Me</h4>
            <div className="flex gap-3 flex-wrap">
              {socialLinks.map(social => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center transition-all duration-300 ${social.color} hover:bg-gray-700 hover:scale-110`}
                  aria-label={social.name}
                >
                  <social.icon className="text-lg" />
                </a>
              ))}
            </div>
            <div className="mt-6">
              <h5 className="text-white font-medium text-sm mb-2">
                Office Hours
              </h5>
              <p className="text-sm">Monday - Friday</p>
              <p className="text-sm">9:00 AM - 5:00 PM</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 py-4 sm:py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4">
            <p className="text-xs sm:text-sm text-gray-400 text-center md:text-left">
              © {currentYear} Dr. Abhineet Verma. All rights reserved.
            </p>
            <div className="flex gap-4 sm:gap-6 text-xs sm:text-sm flex-wrap justify-center">
              <Link
                href="https://www.linkedin.com/in/prince-soni-97163522b"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors flex items-center gap-1.5"
              >
                <FaUser className="text-blue-400" />
                Meet the developer
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
