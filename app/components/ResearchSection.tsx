"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  FaArrowRight,
  FaFlask,
  FaMedal,
  FaTrophy,
  FaAward,
  FaHandHoldingUsd,
  FaCertificate,
  FaEdit,
} from "react-icons/fa";

export const researchWorks = [
  {
    id: 1,
    title:
      "Dual-Antenna Trimetallic Lanthanide Complexes for Enhanced Near-Infrared Luminescence",
    category: "Research",
    year: "2025",
    description:
      "Development of trimetallic lanthanide complexes with dual-antenna systems for enhanced NIR luminescence in Chemistry: An Asian Journal.",
    image: "/publications/p5.png",
    impact: "High Impact Factor",
    citations: "New",
    icon: FaFlask,
  },
  {
    id: 2,
    title:
      "Exploring ESIPT Dynamics and Sensing Applications in Naphthalene-Based Aroylhydrazones",
    category: "Research",
    year: "2025",
    description:
      "Novel naphthalene-based aroylhydrazones luminophores with electron donating and withdrawing groups published in J. Phys. Chem. B.",
    image: "/publications/p1.png",
    impact: "High Impact",
    citations: "Latest",
    icon: FaFlask,
  },
  {
    id: 3,
    title: "NIR-II Emitting Nanomaterials for Biomedical Applications",
    category: "Research",
    year: "2025",
    description:
      "Comprehensive review of NIR-II emitting nanomaterials including lanthanide complexes and MSNs for biomedical applications in Journal of Material Chemistry B.",
    image: "/publications/p4.png",
    impact: "Breakthrough Research",
    citations: "High Impact",
    icon: FaFlask,
  },
  {
    id: 4,
    title: "Faculty Seed Grant",
    category: "Grant",
    year: "2025",
    description:
      "DRC-14/2025-26/63/01-31/21 - Funding for innovative research in organic chemistry.",
    image: "/gallery/g13.jpeg",
    impact: "Research Grant",
    citations: "N/A",
    icon: FaHandHoldingUsd,
  },
  {
    id: 5,
    title: "IoE-Teach for BHU",
    category: "Achievement",
    year: "2022",
    description:
      "Recognition for excellence in teaching and educational innovation at BHU.",
    image: "/gallery/g15.jpeg",
    impact: "Teaching Excellence",
    citations: "N/A",
    icon: FaCertificate,
  },
  {
    id: 6,
    title: "Editorial Board Member",
    category: "Position",
    year: "2023",
    description:
      "American Journal of Applied Chemistry - Editorial board member from April 2023 to present.",
    image: "/gallery/g16.jpeg",
    impact: "Academic Leadership",
    citations: "N/A",
    icon: FaEdit,
  },
  {
    id: 7,
    title: "CSIR – JRF and SRF",
    category: "Fellowship",
    year: "2018",
    description:
      "Council of Scientific and Industrial Research Junior and Senior Research Fellowship.",
    image: "/gallery/g17.jpeg",
    impact: "Research Fellowship",
    citations: "N/A",
    icon: FaAward,
  },
  {
    id: 8,
    title: "Raman Spectroscopy Study of Surfactants and Ionic Liquids",
    category: "Research",
    year: "2025",
    description:
      "Unveiling aggregation concentration using confocal Raman and hyper Raman spectroscopy published in J. Mol. Liq.",
    image: "/publications/p2.png",
    impact: "High Impact",
    citations: "Recent",
    icon: FaFlask,
  },
  {
    id: 9,
    title: "Aggregation Induced Emission in NIR-II Region",
    category: "Research",
    year: "2025",
    description:
      "First report of AIE in NIR-II region for Pr(III) polymer chain complexes with pyridine-2,6-dicarboxylic acid in Journal of Luminescence.",
    image: "/publications/p7.png",
    impact: "Environmental Impact",
    citations: "Breakthrough",
    icon: FaFlask,
  },
  {
    id: 10,
    title: "Suzuki-Miyaura Coupling Reactions with Oxadiazoles",
    category: "Research",
    year: "2025",
    description:
      "RuPhos Pd G4 catalyst for coupling reactions involving 1,2,4-oxadiazoles published in Results in Chemistry.",
    image: "/publications/p9.png",
    impact: "Catalysis",
    citations: "New",
    icon: FaFlask,
  },
];

