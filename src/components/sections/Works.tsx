"use client";

import React from "react";
import { motion } from "framer-motion";
import Container from "@/src/components/ui/Container";

export default function Works() {
  const works = [1, 2, 3, 4, 5, 6];

  return (
    <section className="bg-sparkYellow py-20 w-full">
      <Container>
        <motion.span 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.215, 0.610, 0.355, 1.000] }}
          className="text-[20px] font-medium tracking-wider text-black block mb-8 ml-2"
        >
          Works
        </motion.span>
        
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-2">
          {works.map((id, index) => (
            <motion.div 
              key={id} 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: [0.215, 0.610, 0.355, 1.000], delay: index * 0.1 }}
              className="relative overflow-hidden rounded-none aspect-[3/4] bg-black"
            >
              <video 
                src={`/videos/work-${id}.mp4`} 
                autoPlay 
                loop 
                muted 
                playsInline 
                preload="metadata"
                className="w-full h-full object-cover" 
              />
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
