"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { FaFlask, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/#about" },
    { name: "Publications", href: "/publications" },
    { name: "Students", href: "/students" },
    { name: "Gallery", href: "/gallery" },
  ];

  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth", block: "start" });
      // Update URL hash without triggering navigation
      window.history.pushState(null, "", "#contact");
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 w-full ${
        scrolled ? "bg-white/90 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 max-w-full">
        <div className="flex items-center justify-between h-16 w-full">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-9 h-9 bg-blue-600 rounded-lg flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300 group-hover:scale-110">
              <FaFlask className="text-white text-lg" />
            </div>
            <div className="flex flex-col">
              <span
                className={`font-bold text-base leading-tight transition-colors duration-300 ${
                  scrolled ? "text-gray-900" : "text-gray-900"
                }`}
              >
                Dr. Abhineet Verma
              </span>
              <span
                className={`text-[10px] transition-colors duration-300 ${
                  scrolled ? "text-gray-600" : "text-gray-700"
                }`}
              >
                Chemistry Professor
              </span>
            </div>
          </Link>

          {/* Navigation Links - Center */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(link => (
              <a
                key={link.name}
                href={link.href}
                className={`font-medium text-sm transition-colors duration-300 hover:text-blue-600 relative group ${
                  scrolled ? "text-gray-700" : "text-gray-900"
                }`}
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Contact Button - Right (Hidden on Mobile) */}
          <a
            href="#contact"
            onClick={handleContactClick}
            className="hidden md:block"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-5 py-2 text-sm rounded-lg font-semibold transition-all duration-300 ${
                scrolled
                  ? "bg-blue-600 text-white hover:bg-blue-700 shadow-md"
                  : "bg-blue-600 text-white hover:bg-blue-700 shadow-lg"
              }`}
            >
              Contact Me
            </motion.button>
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`md:hidden flex flex-col gap-1.5 z-[150] relative ${
              scrolled ? "text-gray-900" : "text-gray-900"
            }`}
            aria-label="Toggle menu"
          >
            <span
              className={`w-6 h-0.5 bg-current transition-all ${
                mobileMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            ></span>
            <span
              className={`w-6 h-0.5 bg-current transition-all ${
                mobileMenuOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`w-6 h-0.5 bg-current transition-all ${
                mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            ></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu - Outside container */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/50 z-[110] md:hidden"
            />

            {/* Mobile Menu Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-screen w-[280px] bg-white shadow-2xl z-[120] md:hidden flex flex-col"
            >
              <div className="p-6 flex-1 overflow-y-auto">
                {/* Mobile Logo */}
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                    <FaFlask className="text-white text-xl" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-bold text-base text-gray-900">
                      Dr. Abhineet Verma
                    </span>
                    <span className="text-[10px] text-gray-600">
                      Chemistry Professor
                    </span>
                  </div>
                </div>

                {/* Mobile Navigation Links */}
                <nav className="flex flex-col gap-2">
                  {navLinks.map((link, index) => (
                    <motion.a
                      key={link.name}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className="px-4 py-3 text-gray-700 font-medium hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-all"
                    >
                      {link.name}
                    </motion.a>
                  ))}
                </nav>

                {/* Mobile Contact Button */}
                <a
                  href="#contact"
                  onClick={e => {
                    handleContactClick(e);
                    setMobileMenuOpen(false);
                  }}
                >
                  <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="w-full mt-6 px-5 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg"
                  >
                    Contact Me
                  </motion.button>
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
