"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
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

// TikTok Icon SVG
function TikTokIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.29 0 .56.04.82.1v-3.6a6.38 6.38 0 0 0-.82-.05A6.34 6.34 0 0 0 3 15.57a6.34 6.34 0 0 0 10.86 4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.04-.43Z" />
    </svg>
  );
}

interface Creator {
  name: string;
  image: string;
  igHandle: string;
  igFollowers: string;
  ttHandle: string;
  ttFollowers: string;
}

const CREATORS_LIST_1: Creator[] = [
  {
    name: "KORAY GEDİKBEY",
    image: "/figures/koray_gedikbey.png",
    igHandle: "@koraykry11",
    igFollowers: "139.908",
    ttHandle: "@koraykry11",
    ttFollowers: "139.000",
  },
  {
    name: "HİLAL DEMİREL",
    image: "/figures/hilal_demirel.png",
    igHandle: "@lalihlerimed",
    igFollowers: "106.587",
    ttHandle: "@lalihlerimed",
    ttFollowers: "8.564",
  },
  {
    name: "ALP CAN TARIM",
    image: "/figures/alp_cantarim.png",
    igHandle: "@falpcant",
    igFollowers: "94.742",
    ttHandle: "@alpcant",
    ttFollowers: "1.060",
  },
  {
    name: "ZELAL IŞIL ÖZDEMİR",
    image: "/figures/zelal_özdemir.png",
    igHandle: "@zelderler",
    igFollowers: "81.599",
    ttHandle: "@zelderler",
    ttFollowers: "132.900",
  },
  {
    name: "GÜLCE CANTÜRK",
    image: "/figures/gülce_cantürk.png",
    igHandle: "@gulcecantuurk",
    igFollowers: "37.739",
    ttHandle: "@gulcecanturk",
    ttFollowers: "98.700",
  },
];

const CREATORS_LIST_2: Creator[] = [
  {
    name: "İREM AL",
    image: "/figures/irem_al.png",
    igHandle: "@iiremall",
    igFollowers: "212.787",
    ttHandle: "@iremalll",
    ttFollowers: "840.000",
  },
  {
    name: "IRMAK ATALAY",
    image: "/figures/irmak_atalay.png",
    igHandle: "@irmakataly",
    igFollowers: "114.174",
    ttHandle: "@irmakatallay",
    ttFollowers: "296.400",
  },
  {
    name: "ELİF SEZGİN",
    image: "/figures/elif_sezgin.png",
    igHandle: "@sezgin.elif",
    igFollowers: "146.021",
    ttHandle: "@elifszgin",
    ttFollowers: "324.700",
  },
  {
    name: "ÇAĞATAY SUCAN",
    image: "/figures/çağatay_sucan.png",
    igHandle: "@cagataysucann",
    igFollowers: "53.200",
    ttHandle: "@cagataysucann",
    ttFollowers: "14.200",
  },
  {
    name: "SELEN KIVANÇ",
    image: "/figures/selen_kıvanç.png",
    igHandle: "@selenkivanc_",
    igFollowers: "42.558",
    ttHandle: "@sln.kivanc",
    ttFollowers: "220.000",
  },
];

