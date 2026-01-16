"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import {
  FaGraduationCap,
  FaEnvelope,
  FaPhone,
  FaFlask,
  FaUserGraduate,
  FaBriefcase,
} from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// PhD Students Data
const phdStudents = [
  {
    id: 1,
    name: "Ms. Sharsti Goyal",
    degree: "Ph.D. Chemistry, 2023",
    email: "2024rcy9016@mnit.ac.in",
    phone: "7424969332",
    topic: "Single or Chain Molecular Magnetism",
    status: "Pursuing",
    image: "/images/students/student-1.jpg",
  },
  {
    id: 2,
    name: "Mr. Sumit Kumar",
    degree: "Ph.D. Chemistry, 2024",
    email: "2024rcy9519@mnit.ac.in",
    phone: "8755557436",
    topic: "ESIPT Dynamics",
    status: "Pursuing",
    image: "/images/students/student-2.jpg",
  },
  {
    id: 3,
    name: "Mr. Uday Singh",
    degree: "Ph.D. Chemistry, 2025",
    email: "2025rcy9563@mnit.ac.in",
    phone: "7891162493",
    topic: "Fluorescent Ionic Liquid",
    status: "Pursuing",
    image: "/images/students/student-3.jpg",
  },
];

// Current M.Sc. Students
const currentMscStudents = [
  {
    id: 1,
    name: "Mr. Shashank Kumar Mishra",
    degree: "M.Sc Chemistry Final Year",
    email: "shashankmishra.mnit@gmail.com",
    phone: "7905275625",
    image: "/images/students/msc-1.jpg",
  },
  {
    id: 2,
    name: "Ms. Sakshi Dwivedi",
    degree: "M.Sc Chemistry Final Year",
    email: "1001sakshidu@gmail.com",
    phone: "8931072100",
    image: "/images/students/msc-2.jpg",
  },
  {
    id: 3,
    name: "Ms. Richa Kaushik",
    degree: "M.Sc Chemistry Final Year",
    email: "richakushik9598@gmail.com",
    phone: "9911186603",
    image: "/images/students/msc-3.jpg",
  },
];

// Past M.Sc. Students
const pastMscStudents = [
  {
    id: 1,
    name: "Ms. Harshita Mehar",
    degree: "M.Sc Chemistry Graduate, 2024",
    email: "harshitamehra9210@gmail.com",
    phone: "7737893845",
    currentPosition: "",
    image: "/images/students/alumni-1.jpg",
  },
  {
    id: 2,
    name: "Mr. Aman Rajput",
    degree: "M.Sc Chemistry Graduate, 2024",
    email: "amanrajput7882@gmail.com",
    phone: "8630788223",
    currentPosition: "Trainee Faculty at RV Learning Hub, Bengaluru",
    image: "/images/students/alumni-2.jpg",
  },
];

// Student Card Component
const StudentCard = ({ student, index, showTopic = false }: any) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-300"
    >
      {/* Image Section */}
      <div className="relative h-64 bg-gradient-to-br from-blue-500 to-blue-600 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center shadow-xl">
            <FaUserGraduate className="text-6xl text-blue-600" />
          </div>
        </div>
        {/* Status Badge */}
        {student.status && (
          <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
            {student.status}
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{student.name}</h3>
        <p className="text-sm text-blue-600 font-semibold mb-4">
          {student.degree}
        </p>

        {/* Research Topic */}
        {showTopic && student.topic && (
          <div className="mb-4 p-3 bg-blue-50 rounded-lg border-l-4 border-blue-600">
            <p className="text-xs text-gray-600 uppercase tracking-wider mb-1">
              Research Topic
            </p>
            <p className="text-sm text-gray-900 font-medium">{student.topic}</p>
          </div>
        )}

        {/* Current Position (for alumni) */}
        {student.currentPosition && (
          <div className="mb-4 p-3 bg-green-50 rounded-lg border-l-4 border-green-600">
            <div className="flex items-start gap-2">
              <FaBriefcase className="text-green-600 mt-1 flex-shrink-0" />
              <div>
                <p className="text-xs text-gray-600 uppercase tracking-wider mb-1">
                  Current Position
                </p>
                <p className="text-sm text-gray-900 font-medium">
                  {student.currentPosition}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Contact Info */}
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-gray-600 text-sm">
            <FaEnvelope className="text-blue-600 flex-shrink-0" />
            <a
              href={`mailto:${student.email}`}
              className="hover:text-blue-600 transition-colors truncate"
            >
              {student.email}
            </a>
          </div>
          <div className="flex items-center gap-2 text-gray-600 text-sm">
            <FaPhone className="text-blue-600 flex-shrink-0" />
            <a
              href={`tel:${student.phone}`}
              className="hover:text-blue-600 transition-colors"
            >
              {student.phone}
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// Stats Component
const StatsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  const stats = [
    { label: "PhD Students", value: "3", icon: FaGraduationCap },
    { label: "M.Sc. Students", value: "3", icon: FaUserGraduate },
    { label: "Alumni", value: "2", icon: FaBriefcase },
    { label: "Research Areas", value: "3", icon: FaFlask },
  ];

  return (
    <div ref={ref} className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={
            isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
          }
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl p-6 text-white text-center shadow-lg hover:shadow-xl transition-all"
        >
          <stat.icon className="text-4xl mx-auto mb-3 opacity-90" />
          <div className="text-3xl font-bold mb-1">{stat.value}</div>
          <div className="text-sm opacity-90">{stat.label}</div>
        </motion.div>
      ))}
    </div>
  );
};

export default function StudentsPage() {
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: false, margin: "-100px" });
  const [showNavbar, setShowNavbar] = useState(false);

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

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-24 md:py-32 w-full overflow-hidden"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 max-w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={
              isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
            }
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-block mb-6">
              <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto">
                <FaGraduationCap className="text-5xl" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Students & Research Team
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-4">
              Nurturing Future Scientists and Innovators
            </p>
            <p className="text-lg text-blue-200 max-w-2xl mx-auto">
              Proud to mentor brilliant minds dedicated to advancing chemistry
              research and making meaningful contributions to science.
            </p>
          </motion.div>
        </div>

        {/* Decorative Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 120"
            className="w-full h-16 fill-white"
          >
            <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
          </svg>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white w-full overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 max-w-full">
          <StatsSection />
        </div>
      </section>

      {/* PhD Students Section */}
      <section className="py-16 bg-slate-50 w-full overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 max-w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              PhD Researchers
            </h2>
            <div className="h-1 w-20 bg-blue-600 mx-auto mb-4"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Doctoral students conducting cutting-edge research in chemistry
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {phdStudents.map((student, index) => (
              <StudentCard
                key={student.id}
                student={student}
                index={index}
                showTopic={true}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Current M.Sc. Students Section */}
      <section className="py-16 bg-white w-full overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 max-w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Current M.Sc. Dissertation Students
            </h2>
            <div className="h-1 w-20 bg-blue-600 mx-auto mb-4"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Master's students working on their final year research projects
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentMscStudents.map((student, index) => (
              <StudentCard key={student.id} student={student} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Past M.Sc. Students (Alumni) Section */}
      <section className="py-16 bg-slate-50 w-full overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 max-w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Alumni - M.Sc. Graduates
            </h2>
            <div className="h-1 w-20 bg-blue-600 mx-auto mb-4"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Proud alumni making their mark in the professional world
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {pastMscStudents.map((student, index) => (
              <StudentCard key={student.id} student={student} index={index} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
