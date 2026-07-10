"use client";

import React from "react";
import { motion } from "framer-motion";
import { Target, Eye } from "lucide-react";
import Container from "@/src/components/ui/Container";

export default function AboutUs() {
  const commonMotionProps = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
  };

  const transitionProps = (delay: number = 0) => ({
    duration: 0.7,
    ease: [0.215, 0.610, 0.355, 1.000] as const,
    delay,
  });

  return (
    <section className="bg-white text-[#0A0A0A] py-32 relative overflow-hidden">
      {/* Background Accent Gradients (Premium Visual Polish) */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-bl from-orange-500/5 to-red-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-orange-500/5 to-red-500/5 rounded-full blur-3xl pointer-events-none" />

      <Container className="relative z-10">
        {/* Upper Part: Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 mb-20">
          {/* Left Column (1/4 width) */}
          <motion.div
            {...commonMotionProps}
            transition={transitionProps(0)}
          >
            <h2 className="text-[20px] font-medium tracking-tight text-black">About Us</h2>
          </motion.div>

          {/* Right Column (3/4 width) */}
          <div className="md:col-span-3 flex flex-col gap-6">
            {/* Red Accent Spotlight Title */}
            <motion.h3 
              {...commonMotionProps}
              transition={transitionProps(0.1)}
              className="text-[18px] font-bold text-[#E60000]"
            >
              Dream. Spark. Shine.
            </motion.h3>

            {/* Main Description Text */}
            <motion.p 
              {...commonMotionProps}
              transition={transitionProps(0.2)}
              className="text-gray-600 leading-relaxed text-[16px] font-normal"
            >
              Our new foundation, Spark, is a dynamic production and talent management community located
              at the intersection of creativity and innovation. With our deep experience in the industry
              and creative approach, we bring together brands and creators, creating unique and impressive
              stories in every project. With our principles of transparency, honesty, dedication, and hard
              work, we are setting new standards in the industry, bringing together numerous content creators
              from all content areas in the community we will build. We are where dreams come true.
            </motion.p>

            {/* Separator line */}
            <motion.div {...commonMotionProps} transition={transitionProps(0.25)} className="border-b border-gray-200 my-4" />

            {/* Mission Row */}
            <motion.div 
              {...commonMotionProps}
              transition={transitionProps(0.3)}
              className="flex items-center gap-6 py-4"
            >
              {/* Target Icon Circle */}
              <div className="relative w-12 h-12 rounded-full border-2 border-orange-400 flex items-center justify-center flex-shrink-0 shadow-[0_2px_12px_rgba(245,166,35,0.25)]">
                <Target className="w-6 h-6 text-red-500" strokeWidth={2} />
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent via-white/10 to-white/30 pointer-events-none" />
              </div>
              <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6 w-full">
                <h4 className="text-[18px] font-medium min-w-[80px] text-black">Mission</h4>
                <p className="text-[16px] text-gray-600 leading-relaxed flex-1">
                  Our mission is to change industry rules, reach wide audiences, produce quality work,
                  and touch people&apos;s lives. Spark aims to exceed all expectations in the industry with
                  innovative and extraordinary approaches.
                </p>
              </div>
            </motion.div>

            {/* Separator line */}
            <motion.div {...commonMotionProps} transition={transitionProps(0.35)} className="border-b border-gray-200 my-4" />

            {/* Vision Row */}
            <motion.div 
              {...commonMotionProps}
              transition={transitionProps(0.4)}
              className="flex items-center gap-6 py-4"
            >
              {/* Eye Icon Circle */}
              <div className="relative w-12 h-12 rounded-full border-2 border-orange-400 flex items-center justify-center flex-shrink-0 shadow-[0_2px_12px_rgba(245,166,35,0.25)]">
                <Eye className="w-6 h-6 text-red-500" strokeWidth={2} />
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent via-white/10 to-white/30 pointer-events-none" />
              </div>
              <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6 w-full">
                <h4 className="text-[18px] font-medium min-w-[80px] text-black">Vision</h4>
                <p className="text-[16px] text-gray-600 leading-relaxed flex-1">
                  Our vision is to revitalize the careers of talented individuals and support emerging
                  talents by creating a sustainable community and structure.
                </p>
              </div>
            </motion.div>

            {/* Separator line */}
            <motion.div {...commonMotionProps} transition={transitionProps(0.45)} className="border-b border-gray-200 my-4" />
          </div>
        </div>

        {/* Bottom Part: Video Container */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.215, 0.610, 0.355, 1.000] }}
          className="w-full aspect-[21/9] md:aspect-[2.4/1] rounded-[2rem] overflow-hidden shadow-xl relative mt-12"
        >
          <video
            src="/videos/hero-video.mp4"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="w-full h-full object-cover"
          />
          {/* Subtle dark overlay */}
          <div className="absolute inset-0 bg-black/10" />
        </motion.div>
      </Container>
    </section>
  );
}
