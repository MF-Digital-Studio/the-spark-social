"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Container from "@/src/components/ui/Container";
import { useLanguage } from "@/src/context/LanguageContext";

const brandLogos = [
  { name: "Alpro", file: "alpro 1-Photoroom.png" },
  { name: "Armani", file: "armani 1-Photoroom.png" },
  { name: "Atelier", file: "ateiler.png" },
  { name: "Bebeto", file: "bebeto 1-Photoroom.png" },
  { name: "Bioderma", file: "bioderma 1-Photoroom.png" },
  { name: "Coca Cola", file: "cococola 1-Photoroom.png" },
  { name: "Dolap", file: "dolap 1-Photoroom.png" },
  { name: "Eti Gong", file: "eti_gong 1-Photoroom.png" },
  { name: "Fairy", file: "fairy 1-Photoroom.png" },
  { name: "Group", file: "Group.png" },
  { name: "Hepsiburada", file: "hepsiburada 1-Photoroom.png" },
  { name: "İno", file: "ino 1-Photoroom.png" },
  { name: "Karaca", file: "karaca 1 1-Photoroom.png" },
  { name: "Kerastase", file: "kerastase 1-Photoroom.png" },
  { name: "Kiehl's", file: "kiehl 1-Photoroom.png" },
  { name: "La Roche", file: "laroche-Photoroom.png" },
  { name: "Les Benjamins", file: "lesbenjamins 1-Photoroom.png" },
  { name: "L'Oreal", file: "LOreal-Logo.png" },
  { name: "Maybelline", file: "maybelline 1-Photoroom.png" },
  { name: "Migros", file: "migros 1-Photoroom.png" },
  { name: "Nivea", file: "nivea-Photoroom.png" },
  { name: "NYX", file: "nyx-Photoroom.png" },
  { name: "Obsesso", file: "obsesso 1-Photoroom.png" },
  { name: "Oral-B", file: "oral-b-logo-1.png" },
  { name: "Paul Kenzie", file: "paul_kenzie.png" },
  { name: "Shark Ninja", file: "sharkninja 1-Photoroom.png" },
  { name: "Trendyol", file: "trendyol 1-Photoroom.png" },
  { name: "Vichy", file: "vichy 1-Photoroom.png" },
  { name: "Xside", file: "xside 1-Photoroom.png" },
  { name: "Yves Rocher", file: "yves 1-Photoroom.png" },
];

export default function Brands() {
  const { t } = useLanguage();

  return (
    <section id="brand" className="bg-white text-[#0A0A0A] py-24 w-full overflow-hidden">
      <Container>
        {/* Top Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 40, filter: "blur(10px)", scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)", scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16"
        >
          <div className="lg:col-span-3 xl:col-span-2 text-center lg:text-left">
            <h2 className="text-[20px] font-medium tracking-wider text-[#0A0A0A] block ml-2">
              {t("brands.title1")}
            </h2>
          </div>
          <div className="lg:col-span-9 xl:col-span-10 text-center lg:text-left">
            <p className="text-[#0A0A0A]/80 text-sm md:text-base leading-relaxed font-light font-sans">
              {t("brands.description")}
            </p>
          </div>
        </motion.div>

        {/* Marquee Carousel Strip */}
        <motion.div 
          initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="w-full overflow-hidden relative mt-12 py-6 md:py-8 before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-24 before:bg-gradient-to-r before:from-white before:to-transparent after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-24 after:bg-gradient-to-l after:from-white after:to-transparent"
        >
          <div className="flex animate-marquee whitespace-nowrap w-max">
            <div className="flex gap-10 md:gap-16 items-center shrink-0 pr-10 md:pr-16">
              {brandLogos.map((brand, idx) => (
                <div
                  key={`group1-${brand.file}-${idx}`}
                  className="w-36 md:w-44 h-14 md:h-16 flex items-center justify-center shrink-0"
                >
                  <Image
                    src={`/brands/${brand.file}`}
                    alt={`${brand.name} logo`}
                    width={180}
                    height={60}
                    className="max-h-10 md:max-h-12 max-w-[130px] md:max-w-[150px] w-auto h-auto object-contain opacity-90 hover:opacity-100 hover:scale-105 transition-all duration-300"
                  />
                </div>
              ))}
            </div>
            <div className="flex gap-10 md:gap-16 items-center shrink-0 pr-10 md:pr-16">
              {brandLogos.map((brand, idx) => (
                <div
                  key={`group2-${brand.file}-${idx}`}
                  className="w-36 md:w-44 h-14 md:h-16 flex items-center justify-center shrink-0"
                >
                  <Image
                    src={`/brands/${brand.file}`}
                    alt={`${brand.name} logo`}
                    width={180}
                    height={60}
                    className="max-h-10 md:max-h-12 max-w-[130px] md:max-w-[150px] w-auto h-auto object-contain opacity-90 hover:opacity-100 hover:scale-105 transition-all duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
