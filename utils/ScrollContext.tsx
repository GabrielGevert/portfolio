"use client";
import React, { createContext, useContext, useRef, RefObject } from "react";

interface ScrollContextType {
  refs: {
    openingRef: RefObject<HTMLDivElement | null>;
    aboutMeRef: RefObject<HTMLDivElement | null>;
    stacksRef: RefObject<HTMLDivElement | null>;
    projectsRef: RefObject<HTMLDivElement | null>;
    contactRef: RefObject<HTMLDivElement | null>;
  };
  scrollToSection: (ref: RefObject<HTMLDivElement | null>) => void;
}

const ScrollContext = createContext<ScrollContextType | undefined>(undefined);

export const ScrollProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const openingRef = useRef<HTMLDivElement | null>(null);
  const aboutMeRef = useRef<HTMLDivElement | null>(null);
  const stacksRef = useRef<HTMLDivElement | null>(null);
  const projectsRef = useRef<HTMLDivElement | null>(null);
  const contactRef = useRef<HTMLDivElement | null>(null);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
    if (ref.current) {
      const offset = 90;
      const topPosition = ref.current.offsetTop - offset;

      window.scrollTo({
        top: topPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <ScrollContext.Provider
      value={{
        refs: { openingRef, aboutMeRef, stacksRef, projectsRef, contactRef },
        scrollToSection,
      }}
    >
      {children}
    </ScrollContext.Provider>
  );
};

export const useScroll = () => {
  const context = useContext(ScrollContext);
  if (!context) {
    throw new Error("useScroll must be used within a ScrollProvider");
  }
  return context;
};
