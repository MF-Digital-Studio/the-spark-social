"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Play } from "lucide-react";
import Container from "@/src/components/ui/Container";
import { useLanguage } from "@/src/context/LanguageContext";

// Instagram Icon SVG
function InstagramIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
    </svg>
  );
}

interface WorkItem {
  id: string;
  handle: string;
  campaignTr: string;
  campaignEn: string;
  src: string;
}

const WORKS_DATA: WorkItem[] = [
  {
    id: "iklim",
    handle: "@iklimsentunali",
    campaignTr: "Sephora Collection Hydrate Serisi Lansmanı",
    campaignEn: "Sephora Collection Hydrate Series Launch",
    src: "/videos/iklim_video.mp4",
  },
  {
    id: "batuhan",
    handle: "@batuhansafak",
    campaignTr: "Disney+ Multi-Content",
    campaignEn: "Disney+ Multi-Content",
    src: "/videos/batuhan_video.mp4",
  },
  {
    id: "selen",
    handle: "@selenkivanc_",
    campaignTr: "Alpro Blue Cloud Alproccino Lansmanı",
    campaignEn: "Alpro Blue Cloud Alproccino Launch",
    src: "/videos/sln_video.mp4",
  },
  {
    id: "cagatay",
    handle: "@cagataysucann",
    campaignTr: "Kampüste XSIDE Var!",
    campaignEn: "XSIDE is on Campus!",
    src: "/videos/çağatay_video.mp4",
  },
  {
    id: "irem",
    handle: "@iiremall",
    campaignTr: "Paribu Cineverse Emaar ScreenX Lansmanı",
    campaignEn: "Paribu Cineverse Emaar ScreenX Launch",
    src: "/videos/irem_video.mp4",
  },
  {
    id: "koray",
    handle: "@koraykry11",
    campaignTr: "Paribu Cineverse Oscar Maratonu",
    campaignEn: "Paribu Cineverse Oscar Marathon",
    src: "/videos/koray_video.mp4",
  },
  {
    id: "fatih_levis",
    handle: "@fatihfiratbalci",
    campaignTr: "Denim'in zamansız hali. Levi's orijinalin her zaman arkasında.",
    campaignEn: "Timeless denim. Levi's always stands behind the original.",
    src: "/videos/fatih_video.mp4",
  },
  {
    id: "gulce_samsung",
    handle: "@gulcecantuurk",
    campaignTr: "Galaxy S26 Ultra x Google Gemini Circle to Search",
    campaignEn: "Galaxy S26 Ultra x Google Gemini Circle to Search",
    src: "/videos/gulce_video_samsung.mp4",
  },
  {
    id: "seymur_boyner",
    handle: "@seymur_ilham",
    campaignTr: "Boyner Online Yaz Fırsatları",
    campaignEn: "Boyner Online Summer Finds",
    src: "/videos/seymur_video.mp4",
  },
  {
    id: "selen_boyner",
    handle: "@selenkivanc_",
    campaignTr: "Boyner Online Dünya Kupası Aktivasyonu",
    campaignEn: "Boyner Online World Cup Launch",
    src: "/videos/sln_video_boyner.mp4",
  },
  {
    id: "gulce_urbancare",
    handle: "@gulcecantuurk",
    campaignTr: "Urban Care Jujutsu Trend",
    campaignEn: "Urban Care Jujutsu Trend",
    src: "/videos/gulce_video.mp4",
  },
];

