"use client";
import { Container, StacksCard } from "@/components";
import React, { forwardRef } from "react";
import { useLanguage } from "@/utils/LanguageContext";
import { StacksCardsWrap, StacksContainer, StacksText, StacksTitle } from "./styles";
import {
  SiAwsamplify,
  SiFlutter,
  SiNextdotjs,
  SiTypescript,
  SiUnity,
} from "react-icons/si";
import { FaAws, FaLaravel, FaReact } from "react-icons/fa";
import { LiaNode } from "react-icons/lia";

const translation = {
  en: {
    title: "My main Stacks:",
    text: "The technologies I work with day to day, from the front-end to the back-end.",
    specialty: "Specialty",
  },
  pt: {
    title: "Minhas principais Stacks:",
    text: "As tecnologias com que trabalho no dia a dia, do front-end ao back-end.",
    specialty: "Especialidade",
  },
};

const Stacks = forwardRef<HTMLDivElement>((props, ref) => {
  const { isEnglish } = useLanguage();
  const currentLanguage = isEnglish ? "en" : "pt";

  const StacksCardMock = [
    {
      title: "AWS Amplify",
      icon: <SiAwsamplify />,
      description: "Gen2 · Serverless",
      starIcon: true,
      featured: true,
    },
    {
      title: "AWS",
      icon: <FaAws />,
      description: isEnglish ? "Complete ecosystem" : "Ecossistema completo",
      starIcon: true,
    },
    {
      title: "NextJS",
      icon: <SiNextdotjs />,
      description: "Fullstack",
      starIcon: true,
    },
    {
      title: "React",
      icon: <FaReact />,
      description: "Front-End",
      starIcon: true,
    },
    {
      title: "Typescript",
      icon: <SiTypescript />,
      description: isEnglish ? "Language" : "Linguagem",
    },
    {
      title: "NodeJS",
      icon: <LiaNode />,
      description: "Back-End",
    },
    {
      title: "Laravel",
      icon: <FaLaravel />,
      description: "Back-End",
    },
    {
      title: "Flutter",
      icon: <SiFlutter />,
      description: "Mobile",
    },
    {
      title: "Unity",
      icon: <SiUnity />,
      description: isEnglish ? "Games · C#" : "Jogos · C#",
    },
  ];

  return (
    <Container ref={ref} className="color">
      <StacksContainer>
        <StacksTitle>{translation[currentLanguage].title}</StacksTitle>
        <StacksText>{translation[currentLanguage].text}</StacksText>
        <StacksCardsWrap>
          {StacksCardMock.map((card, index) => (
            <StacksCard
              key={index}
              title={card.title}
              icon={card.icon}
              description={card.description}
              starIcon={card.starIcon}
              featured={card.featured}
              badge={card.featured ? translation[currentLanguage].specialty : undefined}
            />
          ))}
        </StacksCardsWrap>
      </StacksContainer>
    </Container>
  );
});

export default Stacks;
