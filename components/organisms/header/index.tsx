"use client";
import React from "react";
import { useLanguage } from "@/utils/LanguageContext";
import {
  HeaderContainer,
  HeaderFirstContent,
  HeaderItems,
  HeaderSecondContent,
  HeaderTranslate,
  SliderButton,
  Text,
} from "./styles";
import { Languages } from "lucide-react";

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
  const currentLanguage = isEnglish ? "en" : "pt";

  return (
    <HeaderContainer>
      <HeaderFirstContent>Portfolio - Gabriel Gevert</HeaderFirstContent>
      <HeaderSecondContent>
        <HeaderItems>{translations[currentLanguage].home}</HeaderItems>
        <HeaderItems>{translations[currentLanguage].aboutMe}</HeaderItems>
        <HeaderItems>{translations[currentLanguage].projects}</HeaderItems>
        <HeaderItems>{translations[currentLanguage].contact}</HeaderItems>
      </HeaderSecondContent>
      {/* <Languages /> */}
      <HeaderTranslate onClick={toggleLanguage}>
        <SliderButton $isEnglish={isEnglish}>
          <img
            src={isEnglish ? "/usa_flag.png" : "/brazil_flag.png"}
            alt={isEnglish ? "USA Flag" : "Bandeira do Brasil"}
          />
        </SliderButton>
        <Text $isEnglish={isEnglish} />
      </HeaderTranslate>
    </HeaderContainer>
  );
};

export default Header;
