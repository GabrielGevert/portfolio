"use client";

import React, { forwardRef } from "react";
import { useLanguage } from "@/utils/LanguageContext";
import { Container, Card } from "@/components";
import {
  AboutMeCardsWrap,
  AboutMeContainer,
  AboutMeText,
  AboutMeTitle,
  AboutMeWrapTexts,
  AboutMeYears,
  AboutMeYearsExplanation,
} from "./styles";
import { CloudCog, Rocket, Server, Smartphone } from "lucide-react";

const translations = {
  en: {
    title: "About me:",
    text: "Hi, I'm Gabriel Gevert, a Fullstack developer working with software development since 2020. I feel at home across every layer of an application, from the front-end to the back-end, including solutions on AWS. I also build mobile apps with Flutter and games with Unity when a project calls for it. I care about building things well and I like working close to a team. These are my main areas:",
    explanation:
      "Years building software end to end, always learning and improving with each project alongside the team.",
  },
  pt: {
    title: "Sobre mim:",
    text: "Olá, sou Gabriel Gevert, desenvolvedor Fullstack atuando com desenvolvimento de software desde 2020. Me sinto à vontade em todas as camadas de uma aplicação, do front-end ao back-end, incluindo soluções na AWS. Também desenvolvo apps mobile com Flutter e jogos com Unity quando o projeto pede. Gosto de fazer as coisas bem feitas e de trabalhar perto do time. Estas são minhas principais áreas:",
    explanation:
      "Anos construindo software de ponta a ponta, sempre aprendendo e melhorando a cada projeto junto com o time.",
  },
};

const AboutMe = forwardRef<HTMLDivElement>((props, ref) => {
  const { isEnglish } = useLanguage();
  const currentLanguage = isEnglish ? "en" : "pt";

  const cardsMock = [
    {
      title: isEnglish ? "Web Development" : "Desenvolvimento Web",
      icon: <Rocket />,
    },
    {
      title: isEnglish ? "Back-end & APIs" : "Back-end & APIs",
      icon: <Server />,
    },
    {
      title: isEnglish ? "Cloud" : "Cloud",
      icon: <CloudCog />,
    },
    {
      title: isEnglish ? "Mobile & Games" : "Mobile & Jogos",
      icon: <Smartphone />,
    },
  ];

  return (
    <Container ref={ref} className="top">
      <AboutMeContainer>
        <AboutMeTitle>{translations[currentLanguage].title}</AboutMeTitle>
        <AboutMeText>{translations[currentLanguage].text}</AboutMeText>
        <AboutMeWrapTexts>
          <AboutMeYears>6+</AboutMeYears>
          <AboutMeYearsExplanation>
            {translations[currentLanguage].explanation}
          </AboutMeYearsExplanation>
        </AboutMeWrapTexts>
        <AboutMeCardsWrap>
          {cardsMock.map((card, index) => (
            <Card key={index} title={card.title} icon={card.icon} />
          ))}
        </AboutMeCardsWrap>
      </AboutMeContainer>
    </Container>
  );
});

export default AboutMe;
