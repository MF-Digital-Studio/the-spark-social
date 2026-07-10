"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Container from "@/src/components/ui/Container";

const brandLogos = [
  "amazon",
  "kikkoman",
  "tabasco",
  "avon",
  "canva",
  "yemeksepeti",
  "loreal",
  "xiaomi",
  "dove",
  "zuber",
];

export default function Brands() {
  return (
    <section className="bg-[#0A0A0A] text-white py-24 w-full overflow-hidden">
      <Container>
        {/* Top Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.215, 0.610, 0.355, 1.000] as const }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16"
        >
          <div className="lg:col-span-3 xl:col-span-2">
            <h2 className="text-[20px] font-medium tracking-wider text-white block ml-2">
              Brand
            </h2>
          </div>
          <div className="lg:col-span-9 xl:col-span-10">
            <p className="text-white text-sm md:text-base leading-relaxed font-light font-sans">
              Telling your brand&apos;s story is an art for us. Spark&apos;s expert team
              captures the essence of your brand and develops creative and
              impactful strategies to reach your target audience. We are here to
              amplify your brand&apos;s voice and create a unique identity. Every
              brand is a story, and choose Spark to tell it in the best way.
            </p>
          </div>
        </motion.div>

        {/* Marquee Carousel */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.215, 0.610, 0.355, 1.000] as const, delay: 0.2 }}
          className="w-full overflow-hidden relative mt-20 before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-24 before:bg-gradient-to-r before:from-[#0A0A0A] before:to-transparent after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-24 after:bg-gradient-to-l after:from-[#0A0A0A] after:to-transparent"
        >
          <div className="flex animate-marquee whitespace-nowrap w-max">
            <div className="flex gap-20 items-center shrink-0 pr-20">
              {brandLogos.map((name, idx) => (
                <Image
                  key={`group1-${name}-${idx}`}
                  src={`/brands/${name}.svg`}
                  alt={`${name} logo`}
                  width={name === "tabasco" ? 112 : 160}
                  height={name === "tabasco" ? 112 : 56}
                  className={`${
                    name === "tabasco"
                      ? "w-24 h-24 md:w-28 md:h-28"
                      : "w-32 h-12 md:w-40 md:h-14"
                  } object-contain flex-shrink-0 ${
                    name !== "zuber" ? "brightness-0 invert mix-blend-screen" : ""
                  }`}
                />
              ))}
            </div>
            <div className="flex gap-20 items-center shrink-0 pr-20">
              {brandLogos.map((name, idx) => (
                <Image
                  key={`group2-${name}-${idx}`}
                  src={`/brands/${name}.svg`}
                  alt={`${name} logo`}
                  width={name === "tabasco" ? 112 : 160}
                  height={name === "tabasco" ? 112 : 56}
                  className={`${
                    name === "tabasco"
                      ? "w-24 h-24 md:w-28 md:h-28"
                      : "w-32 h-12 md:w-40 md:h-14"
                  } object-contain flex-shrink-0 ${
                    name !== "zuber" ? "brightness-0 invert mix-blend-screen" : ""
                  }`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
