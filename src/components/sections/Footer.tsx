"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Container from "@/src/components/ui/Container";
import { useLanguage } from "@/src/context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer id="contact" className="bg-[#df2326] text-white flex flex-col pt-24 pb-6 relative overflow-hidden min-h-screen">
      <Container className="flex flex-col justify-between flex-grow">
      
      {/* Üst ve Orta İçerik Alanı */}
      <div className="flex flex-col items-center justify-center flex-grow text-center">
        
        {/* En Üstte Logo */}
        <Image 
          src="/logo.svg" 
          alt="Spark Logo" 
          width={180}
          height={60}
          className="w-[180px] h-auto mb-4 select-none" 
        />

        {/* Merkez Görsel */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-20 sm:mb-24 w-full"
        >
          <Image 
            src="/want-to-spark-with-us.svg" 
            alt="WANT TO SPARK WITH US?" 
            width={1200}
            height={150}
            className="w-[85%] md:w-[75%] max-w-[1000px] object-contain opacity-90 mx-auto block"
          />
        </motion.div>

        {/* İletişim Etiketi */}
        <motion.span 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.215, 0.610, 0.355, 1.000] as const, delay: 0.1 }}
          className="text-[17px] capitalize tracking-widest text-white/80 block mb-2"
        >
          {t("footer.contactUs")}
        </motion.span>

        {/* E-posta Linki */}
        <motion.a 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.215, 0.610, 0.355, 1.000] as const, delay: 0.2 }}
          href="mailto:hello@thesparksocial.com" 
          className="text-[20px] font-semibold underline underline-offset-8 hover:text-white/80 transition-colors block mb-10"
        >
          hello@thesparksocial.com
        </motion.a>

        {/* Butonlar */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.215, 0.610, 0.355, 1.000] as const, delay: 0.3 }}
          className="flex gap-4 justify-center mb-16"
        >
          <a 
            href="https://docs.google.com/forms/d/e/1FAIpQLSemuzNZuiuT8GPbOT6cejzB4AMtZ-gIwKB53tZtEG9tWItFYA/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white bg-transparent text-white font-normal text-[17px] tracking-widest uppercase px-10 py-3 rounded-full hover:bg-white hover:text-[#df2326] transition-all duration-300 cursor-pointer inline-block"
          >
            {t("footer.brand")}
          </a>
          <a 
            href="https://docs.google.com/forms/d/e/1FAIpQLSekSOyb0cfP6y-IJnrLfHxHirtrAywMjlQUGXvVAME7KO8bfQ/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white bg-transparent text-white font-normal text-[17px] tracking-widest uppercase px-10 py-3 rounded-full hover:bg-white hover:text-[#df2326] transition-all duration-300 cursor-pointer inline-block"
          >
            {t("footer.creator")}
          </a>
        </motion.div>
      </div>

      {/* Alt Footer Barı */}
      <div className="w-full border-t border-white pt-6 pb-2 grid grid-cols-1 md:grid-cols-3 gap-6 text-white font-light items-center">
        
        {/* Sol Taraf (Telif Yazısı ve IAB Logosu) */}
        <div className="flex flex-col md:flex-row items-center md:items-end justify-center md:justify-start gap-4 sm:gap-6">
          <span className="text-[17px] leading-none md:mb-2">
            {t("footer.rights")}
          </span>
          {/* IAB Logo */}
          <div className="flex items-center justify-center">
            <Image 
              src="/figures/iab.png" 
              alt="IAB Logo" 
              width={140}
              height={60}
              className="h-10 sm:h-12 w-auto object-contain" 
            />
          </div>
        </div>

        {/* Orta Taraf (Designed By) */}
        <div className="flex items-center justify-center text-center">
          <a 
            href="https://www.mfdigitalstudio.com/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-[10px] sm:text-[11px] font-normal tracking-wide text-white/70 hover:text-white transition-colors underline decoration-white/30 underline-offset-4 hover:decoration-white"
          >
            {t("footer.designedBy")}
          </a>
        </div>

        {/* Sağ Taraf (Sosyal Medya İkonları) */}
        <div className="flex items-center justify-center md:justify-end gap-5">
          <a 
            href="https://www.tiktok.com/@thesparksocialcom" 
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-70 transition-opacity" 
            aria-label="TikTok"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="20" 
              height="20" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/>
            </svg>
          </a>
          <a 
            href="https://www.instagram.com/thesparksocialcom/" 
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-70 transition-opacity" 
            aria-label="Instagram"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="20" 
              height="20" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
            </svg>
          </a>
          <a 
            href="https://www.youtube.com/@TheSparkSocial" 
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-70 transition-opacity" 
            aria-label="YouTube"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="22" 
              height="22" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/>
              <path d="m10 15 5-3-5-3z"/>
            </svg>
          </a>
        </div>
      </div>
      </Container>
    </footer>
  );
}