function DominantChromePhoneMockup({ src }: { src: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayClick = () => {
    if (videoRef.current) {
      if (!isPlaying) {
        videoRef.current.play().catch(() => {});
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  return (
    <div className="relative w-full aspect-[9/18.5] flex flex-col items-center flex-shrink-0 cursor-pointer" onClick={handlePlayClick}>
      {/* Sleek Chrome Phone Frame */}
      <div className="relative w-full h-full bg-gradient-to-br from-slate-100 via-white to-slate-300 rounded-[36px] sm:rounded-[44px] p-[3px] sm:p-[4px] shadow-[0_25px_50px_rgba(0,0,0,0.35)] flex flex-col justify-between overflow-hidden group-hover:scale-[1.04] transition-all duration-500 z-10">
        
        {/* Screen Display Area */}
        <div className="relative w-full h-full rounded-[32px] sm:rounded-[40px] overflow-hidden bg-black group">
          
          {/* Dynamic Island Notch */}
          <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-12 sm:w-14 h-3.5 bg-black rounded-full z-20 flex items-center justify-end px-1.5 gap-1 opacity-90">
            <div className="w-1.5 h-1.5 rounded-full bg-[#0d0d15]" />
          </div>

          {/* Large Video Player */}
          <video
            ref={videoRef}
            src={src}
            loop
            muted
            playsInline
            preload="none"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />

          {/* Play Button Overlay */}
          {!isPlaying && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/30 backdrop-blur-[2px] z-20 transition-opacity duration-300 group-hover:bg-black/40">
              <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/40 shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                <Play className="w-8 h-8 text-white ml-1" fill="currentColor" />
              </div>
            </div>
          )}

          {/* Glare Effect */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/20 pointer-events-none z-10" />

          {/* Bottom Home Indicator */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-16 sm:w-20 h-1 bg-white/70 rounded-full z-20 backdrop-blur-sm" />
        </div>

      </div>
    </div>
  );
}

export default function Works() {
  const { language, t } = useLanguage();

  return (
    <section id="works" className="bg-[#df2326] text-white py-24 md:py-32 w-full relative overflow-hidden">
      <Container>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12 md:mb-16 text-center lg:text-left"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-[#ffca00] leading-none">
            {t("works.title1")} {t("works.title2")}
          </h2>
        </motion.div>
        
        {/* Sharp Yellow Cards on Red Section Background */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">
          {WORKS_DATA.map((item, index) => {
            const igUrl = `https://instagram.com/${item.handle.replace("@", "")}`;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 50, filter: "blur(10px)", scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)", scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              >
                <a
                  href={igUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative bg-[#ffca00] text-black rounded-none p-5 sm:p-8 md:p-10 shadow-2xl flex flex-col md:flex-row lg:flex-col xl:flex-row items-center gap-6 sm:gap-8 md:gap-10 hover:shadow-[0_25px_60px_rgba(0,0,0,0.3)] hover:scale-[1.01] transition-all duration-500 block h-full overflow-hidden border-none outline-none"
                >
                  {/* Left Side: Large Phone Mockup */}
                  <div className="w-full max-w-[200px] sm:max-w-[240px] md:max-w-[280px] lg:max-w-[220px] xl:max-w-[280px] flex-shrink-0">
                    <DominantChromePhoneMockup src={item.src} />
                  </div>

                  {/* Right Side: Information Content */}
                  <div className="flex flex-col justify-between h-full py-2 flex-1 w-full text-center md:text-left lg:text-center xl:text-left gap-6 z-10 min-w-0">
                    {/* Top Row: Creator Profile */}
                    <div className="flex flex-col gap-3 min-w-0">
                      <div className="inline-flex items-center justify-center md:justify-start lg:justify-center xl:justify-start gap-2 text-xs font-bold tracking-widest text-[#df2326] uppercase">
                        <span className="w-5 h-5 rounded-full bg-black flex items-center justify-center text-[#ffca00]">
                          <InstagramIcon className="w-3 h-3" />
                        </span>
                        <span>CREATOR</span>
                      </div>

                      {/* Instagram Handle */}
                      <div className="flex items-center justify-center md:justify-start lg:justify-center xl:justify-start gap-2 group/handle min-w-0">
                        <span className="text-xl sm:text-2xl md:text-3xl font-black tracking-tight text-black group-hover:text-[#df2326] transition-colors truncate">
                          {item.handle}
                        </span>
                        <ArrowUpRight className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 text-black/60 group-hover:text-[#df2326] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                      </div>
                    </div>

                    {/* Campaign Title & Label */}
                    <div className="space-y-2 pt-2 min-w-0">
                      <span className="text-[10px] sm:text-xs font-black tracking-widest text-[#df2326] uppercase">
                        {language === "en" ? "CAMPAIGN" : "KAMPANYA"}
                      </span>
                      <h3 className="text-lg sm:text-xl md:text-2xl font-extrabold text-black leading-snug tracking-tight break-words">
                        {language === "en" ? item.campaignEn : item.campaignTr}
                      </h3>
                    </div>

                    {/* Action Button */}
                    <div className="pt-2">
                      <span className="inline-flex items-center justify-center gap-2 text-[11px] sm:text-sm font-bold uppercase tracking-wider text-white bg-[#df2326] group-hover:bg-black group-hover:text-[#ffca00] px-4 sm:px-6 py-2.5 sm:py-3 rounded-full transition-all duration-300 shadow-md w-full sm:w-auto text-center truncate">
                        {t("works.viewProfile")}
                        <ArrowUpRight className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                      </span>
                    </div>

                  </div>
                </a>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
