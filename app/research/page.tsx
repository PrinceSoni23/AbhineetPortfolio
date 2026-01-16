"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaArrowLeft,
  FaFlask,
  FaMedal,
  FaTrophy,
  FaFilter,
  FaAward,
  FaCertificate,
  FaHandHoldingUsd,
  FaEdit,
} from "react-icons/fa";

const researchWorks = [
  {
    id: "1",
    title: "Sample Research Paper",
    description: "A concise summary of the research and its contributions.",
    image: "/images/research1.jpg",
    category: "Research",
    year: "2023",
    impact: "Journal",
    citations: 12,
    icon: FaFlask,
  },
  {
    id: "2",
    title: "Outstanding Research Award",
    description: "Recognized for exceptional contributions to the field.",
    image: "/images/award1.jpg",
    category: "Award",
    year: "2022",
    impact: "Conference",
    citations: 0,
    icon: FaTrophy,
  },
  {
    id: "3",
    title: "Honorable Mention",
    description: "Acknowledged for notable work and impact.",
    image: "/images/award2.jpg",
    category: "Award",
    year: "2021",
    impact: "Competition",
    citations: 0,
    icon: FaMedal,
  },
];

const categories = ["All", "Research", "Award"];

const grantsAndAchievements = [
  {
    id: 1,
    title: "Faculty Seed Grant",
    year: "2025",
    reference: "DRC-14/2025-26/63/01-31/21",
    icon: FaHandHoldingUsd,
    type: "Grant",
  },
  {
    id: 2,
    title: "IoE-Teach for BHU",
    year: "2022",
    reference: "",
    icon: FaCertificate,
    type: "Achievement",
  },
  {
    id: 3,
    title: "Editorial Board Member - American Journal of Applied Chemistry",
    year: "2023 - Present",
    reference: "From April 2023 to till date",
    icon: FaEdit,
    type: "Position",
  },
  {
    id: 4,
    title: "CSIR – JRF and SRF",
    year: "2018",
    reference: "",
    icon: FaAward,
    type: "Fellowship",
  },
];

export default function ResearchPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredWorks =
    selectedCategory === "All"
      ? researchWorks
      : researchWorks.filter(work => work.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="relative py-20 overflow-hidden bg-white border-b border-gray-200">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-96 h-96 bg-gray-300 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gray-400 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link href="/">
              <motion.button
                whileHover={{ x: -5 }}
                className="flex items-center gap-2 text-gray-700 hover:text-gray-900 mb-8 text-lg font-semibold"
              >
                <FaArrowLeft />
                <span>Back to Home</span>
              </motion.button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-4">
              Research & Awards
            </h1>
            <div className="h-1 w-24 bg-gray-900 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive collection of research publications and academic
              achievements
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <div className="flex items-center gap-2 text-gray-600">
              <FaFilter />
              <span className="font-semibold">Filter by:</span>
            </div>
            {categories.map(category => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-gray-900 text-white shadow-lg"
                    : "bg-white text-gray-700 hover:text-gray-900 border border-gray-300 hover:border-gray-900"
                }`}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Grants and Achievements Section */}
      <section className="py-16 bg-white border-t border-gray-200">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Grants & Achievements
            </h2>
            <div className="h-1 w-20 bg-gray-900 mx-auto mb-4"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Recognitions, fellowships, and funded research projects
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {grantsAndAchievements.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group bg-gray-50 border border-gray-200 rounded-xl p-6 hover:border-gray-900 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="shrink-0 w-12 h-12 bg-gray-900 text-white rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                      <IconComponent className="text-xl" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <h3 className="text-lg font-bold text-gray-900 leading-tight">
                          {item.title}
                        </h3>
                        <span className="shrink-0 px-3 py-1 bg-white border border-gray-300 text-gray-700 text-xs font-semibold rounded-full">
                          {item.type}
                        </span>
                      </div>
                      <p className="text-sm font-semibold text-gray-600 mb-2">
                        {item.year}
                      </p>
                      {item.reference && (
                        <p className="text-sm text-gray-500 font-mono">
                          {item.reference}
                        </p>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Research Cards Grid */}
      <section className="py-12 pb-20 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredWorks.map((work, index) => {
              const IconComponent = work.icon;

              return (
                <motion.div
                  key={work.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="group relative bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-gray-400 transition-all duration-300 hover:shadow-2xl"
                >
                  {/* Image */}
                  <div className="relative h-64 w-full overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent z-10"></div>
                    <Image
                      src={work.image}
                      alt={work.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />

                    {/* Category Badge */}
                    <div className="absolute top-4 right-4 z-20">
                      <span
                        className={`px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider ${
                          work.category === "Award"
                            ? "bg-gray-900 text-white shadow-lg"
                            : "bg-gray-100 text-gray-900 border border-gray-300 shadow-lg"
                        }`}
                      >
                        {work.category}
                      </span>
                    </div>

                    {/* Icon */}
                    <div className="absolute top-4 left-4 z-20">
                      <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center shadow-lg">
                        <IconComponent className="text-white text-xl" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 space-y-4">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-gray-600 font-semibold text-sm">
                          {work.year}
                        </span>
                        <span className="text-gray-400">•</span>
                        <span className="text-gray-500 text-sm">
                          {work.impact}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-gray-700 transition-colors">
                        {work.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {work.description}
                      </p>
                    </div>

                    {/* Stats */}
                    <div className="flex items-center gap-4 pt-2 border-t border-gray-200">
                      <div className="flex items-center gap-2 mt-2">
                        <div className="w-2 h-2 bg-gray-900 rounded-full"></div>
                        <span className="text-sm text-gray-500">
                          Citations:{" "}
                          <span className="text-gray-900 font-semibold">
                            {work.citations}
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Hover Effect Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* No Results Message */}
          {filteredWorks.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <p className="text-2xl text-gray-500">
                No {selectedCategory.toLowerCase()} items found.
              </p>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
}
