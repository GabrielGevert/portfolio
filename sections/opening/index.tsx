"use client";
import React from "react";
import { useLanguage } from "@/utils/LanguageContext";
import { Container } from "@/components";
import {
  OpeningContainer,
  OpeningFirstContent,
  OpeningFirstContentButton,
  OpeningFirstContentButtonWrap,
  OpeningFirstContentItem,
  OpeningFirstContentItems,
  OpeningFirstContentItemsWrap,
  OpeningFirstContentPresentation,
  OpeningFirstContentText,
  OpeningFirstContentTitle,
  OpeningSecondContent,
} from "./styles";

import { Eye, Github, Linkedin } from "lucide-react";
import Image from "next/image";

const translations = {
  en: {
    presentation: "Hello, I'm",
    text: "Fullstack developer. I create web experiences in the best possible way for end users.",
    project: "Projects",
  },
  pt: {
    presentation: "Olá, eu sou",
    text: " Desenvolvedor Fullstack. Eu crio experiências web da melhor maneira possível para usuários finais.",
    project: "Projetos",
  },
};

const Opening = () => {
  const { isEnglish, toggleLanguage } = useLanguage();
  const currentLanguage = isEnglish ? "en" : "pt";
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

  return (
    <Container className="top color">
      <OpeningContainer>
        <OpeningFirstContent>
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
            <OpeningFirstContentButtonWrap>
              <OpeningFirstContentButton>
                {translations[currentLanguage].project}
              </OpeningFirstContentButton>
              <Eye />
            </OpeningFirstContentButtonWrap>
          </OpeningFirstContentItems>
        </OpeningFirstContent>
        <OpeningSecondContent>
            <Image src={`${basePath}/me.png`}
            width={270}
            height={337.5}
            alt="Me" />
        </OpeningSecondContent>
      </OpeningContainer>
    </Container>
  );
};

export default Opening;