const ResearchCard = ({ work }: { work: (typeof researchWorks)[0] }) => {
  const IconComponent = work.icon;
  const isResearch = work.category === "Research";

  const cardContent = (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="relative h-[500px] bg-white rounded-xl overflow-hidden border border-gray-200 hover:border-blue-300 transition-all duration-300 group shadow-md hover:shadow-xl"
    >
      {/* Image */}
      <div className="relative h-56 w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent z-10"></div>
        <Image
          src={work.image}
          alt={work.title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />

        {/* Category Badge */}
        <div
          className={`absolute top-4 right-4 z-20 px-4 py-1.5 rounded-full text-xs font-bold backdrop-blur-sm ${
            work.category === "Research"
              ? "bg-blue-600/90 text-white"
              : work.category === "Grant"
              ? "bg-red-600/90 text-white"
              : work.category === "Award"
              ? "bg-yellow-500/90 text-gray-900"
              : work.category === "Fellowship"
              ? "bg-purple-600/90 text-white"
              : work.category === "Position"
              ? "bg-green-600/90 text-white"
              : "bg-gray-600/90 text-white"
          }`}
        >
          <IconComponent className="inline mr-1.5 text-sm" />
          {work.category}
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col justify-between h-[280px]">
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
            {work.title}
          </h3>
          <p className="text-gray-600 text-sm mb-3 line-clamp-3">
            {work.description}
          </p>
        </div>

        {/* Stats */}
        <div className="space-y-2 border-t border-gray-200 pt-3">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
            <span className="text-xs text-gray-500">
              Year:{" "}
              <span className="text-gray-900 font-semibold">{work.year}</span>
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
            <span className="text-xs text-gray-500">
              Impact:{" "}
              <span className="text-gray-900 font-semibold">{work.impact}</span>
            </span>
          </div>
        </div>

        {/* Read More */}
        {isResearch ? (
          <div className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors font-semibold group/btn text-sm">
            <span>View on ResearchGate</span>
            <FaArrowRight className="group-hover/btn:translate-x-1 transition-transform text-xs" />
          </div>
        ) : (
          <div className="flex items-center gap-2 text-gray-400 font-semibold text-sm">
            <span>{work.category}</span>
          </div>
        )}
      </div>
    </motion.div>
  );

  if (isResearch) {
    return (
      <a
        href="https://www.researchgate.net/profile/Abhineet-Verma"
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        {cardContent}
      </a>
    );
  }

  return cardContent;
};

export default function ResearchSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="py-18 bg-slate-50 relative overflow-hidden w-full"
    >
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-3 w-full">
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-200 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-blue-300 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10 max-w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Research & Awards
          </h2>
          <div className="h-1 w-20 bg-blue-600 mx-auto mb-5"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Exploring the frontiers of chemistry through innovative research and
            recognized excellence
          </p>
        </motion.div>

        {/* Swiper Slider */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-10"
        >
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            navigation={true}
            loop={true}
            speed={600}
            className="research-swiper pb-12"
          >
            {researchWorks.map(work => (
              <SwiperSlide key={work.id}>
                <ResearchCard work={work} />
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        {/* Explore More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <Link href="/publications">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group px-8 py-3 bg-blue-600 text-white font-bold text-base rounded-full hover:bg-blue-700 transition-all duration-300 flex items-center gap-3 mx-auto shadow-md hover:shadow-lg"
            >
              <span>Explore All Publications & Research</span>
              <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
