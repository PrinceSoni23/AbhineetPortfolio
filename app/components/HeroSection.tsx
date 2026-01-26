"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const backgroundImages = [
  "/images/b11.jpeg",
  "/images/b222.jpeg",
  "/images/b33.jpeg",
  "/images/b44.jpeg",
];

export default function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(
        prevIndex => (prevIndex + 1) % backgroundImages.length
      );
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

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
    <section className="relative min-h-screen w-full overflow-hidden pt-4 sm:pt-6 md:pt-8 max-w-full">
      {/* Background Carousel */}
      <div className="absolute inset-0 z-0 w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0 w-full"
          >
            <Image
              src={backgroundImages[currentImageIndex]}
              alt="Chemistry Lab Background"
              fill
              className="object-cover"
              priority={currentImageIndex === 0}
            />
            {/* Overlay for better text visibility */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/85 via-white/75 to-blue-50/65"></div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Content Container */}
      <div className="container mx-auto h-full px-4 sm:px-6 lg:px-12 py-8 sm:py-12 md:py-16 relative z-10 max-w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-6 sm:gap-8 md:gap-12 items-center min-h-[85vh] w-full">
          {/* Left Side - Static Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="z-10 space-y-4 sm:space-y-6 text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight whitespace-nowrap">
                Dr. Abhineet Verma
              </h1>
              <div className="h-1 w-16 sm:w-20 bg-blue-600 mb-4 sm:mb-6 mx-auto lg:mx-0"></div>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-lg sm:text-xl md:text-2xl text-stone-600 font-light"
            >
              Ph.D. in Chemistry
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-sm sm:text-base md:text-lg text-stone-500 max-w-xl leading-relaxed mx-auto lg:mx-0"
            >
              Advancing research in organic chemistry and molecular sciences
              with over 8+ years of experience in academic excellence and
              innovation.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4 justify-center lg:justify-start"
            >
              <Link href="/publications">
                <button className="px-5 sm:px-6 py-2 sm:py-2.5 bg-stone-900 text-white font-semibold rounded-lg hover:bg-stone-800 transition-all duration-300 hover:scale-105 shadow-md text-sm">
                  View Publications
                </button>
              </Link>
              <a
                href="/cv/Dr.AbhineetVerma_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="px-5 sm:px-6 py-2 sm:py-2.5 border-2 border-stone-900 text-stone-900 font-semibold rounded-lg hover:bg-stone-50 transition-all duration-300 hover:scale-105 text-sm">
                  Download CV
                </button>
              </a>
            </motion.div>
          </motion.div>

          {/* Right Side - Professor Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative h-[350px] sm:h-[400px] md:h-[480px] lg:h-[580px] w-full lg:ml-2 order-first lg:order-last"
          >
            <div className="relative h-full w-full">
              {/* Removed background blur and card styling for seamless integration */}
              <Image
                src="/images/hero.png"
                alt="Professor"
                fill
                className="object-contain object-center lg:object-right"
                priority
                style={{
                  filter: "drop-shadow(0 20px 60px rgba(0, 0, 0, 0.15))",
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          delay: 1.2,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="absolute bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 z-20 hidden md:flex"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-stone-500 text-xs uppercase tracking-wider">
            Scroll
          </span>
          <div className="w-5 h-8 border-2 border-stone-400 rounded-full flex justify-center">
            <div className="w-1 h-2 bg-stone-900 rounded-full mt-1.5"></div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
