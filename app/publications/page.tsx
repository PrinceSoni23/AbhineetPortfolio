"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";
import {
  FaBook,
  FaExternalLinkAlt,
  FaFilter,
  FaSearch,
  FaAward,
  FaFlask,
  FaTrophy,
  FaMedal,
  FaHandHoldingUsd,
  FaCertificate,
  FaEdit,
} from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// Compact interactive PieChart component (small, self-contained)
function PieChart({
  data,
  size = 120,
  innerRadius = 36,
}: {
  data: { label: string; value: number; color: string }[];
  size?: number;
  innerRadius?: number;
}) {
  const [hovered, setHovered] = useState<number | null>(null);

  const total = data.reduce((s, d) => s + d.value, 0);
  let cumulative = 0;
  const cx = size / 2;
  const cy = size / 2;
  const radius = size / 2;

  const arcs = data.map(d => {
    const startAngle = (cumulative / total) * Math.PI * 2;
    cumulative += d.value;
    const endAngle = (cumulative / total) * Math.PI * 2;

    const x1 = cx + radius * Math.cos(startAngle - Math.PI / 2);
    const y1 = cy + radius * Math.sin(startAngle - Math.PI / 2);
    const x2 = cx + radius * Math.cos(endAngle - Math.PI / 2);
    const y2 = cy + radius * Math.sin(endAngle - Math.PI / 2);

    const largeArcFlag = endAngle - startAngle <= Math.PI ? 0 : 1;

    const midAngle = (startAngle + endAngle) / 2;
    const offset = hovered === null ? 0 : hovered === data.indexOf(d) ? 6 : 0;
    const dx = Math.cos(midAngle - Math.PI / 2) * offset;
    const dy = Math.sin(midAngle - Math.PI / 2) * offset;

    const path = `M ${cx} ${cy} L ${x1} ${y1} A ${radius} ${radius} 0 ${largeArcFlag} 1 ${x2} ${y2} Z`;

    return { path, color: d.color, label: d.label, value: d.value, dx, dy };
  });

  return (
    <div className="relative p-2" style={{ width: size, height: size }}>
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        className="block w-full h-full"
        style={{ overflow: "visible" }}
      >
        <g>
          {arcs.map((a, idx) => (
            <path
              key={idx}
              d={a.path}
              fill={a.color}
              onMouseEnter={() => setHovered(idx)}
              onMouseLeave={() => setHovered(null)}
              transform={
                hovered === idx ? `translate(${a.dx}, ${a.dy})` : undefined
              }
              style={{
                transition: "transform 140ms ease, opacity 140ms ease",
                opacity: hovered === null ? 0.95 : hovered === idx ? 1 : 0.45,
                cursor: "pointer",
              }}
            />
          ))}
          <circle cx={cx} cy={cy} r={innerRadius} fill="#fff" />
        </g>
      </svg>

      {/* Centered tooltip when hovered: shows label + percentage */}
      {hovered !== null ? (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="bg-white shadow rounded px-2 py-1 text-xs text-gray-800">
            <div className="font-medium truncate max-w-[120px]">
              {data[hovered].label}
            </div>
            <div className="text-gray-500 text-[11px]">
              {data[hovered].value}%
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

// Data for the research areas (used by PieChart and legend)
const researchAreas = [
  { label: "NIR Emission from Ln Ions", value: 25, color: "#6366F1" },
  { label: "Vibrational Raman Studies", value: 20, color: "#3B82F6" },
  { label: "Ionic Liquids", value: 5, color: "#06B6D4" },
  { label: "Single Molecular Magnetism", value: 5, color: "#F97316" },
  { label: "Luminescence Studies", value: 30, color: "#F43F5E" },
  { label: "Single Crystal XRD", value: 15, color: "#10B981" },
];

// Grants and Achievements
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

// Publications data - Organized by year
const publications = [
  // 2025 Publications
  {
    id: 1,
    title:
      "Exploring ESIPT Dynamics and Sensing Applications in Novel Naphthalene-Based Aroylhydrazones Luminophores Functionalized with Electron Donating and Withdrawing Groups",
    authors:
      "A. Rajput, K. Banyopadhyay, S. Goyal, S. Kumar, H. Mehar, R. Walia, Abhineet Verma",
    journal: "J. Phys. Chem. B",
    year: 2025,
    volume: "",
    pages: "",
    doi: "10.1021/acs.jpcb.5c06377",
    category: "journal",
    citations: 0,
    impact: "High Impact",
    abstract:
      "This study explores ESIPT (Excited State Intramolecular Proton Transfer) dynamics in novel naphthalene-based aroylhydrazones luminophores with various functional groups.",
    keywords: ["ESIPT", "Luminophores", "Naphthalene", "Sensing"],
    image: "/publications/p1.png",
  },
  {
    id: 2,
    title:
      "Unveiling Aggregation Concentration in Surfactants and Ionic Liquids using Confocal Raman and Hyper Raman Spectroscopy",
    authors:
      "K. Bandyopadhyay, Abhineet Verma, N. S. Rawat, S. Maity, H. Hiramatsu, S. Saha",
    journal: "J. Mol. Liq.",
    year: 2025,
    volume: "437",
    pages: "128622",
    doi: "10.1016/j.molliq.2025.128622",
    category: "journal",
    citations: 0,
    impact: "High Impact",
    abstract:
      "Investigation of aggregation concentration in surfactants and ionic liquids using advanced Raman spectroscopy techniques.",
    keywords: ["Surfactants", "Ionic Liquids", "Raman Spectroscopy"],
    image: "/publications/p2.png",
  },
  {
    id: 3,
    title:
      "Influence of Positional Isomerism on Modulating Crystal Packing and Physicochemical Properties of New Picolylamine-Based Fully Organic Ionic Salts",
    authors: "S. Verma, A. Mahapatra, Abhineet Verma, Monika, S. Saha",
    journal: "ChemistrySelect",
    year: 2025,
    volume: "10",
    pages: "02795",
    doi: "10.1002/slct.202502795",
    category: "journal",
    citations: 0,
    impact: "High Impact",
    abstract:
      "Study on how positional isomerism affects crystal packing and physicochemical properties of picolylamine-based organic ionic salts.",
    keywords: ["Isomerism", "Crystal Packing", "Ionic Salts"],
    image: "/publications/p3.png",
  },
  {
    id: 4,
    title:
      "Recent advances in NIR-II emitting nanomaterials: design and biomedical applications of lanthanide complexes and functionalized mesoporous silica nanoparticles (MSNs)",
    authors:
      "K. Bandyopadhyay, S. Singh, V. K. Chaturvadi, A. K. Singh, Abhineet Verma",
    journal: "Journal of Material Chemistry B",
    year: 2025,
    volume: "44",
    pages: "",
    doi: "10.1039/D5TB00911A",
    category: "journal",
    citations: 0,
    impact: "High Impact",
    abstract:
      "Comprehensive review of NIR-II emitting nanomaterials including lanthanide complexes and MSNs for biomedical applications.",
    keywords: ["NIR-II", "Nanomaterials", "Lanthanides", "Biomedical"],
    image: "/publications/p4.png",
  },
  {
    id: 5,
    title:
      "Dual-Antenna Trimetallic Lanthanide Complexes for Enhanced Near-Infrared Luminescence",
    authors: "K. Bandyopadhyay, Abhineet Verma, S. Saha",
    journal: "Chemistry: An Asian Journal",
    year: 2025,
    volume: "20",
    pages: "1-12",
    doi: "10.1002/asia.202500017",
    category: "journal",
    citations: 0,
    impact: "High Impact",
    abstract:
      "Development of trimetallic lanthanide complexes with dual-antenna systems for enhanced NIR luminescence.",
    keywords: ["Lanthanides", "NIR", "Luminescence", "Complexes"],
    image: "/publications/p5.png",
  },
  {
    id: 6,
    title:
      "Good fat vs bad fat in Milk: A molecular level Understanding of Indian cow milk using confocal Raman microscopy",
    authors: "K. Bandyopadhyay, Abhineet Verma, S. Saha",
    journal: "Spectrochim. Acta A",
    year: 2025,
    volume: "12",
    pages: "5705",
    doi: "10.1016/j.saa.2025.125705",
    category: "journal",
    citations: 0,
    impact: "High Impact",
    abstract:
      "Molecular level analysis of fat composition in Indian cow milk using confocal Raman microscopy.",
    keywords: ["Raman Microscopy", "Milk Analysis", "Fat Composition"],
    image: "/publications/p6.png",
  },
  {
    id: 7,
    title:
      "First report of aggregation induced emission (AIE) in NIR-II region of a Pr(III) polymer chain with pyridine-2,6-dicarboxylic acid",
    authors: "K. Raghuwanshi, Abhineet Verma, S. Sunkari",
    journal: "Journal of Luminescence",
    year: 2025,
    volume: "283",
    pages: "121284",
    doi: "10.1016/j.jlumin.2025.121284",
    category: "journal",
    citations: 0,
    impact: "High Impact",
    abstract:
      "First report of AIE in NIR-II region for Pr(III) polymer chain complexes.",
    keywords: ["AIE", "NIR-II", "Praseodymium", "Polymers"],
    image: "/publications/p7.png",
  },
  {
    id: 8,
    title:
      "Designing symmetrically folded scaffolds of pyridazinone and triazinone derivatives linked Via N, N-diethyl-4-nitro-benzenesulfonamide: to explore luminescent materials",
    authors:
      "V. Kumar, K. bandyopadhyay, M. Nidhar, V. P. Sharma, P. Yadav, S. Gill, P. Sonker, Abhineet Verma, S. Saha, A. K. Tewari",
    journal: "J. Mater. Chem. C",
    year: 2025,
    volume: "23",
    pages: "16432",
    doi: "10.1039/D4TC04436C",
    category: "journal",
    citations: 0,
    impact: "High Impact",
    abstract:
      "Design and synthesis of symmetrically folded scaffolds for luminescent material applications.",
    keywords: ["Pyridazinone", "Luminescent Materials", "Molecular Design"],
    image: "/publications/p8.png",
  },
  {
    id: 9,
    title:
      "RuPhos Pd G4: A catalyst for Suzuki-Miyaura coupling reactions involving 1,2,4-oxadiazoles",
    authors:
      "M. Jangir, D. Kumar, S. Singh, G. J. Shinde, S. Dalai, Abhineet Verma, G. C. Sharma",
    journal: "Results in Chemistry",
    year: 2025,
    volume: "13",
    pages: "101990",
    doi: "10.1016/j.rechem.2024.101990",
    category: "journal",
    citations: 0,
    impact: "High Impact",
    abstract:
      "Application of RuPhos Pd G4 catalyst in Suzuki-Miyaura coupling reactions with oxadiazoles.",
    keywords: ["Catalysis", "Suzuki-Miyaura", "Oxadiazoles"],
    image: "/publications/p9.png",
  },
  // 2024 Publications
  {
    id: 10,
    title:
      "The crucial role of stability of intercalating agent for DNA binding studies in DMSO/water system",
    authors: "K. Bandyopadhyay, Abhineet Verma, A. Pandey, R. Walia, S. Saha",
    journal: "Spectrochim. Acta A",
    year: 2024,
    volume: "315",
    pages: "124265",
    doi: "10.1016/j.saa.2024.124265",
    category: "journal",
    citations: 0,
    impact: "High Impact",
    abstract:
      "Investigation of intercalating agent stability for DNA binding studies in mixed solvent systems.",
    keywords: ["DNA Binding", "Intercalation", "Spectroscopy"],
    image: "/publications/p10.png",
  },
  // 2023 Publications
  {
    id: 11,
    title:
      "Slow Magnetic Relaxation in a Ferromagnetic CuII Chain Complex, Induced by Phonon Bottleneck Effect",
    authors:
      "S. S Sunkari, Abhineet Verma, O. Pandey, S. Gupta, M. Wakizaka, S, Takaishi, H. Kawasoko, T. Fukumura, M. Yamashita",
    journal: "Dalton Trans.",
    year: 2023,
    volume: "52",
    pages: "12604-12607",
    doi: "10.1039/D3DT02244G",
    category: "journal",
    citations: 0,
    impact: "High Impact",
    abstract:
      "Study of slow magnetic relaxation in ferromagnetic copper chain complexes.",
    keywords: ["Magnetism", "Copper Complexes", "Phonon Bottleneck"],
    image: "/publications/p11.png",
  },
  {
    id: 12,
    title: "Counterion Influenced Metal-Organic Frameworks of Cyclam with CuII",
    authors: "Abhineet Verma, N. Bhuvanesh, J. Reibenspies, S. S. Sunkari",
    journal: "ChemistrySelect",
    year: 2023,
    volume: "8(29)",
    pages: "e202301810",
    doi: "10.1002/slct.202301810",
    category: "journal",
    citations: 0,
    impact: "High Impact",
    abstract:
      "Investigation of counterion effects on metal-organic frameworks based on cyclam ligands.",
    keywords: ["MOFs", "Cyclam", "Copper"],
    image: "/publications/p12.png",
  },
  {
    id: 13,
    title:
      "Unusual Effect of Minor Change in Ligand Substitution in Modulation of NIR Emission: A Case Study with [L-ZnII-LnIII] Complexes",
    authors: "Abhineet Verma, Daichi Enomoto, Koichi Iwata, Satyen Saha",
    journal: "J. Phys. Chem. B",
    year: 2023,
    volume: "127",
    pages: "4154-4164",
    doi: "10.1021/acs.jpcb.3c01674",
    category: "journal",
    citations: 0,
    impact: "High Impact",
    abstract:
      "Study on how minor ligand substitution changes affect NIR emission in heterometallic complexes.",
    keywords: ["NIR Emission", "Lanthanides", "Zinc Complexes"],
    image: "/publications/p13.png",
  },
  {
    id: 14,
    title:
      "Giant dielectric constant, magnetocaloric effect and spin-phonon coupling in EuTbCoMnO6 semiconductor",
    authors:
      "M. Alam, L. Ghosh, S. Dixit, M. Jena, S. Kumari, S. V. Kumar, D. Kumar, Abhineet Verma, A.K. Ghosh, S. Saha, R.J. Choudhary, S. Chatterjee",
    journal: "Phys. B: Cond. Matt.",
    year: 2023,
    volume: "665",
    pages: "415043",
    doi: "10.1016/j.physb.2023.415043",
    category: "journal",
    citations: 0,
    impact: "High Impact",
    abstract:
      "Investigation of dielectric and magnetocaloric properties of EuTbCoMnO6 semiconductor.",
    keywords: ["Dielectric", "Magnetocaloric", "Semiconductors"],
    image: "/publications/p14.png",
  },
  {
    id: 15,
    title:
      "Multiple Magnetic Phases and Anomalous Hall Effect in Sb1.9Fe0.1Te2.85S0.15 Topological Insulators",
    authors:
      "D. Pal, Abhineet Verma, M. Alam, S. Dan, A. Kumar, S. M. Yusuf, S. Banik, S. Chakravarty, S. Saha, S. Patil, S. Chatterjee",
    journal: "J. Phys. Chem. C",
    year: 2023,
    volume: "127(5)",
    pages: "2508-2517",
    doi: "10.1021/acs.jpcc.2c08169",
    category: "journal",
    citations: 0,
    impact: "High Impact",
    abstract:
      "Study of magnetic phases and Hall effects in topological insulator materials.",
    keywords: ["Topological Insulators", "Magnetism", "Hall Effect"],
    image: "/publications/p15.png",
  },
  {
    id: 16,
    title:
      "One-Pot Access to Tetrasubstituted 2-Aminothiophenes via Regio- and Chemoselective Domino Reactions of Dithioesters with Fumaronitrile at Room Temperature",
    authors:
      "A. K. Yadav, V. Kumar, P. Pali, S. Ray, Abhineet Verma, M. S. Singh",
    journal: "Adv. Synth. Catal.",
    year: 2023,
    volume: "365",
    pages: "1-7",
    doi: "10.1002/adsc.202201264",
    category: "journal",
    citations: 0,
    impact: "High Impact",
    abstract:
      "Development of one-pot synthesis method for tetrasubstituted aminothiophenes.",
    keywords: ["Organic Synthesis", "Thiophenes", "Domino Reactions"],
    image: "/publications/p16.png",
  },
  // 2022 Publications
  {
    id: 17,
    title:
      "From ACQ to AIE: The CN(π)-(π)Ar Interaction Driven Structural and Photophysical Properties of Aromatic Ring Conjugated Novel Diaminomaleonitrile Derivatives",
    authors: "Abhineet Verma, Monika, M. K Tiwar, Navin Subba, S. Saha",
    journal: "J. Photochem. Photobiol. A: Chem",
    year: 2022,
    volume: "433",
    pages: "114130",
    doi: "10.1016/j.jphotochem.2022.114130",
    category: "journal",
    citations: 0,
    impact: "High Impact",
    abstract:
      "Investigation of ACQ to AIE conversion in diaminomaleonitrile derivatives.",
    keywords: ["AIE", "ACQ", "Photophysics"],
    image: "/publications/p17.png",
  },
  {
    id: 18,
    title:
      "Confocal Raman Microscopic Evidence for Cyclic Water Pentamer, at High Temperatures in a Supramolecular Host of [Cu(cyclam)(N3)2]·4H2O",
    authors:
      "Abhineet Verma, N. Bhuvanesh, J. Reibenspies, S. Saha, S. S. Sunkari",
    journal: "Spectrochim. Acta A",
    year: 2022,
    volume: "274(8)",
    pages: "121121",
    doi: "10.1016/j.saa.2022.121121",
    category: "journal",
    citations: 0,
    impact: "High Impact",
    abstract:
      "Raman spectroscopic evidence for cyclic water pentamer in copper complexes.",
    keywords: ["Raman Spectroscopy", "Water Clusters", "Supramolecular"],
    image: "/publications/p18.png",
  },
  {
    id: 19,
    title:
      "Structurally Characterised New Twisted Conformer for Cyclen, Controlled by Metal ion Complexation as Seen in NiII and CuII Complexes with halides and pseudohalides",
    authors:
      "Abhineet Verma, N. Bhuvanesh, J. Reibenspies, S. B. Tayade, A. Kumbhar, K. Bretosh, J-P Sutter, S. S. Sunkari",
    journal: "CrysEngComm.",
    year: 2022,
    volume: "24",
    pages: "119-131",
    doi: "10.1039/D1CE01240A",
    category: "journal",
    citations: 0,
    impact: "High Impact",
    abstract:
      "Structural characterization of new cyclen conformers in metal complexes.",
    keywords: ["Cyclen", "Metal Complexes", "Crystal Structure"],
    image: "/publications/p19.png",
  },
  {
    id: 20,
    title: "Water in Ionic Liquids: Raman Spectroscopic Studies",
    authors: "S. Saha, Abhineet Verma, K. Bandyopadhyay",
    journal: "J. Raman Spectrosc.",
    year: 2022,
    volume: "53",
    pages: "1-9",
    doi: "10.1002/jrs.6248",
    category: "journal",
    citations: 0,
    impact: "High Impact",
    abstract:
      "Raman spectroscopic investigation of water behavior in ionic liquids.",
    keywords: ["Ionic Liquids", "Water", "Raman Spectroscopy"],
    image: "/publications/p20.png",
  },
  {
    id: 21,
    title:
      "Development of robust folded scaffold as fluorescent materials using butylidine linked pyridazinone based systems via aromatic π···π Stacking Interactions",
    authors:
      "P. Yadav, Abhineet Verma, V. P. Sharma, R. Singh, T. Yadav, R. Kumar, S. Pal, H. Gupta, S. Saha, A. K. Tewari",
    journal: "New J. Chem.",
    year: 2022,
    volume: "46",
    pages: "5830-5838",
    doi: "10.1039/D1NJ05992F",
    category: "journal",
    citations: 0,
    impact: "High Impact",
    abstract:
      "Development of fluorescent materials based on pyridazinone scaffolds.",
    keywords: ["Fluorescence", "Pyridazinone", "π-π Stacking"],
    image: "/publications/p21.png",
  },
  {
    id: 22,
    title:
      "The enthralling effect of Packing on the light emission of pyridazinone based luminophore: Crystallographic, electronic absorption and computational studies",
    authors:
      "P. Yadav, Abhineet Verma, P. Sonker, V. P. Sharma, A. Kumar, T. Yadav, S. Pal, S. Saha, A. K. Tewari",
    journal: "J. Mol. Struct.",
    year: 2022,
    volume: "1267",
    pages: "133513",
    doi: "10.1016/j.molstruc.2022.133513",
    category: "journal",
    citations: 0,
    impact: "High Impact",
    abstract:
      "Study of packing effects on luminescence in pyridazinone-based materials.",
    keywords: ["Luminescence", "Crystal Packing", "Pyridazinone"],
    image: "/publications/p22.png",
  },
  {
    id: 23,
    title:
      "Drastic influence of amide functionality and alkyl chain length dependent physical, thermal and structural properties of new pyridinium-amide cation based biodegradable room temperature ionic liquids",
    authors:
      "Abhineet Verma, S. Verma, Monika, M. Mondal, N. E. Prasad, J. Srivastava, S. Singh, J. P. Verma, S. Saha",
    journal: "J. Mol. Structure",
    year: 2022,
    volume: "1250",
    pages: "131679",
    doi: "10.1016/j.molstruc.2021.131679",
    category: "journal",
    citations: 0,
    impact: "High Impact",
    abstract:
      "Investigation of biodegradable room temperature ionic liquids with pyridinium-amide cations.",
    keywords: ["Ionic Liquids", "Biodegradable", "Pyridinium"],
    image: "/publications/p23.png",
  },
  {
    id: 24,
    title: "Achieving AIE from ACQ in positional Isomeric triarylmethanes",
    authors: "S. Singh, Abhineet Verma, S. Saha",
    journal: "New J. Chem.",
    year: 2022,
    volume: "46",
    pages: "7212-7222",
    doi: "10.1039/D1NJ06067B",
    category: "journal",
    citations: 0,
    impact: "High Impact",
    abstract: "Study of AIE conversion from ACQ in triarylmethane isomers.",
    keywords: ["AIE", "Triarylmethanes", "Isomerism"],
    image: "/publications/p24.png",
  },
  {
    id: 25,
    title:
      "Detection of Non-permitted Food Color Metanil Yellow in Turmeric – A Threar to the Public Health abd Ayurvedic Drug Industry",
    authors: "Abhineet Verma, S. Bhatt, S. Saha",
    journal: "J. Ayurv.",
    year: 2022,
    volume: "6(2)",
    pages: "134-139",
    doi: "10.52482/ayurline.v6i02.774",
    category: "journal",
    citations: 0,
    impact: "High Impact",
    abstract:
      "Detection methods for food adulterants in turmeric affecting public health.",
    keywords: ["Food Safety", "Metanil Yellow", "Detection"],
    image: "/publications/p25.png",
  },
  {
    id: 26,
    title:
      "Asparagus racemosus root-derived carbon nanodots as a nano-probe for biomedical applications",
    authors:
      "G. G. Naik, T. Minocha, Abhineet Verma, S. K. Yadav, S. Saha, A. K. Agrawal, S. Singh, A. N. Sahu",
    journal: "J. Mater. Sci.",
    year: 2022,
    volume: "578",
    pages: "20380-20401",
    doi: "10.1016/j.msec.2020.111513",
    category: "journal",
    citations: 0,
    impact: "High Impact",
    abstract:
      "Development of carbon nanodots from plant sources for biomedical applications.",
    keywords: ["Nanodots", "Biomedical", "Carbon Materials"],
    image: "/publications/p26.png",
  },
  {
    id: 27,
    title:
      "Biocompatible thermoresponsive N-isopropyl- N-(3-(isopropylamino)-3-oxopropyl) acrylamide- based random copolymer: synthesis and studies of its composition dependent properties and anticancer drug delivery efficiency",
    authors:
      "S. Mondal, A. Kumari, K. Mitra, Abhineet Verma, S. Saha, B. Maiti, R. Singh, P. P. Manna, P. Maiti, H. Watanabe, M. Kamigaito, B. Ray",
    journal: "J. Mater. Chem. B",
    year: 2022,
    volume: "10",
    pages: "8462-8477",
    doi: "10.1039/D2TB01447E",
    category: "journal",
    citations: 0,
    impact: "High Impact",
    abstract:
      "Development of thermoresponsive polymers for anticancer drug delivery.",
    keywords: ["Drug Delivery", "Polymers", "Thermoresponsive"],
    image: "/publications/p27.png",
  },
  {
    id: 28,
    title:
      "Anharmonic phonon interactions and Kondo effect in FeSe/Sb 2 Te 3 /FeSe hetero-structure: Proximity effect between ferromagnetic chalcogenide and di-chalcogenide",
    authors:
      "L. Ghosh, M. Alam, M. Singh, S. Dixit, S. V. Kumar, Abhineet Verma, P. Shahi, Y. Uwatoko, S. Saha, A. Tiwari, A. Tripathi, S. Chatterjee",
    journal: "Nanoscale",
    year: 2022,
    volume: "14",
    pages: "10889-10902",
    doi: "10.1039/D2NR02776J",
    category: "journal",
    citations: 0,
    impact: "High Impact",
    abstract:
      "Study of phonon interactions and Kondo effect in heterostructures.",
    keywords: ["Phonons", "Kondo Effect", "Heterostructures"],
    image: "/publications/p28.png",
  },
  {
    id: 29,
    title: "Lattice Dynamics of Bi1.9Dy0.1Te3 Topological Insulator",
    authors:
      "L. Ghosh, V. K. Gangwar, M. Singh, S. V. Kumar, S. Dixit, Abhineet Verma, D. K. Sharma, S. Kumar, S. Saha, A. K. Ghosh, S. Chatterjeea",
    journal: "Physica B: Phy. Conden. Matt.",
    year: 2022,
    volume: "640",
    pages: "414050",
    doi: "10.1016/j.physb.2022.414050",
    category: "journal",
    citations: 0,
    impact: "High Impact",
    abstract:
      "Investigation of lattice dynamics in dysprosium-doped bismuth telluride topological insulators.",
    keywords: [
      "Topological Insulators",
      "Lattice Dynamics",
      "Bismuth Telluride",
    ],
    image: "/publications/p29.png",
  },
  {
    id: 30,
    title:
      "Unraveling the obscure electronic transition and tuning of Fermi level in Cu substituted Bi2Te3 compound",
    authors:
      "S. Dan, S. Kumar, S. Dan, D. Pal, S. Patil, Abhineet Verma, S. Saha, K. Shimada, S. Chatterjee",
    journal: "Appl. Phys. Lett.",
    year: 2022,
    volume: "120",
    pages: "022105",
    doi: "10.1063/5.0077525",
    category: "journal",
    citations: 0,
    impact: "High Impact",
    abstract:
      "Study of electronic transitions and Fermi level tuning in copper-substituted bismuth telluride.",
    keywords: ["Electronic Structure", "Fermi Level", "Bismuth Telluride"],
    image: "/publications/p30.png",
  },
  // 2021 Publications
  {
    id: 31,
    title:
      "Ligand Influence Versus Electronic Configuration of d-Metal Ion in Determining the Fate of NIR Emission from LnIII Ions: a Case Study With CuII, NiII and ZnII Complexes",
    authors:
      "Abhineet Verma, SK. Hossaoin, S. S. Sunkari, J. Reibenspies, S. Saha",
    journal: "New J. Chem.",
    year: 2021,
    volume: "45",
    pages: "2696-2709",
    doi: "10.1039/D0NJ05609F",
    category: "journal",
    citations: 0,
    impact: "High Impact",
    abstract:
      "Study of ligand and metal ion effects on NIR emission in lanthanide complexes.",
    keywords: ["NIR Emission", "Lanthanides", "Metal Complexes"],
    image: "/publications/p31.png",
  },
  {
    id: 32,
    title:
      "Defect induced ferromagnetic ordering and room temperature negative magnetoresistance in MoTeP",
    authors:
      "D. Pal, S. Kumar, P. Shahi, S. Dan, Abhineet Verma, V.k. Gangwar, M. Singh, C. Sujoy, Y. Uwatoko, S. Saha, S. Patil, S. Chatterjee",
    journal: "Sci. rep.",
    year: 2021,
    volume: "11(1)",
    pages: "88669-88678",
    doi: "10.1038/s41598-021-87795-5",
    category: "journal",
    citations: 0,
    impact: "High Impact",
    abstract:
      "Investigation of defect-induced ferromagnetism and magnetoresistance in MoTeP.",
    keywords: ["Ferromagnetism", "Magnetoresistance", "Defects"],
    image: "/publications/p32.png",
  },
  // 2020 Publications
  {
    id: 33,
    title:
      "Important role of the position of a functional group in isomers for Photophysical and Antibacterial Properties: A case study with Naphthalenemaleonitrile Positional Isomers",
    authors: "M. Das, Abhineet Verma, S. Verma, N. Pandey, R. Tilak, S. Saha",
    journal: "New J. Chem.",
    year: 2020,
    volume: "44",
    pages: "14116-14128",
    doi: "10.1039/D0NJ01966F",
    category: "journal",
    citations: 0,
    impact: "High Impact",
    abstract:
      "Study of positional isomer effects on photophysical and antibacterial properties.",
    keywords: ["Isomers", "Photophysics", "Antibacterial"],
    image: "/publications/p33.png",
  },
  {
    id: 34,
    title:
      "Synthesis, structural, thermal, photophysical and vibrational spectroscopic studies of potassium-polynitrile based 3D coordination polymer",
    authors: "M. K. Tiwari, Abhineet Verma, Monika, A. Raj, S. Saha",
    journal: "Spectrochim. Acta A",
    year: 2020,
    volume: "246",
    pages: "118958",
    doi: "10.1016/j.saa.2020.118958",
    category: "journal",
    citations: 0,
    impact: "High Impact",
    abstract:
      "Comprehensive study of potassium-based 3D coordination polymers.",
    keywords: ["Coordination Polymers", "Spectroscopy", "3D Structures"],
    image: "/publications/p34.png",
  },
  {
    id: 35,
    title:
      "Metal free highly efficient C-N bond formation through 1,6-addition: Synthesis and photophysical studies of diaryl methyl amino acid esters (DMAAEs)",
    authors: "D. Roy, Abhineet Verma, A. Benerjee, S. Saha, Gautam Panda",
    journal: "New J. Chem.",
    year: 2020,
    volume: "44",
    pages: "14859-14864",
    doi: "10.1039/D0NJ03224G",
    category: "journal",
    citations: 0,
    impact: "High Impact",
    abstract: "Development of metal-free C-N bond formation methods.",
    keywords: ["C-N Bond Formation", "Metal-Free", "Organic Synthesis"],
    image: "/publications/p35.png",
  },
  {
    id: 36,
    title:
      "Modulation of Weak Interactions in Structural Isomers: Positional Isomeric Effects on Crystal Packing and Physical Properties and Solid-State Thin-Film Fabrication",
    authors: "Monika, Abhineet Verma, M. K. Tiwari, B. Show, S. Saha",
    journal: "ACS Omega",
    year: 2020,
    volume: "5",
    pages: "448-459",
    doi: "10.1021/acsomega.9b02795",
    category: "journal",
    citations: 0,
    impact: "High Impact",
    abstract:
      "Study of weak interactions and crystal packing in structural isomers.",
    keywords: ["Isomers", "Crystal Packing", "Thin Films"],
    image: "/publications/p36.png",
  },
  // 2019 Publications
  {
    id: 37,
    title:
      "Probing the Heterogeneity of Ionic Liquids in Solution Through Phenol-Water Phase Behavior",
    authors: "Abhineet Verma, J. Srivastava, N. E. Prasad, S. Saha",
    journal: "ChemistrySelect",
    year: 2019,
    volume: "4",
    pages: "49-58",
    doi: "10.1002/slct.201803250",
    category: "journal",
    citations: 0,
    impact: "High Impact",
    abstract:
      "Investigation of ionic liquid heterogeneity through phase behavior studies.",
    keywords: ["Ionic Liquids", "Phase Behavior", "Heterogeneity"],
    image: "/publications/p37.png",
  },
  {
    id: 38,
    title:
      "Ionic Liquids as High-Performance Lubricant: A New Alterative to Oil",
    authors: "S. Saha, Abhineet Verma, S. K. Panja",
    journal: "Int. J. Petrochem. Res.",
    year: 2019,
    volume: "",
    pages: "",
    doi: "",
    category: "conference",
    citations: 0,
    impact: "Conference Paper",
    abstract:
      "Study of ionic liquids as alternative lubricants to conventional oils.",
    keywords: ["Ionic Liquids", "Lubricants", "Tribology"],
    image: "/publications/p38.png",
  },
  {
    id: 39,
    title:
      "Template-Directed Synthesis of Half Condensed Schiff base Complexes of Cu(II) and Co(III): Structural and Magnetic Studies",
    authors:
      "P. Pandey, Abhineet Verma, K. Bretosh, J.-P. Sutter, S. S. Sunkari",
    journal: "Polyhedron",
    year: 2019,
    volume: "164",
    pages: "80-89",
    doi: "10.1016/j.poly.2019.02.017",
    category: "journal",
    citations: 0,
    impact: "High Impact",
    abstract:
      "Template-directed synthesis and characterization of Schiff base complexes.",
    keywords: ["Schiff Base", "Metal Complexes", "Magnetism"],
    image: "/publications/p39.png",
  },
  {
    id: 40,
    title:
      "Conformationally Restricted Triarylmethanes: Synthesis, Photophysical Studies and Applications",
    authors: "S. Mondal, Abhineet Verma, S. Saha",
    journal: "Eur. J Org. Chem.",
    year: 2019,
    volume: "5",
    pages: "864-894",
    doi: "10.1002/ejoc.201801411",
    category: "journal",
    citations: 0,
    impact: "High Impact",
    abstract:
      "Comprehensive review of conformationally restricted triarylmethanes.",
    keywords: ["Triarylmethanes", "Photophysics", "Organic Chemistry"],
    image: "/publications/p40.png",
  },
  // 2018 Publications
  {
    id: 41,
    title:
      "Molecular Packing Dependent Solid-State Fluorescence Response of Supramolecular Metal- Organic Frameworks: Phenoxo-bridged Trinuclear Zn (II) Centered Schiff Base Complexes With Halides and Pseudohalides",
    authors: "Abhineet Verma, S. Sunkari, N. Dwivedi, S. Saha",
    journal: "Cryst. Growth Des.",
    year: 2018,
    volume: "18(9)",
    pages: "5628-5637",
    doi: "10.1021/acs.cgd.8b01073",
    category: "journal",
    citations: 0,
    impact: "High Impact",
    abstract:
      "Study of molecular packing effects on fluorescence in metal-organic frameworks.",
    keywords: ["MOFs", "Fluorescence", "Zinc Complexes"],
    image: "/publications/p41.png",
  },
  // 2017 Publications
  {
    id: 42,
    title:
      "NIR Luminescent Heterodinuclear [ZnII LnIII] Complexes: Synthesis, Crystal Structures and Photophysical properties",
    authors:
      "N. Dwivedi, S. K. Panja, Abhineet Verma, T. Takayal, K. Iwata, S. S. Sunkari, S. Saha",
    journal: "J. Luminscence",
    year: 2017,
    volume: "192",
    pages: "156-165",
    doi: "10.1016/j.jlumin.2017.06.036",
    category: "journal",
    citations: 0,
    impact: "High Impact",
    abstract:
      "Synthesis and characterization of NIR luminescent heterometallic complexes.",
    keywords: ["NIR Luminescence", "Lanthanides", "Zinc Complexes"],
    image: "/publications/p42.png",
  },
];

// Simple categories for filtering
const categories = [
  { id: "all", label: "All" },
  { id: "journal", label: "Journals" },
  { id: "book", label: "Book Chapters" },
  { id: "award", label: "Awards" },
];

// Book Chapters
const bookChapters = [
  {
    id: 1,
    title:
      "Illuminating Advances: Photochemistry and Photophysics of N-Heterocyclic Carbenes (NHCs) and Its Structural Correlation",
    authors:
      "K. Bandyopadhyay, Abhineet Verma, T. Ghosh, R. K. Kanaparthi, S. Nadendla, S. Saha",
    publisher: "IntechOpen",
    year: 2024,
    doi: "10.5772/intechopen.1004054",
    abstract:
      "Comprehensive review of photochemistry and photophysics of N-heterocyclic carbenes.",
    keywords: ["NHCs", "Photochemistry", "Photophysics"],
    image: "/publications/book1.png",
  },
  {
    id: 2,
    title:
      "Recent Development of Carbenes: Synthesis, Structure, Photophysical Properties and Applications",
    authors: "A. Manna, Abhineet Verma, S. K. Panja, S. Saha",
    publisher: "IntechOpen",
    year: 2022,
    doi: "10.5772/intechopen.101413",
    abstract:
      "Recent advances in carbene chemistry including synthesis and applications.",
    keywords: ["Carbenes", "Synthesis", "Applications"],
    image: "/publications/book2.png",
  },
  {
    id: 3,
    title: "Introductory Chapter: Magnesium - A Perspective",
    authors: "Abhineet Verma, S. S. Sunkari",
    publisher: "IntechOpen (Current Trends in Magnesium Research)",
    year: 2022,
    doi: "",
    pages: "1-9",
    abstract:
      "Introductory perspective on magnesium chemistry and its current trends.",
    keywords: ["Magnesium", "Chemistry", "Trends"],
    image: "/publications/book3.png",
  },
];

export default function PublicationsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const publicationsPerPage = 10;

  const filteredPublications = publications.filter(pub => {
    const matchesCategory =
      selectedCategory === "all" || pub.category === selectedCategory;
    const matchesSearch =
      pub.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pub.authors.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pub.keywords.some(kw =>
        kw.toLowerCase().includes(searchQuery.toLowerCase())
      );
    return matchesCategory && matchesSearch;
  });

  const filteredBookChapters = bookChapters.filter(chapter => {
    if (selectedCategory !== "all" && selectedCategory !== "book") return false;
    const matchesSearch =
      chapter.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      chapter.authors.toLowerCase().includes(searchQuery.toLowerCase()) ||
      chapter.keywords.some(kw =>
        kw.toLowerCase().includes(searchQuery.toLowerCase())
      );
    return matchesSearch;
  });

  // Pagination logic
  const totalPages = Math.ceil(
    filteredPublications.length / publicationsPerPage
  );
  const indexOfLastPub = currentPage * publicationsPerPage;
  const indexOfFirstPub = indexOfLastPub - publicationsPerPage;
  const currentPublications = filteredPublications.slice(
    indexOfFirstPub,
    indexOfLastPub
  );

  // Reset to page 1 when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory, searchQuery]);

  // Scroll to publications section when page changes
  const scrollToPublications = () => {
    const publicationsSection = document.getElementById("publications-section");
    if (publicationsSection) {
      const navbarHeight = 80; // Approximate navbar height
      const yOffset = -navbarHeight;
      const y =
        publicationsSection.getBoundingClientRect().top +
        window.pageYOffset +
        yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
    scrollToPublications();
  };

  return (
    <div className="min-h-screen bg-white w-full overflow-x-hidden">
      {/* Navbar - Always visible */}
      <Navbar />

      {/* Hero Header */}
      <section className="relative min-h-screen border-b border-gray-200 bg-gray-50 flex items-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 max-w-7xl w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center">
                <FaBook className="text-white text-3xl" />
              </div>
              <div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
                  Publications, Research & Awards
                </h1>
                <p className="text-gray-600 text-sm sm:text-base mt-1">
                  Comprehensive collection of research, publications, and
                  academic achievements
                </p>
              </div>
            </div>

            {/* Stats + small pie chart */}
            <div className="mt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div className="w-full md:flex-1">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { label: "Publications", value: "60" },
                    { label: "Citations", value: "320+" },
                    { label: "Reads", value: "8,795+" },
                    { label: "Avg. Impact", value: "8.5" },
                  ].map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 + index * 0.1 }}
                      className="bg-white rounded-lg p-4 border border-gray-200"
                    >
                      <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">
                        {stat.value}
                      </div>
                      <div className="text-xs text-gray-600">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* (small hero pie removed as requested) */}
            </div>
          </motion.div>
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
            <span className="text-gray-500 text-xs uppercase tracking-wider">
              Scroll
            </span>
            <div className="w-5 h-8 border-2 border-gray-400 rounded-full flex justify-center">
              <div className="w-1 h-2 bg-gray-900 rounded-full mt-1.5"></div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Research Areas full section */}
      <section id="research-areas" className="py-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 max-w-7xl">
          <div className="rounded-lg p-4 sm:p-6">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
              Research Areas
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 mb-6">
              Overview of main research areas and their relative emphasis.
            </p>

            <div className="flex flex-col md:grid md:grid-cols-3 gap-6 md:gap-8">
              {/* Pie Chart - Smaller and centered on mobile */}
              <div className="flex justify-center items-center md:col-span-1 mb-6 md:mb-0">
                <div className="w-[150px] sm:w-[170px] md:w-[200px]">
                  <PieChart data={researchAreas} size={150} innerRadius={47} />
                </div>
              </div>

              {/* Legend - Full width on mobile */}
              <div className="md:col-span-2 w-full">
                <div className="grid grid-cols-1 gap-3">
                  {researchAreas.map(area => (
                    <div
                      key={area.label}
                      className="flex items-center gap-3 p-3 bg-gray-50 rounded hover:bg-gray-100 transition-colors"
                    >
                      <div
                        style={{ background: area.color }}
                        className="w-4 h-4 rounded-full shrink-0"
                      ></div>
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-medium text-gray-800">
                          {area.label}
                        </div>
                        <div className="text-xs text-gray-500">
                          {area.value}%
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter & Search Section */}
      <section className="py-8 bg-white sticky top-0 z-40 border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Categories */}
            <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-5 py-2 rounded-lg font-medium text-sm transition-all duration-200 ${
                    selectedCategory === category.id
                      ? "bg-blue-600 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>

            {/* Search Bar */}
            <div className="relative w-full lg:w-80">
              <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
              <input
                type="text"
                placeholder="Search publications..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-sm"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Publications List */}
      <section id="publications-section" className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Academic Publications
            </h2>
            <div className="h-1 w-20 bg-blue-600 mx-auto mb-4"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Peer-reviewed journal articles, conference papers, and book
              chapters
            </p>
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentPage}
              initial={{ opacity: 0, rotateY: -15, x: -50 }}
              animate={{ opacity: 1, rotateY: 0, x: 0 }}
              exit={{ opacity: 0, rotateY: 15, x: 50 }}
              transition={{
                duration: 0.6,
                ease: [0.43, 0.13, 0.23, 0.96],
              }}
              style={{ transformStyle: "preserve-3d", perspective: 1000 }}
              className="space-y-10"
            >
              {currentPublications.map((pub, index) => (
                <motion.article
                  key={pub.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.3, delay: index * 0.03 }}
                  className="group relative"
                >
                  {/* Elegant Border and Hover Effect */}
                  <div className="border-l-4 border-blue-600 pl-8 pr-6 py-6 hover:bg-gray-50/50 transition-all duration-300 rounded-r-lg">
                    {/* Top Meta Information Row */}
                    <div className="flex flex-wrap items-center gap-4 mb-4">
                      {/* Year - Academic Style */}
                      <div className="flex items-center gap-2">
                        <div className="w-12 h-12 bg-gray-900 text-white rounded flex items-center justify-center font-bold text-sm">
                          {pub.year}
                        </div>
                        <div className="h-8 w-px bg-gray-300"></div>
                      </div>

                      {/* Category & Impact */}
                      <div className="flex items-center gap-3 flex-wrap">
                        <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium uppercase tracking-wider rounded">
                          {pub.category}
                        </span>
                        <span
                          className={`px-3 py-1 text-xs font-medium rounded ${
                            pub.impact === "High Impact"
                              ? "bg-blue-600 text-white"
                              : "bg-gray-200 text-gray-700"
                          }`}
                        >
                          {pub.impact}
                        </span>
                      </div>
                    </div>

                    {/* Main Content Grid */}
                    <div className="grid md:grid-cols-[160px_1fr] gap-6 mb-4">
                      {/* Publication Thumbnail - Minimal */}
                      <div className="relative h-40 md:h-48 w-full md:w-40 rounded overflow-hidden bg-gray-100 shadow-sm group-hover:shadow-md transition-shadow">
                        <Image
                          src={pub.image}
                          alt={pub.title}
                          fill
                          className="object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                        />
                        {/* Subtle Overlay */}
                        <div className="absolute inset-0 bg-blue-900/5"></div>
                      </div>

                      {/* Text Content */}
                      <div className="flex flex-col">
                        {/* Title - Academic Typography */}
                        <h3 className="text-xl md:text-2xl font-serif font-bold text-gray-900 mb-3 leading-tight group-hover:text-blue-700 transition-colors">
                          {pub.title}
                        </h3>

                        {/* Authors - Academic Format */}
                        <p className="text-sm text-gray-700 mb-2 font-medium">
                          {pub.authors}
                        </p>

                        {/* Journal Citation - Professional Format */}
                        <div className="text-sm text-gray-600 mb-3 italic">
                          <span className="font-semibold not-italic">
                            {pub.journal}
                          </span>
                          <span className="mx-2">•</span>
                          <span>
                            Vol. {pub.volume}, pp. {pub.pages}
                          </span>
                          <span className="mx-2">•</span>
                          <span>{pub.year}</span>
                        </div>

                        {/* Keywords - Minimal Pills */}
                        <div className="flex flex-wrap gap-2 mb-3">
                          {pub.keywords.map((keyword, idx) => (
                            <span
                              key={idx}
                              className="px-2.5 py-0.5 bg-white border border-gray-300 text-gray-700 rounded text-xs hover:border-blue-400 hover:text-blue-700 transition-colors"
                            >
                              {keyword}
                            </span>
                          ))}
                        </div>

                        {/* Action Buttons - Clean Row */}
                        <div className="flex items-center gap-3 mt-2">
                          <a
                            href={
                              pub.doi
                                ? `https://doi.org/${pub.doi}`
                                : "https://www.researchgate.net/profile/Abhineet-Verma"
                            }
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm font-medium text-blue-600 hover:text-blue-800 flex items-center gap-1.5 transition-colors"
                          >
                            <FaExternalLinkAlt className="text-xs" />
                            {pub.doi ? "DOI" : "ResearchGate"}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Subtle Number Indicator */}
                  <div className="absolute -left-4 top-8 w-8 h-8 bg-white border border-gray-200 rounded-full flex items-center justify-center text-xs font-bold text-gray-400 group-hover:text-blue-600 group-hover:border-blue-600 transition-all">
                    {indexOfFirstPub + index + 1}
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Pagination Controls */}
          {filteredPublications.length > publicationsPerPage && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex justify-center items-center gap-2 mt-12"
            >
              {/* Previous Button */}
              <button
                onClick={() => handlePageChange(Math.max(currentPage - 1, 1))}
                disabled={currentPage === 1}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  currentPage === 1
                    ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                    : "bg-blue-600 text-white hover:bg-blue-700 shadow-md hover:shadow-lg"
                }`}
              >
                Previous
              </button>

              {/* Page Numbers */}
              <div className="flex gap-2">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                  pageNum => {
                    // Show first page, last page, current page, and pages around current
                    const showPage =
                      pageNum === 1 ||
                      pageNum === totalPages ||
                      Math.abs(pageNum - currentPage) <= 1;

                    const showEllipsis =
                      (pageNum === 2 && currentPage > 3) ||
                      (pageNum === totalPages - 1 &&
                        currentPage < totalPages - 2);

                    if (showEllipsis) {
                      return (
                        <span key={pageNum} className="px-3 py-2 text-gray-400">
                          ...
                        </span>
                      );
                    }

                    if (!showPage) return null;

                    return (
                      <button
                        key={pageNum}
                        onClick={() => handlePageChange(pageNum)}
                        className={`px-4 py-2 rounded-lg font-medium transition-all ${
                          currentPage === pageNum
                            ? "bg-blue-600 text-white shadow-md"
                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                        }`}
                      >
                        {pageNum}
                      </button>
                    );
                  }
                )}
              </div>

              {/* Next Button */}
              <button
                onClick={() =>
                  handlePageChange(Math.min(currentPage + 1, totalPages))
                }
                disabled={currentPage === totalPages}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  currentPage === totalPages
                    ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                    : "bg-blue-600 text-white hover:bg-blue-700 shadow-md hover:shadow-lg"
                }`}
              >
                Next
              </button>
            </motion.div>
          )}

          {/* Pagination Info */}
          {filteredPublications.length > 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center mt-6 text-sm text-gray-600"
            >
              Showing {indexOfFirstPub + 1}-
              {Math.min(indexOfLastPub, filteredPublications.length)} of{" "}
              {filteredPublications.length} publications
            </motion.div>
          )}

          {/* No Results */}
          {filteredPublications.length === 0 &&
            filteredBookChapters.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-20"
              >
                <div className="text-6xl mb-4">📚</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  No publications found
                </h3>
                <p className="text-gray-600">
                  Try adjusting your filters or search query
                </p>
              </motion.div>
            )}
        </div>
      </section>

      {/* Book Chapters Section */}
      {(selectedCategory === "all" || selectedCategory === "book") &&
        filteredBookChapters.length > 0 && (
          <section className="py-16 md:py-24 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-12 max-w-6xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Book Chapters
                </h2>
                <div className="h-1 w-20 bg-purple-600 mx-auto mb-4"></div>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Contributed chapters in academic books and monographs
                </p>
              </motion.div>

              <motion.div layout className="space-y-10">
                <AnimatePresence mode="popLayout">
                  {filteredBookChapters.map((chapter, index) => (
                    <motion.article
                      key={chapter.id}
                      layout
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.98 }}
                      transition={{ duration: 0.3, delay: index * 0.03 }}
                      className="group relative"
                    >
                      <div className="border-l-4 border-purple-600 pl-8 pr-6 py-6 hover:bg-white transition-all duration-300 rounded-r-lg">
                        {/* Top Meta Information Row */}
                        <div className="flex flex-wrap items-center gap-4 mb-4">
                          <div className="flex items-center gap-2">
                            <div className="w-12 h-12 bg-purple-900 text-white rounded flex items-center justify-center font-bold text-sm">
                              {chapter.year}
                            </div>
                            <div className="h-8 w-px bg-purple-300"></div>
                          </div>

                          <div className="flex items-center gap-3 flex-wrap">
                            <span className="px-3 py-1 bg-purple-100 text-purple-700 text-xs font-medium uppercase tracking-wider rounded">
                              Book Chapter
                            </span>
                          </div>
                        </div>

                        {/* Main Content Grid */}
                        <div className="grid md:grid-cols-[160px_1fr] gap-6 mb-4">
                          <div className="relative h-40 md:h-48 w-full md:w-40 rounded overflow-hidden bg-purple-50 shadow-sm group-hover:shadow-md transition-shadow">
                            <Image
                              src={chapter.image}
                              alt={chapter.title}
                              fill
                              className="object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                            />
                            <div className="absolute inset-0 bg-purple-900/5"></div>
                          </div>

                          <div>
                            <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 leading-tight group-hover:text-purple-700 transition-colors">
                              {chapter.title}
                            </h3>

                            <p className="text-sm text-gray-600 mb-2">
                              <span className="font-medium">Authors:</span>{" "}
                              {chapter.authors}
                            </p>

                            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-gray-700 mb-3">
                              <span>
                                <span className="font-medium">Publisher:</span>{" "}
                                {chapter.publisher}
                              </span>
                              {chapter.pages && (
                                <span>
                                  <span className="font-medium">Pages:</span>{" "}
                                  {chapter.pages}
                                </span>
                              )}
                            </div>

                            <div className="flex flex-wrap gap-2 mb-4">
                              {chapter.keywords.map((keyword, idx) => (
                                <span
                                  key={idx}
                                  className="px-2 py-1 bg-purple-50 text-purple-700 text-xs rounded border border-purple-200"
                                >
                                  {keyword}
                                </span>
                              ))}
                            </div>

                            <div className="flex items-center gap-4 text-sm">
                              <a
                                href={
                                  chapter.doi
                                    ? `https://doi.org/${chapter.doi}`
                                    : "https://www.researchgate.net/profile/Abhineet-Verma"
                                }
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-1.5 px-3 py-1 bg-purple-600 text-white rounded hover:bg-purple-700 transition-colors text-xs font-medium"
                              >
                                <FaExternalLinkAlt className="text-xs" />
                                {chapter.doi ? "DOI" : "ResearchGate"}
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="absolute -left-4 top-8 w-8 h-8 bg-white border border-purple-200 rounded-full flex items-center justify-center text-xs font-bold text-purple-400 group-hover:text-purple-600 group-hover:border-purple-600 transition-all">
                        {index + 1}
                      </div>
                    </motion.article>
                  ))}
                </AnimatePresence>
              </motion.div>
            </div>
          </section>
        )}

      <Footer />
    </div>
  );
}
