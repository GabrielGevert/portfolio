"use client";
import React, { useState } from "react";
import { Github, Linkedin, Mail, Menu } from "lucide-react";
import {
  NavOverflow,
  CollapseNavbar,
  CloseNav,
  NavbarMenu,
  Title,
  NavbarContent,
  NavbarMenuTitle,
  NavbarMenuItem,
  NavBarMenuItemsWrap,
  NavbarMenuItens,
  NavbarMenuItemIcons,
  Href,
} from "./styles";
import { useLanguage } from "@/utils/LanguageContext";
import { useScroll } from "@/utils/ScrollContext";
import { getLinkedinUrl } from "@/utils/links";

const translations = {
  en: {
    home: "Home",
    aboutMe: "About Me",
    experience: "Experience",
    achievements: "Achievements",
    projects: "Projects",
    contact: "Contact",
    touch: "Get in touch!",
  },
  pt: {
    home: "Início",
    aboutMe: "Sobre mim",
    experience: "Experiência",
    achievements: "Conquistas",
    projects: "Projetos",
    contact: "Contato",
    touch: "Entre em contato!",
  },
};

const HeaderMenu = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const { isEnglish } = useLanguage();
  const currentLanguage = isEnglish ? "en" : "pt";

  const handleMenuClick = () => {
    setMenuVisible(!menuVisible);
  };

  const handleCloseMenu = () => {
    setMenuVisible(false);
  };

  const { refs, scrollToSection } = useScroll();

  return (
    <>
      <Menu width={30} height={30} onClick={handleMenuClick} />
      <NavOverflow $isVisible={menuVisible} onClick={handleCloseMenu} />
      <CollapseNavbar $isVisible={menuVisible}>
        <CloseNav onClick={handleCloseMenu}>×</CloseNav>
        <NavbarContent>
          <Title>
            <span>Gabriel Gevert</span>
            <br></br>
            <span className="color">Portfolio</span>
          </Title>
          <NavbarMenu>
            <NavBarMenuItemsWrap className="top">
              <NavbarMenuItens>
                <NavbarMenuItem
                  onClick={() => scrollToSection(refs.openingRef)}
                >
                  {translations[currentLanguage].home}
                </NavbarMenuItem>
                <NavbarMenuItem
                  onClick={() => scrollToSection(refs.aboutMeRef)}
                >
                  {translations[currentLanguage].aboutMe}
                </NavbarMenuItem>
                <NavbarMenuItem
                  onClick={() => scrollToSection(refs.experienceRef)}
                >
                  {translations[currentLanguage].experience}
                </NavbarMenuItem>
                <NavbarMenuItem onClick={() => scrollToSection(refs.stacksRef)}>
                  Stacks
                </NavbarMenuItem>
                <NavbarMenuItem
                  onClick={() => scrollToSection(refs.achievementsRef)}
                >
                  {translations[currentLanguage].achievements}
                </NavbarMenuItem>
                <NavbarMenuItem
                  onClick={() => scrollToSection(refs.projectsRef)}
                >
                  {translations[currentLanguage].projects}
                </NavbarMenuItem>
                <NavbarMenuItem
                  onClick={() => scrollToSection(refs.contactRef)}
                >
                  {translations[currentLanguage].contact}
                </NavbarMenuItem>
                <NavbarMenuItem href="/portfolio/cv" onClick={handleCloseMenu}>
                  CV
                </NavbarMenuItem>
              </NavbarMenuItens>
            </NavBarMenuItemsWrap>
            <NavBarMenuItemsWrap className="end">
              <NavbarMenuTitle>
                {translations[currentLanguage].touch}
              </NavbarMenuTitle>
              <NavbarMenuItens>
                <NavbarMenuItemIcons>
                  <Href
                    target="_blank"
                    href={getLinkedinUrl(isEnglish)}
                    rel="noopener noreferrer"
                  >
                    <Linkedin width={28} height={28} />
                  </Href>
                  <Href
                    target="_blank"
                    href="https://github.com/GabrielGevert"
                    rel="noopener noreferrer"
                  >
                    <Github width={28} height={28} />
                  </Href>
                  <Href
                    target="_blank"
                    href="mailto:gevertlolz@gmail.com"
                    rel="noopener noreferrer"
                  >
                    <Mail width={28} height={28} />
                  </Href>
                </NavbarMenuItemIcons>
              </NavbarMenuItens>
            </NavBarMenuItemsWrap>
          </NavbarMenu>
        </NavbarContent>
      </CollapseNavbar>
    </>
  );
};

export default HeaderMenu;
