"use client";

import React from "react";
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
import { Code2, Gem, GitPullRequestDraft, Rocket } from "lucide-react";

const translations = {
  en: {
    title: "About me:",
    text: "Hi, I'm Gabriel Gevert and I'm a Full Stack developer with around 3 years of effective experience, working in the web development field since 2021. I've increasingly improved my skills in web development and have a basic understanding of advanced UI/UX design principles. Here are the main skills I have:",
    explanation:
      "Years of experience. Specialised in building websites, while ensuring a seamless web experience for end users.",
  },
  pt: {
    title: "Sobre mim:",
    text: "Olá, sou Gabriel Gevert e sou um desenvolvedor Full Stack com cerca de 3 anos de experiência efetiva, atuando na área de desenvolvimento web desde 2021. Aperfeiçoei cada vez mais minhas habilidades em desenvolvimento web e tenho uma compreensão básica dos princípios avançados de design UI/UX. Aqui estão as principais habilidades que possuo:",
    explanation:
      "Anos de experiência. Especializado na construção de sites, garantindo ao mesmo tempo uma integração perfeita na experiência web para usuários finais.",
  },
};

const AboutMe = () => {
  const { isEnglish, toggleLanguage } = useLanguage();
  const currentLanguage = isEnglish ? "en" : "pt";

  const cardsMock = [
    {
      title: isEnglish ? "Web Development" : "Desenvolvimento Web",
      icon: <Rocket />,
    },
    {
      title: isEnglish ? "Code Mastery" : "Domínio de Código",
      icon: <Code2 />,
    },
    {
      title: isEnglish ? "UI/UX Designing" : "Design de UI/UX",
      icon: <Gem />,
    },
    {
      title: isEnglish ? "Code Versioning" : "Versionamento de Código",
      icon: <GitPullRequestDraft />,
    },
  ];

  return (
    <Container className="top">
      <AboutMeContainer>
        <AboutMeTitle>{translations[currentLanguage].title}</AboutMeTitle>

        <AboutMeText>{translations[currentLanguage].text}</AboutMeText>
        <AboutMeWrapTexts>
          <AboutMeYears>3+</AboutMeYears>
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
};

export default AboutMe;
