"use client";
import React from "react";
import { useLanguage } from "@/utils/LanguageContext";
import { useScroll } from "@/utils/ScrollContext";
import {
  FlagOption,
  HeaderContainer,
  HeaderFirstContent,
  HeaderItems,
  HeaderSecondContent,
  HeaderTranslate,
} from "./styles";
import Image from "next/image";
import useWindowSize from "@/utils/window-size";
import dynamic from "next/dynamic";

const Menu = dynamic(() => import("@/components/molecules/menu-header"), {
  ssr: false,
});

const translations = {
  en: {
    home: "Home",
    aboutMe: "About Me",
    projects: "Projects",
    contact: "Contact",
  },
  pt: {
    home: "Início",
    aboutMe: "Sobre mim",
    projects: "Projetos",
    contact: "Contato",
  },
};

const Header = () => {
  const { isEnglish, toggleLanguage } = useLanguage();
  const { refs, scrollToSection } = useScroll();
  const currentLanguage = isEnglish ? "en" : "pt";
  const basePath = "/portfolio";
  const { width } = useWindowSize();

  const languageToggle = (
    <HeaderTranslate onClick={toggleLanguage}>
      <FlagOption $active={!isEnglish}>
        <Image
          src={`${basePath}/brazil_flag.png`}
          alt="Português"
          width={30}
          height={30}
          unoptimized
        />
      </FlagOption>
      <FlagOption $active={isEnglish}>
        <Image
          src={`${basePath}/usa_flag.png`}
          alt="English"
          width={30}
          height={30}
          unoptimized
        />
      </FlagOption>
    </HeaderTranslate>
  );

  return (
    <HeaderContainer>
      {width !== undefined && width > 768 ? (
        <>
          <HeaderFirstContent>Portfolio - Gabriel Gevert</HeaderFirstContent>
          <HeaderSecondContent>
            <HeaderItems onClick={() => scrollToSection(refs.openingRef)}>
              {translations[currentLanguage].home}
            </HeaderItems>
            <HeaderItems onClick={() => scrollToSection(refs.aboutMeRef)}>
              {translations[currentLanguage].aboutMe}
            </HeaderItems>
            <HeaderItems onClick={() => scrollToSection(refs.stacksRef)}>
              Stacks
            </HeaderItems>
            <HeaderItems onClick={() => scrollToSection(refs.projectsRef)}>
              {translations[currentLanguage].projects}
            </HeaderItems>
            <HeaderItems onClick={() => scrollToSection(refs.contactRef)}>
              {translations[currentLanguage].contact}
            </HeaderItems>
          </HeaderSecondContent>
          {languageToggle}
        </>
      ) : (
        <>
          <Menu />
          <HeaderFirstContent>Gabriel Gevert</HeaderFirstContent>
          {languageToggle}
        </>
      )}
    </HeaderContainer>
  );
};

export default Header;
