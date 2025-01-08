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
  const currentLanguage = isEnglish ? "en" : "pt";
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  

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
