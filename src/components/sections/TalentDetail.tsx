"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Lightbulb } from "lucide-react";
import Container from "@/src/components/ui/Container";
import { useLanguage } from "@/src/context/LanguageContext";

export default function TalentDetail() {
  const { t } = useLanguage();

  return (
    <section className="bg-[#ffca00] text-[#111] py-16 md:py-24 relative overflow-hidden">
      <Container>
        {/* Top Dark Box Banner */}
        <motion.div
          initial={{ opacity: 0, y: -40, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="flex justify-end mb-12 sm:mb-16"
        >
          <div className="w-full lg:w-3/5 bg-[#222222] text-[#df2326] p-6 sm:p-8 rounded-xl shadow-xl flex items-start gap-4 sm:gap-6">
            <div className="flex-shrink-0 mt-1">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-amber-400 flex items-center justify-center text-amber-400">
                <Lightbulb className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
            </div>
            <p className="text-sm sm:text-base font-semibold leading-relaxed text-yellow-400">
              {t("talent.bannerText")}
            </p>
          </div>
        </motion.div>

        {/* Grid: Left Figure & Right Tuval / Eser / Sergi */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-end">
          
          {/* Left Column: Figure & Title */}
          <motion.div
            initial={{ opacity: 0, x: -40, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col justify-between items-center lg:items-start"
          >
            {/* Sitting Coffee Figure */}
            <div className="relative w-48 sm:w-60 md:w-64 aspect-[3/4] mb-4">
              <Image
                src="/figures/talent_figure-Photoroom.png"
                alt="Talent Management Figür"
                fill
                sizes="(max-width: 640px) 192px, (max-width: 768px) 240px, 256px"
                className="object-contain object-center lg:object-left"
              />
            </div>

            {/* Title */}
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-[#df2326] tracking-tight leading-none text-center lg:text-left mt-4 lg:mt-0">
              {t("talent.title1")}
              <br />
              {t("talent.title2")}
            </h2>
          </motion.div>

          {/* Right Column: Tuval, Eser, Sergi */}
          <motion.div
            initial={{ opacity: 0, x: 40, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col gap-8 sm:gap-10 justify-center"
          >
            {/* TUVAL */}
            <div className="space-y-2">
              <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-[#111]">
                {t("talent.tuvalTitle")}
              </h3>
              <p className="text-base sm:text-lg text-[#111] font-medium leading-relaxed">
                {t("talent.tuvalText1")}
                <span className="italic font-bold">{t("talent.tuvalText2")}</span>
                {t("talent.tuvalText3")}
                <span className="text-[#df2326] italic font-bold underline decoration-2 underline-offset-4">
                  {t("talent.tuvalText4")}
                </span>
                {t("talent.tuvalText5")}
              </p>
            </div>

            {/* ESER */}
            <div className="space-y-2">
              <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-[#111]">
                {t("talent.eserTitle")}
              </h3>
              <p className="text-base sm:text-lg text-[#111] font-medium leading-relaxed">
                {t("talent.eserText1")}
                <span className="text-[#df2326] italic font-bold underline decoration-2 underline-offset-4">
                  {t("talent.eserText2")}
                </span>
                {t("talent.eserText3")}
              </p>
            </div>

            {/* SERGİ */}
            <div className="space-y-2">
              <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-[#111]">
                {t("talent.sergiTitle")}
              </h3>
              <p className="text-base sm:text-lg text-[#111] font-medium leading-relaxed">
                {t("talent.sergiText1")}
                <span className="text-[#df2326] italic font-bold underline decoration-2 underline-offset-4">
                  {t("talent.sergiText2")}
                </span>
                {t("talent.sergiText3")}
              </p>
            </div>

          </motion.div>

        </div>
      </Container>
    </section>
  );
}
