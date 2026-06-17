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

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [isEnglish, setIsEnglish] = useState(false);

  useEffect(() => {
    document.documentElement.lang = isEnglish ? "en" : "pt-BR";
  }, [isEnglish]);

  const toggleLanguage = () => setIsEnglish((prev) => !prev);

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
