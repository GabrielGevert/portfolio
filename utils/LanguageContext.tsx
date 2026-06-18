"use client";
import React, {
  createContext,
  useState,
  useContext,
  useEffect,
  ReactNode,
} from 'react';

interface LanguageContextProps {
  isEnglish: boolean;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

const syncLangParam = (isEnglish: boolean) => {
  if (typeof window === "undefined") return;
  const url = new URL(window.location.href);
  url.searchParams.set("lang", isEnglish ? "en" : "pt");
  window.history.replaceState(null, "", url.toString());
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [isEnglish, setIsEnglish] = useState(false);

  useEffect(() => {
    const lang = new URLSearchParams(window.location.search).get("lang");
    if (lang === "en") setIsEnglish(true);
  }, []);

  useEffect(() => {
    document.documentElement.lang = isEnglish ? "en" : "pt-BR";
  }, [isEnglish]);

  const toggleLanguage = () =>
    setIsEnglish((prev) => {
      const next = !prev;
      syncLangParam(next);
      return next;
    });

  return (
    <LanguageContext.Provider value={{ isEnglish, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextProps => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
