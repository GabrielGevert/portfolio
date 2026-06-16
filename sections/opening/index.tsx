"use client";
import React, { forwardRef } from "react";
import { useLanguage } from "@/utils/LanguageContext";
import { Container } from "@/components";
import {
  OpeningContainer,
  OpeningFirstContent,
  OpeningFirstContentBadge,
  OpeningFirstContentButton,
  OpeningFirstContentButtonWrap,
  OpeningFirstContentItem,
  OpeningFirstContentItems,
  OpeningFirstContentItemsWrap,
  OpeningFirstContentPresentation,
  OpeningFirstContentText,
  OpeningFirstContentTitle,
  OpeningPhotoFrame,
  OpeningSecondContent,
} from "./styles";

import { Cloud, Eye, Github, Linkedin } from "lucide-react";
import Image from "next/image";
import { useScroll } from "@/utils/ScrollContext";
import useWindowSize from "@/utils/window-size";

const translations = {
  en: {
    badge: "Fullstack Developer",
    presentation: "Hello, I'm",
    text: "A Fullstack developer who builds complete solutions, from the front-end to the back-end. I'm comfortable across every layer of a product, and AWS is among my specialties.",
    project: "Projects",
  },
  pt: {
    badge: "Desenvolvedor Fullstack",
    presentation: "Olá, eu sou",
    text: "Desenvolvedor Fullstack que constrói soluções completas, do front-end ao back-end. Me viro bem em qualquer camada de um produto, e a AWS está entre minhas especialidades.",
    project: "Projetos",
  },
};

const Opening = forwardRef<HTMLDivElement>((props, ref) => {
  const { isEnglish } = useLanguage();
  const currentLanguage = isEnglish ? "en" : "pt";
  const basePath = "/portfolio";
  const { refs, scrollToSection } = useScroll();
  const { width } = useWindowSize();

  return (
    <Container ref={ref} className="top color">
      <OpeningContainer>
        <OpeningFirstContent>
          <OpeningFirstContentBadge>
            <Cloud width={18} height={18} />
            {translations[currentLanguage].badge}
          </OpeningFirstContentBadge>
          <OpeningFirstContentPresentation>
            {translations[currentLanguage].presentation}
          </OpeningFirstContentPresentation>
          <OpeningFirstContentTitle>Gabriel Gevert</OpeningFirstContentTitle>
          <OpeningFirstContentText>
            {translations[currentLanguage].text}
          </OpeningFirstContentText>
          <OpeningFirstContentItems>
            <OpeningFirstContentItemsWrap>
              <OpeningFirstContentItem
                target="_blank"
                href="https://github.com/GabrielGevert"
              >
                <Github width={52} height={52} />
              </OpeningFirstContentItem>
              <OpeningFirstContentItem
                target="_blank"
                href="https://www.linkedin.com/in/gabrielgevert/"
              >
                <Linkedin width={52} height={52} />
              </OpeningFirstContentItem>
            </OpeningFirstContentItemsWrap>
            <OpeningFirstContentButtonWrap
              onClick={() => scrollToSection(refs.projectsRef)}
            >
              <OpeningFirstContentButton>
                {translations[currentLanguage].project}
              </OpeningFirstContentButton>
              <Eye />
            </OpeningFirstContentButtonWrap>
          </OpeningFirstContentItems>
        </OpeningFirstContent>
        {width !== undefined && width > 768 && (
          <OpeningSecondContent>
            <OpeningPhotoFrame>
              <Image
                src={`${basePath}/me.png`}
                width={270}
                height={337.5}
                alt="Gabriel Gevert"
              />
            </OpeningPhotoFrame>
          </OpeningSecondContent>
        )}
      </OpeningContainer>
    </Container>
  );
});

export default Opening;