function CreatorDesktopRow({ creators }: { creators: Creator[] }) {
  return (
    <div className="hidden xl:block mb-16 last:mb-0 relative">
      {/* Yellow Container Wrapping Images and Names */}
      <div className="bg-[#ffca00] p-6 rounded-2xl shadow-xl mb-6">
        <div className="grid grid-cols-5 gap-6">
          {creators.map((creator, i) => {
            const igUrl = `https://instagram.com/${creator.igHandle.replace("@", "")}`;
            const ttHandleClean = creator.ttHandle.startsWith("@") ? creator.ttHandle : `@${creator.ttHandle}`;
            const ttUrl = `https://tiktok.com/${ttHandleClean}`;

            return (
              <motion.div
                key={creator.name}
                initial={{ opacity: 0, y: 30, filter: "blur(10px)", scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)", scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col items-center group/card"
              >
                <div className="relative w-full aspect-square overflow-hidden shadow-md block rounded-xl">
                  <a href={igUrl} target="_blank" rel="noopener noreferrer" className="relative block w-full h-full cursor-pointer">
                    <Image
                      src={creator.image}
                      alt={creator.name}
                      fill
                      sizes="(max-width: 1024px) 100vw, 20vw"
                      className="object-cover group-hover/card:scale-105 transition-transform duration-500"
                    />
                  </a>

                  {/* KONSEPT 1: GÖRSELE ENTEGRE (Slide Up Overlay) */}
                  <div className="absolute inset-x-0 bottom-0 pt-16 bg-gradient-to-t from-black via-black/80 to-transparent translate-y-full group-hover/card:translate-y-0 transition-transform duration-500 ease-out flex flex-col justify-end p-4 pointer-events-none">
                    <div className="pointer-events-auto flex flex-col gap-2">
                      <a href={igUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between group/link">
                        <div className="flex items-center gap-2">
                          <InstagramIcon className="w-4 h-4 text-white" />
                          <span className="text-[11px] font-semibold text-white group-hover/link:text-[#ffca00] transition-colors">{creator.igHandle}</span>
                        </div>
                        <span className="text-[11px] text-white/80 font-bold">{creator.igFollowers}</span>
                      </a>
                      <div className="h-px w-full bg-white/20"></div>
                      <a href={ttUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between group/link">
                        <div className="flex items-center gap-2">
                          <TikTokIcon className="w-4 h-4 text-white" />
                          <span className="text-[11px] font-semibold text-white group-hover/link:text-[#ffca00] transition-colors">{creator.ttHandle}</span>
                        </div>
                        <span className="text-[11px] text-white/80 font-bold">{creator.ttFollowers}</span>
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="w-full pt-3 text-center">
                  <a href={igUrl} target="_blank" rel="noopener noreferrer" className="text-sm font-black text-black tracking-tight leading-tight uppercase min-h-[36px] flex items-center justify-center hover:opacity-75 transition-opacity">
                    {creator.name}
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default function Creators() {
  const { t } = useLanguage();
  const allCreators = [...CREATORS_LIST_1, ...CREATORS_LIST_2];

  return (
    <section id="creators" className="bg-[#df2326] text-white py-16 md:py-24 relative overflow-hidden">
      <Container>
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-[#ffca00] tracking-tight mb-8 text-center lg:text-left">
          {t("creators.title")}
        </h2>

        {/* Desktop */}
        <CreatorDesktopRow creators={CREATORS_LIST_1} />
        <CreatorDesktopRow creators={CREATORS_LIST_2} />

        {/* Mobile & Tablet: Single continuous grid */}
        <div className="block xl:hidden">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {allCreators.map((creator, i) => {
              const igUrl = `https://instagram.com/${creator.igHandle.replace("@", "")}`;
              const ttHandleClean = creator.ttHandle.startsWith("@")
                ? creator.ttHandle
                : `@${creator.ttHandle}`;
              const ttUrl = `https://tiktok.com/${ttHandleClean}`;

              return (
                <motion.div
                  key={creator.name + "-mobile"}
                  initial={{ opacity: 0, y: 30, filter: "blur(10px)", scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, filter: "blur(0px)", scale: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.8, delay: (i % 3) * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="flex flex-col rounded-xl overflow-hidden shadow-xl border border-white/10"
                >
                  {/* Yellow Top Part */}
                  <div className="bg-[#ffca00] p-1.5 pb-2 sm:p-2 sm:pb-3 flex flex-col items-center">
                    <a
                      href={igUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative w-full aspect-square overflow-hidden shadow-sm block rounded-lg"
                    >
                      <Image
                        src={creator.image}
                        alt={creator.name}
                        fill
                        sizes="(max-width: 768px) 50vw, 33vw"
                        className="object-cover transition-transform duration-300"
                      />
                    </a>
                    
                    <div className="w-full pt-1.5 sm:pt-2 text-center px-1">
                      <a
                        href={igUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[10px] sm:text-[11px] font-black text-black tracking-tight leading-tight uppercase min-h-[28px] flex items-center justify-center hover:opacity-75 transition-opacity"
                      >
                        {creator.name}
                      </a>
                    </div>
                  </div>

                  {/* Dark Bottom Part (Socials) */}
                  <div className="bg-black/50 backdrop-blur-md p-3 sm:p-4 flex flex-col gap-2 flex-grow justify-center border-t border-white/5">
                    <a href={igUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between group/link w-full">
                      <div className="flex items-center gap-1.5 sm:gap-2 flex-1 min-w-0 pr-1">
                        <InstagramIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
                        <span className="text-[10px] sm:text-[11px] font-semibold text-white group-hover/link:text-[#ffca00] transition-colors truncate">
                          {creator.igHandle}
                        </span>
                      </div>
                      <span className="text-[10px] sm:text-[11px] text-white/80 font-bold flex-shrink-0">
                        {creator.igFollowers}
                      </span>
                    </a>
                    <div className="h-px w-full bg-white/10"></div>
                    <a href={ttUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between group/link w-full">
                      <div className="flex items-center gap-1.5 sm:gap-2 flex-1 min-w-0 pr-1">
                        <TikTokIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
                        <span className="text-[10px] sm:text-[11px] font-semibold text-white group-hover/link:text-[#ffca00] transition-colors truncate">
                          {creator.ttHandle}
                        </span>
                      </div>
                      <span className="text-[10px] sm:text-[11px] text-white/80 font-bold flex-shrink-0">
                        {creator.ttFollowers}
                      </span>
                    </a>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
