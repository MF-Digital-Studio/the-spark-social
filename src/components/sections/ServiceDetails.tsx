"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Lightbulb } from "lucide-react";
import Container from "@/src/components/ui/Container";
import { useLanguage } from "@/src/context/LanguageContext";

export default function ServiceDetails() {
  const { t } = useLanguage();

  return (
    <section className="bg-[#ffca00] w-full relative overflow-hidden text-[#111]">
      
      {/* ─── INFLUENCER MARKETING SECTION ───────────────────────────────────── */}
      <div className="py-24 md:py-32">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8">
            
            {/* Left Column: Title & Figure */}
            <motion.div 
              initial={{ opacity: 0, x: -40, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5 flex flex-col items-center lg:items-start"
            >
              <h2 className="text-5xl sm:text-6xl md:text-7xl font-black text-[#df2326] tracking-tight leading-none mb-8 text-center lg:text-left flex flex-col capitalize">
                <span>{t("serviceDetails.influencerTitle1")}</span>
                <span>{t("serviceDetails.influencerTitle2")}</span>
              </h2>
              
              <div className="relative w-full max-w-[320px] sm:max-w-[400px] aspect-[1/1] mt-auto">
                <div className="absolute -top-8 md:-top-12 left-1/2 -translate-x-1/2 z-10">
                  <Image src="/figures/calendar_figure.png" alt="Calendar Icon" width={90} height={90} className="object-contain opacity-90" />
                </div>
                <Image
                  src="/figures/story_figure.png"
                  alt="Influencer Marketing Figure"
                  fill
                  sizes="(max-width: 640px) 320px, 400px"
                  className="object-contain object-bottom"
                />
              </div>
            </motion.div>

            {/* Right Column: Texts & Dark Box */}
            <motion.div 
              initial={{ opacity: 0, x: 40, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-7 flex flex-col gap-12"
            >
              
              <div className="flex flex-col-reverse md:flex-row gap-8 md:gap-4 items-start">
                {/* ICGORU Text */}
                <div className="flex-1 pr-0 md:pr-4">
                  <h3 className="text-2xl sm:text-3xl font-black mb-3">{t("serviceDetails.insightTitle")}</h3>
                  <p className="text-base sm:text-lg font-medium leading-snug">
                    {t("serviceDetails.insightText1")}
                    <span className="text-[#df2326] italic">{t("serviceDetails.insightText2")}</span>
                    {t("serviceDetails.insightText3")}
                    <span className="text-[#df2326] font-bold">{t("serviceDetails.insightText4")}</span>
                    {t("serviceDetails.insightText5")}
                  </p>
                </div>

                {/* Dark Box */}
                <div className="w-full md:w-[320px] bg-[#262626] text-[#ffca00] p-6 sm:p-8 shrink-0 relative shadow-xl">
                  <div className="absolute top-6 left-6 text-[#ffca00]">
                    <Lightbulb size={32} strokeWidth={1.5} />
                  </div>
                  <p className="pl-12 text-sm sm:text-base font-semibold leading-relaxed">
                    {t("serviceDetails.influencerBoxText")}
                  </p>
                </div>
              </div>

              {/* HIKAYE Text - Indented */}
              <div className="md:ml-[15%] w-full md:w-[85%] relative">
                <h3 className="text-2xl sm:text-3xl font-black mb-3">{t("serviceDetails.storyTitle")}</h3>
                <p className="text-base sm:text-lg font-medium leading-snug">
                  {t("serviceDetails.storyText1")}
                  <span className="text-[#df2326] font-bold">{t("serviceDetails.storyText2")}</span>
                  {t("serviceDetails.storyText3")}
                  <span className="text-[#df2326] italic">{t("serviceDetails.storyText4")}</span>
                  {t("serviceDetails.storyText5")}
                </p>
              </div>

              {/* ETKI Text - More Indented */}
              <div className="md:ml-[30%] w-full md:w-[70%]">
                <h3 className="text-2xl sm:text-3xl font-black mb-3">{t("serviceDetails.impactTitle")}</h3>
                <p className="text-base sm:text-lg font-medium leading-snug">
                  {t("serviceDetails.impactText1")}
                  <span className="text-[#df2326] font-bold">{t("serviceDetails.impactText2")}</span>
                  {t("serviceDetails.impactText3")}
                  <span className="text-[#df2326] italic">{t("serviceDetails.impactText4")}</span>
                  {t("serviceDetails.impactText5")}
                </p>
              </div>

            </motion.div>
          </div>
        </Container>
      </div>

      {/* ─── PRODUCTION SECTION ─────────────────────────────────────────────── */}
      <div className="py-24 md:py-32">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8">
            
            {/* Left Column: Title & Figure */}
            <motion.div 
              initial={{ opacity: 0, x: -40, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5 flex flex-col items-center lg:items-start"
            >
              <h2 className="text-5xl sm:text-6xl md:text-7xl font-black text-[#df2326] tracking-tight leading-none mb-8 text-center lg:text-left capitalize">
                {t("serviceDetails.productionTitle")}
              </h2>
              
              <div className="relative w-full max-w-[320px] sm:max-w-[400px] aspect-[1/1] mt-auto">
                <Image
                  src="/figures/production_figure.png"
                  alt="Production Figure"
                  fill
                  sizes="(max-width: 640px) 320px, 400px"
                  className="object-contain object-bottom"
                />
              </div>
            </motion.div>

            {/* Right Column: Texts & Dark Box */}
            <motion.div 
              initial={{ opacity: 0, x: 40, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-7 flex flex-col justify-between"
            >
              
              <div className="mb-12 lg:mb-0 lg:pr-12">
                <h3 className="text-xl sm:text-2xl font-black mb-4 tracking-wide text-[#111]">
                  {t("serviceDetails.prodSubtitle")}
                </h3>
                <p className="text-base sm:text-lg font-medium leading-snug mb-6">
                  {t("serviceDetails.prodText1")}
                  <span className="text-[#df2326] italic">{t("serviceDetails.prodText2")}</span>
                  {t("serviceDetails.prodText3")}
                  <span className="text-[#df2326] italic">{t("serviceDetails.prodText4")}</span>
                  {t("serviceDetails.prodText5")}
                </p>
                <p className="text-base sm:text-lg font-medium leading-snug">
                  {t("serviceDetails.prodText6")}
                  <span className="text-[#df2326] font-bold">{t("serviceDetails.prodText7")}</span>
                  {t("serviceDetails.prodText8")}
                </p>
              </div>

              {/* Dark Box - Bottom Right */}
              <div className="w-full md:w-[400px] bg-[#262626] text-[#ffca00] p-6 sm:p-8 self-end relative shadow-xl mt-8">
                <div className="absolute top-6 left-6 text-[#ffca00]">
                  <Lightbulb size={32} strokeWidth={1.5} />
                </div>
                <div className="pl-12 text-sm sm:text-base font-bold leading-relaxed space-y-1">
                  <p>{t("serviceDetails.prodBoxLine1")}</p>
                  <p>{t("serviceDetails.prodBoxLine2")}</p>
                  <p>{t("serviceDetails.prodBoxLine3")}</p>
                  <p>{t("serviceDetails.prodBoxLine4")}</p>
                </div>
              </div>

            </motion.div>

          </div>
        </Container>
      </div>

    </section>
  );
}
