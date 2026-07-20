"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, X } from "lucide-react";
import { useLanguage } from "@/src/context/LanguageContext";
import Link from "next/link";

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);
  const { t, language } = useLanguage();

  useEffect(() => {
    // Check if the user has already made a choice
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      // Small delay for better UX
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setIsVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem("cookieConsent", "rejected");
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-0 left-0 w-full md:w-auto md:bottom-8 md:left-8 z-[9999] bg-[#df2326] md:max-w-[420px] shadow-[0_0_40px_rgba(223,35,38,0.4)] border-t-[6px] md:border-l-[6px] border-[#ffca00]"
        >
          <div className="p-6 sm:p-8 flex flex-col gap-5">
            {/* Header */}
            <div>
              <h3 className="text-[#ffca00] font-black text-2xl sm:text-3xl tracking-tighter uppercase leading-none">
                {language === "en" ? "Cookies." : "Çerezler."}
              </h3>
            </div>

            {/* Body Text */}
            <div className="text-white text-[14px] sm:text-[15px] leading-relaxed font-medium">
              {t("cookie.text")}
              <Link href="#" className="inline-block font-bold text-[#ffca00] hover:text-black transition-colors px-1 bg-transparent hover:bg-[#ffca00]">
                {t("cookie.privacyPolicy")}
              </Link>
              {t("cookie.and")}
              <Link href="#" className="inline-block font-bold text-[#ffca00] hover:text-black transition-colors px-1 bg-transparent hover:bg-[#ffca00]">
                {t("cookie.kvkk")}
              </Link>
              {t("cookie.textEnd")}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 mt-2">
              <button
                onClick={handleAccept}
                className="flex-1 bg-[#ffca00] text-black font-bold uppercase tracking-widest text-xs py-3.5 px-4 hover:bg-black hover:text-[#ffca00] transition-colors duration-300"
              >
                {t("cookie.accept")}
              </button>
              <button
                onClick={handleReject}
                className="flex-1 bg-transparent border border-white text-white font-bold uppercase tracking-widest text-xs py-3.5 px-4 hover:bg-white hover:text-[#df2326] transition-colors duration-300"
              >
                {t("cookie.reject")}
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
