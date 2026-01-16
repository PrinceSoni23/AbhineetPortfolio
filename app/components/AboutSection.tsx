"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import {
  FaGraduationCap,
  FaFlask,
  FaAward,
  FaChalkboardTeacher,
  FaBriefcase,
  FaUniversity,
} from "react-icons/fa";

const education = [
  {
    id: 1,
    year: "Dec 2023 - Present",
    degree: "Assistant Professor",
    institution: "MNIT Jaipur, India",
    description: "Research and Teaching to UG & PG students",
    icon: FaUniversity,
  },
  {
    id: 2,
    year: "Jul 2023 - Dec 2023",
    degree: "Assistant Professor",
    institution: "NIMS University, Jaipur, India",
    description: "Research and Teaching to UG and PG students",
    icon: FaChalkboardTeacher,
  },
  {
    id: 3,
    year: "Jul 2022 - Jun 2023",
    degree: "Teacher",
    institution: "Banaras Hindu University, Varanasi, India",
    description: "Teaching",
    icon: FaChalkboardTeacher,
  },
  {
    id: 4,
    year: "Jan 2019 - Aug 2022",
    degree: "PhD Scholar",
    institution: "Banaras Hindu University, Varanasi, India",
    description: "PhD research work",
    icon: FaGraduationCap,
  },
  {
    id: 5,
    year: "Nov 2017 - Nov 2018",
    degree: "Research Assistant",
    institution: "Banaras Hindu University, Varanasi, India",
    description: "RA research work",
    icon: FaFlask,
  },
  {
    id: 6,
    year: "Oct 2016 - Oct 2017",
    degree: "Project Assistant",
    institution: "Banaras Hindu University, Varanasi, India",
    description: "Research Work",
    icon: FaBriefcase,
  },
];

const TimelineItem = ({
  item,
  index,
}: {
  item: (typeof education)[0];
  index: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="relative pl-8 pb-4 last:pb-0"
    >
      {/* Timeline Line */}
      <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-300 to-blue-500">
        {index === education.length - 1 && (
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2.5 h-2.5 bg-blue-600 rounded-full"></div>
        )}
      </div>

      {/* Timeline Dot */}
      <motion.div
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : { scale: 0 }}
        transition={{ duration: 0.4, delay: index * 0.2 + 0.3 }}
        className="absolute left-0 top-3 transform -translate-x-1/2 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center shadow-md"
      >
        <item.icon className="text-white text-xs" />
      </motion.div>

      {/* Content Card */}
      <motion.div
        whileHover={{ scale: 1.01, x: 3 }}
        transition={{ duration: 0.2 }}
        className="bg-slate-50 border border-gray-200 rounded-lg p-3 ml-5 hover:shadow-lg transition-all duration-300"
      >
        <span className="text-gray-600 font-semibold text-[10px] uppercase tracking-wider">
          {item.year}
        </span>
        <h3 className="text-sm font-extrabold text-black mt-1 mb-0.5">
          {item.degree}
        </h3>
        <h4 className="text-xs text-gray-600 mb-1 font-bold">
          {item.institution}
        </h4>
        <p className="text-gray-500 leading-relaxed text-xs">
          {item.description}
        </p>
      </motion.div>
    </motion.div>
  );
};

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  return (
    <section ref={ref} className="py-18 bg-white w-full overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 max-w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            About Me
          </h2>
          <div className="h-1 w-16 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            Dedicated to advancing the frontiers of chemistry through research
            and education
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 items-start">
          {/* Left Side - Static Professor Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative h-[400px] sm:h-[500px] md:h-[600px] lg:h-[720px] w-full">
              {/* Decorative Elements */}
              <div className="absolute -top-2 -left-2 sm:-top-3 sm:-left-3 w-full h-full border-2 border-blue-100 rounded-xl"></div>
              <div className="absolute -bottom-2 -right-2 sm:-bottom-3 sm:-right-3 w-full h-full border-2 border-blue-200 rounded-xl"></div>

              {/* Image Container */}
              <div className="relative h-full w-full rounded-xl overflow-hidden shadow-xl bg-white border-2 border-gray-100">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/5 to-blue-600/5 z-10"></div>
                <Image
                  src="/images/a3.JPG"
                  alt="Professor"
                  fill
                  className="object-cover "
                />
              </div>

              {/* Floating Stats */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={
                  isInView
                    ? { opacity: 1, scale: 1 }
                    : { opacity: 0, scale: 0.8 }
                }
                transition={{ duration: 0.6, delay: 0.4 }}
                className="absolute -bottom-4 left-4 sm:-bottom-6 sm:left-6 bg-white border-2 border-stone-200 p-3 sm:p-4 rounded-lg shadow-lg"
              >
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-gray-900">
                    8+
                  </div>
                  <div className="text-[10px] sm:text-xs text-stone-600 uppercase tracking-wider">
                    Years Experience
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={
                  isInView
                    ? { opacity: 1, scale: 1 }
                    : { opacity: 0, scale: 0.8 }
                }
                transition={{ duration: 0.6, delay: 0.6 }}
                className="absolute -top-4 right-4 sm:-top-6 sm:right-6 bg-white border-2 border-stone-200 p-3 sm:p-4 rounded-lg shadow-lg"
              >
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-gray-900">
                    60+
                  </div>
                  <div className="text-[10px] sm:text-xs text-stone-600 uppercase tracking-wider">
                    Publications
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side - Education Timeline */}
          <div className="relative order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6 }}
              className="mb-6"
            >
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                Educational Journey
              </h3>
              <p className="text-stone-600 text-sm">
                A commitment to excellence in academic pursuits and research
              </p>
            </motion.div>

            <div className="space-y-0">
              {education.map((item, index) => (
                <TimelineItem key={item.id} item={item} index={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
