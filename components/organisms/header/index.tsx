"use client";
import React from "react";
import { useLanguage } from "@/utils/LanguageContext";
import { useScroll } from "@/utils/ScrollContext";
import { useTheme } from "@/utils/ThemeContext";
import {
  FlagOption,
  HeaderContainer,
  HeaderControls,
  HeaderFirstContent,
  HeaderItems,
  HeaderSecondContent,
  HeaderTranslate,
  LogoPrefix,
  MobileMenuWrap,
  ThemeToggle,
} from "./styles";
import Image from "next/image";
import { Moon, Sun } from "lucide-react";
import MobileMenu from "@/components/molecules/menu-header";

const translations = {
  en: {
    home: "Home",
    aboutMe: "About Me",
    experience: "Experience",
    projects: "Projects",
    contact: "Contact",
  },
  pt: {
    home: "Início",
    aboutMe: "Sobre mim",
    experience: "Experiência",
    projects: "Projetos",
    contact: "Contato",
  },
};

const Header = () => {
  const { isEnglish, toggleLanguage } = useLanguage();
  const { refs, scrollToSection } = useScroll();
  const { theme, toggleTheme } = useTheme();
  const currentLanguage = isEnglish ? "en" : "pt";
  const basePath = "/portfolio";

  return (
    <HeaderContainer>
      <MobileMenuWrap>
        <MobileMenu />
      </MobileMenuWrap>

      <HeaderFirstContent>
        <LogoPrefix>Portfolio - </LogoPrefix>Gabriel Gevert
      </HeaderFirstContent>

      <HeaderSecondContent>
        <HeaderItems onClick={() => scrollToSection(refs.openingRef)}>
          {translations[currentLanguage].home}
        </HeaderItems>
        <HeaderItems onClick={() => scrollToSection(refs.aboutMeRef)}>
          {translations[currentLanguage].aboutMe}
        </HeaderItems>
        <HeaderItems onClick={() => scrollToSection(refs.experienceRef)}>
          {translations[currentLanguage].experience}
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
        <HeaderItems href={`${basePath}/cv`}>CV</HeaderItems>
      </HeaderSecondContent>

      <HeaderControls>
        <ThemeToggle
          onClick={toggleTheme}
          aria-label={
            isEnglish
              ? theme === "dark"
                ? "Switch to light theme"
                : "Switch to dark theme"
              : theme === "dark"
              ? "Mudar para tema claro"
              : "Mudar para tema escuro"
          }
        >
          {theme === "dark" ? <Sun /> : <Moon />}
        </ThemeToggle>
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
      </HeaderControls>
    </HeaderContainer>
  );
};

export default Header;
