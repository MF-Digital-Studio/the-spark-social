"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Container from "@/src/components/ui/Container";
import { useLanguage } from "@/src/context/LanguageContext";

interface ServiceItem {
  title: string;
  flow: string[];
}

export default function Services() {
  const { language, t } = useLanguage();
  const servicesItems = t("services.items") as ServiceItem[];

  return (
    <section id="services" className="bg-[#ffca00] text-[#111] py-16 md:py-24 relative overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Title & Phone Image */}
          <motion.div
            initial={{ opacity: 0, x: -40, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex flex-col gap-6 items-center lg:items-start"
          >
            {/* Red Title */}
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-[#df2326] tracking-tight max-w-xs leading-none text-center lg:text-left">
              {t("services.title")}
            </h2>

            {/* Hand with Phone Figure */}
            <div className="relative w-full max-w-[340px] sm:max-w-[420px] aspect-[4/5] mx-auto lg:mx-0">
              <Image
                src={language === "en" ? "/figures/english_phone-Photoroom.png" : "/figures/turkish_phone-Photoroom.png"}
                alt="Hizmet Alanlarımız Telefon Görseli"
                fill
                sizes="(max-width: 640px) 340px, 420px"
                className="object-contain"
              />
            </div>
          </motion.div>

          {/* Right Column: Services List */}
          <motion.div
            initial={{ opacity: 0, x: 40, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex flex-col gap-10 sm:gap-12 justify-center items-center lg:items-start text-center lg:text-left"
          >
            {servicesItems && servicesItems.map((service: ServiceItem, index: number) => (
              <div key={index} className="flex flex-col gap-2">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#111] tracking-tight">
                  {service.title}
                </h3>
                <p className="text-lg sm:text-xl md:text-2xl font-semibold italic text-[#111] underline decoration-1 underline-offset-4 tracking-wide">
                  {service.flow.join(" \u2192 ")}
                </p>
              </div>
            ))}
          </motion.div>

        </div>
      </Container>
    </section>
  );
}
