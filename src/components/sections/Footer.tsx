"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Container from "@/src/components/ui/Container";

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#E60000] text-white flex flex-col pt-24 pb-6 relative overflow-hidden min-h-screen">
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
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.215, 0.610, 0.355, 1.000] as const }}
          className="w-full flex justify-center"
        >
          <Image 
            src="/want-to-spark-with-us.svg" 
            alt="Want to spark with us?" 
            width={1024}
            height={150}
            className="w-full max-w-[1024px] h-auto object-contain my-8 select-none mx-auto"
            draggable={false}
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
          Contact us
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
            className="border border-white bg-transparent text-white font-normal text-[17px] tracking-widest uppercase px-10 py-3 rounded-full hover:bg-white hover:text-[#E60000] transition-all duration-300 cursor-pointer inline-block"
          >
            BRAND
          </a>
          <a 
            href="https://docs.google.com/forms/d/e/1FAIpQLSekSOyb0cfP6y-IJnrLfHxHirtrAywMjlQUGXvVAME7KO8bfQ/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white bg-transparent text-white font-normal text-[17px] tracking-widest uppercase px-10 py-3 rounded-full hover:bg-white hover:text-[#E60000] transition-all duration-300 cursor-pointer inline-block"
          >
            CREATOR
          </a>
        </motion.div>
      </div>

      {/* Alt Footer Barı */}
      <div className="w-full border-t border-white pt-6 pb-2 flex flex-col md:flex-row justify-between items-center gap-4 text-white font-light">
        
        {/* Sol Taraf (Telif Yazısı) */}
        <div className="text-[17px]">
          © 2026 spark.
        </div>

        {/* Sağ Taraf (Sosyal Medya İkonları) */}
        <div className="flex items-center gap-5">
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
