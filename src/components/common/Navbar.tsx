"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Globe, ChevronDown, ArrowRight } from "lucide-react";
import Container from "@/src/components/ui/Container";

const navLinks = [
  { name: "About Us", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Works", href: "#works" },
  { name: "Brand", href: "#brand" },
  { name: "Contact Us", href: "#contact" },
];

const menuVariants = {
  initial: { 
    opacity: 0, 
    clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)"
  },
  animate: { 
    opacity: 1, 
    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
    transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] as const }
  },
  exit: { 
    opacity: 0, 
    clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
    transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] as const, delay: 0.2 }
  }
};

const containerVariants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.2 }
  },
  exit: {
    opacity: 0,
    transition: { staggerChildren: 0.04, staggerDirection: -1 }
  }
};

const itemVariants = {
  initial: { opacity: 0, y: 30, filter: "blur(4px)" },
  animate: { 
    opacity: 1, 
    y: 0, 
    filter: "blur(0px)",
    transition: { duration: 0.5, ease: [0.25, 1, 0.5, 1] as const } 
  },
  exit: { 
    opacity: 0, 
    y: 20, 
    filter: "blur(4px)",
    transition: { duration: 0.3, ease: "easeIn" as const } 
  }
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      {/* ─── Navbar ───────────────────────────────────────────────────── */}
      <nav className="absolute top-0 left-0 w-full z-50 bg-transparent py-6">
        <Container className="flex items-center justify-between relative z-50">

          {/* ── LEFT: Logo ─────────────────────────────────────────── */}
          <Link
            href="/"
            className="flex items-center select-none"
            onClick={() => setIsOpen(false)}
          >
            <Image
              src="/logo.svg"
              alt="Spark Logo"
              width={120}
              height={40}
              className="h-8 md:h-10 w-auto object-contain"
              priority
            />
          </Link>

          {/* ── CENTER: Nav Pill (Desktop) ──────────────────────────── */}
          <div className="hidden min-[992px]:flex items-center gap-6 border border-white/60 rounded-full px-6 py-2.5 backdrop-blur-sm bg-white/5">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-base font-medium text-white/90 hover:text-[#F5A623] transition-colors duration-200 whitespace-nowrap"
              >
                {link.name}
              </Link>
            ))}

            {/* Globe / language selector */}
            <button
              aria-label="Language selector"
              className="flex items-center justify-center gap-1 text-white/80 hover:text-[#F5A623] transition-all duration-200 flex-shrink-0"
            >
              <Globe className="w-[18px] h-[18px]" strokeWidth={1.8} />
              <ChevronDown className="w-3.5 h-3.5" strokeWidth={2} />
            </button>
          </div>

          {/* ── RIGHT: Join Us + Mobile Toggle ─────────────────────── */}
          <div className="flex items-center gap-4">
            <Link
              href="/join"
              className="hidden min-[992px]:inline-flex items-center bg-[#F5A623] text-white font-semibold text-base px-8 py-2.5 rounded-full hover:bg-[#e09510] hover:scale-[1.03] transition-all duration-200"
            >
              Join Us
            </Link>

            {/* Hamburger — mobile only */}
            <button
              onClick={toggleMenu}
              className="min-[992px]:hidden text-white flex items-center justify-center w-10 h-10 rounded-full bg-white/5 border border-white/20 backdrop-blur-sm hover:bg-white/10 transition-colors"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>

        </Container>
      </nav>

      {/* ─── Mobile Fullscreen Menu ───────────────────────────────────── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed inset-0 z-40 bg-neutral-950/95 backdrop-blur-2xl flex flex-col justify-center px-4 sm:px-8"
          >
            {/* Background Decorative Elements */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#F5A623]/10 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />

            <Container className="h-full flex flex-col justify-center py-20 sm:py-24 relative z-10">
              <motion.ul 
                variants={containerVariants}
                className="flex flex-col space-y-4 sm:space-y-6"
              >
                {navLinks.map((link, i) => (
                  <motion.li key={link.name} variants={itemVariants} className="overflow-hidden">
                    <Link
                      href={link.href}
                      onClick={toggleMenu}
                      className="group flex items-center justify-between text-white text-3xl sm:text-5xl font-semibold tracking-tight hover:text-[#F5A623] transition-colors duration-300"
                    >
                      <span>
                        <span className="text-white/20 text-lg sm:text-xl font-normal mr-4 font-mono">{String(i + 1).padStart(2, '0')}</span>
                        {link.name}
                      </span>
                      <ArrowRight className="w-6 h-6 sm:w-8 sm:h-8 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                    </Link>
                  </motion.li>
                ))}
              </motion.ul>

              <motion.div 
                variants={itemVariants}
                className="mt-10 sm:mt-12 pt-6 sm:pt-8 border-t border-white/10 flex flex-col sm:flex-row gap-6 sm:items-center justify-between"
              >
                <Link
                  href="/join"
                  onClick={toggleMenu}
                  className="inline-flex items-center justify-center bg-[#F5A623] text-white font-semibold px-8 py-3.5 sm:py-4 rounded-full text-base sm:text-lg hover:bg-[#e09510] hover:scale-[1.02] transition-all duration-200"
                >
                  Join Us
                </Link>

                <div className="flex items-center gap-6 text-white/60">
                  <button className="flex items-center gap-2 hover:text-white transition-colors">
                    <Globe className="w-5 h-5" />
                    <span className="text-sm font-medium">English</span>
                  </button>
                  <a href="mailto:hello@thesparksocial.com" className="text-sm font-medium hover:text-white transition-colors">
                    hello@thesparksocial.com
                  </a>
                </div>
              </motion.div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
