"use client";

import React, { useState } from "react";
import { Star, Video, FileEdit, X, Plus } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import Container from "@/src/components/ui/Container";

/* ─────────────────────────────────────────────
   Accordion data
───────────────────────────────────────────── */
const ITEMS = [
  {
    icon: Star,
    title: "Talent Management",
    body: "An extraordinary approach to talent management. Your talent will shine with our expertise. From discovering to developing your talents, we guide you at every step of your career. With our unique strategies and extensive network in the industry, we market your talents most appropriately, creating the best opportunities for you. Your success is our success. Elevate your career with Spark and fully discover your potential.",
  },
  {
    icon: Video,
    title: "Production",
    body: "We pursue excellence in production. A story in every frame, a passion in every project. Spark, is where creativity and quality meets. Using the latest technologies and creative talents in the industry, we create impressive and unforgettable productions. From advertising to filmmaking, from music videos to digital content, we are with you at every stage of your project. Each of our projects is a new way to tell your story.",
  },
  {
    icon: FileEdit,
    title: "Content Creating",
    body: "Every word, every image, is full of meaning. We create stories beyond content creation. The right address for creative contents: Spark. Whether you are an individual content creator or a large brand, we offer unique and impactful content strategies to every client. With our creative team and technological infrastructure, we offer a wide spectrum of content, from videos to written materials, social media posts to digital campaigns. With Spark, produce content that will reach your audience, create a strong connection with them, and leave unforgettable impressions.",
  },
] as const;

/* ─────────────────────────────────────────────
   Single accordion item
───────────────────────────────────────────── */
interface AccordionItemProps {
  icon: React.ElementType;
  title: string;
  body: string;
  isOpen: boolean;
  onToggle: () => void;
  isLast: boolean;
}

function AccordionItem({
  icon: Icon,
  title,
  body,
  isOpen,
  onToggle,
  isLast,
}: AccordionItemProps) {
  return (
    <div className={`${!isLast ? "border-b border-gray-200" : ""}`}>
      {/* ── Header ── */}
      <button
        onClick={onToggle}
        className="w-full flex items-center gap-4 py-6 text-left group"
        aria-expanded={isOpen}
      >
        {/* Round icon */}
        <span className="relative flex-shrink-0 w-11 h-11 rounded-full border border-orange-400 flex items-center justify-center shadow-[0_2px_10px_rgba(245,166,35,0.20)] transition-shadow duration-300 group-hover:shadow-[0_2px_16px_rgba(245,166,35,0.35)]">
          <Icon className="w-5 h-5 text-red-500" strokeWidth={1.8} />
          {/* glossy highlight */}
          <span className="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent via-white/10 to-white/25 pointer-events-none" />
        </span>

        {/* Title */}
        <span className="flex-1 font-semibold text-xl md:text-2xl text-black leading-tight">
          {title}
        </span>

        {/* Toggle icon */}
        <span className="flex-shrink-0 transition-transform duration-300">
          {isOpen ? (
            <X className="w-5 h-5 text-red-500" strokeWidth={2} />
          ) : (
            <Plus className="w-5 h-5 text-red-500" strokeWidth={2} />
          )}
        </span>
      </button>

      {/* ── Body (animated) ── */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="body"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
            style={{ overflow: "hidden" }}
          >
            <p className="pl-[60px] pb-6 text-gray-500 text-sm md:text-base leading-relaxed">
              {body}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Services section
───────────────────────────────────────────── */
export default function Services() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  const handleToggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? -1 : index));
  };

  return (
    <section id="services" className="bg-white py-16 md:py-24">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-[0.9fr_1.1fr] gap-8 md:gap-10 items-start">

          {/* ── Left column ── */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.215, 0.610, 0.355, 1.000] }}
            className="md:sticky md:top-28"
          >
            {/* Label */}
            <span className="text-[20px] font-medium text-black tracking-wide block mb-4">
              Services
            </span>

            {/* Headline */}
            <h2 className="font-extrabold text-4xl md:text-5xl leading-tight text-[#E5262A] mb-5">
              Connecting Creators,
              <br />
              Sparking Brands.
            </h2>

            {/* Sub-text */}
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
              Release your full potential with our talent mastery. Let us spark
              you.
            </p>
          </motion.div>

          {/* ── Right column: Accordion ── */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.215, 0.610, 0.355, 1.000], delay: 0.2 }}
            className="border-t border-gray-200"
          >
            {ITEMS.map((item, i) => (
              <AccordionItem
                key={item.title}
                icon={item.icon}
                title={item.title}
                body={item.body}
                isOpen={openIndex === i}
                onToggle={() => handleToggle(i)}
                isLast={i === ITEMS.length - 1}
              />
            ))}
          </motion.div>

        </div>
      </Container>
    </section>
  );
}
