"use client";

import React, { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const isInView = useInView(videoRef, { margin: "200px 0px" });

  useEffect(() => {
    if (isInView && videoRef.current) {
      videoRef.current.play().catch(() => {});
    } else if (!isInView && videoRef.current) {
      videoRef.current.pause();
    }
  }, [isInView]);

  return (
    <div className="h-[95vh] w-full relative bg-[#df2326] overflow-hidden flex justify-center">
      {/* Background Video Wrapper */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: [0.215, 0.610, 0.355, 1.000] }}
        className="relative w-full max-w-[1920px] h-full bg-black z-10"
      >
        <video
          ref={videoRef}
          src="/videos/hero-video.mp4"
          loop
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover"
        />
      </motion.div>
    </div>
  );
}
