"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Lightbulb } from "lucide-react";
import Container from "@/src/components/ui/Container";
import { useLanguage } from "@/src/context/LanguageContext";

export default function AboutUs() {
  const { t } = useLanguage();

  return (
    <section id="about" className="bg-[#ffca00] text-[#111] py-16 md:py-24 relative overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Figure & Title */}
          <motion.div
            initial={{ opacity: 0, x: -40, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col justify-between items-center lg:items-start h-full min-h-[380px]"
          >
            {/* Figure image */}
            <div className="relative w-48 sm:w-64 md:w-72 aspect-[3/4] mb-6">
              <Image
                src="/figures/about_figure-Photoroom.png"
                alt="Hakkımızda Figür"
                fill
                sizes="(max-width: 640px) 192px, (max-width: 768px) 256px, 288px"
                className="object-contain object-center lg:object-left"
                priority
              />
            </div>

            {/* Red Headline */}
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-[#df2326] tracking-tight text-center lg:text-left mt-4 lg:mt-0">
              {t("about.title")}
            </h2>
          </motion.div>

          {/* Right Column: Information Content */}
          <motion.div
            initial={{ opacity: 0, x: 40, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col gap-8"
          >
            {/* BİZ KİMİZ? */}
            <div className="space-y-2">
              <h3 className="text-xl sm:text-2xl font-black tracking-tight text-[#111]">
                {t("about.whoWeAre")}
              </h3>
              <p className="text-base sm:text-lg text-[#111] font-medium leading-relaxed">
                <span className="text-[#df2326] font-bold underline decoration-2 underline-offset-4">
                  {t("about.whoWeAreText1")}
                </span>
                {t("about.whoWeAreText2")}
                <span className="italic font-semibold">
                  {t("about.whoWeAreText3")}
                </span>
                {t("about.whoWeAreText4")}
                {t("about.whoWeAreText5") && (
                  <span className="text-[#df2326] italic font-bold">
                    {t("about.whoWeAreText5")}
                  </span>
                )}
              </p>
            </div>

            {/* NE YAPARIZ? */}
            <div className="space-y-2">
              <h3 className="text-xl sm:text-2xl font-black tracking-tight text-[#111]">
                {t("about.whatWeDo")}
              </h3>
              <p className="text-base sm:text-lg text-[#111] font-medium leading-relaxed">
                <span className="italic font-semibold">
                  {t("about.whatWeDoText1")}
                </span>
                {t("about.whatWeDoText2")}
                <span className="text-[#df2326] font-bold">
                  {t("about.whatWeDoText3")}
                </span>
                {t("about.whatWeDoText4")}
              </p>
            </div>

            {/* NEDEN SPARK? (Dark Box) */}
            <div className="bg-[#222222] text-white p-6 sm:p-8 rounded-xl shadow-xl flex flex-col sm:flex-row items-start sm:items-center gap-5 border border-black/10">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full border border-amber-400 flex items-center justify-center text-amber-400">
                  <Lightbulb className="w-6 h-6" />
                </div>
              </div>
              <div className="space-y-1">
                <h4 className="text-xs sm:text-sm font-bold tracking-widest uppercase text-gray-300">
                  {t("about.whySpark")}
                </h4>
                <p className="text-base sm:text-lg text-[#df2326] font-semibold italic underline decoration-1 underline-offset-4">
                  {t("about.whySparkText")}
                </p>
              </div>
            </div>

          </motion.div>

        </div>
      </Container>
    </section>
  );
}
