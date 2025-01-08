"use client";
import React from "react";
import { useLanguage } from "@/utils/LanguageContext";
import { useScroll } from "@/utils/ScrollContext";
import {
  HeaderContainer,
  HeaderFirstContent,
  HeaderItems,
  HeaderSecondContent,
  HeaderTranslate,
  SliderButton,
  Text,
} from "./styles";
import Image from "next/image";

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
  const basePath = "";

  return (
    <HeaderContainer>
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
      <HeaderTranslate onClick={toggleLanguage}>
        <SliderButton $isEnglish={isEnglish}>
          <Image
            src={`${basePath}/${
              isEnglish ? "usa_flag.png" : "brazil_flag.png"
            }`}
            alt={isEnglish ? "USA Flag" : "Bandeira do Brasil"}
            width={32}
            height={32}
            unoptimized
          />
        </SliderButton>
        <Text $isEnglish={isEnglish} />
      </HeaderTranslate>
    </HeaderContainer>
  );
};

export default Header;
