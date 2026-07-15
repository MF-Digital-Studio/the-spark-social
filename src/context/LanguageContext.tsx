"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { translations } from "@/src/i18n/translations";

type Language = "tr" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  t: (key: string) => any;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("tr");

  useEffect(() => {
    const saved = localStorage.getItem("language") as Language;
    if (saved && (saved === "tr" || saved === "en")) {
      setTimeout(() => setLanguage(saved), 0);
    } else {
      if (navigator.language.startsWith("en")) {
        setTimeout(() => setLanguage("en"), 0);
      }
    }
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem("language", lang);
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const t = (key: string): any => {
    const keys = key.split(".");
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let value: any = translations[language];
    for (const k of keys) {
      if (value === undefined || value[k] === undefined) {
        return key; // Fallback to key if translation is missing
      }
      value = value[k];
    }
    return value;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
