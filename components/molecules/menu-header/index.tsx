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

const translations = {
  en: {
    home: "Home",
    aboutMe: "About Me",
    projects: "Projects",
    contact: "Contact",
    touch: "Get in touch!",
  },
  pt: {
    home: "Início",
    aboutMe: "Sobre mim",
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
                <NavbarMenuItem>
                  {translations[currentLanguage].home}
                </NavbarMenuItem>
                <NavbarMenuItem>
                  {translations[currentLanguage].aboutMe}
                </NavbarMenuItem>
                <NavbarMenuItem>Stacks</NavbarMenuItem>
                <NavbarMenuItem>
                  {translations[currentLanguage].projects}
                </NavbarMenuItem>
                <NavbarMenuItem>
                  {translations[currentLanguage].contact}
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
                    href="https://www.linkedin.com/in/gabrielgevert/"
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
