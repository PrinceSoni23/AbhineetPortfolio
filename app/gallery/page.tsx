"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight, FaExpandAlt } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// Featured carousel images
const featuredImages = [
  {
    id: 1,
    src: "/gallery/gc14.jpeg",
    title: "Mentoring Future Scientists",
    description:
      "Guiding students through their research journey and academic excellence",
  },
  {
    id: 2,
    src: "/gallery/gc22.jpeg",
    title: "Inspiring Young Minds",
    description:
      "Sharing knowledge and passion for chemistry with the next generation",
  },
  {
    id: 3,
    src: "/gallery/gc333.jpeg",
    title: "Collaborative Learning",
    description:
      "Working together with students on innovative research projects",
  },
  {
    id: 4,
    src: "/gallery/gc4.jpeg",
    title: "Building Tomorrow's Leaders",
    description:
      "Empowering students to achieve their academic and research goals",
  },
];

// Gallery categories
const galleryCategories = [
  { id: "all", name: "All Photos" },
  { id: "awards", name: "Awards & Honors" },
  { id: "research", name: "Research" },
  { id: "teaching", name: "Teaching" },
  { id: "conferences", name: "Conferences" },
  { id: "students", name: "With Students" },
];

// Gallery images
const galleryImages = [
  {
    id: 1,
    src: "/gallery/g1.jpeg",
    category: "awards",
    title: "Student Gatherings",
    date: "December 2023",
  },
  {
    id: 2,
    src: "/gallery/g5.jpeg",
    category: "research",
    title: "Student Gatherings",
    date: "November 2023",
  },
  {
    id: 3,
    src: "/gallery/g6.jpeg",
    category: "teaching",
    title: "Student Gatherings",
    date: "October 2023",
  },
  {
    id: 4,
    src: "/gallery/g7.jpeg",
    category: "conferences",
    title: "Student Gatherings",
    date: "September 2023",
  },
  {
    id: 5,
    src: "/gallery/g8.jpeg",
    category: "students",
    title: "Student Gatherings",
    date: "August 2023",
  },
  {
    id: 6,
    src: "/gallery/g9.jpeg",
    category: "awards",
    title: "Student Gatherings",
    date: "July 2023",
  },
  {
    id: 7,
    src: "/gallery/g10.jpeg",
    category: "research",
    title: "Student Gatherings",
    date: "June 2023",
  },
  {
    id: 8,
    src: "/gallery/g11.jpeg",
    category: "conferences",
    title: "Student Gatherings",
    date: "May 2023",
  },
  {
    id: 9,
    src: "/gallery/g12.jpeg",
    category: "students",
    title: "Student Gatherings",
    date: "April 2023",
  },
  {
    id: 10,
    src: "/gallery/g13.jpeg",
    category: "students",
    title: "Student Gatherings",
    date: "April 2023",
  },
  {
    id: 11,
    src: "/gallery/gc4.jpeg",
    category: "students",
    title: "Student Gatherings",
    date: "April 2023",
  },
  {
    id: 12,
    src: "/gallery/g15.jpeg",
    category: "students",
    title: "Student Gatherings",
    date: "April 2023",
  },
  {
    id: 13,
    src: "/gallery/g16.jpeg",
    category: "students",
    title: "Student Gatherings",
    date: "April 2023",
  },
  {
    id: 14,
    src: "/gallery/g17.jpeg",
    category: "students",
    title: "Student Gatherings",
    date: "April 2023",
  },
];

export default function GalleryPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [lightboxImage, setLightboxImage] = useState<any>(null);
  const [showNavbar, setShowNavbar] = useState(false);

  // Auto-play carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % featuredImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Handle navbar visibility on scroll
  useEffect(() => {
    const handleScroll = () => {
      // Show navbar when scrolled down more than 100px
      if (window.scrollY > 100) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const nextSlide = () => {
    setCurrentSlide(prev => (prev + 1) % featuredImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      prev => (prev - 1 + featuredImages.length) % featuredImages.length
    );
  };

  return (
    <div className="min-h-screen bg-white w-full overflow-x-hidden">
      <AnimatePresence>
        {showNavbar && (
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Navbar />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section with Featured Carousel */}
      <section className="relative h-[70vh] md:h-[80vh] overflow-hidden bg-gray-900 w-full">
        {/* Carousel */}
        <div className="relative h-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <Image
                src={featuredImages[currentSlide].src}
                alt={featuredImages[currentSlide].title}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent"></div>
            </motion.div>
          </AnimatePresence>

          {/* Carousel Content */}
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12 z-10">
            <div className="container mx-auto">
              <motion.div
                key={`content-${currentSlide}`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="max-w-3xl"
              >
                <h1 className="text-3xl md:text-5xl font-bold text-white mb-3">
                  {featuredImages[currentSlide].title}
                </h1>
                <p className="text-lg md:text-xl text-gray-300">
                  {featuredImages[currentSlide].description}
                </p>
              </motion.div>

              {/* Slide Indicators */}
              <div className="flex gap-2 mt-6">
                {featuredImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`h-1 rounded-full transition-all duration-300 ${
                      index === currentSlide
                        ? "w-12 bg-white"
                        : "w-6 bg-white/40 hover:bg-white/60"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all"
          >
            <FaChevronLeft className="text-white text-xl" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all"
          >
            <FaChevronRight className="text-white text-xl" />
          </button>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 md:py-20 w-full overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 max-w-full">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              With Students
            </h2>
            <div className="h-1 w-20 bg-blue-600 mx-auto"></div>
          </motion.div>

          {/* Asymmetrical Horizontal Masonry Gallery */}
          <motion.div layout className="space-y-4 md:space-y-6">
            <AnimatePresence>
              {galleryImages.map((image, index) => {
                // Create varied horizontal layouts
                const layouts = [
                  { width: "w-full", height: "h-64 md:h-80", offset: "" },
                  {
                    width: "w-full md:w-2/3",
                    height: "h-56 md:h-72",
                    offset: "md:ml-auto",
                  },
                  {
                    width: "w-full md:w-3/4",
                    height: "h-60 md:h-96",
                    offset: "",
                  },
                  {
                    width: "w-full md:w-4/5",
                    height: "h-64 md:h-80",
                    offset: "md:ml-auto",
                  },
                  {
                    width: "w-full md:w-2/3",
                    height: "h-56 md:h-72",
                    offset: "",
                  },
                  { width: "w-full", height: "h-72 md:h-[28rem]", offset: "" },
                ];
                const layout = layouts[index % layouts.length];

                return (
                  <motion.div
                    key={image.id}
                    layout
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 30 }}
                    transition={{ duration: 0.5, delay: index * 0.08 }}
                    className={`${layout.width} ${layout.offset}`}
                  >
                    <motion.div
                      whileHover={{ scale: 1.02, y: -4 }}
                      transition={{ duration: 0.3 }}
                      className={`relative group cursor-pointer overflow-hidden rounded-2xl shadow-xl ${layout.height}`}
                      onClick={() => setLightboxImage(image)}
                    >
                      <div className="relative w-full h-full">
                        <Image
                          src={image.src}
                          alt={image.title}
                          fill
                          className="object-cover transition-all duration-700 group-hover:scale-105 group-hover:brightness-110"
                        />
                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-gray-900/80 via-gray-900/30 to-transparent opacity-60 group-hover:opacity-90 transition-all duration-500">
                          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                            <div className="flex items-end justify-between">
                              <div className="flex-1">
                                <h3 className="text-white font-bold text-lg md:text-2xl mb-2">
                                  With Students
                                </h3>
                                <p className="text-gray-300 text-sm md:text-base">
                                  {image.date}
                                </p>
                              </div>
                              {/* Expand Icon */}
                              <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-4 group-hover:translate-x-0">
                                <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30">
                                  <FaExpandAlt className="text-white text-lg" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
            onClick={() => setLightboxImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-5xl w-full"
              onClick={e => e.stopPropagation()}
            >
              <div className="relative h-[70vh]">
                <Image
                  src={lightboxImage.src}
                  alt={lightboxImage.title}
                  fill
                  className="object-contain"
                />
              </div>
              <div className="text-center mt-6">
                <h3 className="text-white text-2xl font-bold mb-2">
                  {lightboxImage.title}
                </h3>
                <p className="text-gray-400">{lightboxImage.date}</p>
              </div>
              <button
                onClick={() => setLightboxImage(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-all text-white text-xl"
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}
