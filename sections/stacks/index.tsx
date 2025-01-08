"use client";
import { Container, StacksCard } from "@/components";
import React, { forwardRef } from "react";
import { LanguageProvider, useLanguage } from "@/utils/LanguageContext";
import { StacksCardsWrap, StacksContainer, StacksTitle } from "./styles";
import { SiNextdotjs, SiTypescript } from "react-icons/si";
import { FaLaravel, FaPython, FaReact } from "react-icons/fa";
import { LiaNode } from "react-icons/lia";

const translation = {
  en: {
    title: "My main Stacks:",
  },
  pt: {
    title: "Minhas principais Stacks:",
  },
};

const Stacks = forwardRef<HTMLDivElement>(( props, ref ) => {
  const { isEnglish, toggleLanguage } = useLanguage();
  const currentLanguage = isEnglish ? "en" : "pt";

  const StacksCardMock = [
    {
      title: "NextJS",
      icon: <SiNextdotjs />,
      description: "Front-End",
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
      description: "Front-End",
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
      starIcon: true,
    },
    {
      title: "Python",
      icon: <FaPython />,
      description: "Back-End",
    },
  ];
  return (
    <Container ref={ref} className="color">
      <StacksContainer >
        <StacksTitle>{translation[currentLanguage].title}</StacksTitle>
        <StacksCardsWrap>
          {StacksCardMock.map((card, index) => (
            <StacksCard
              key={index}
              title={card.title}
              icon={card.icon}
              description={card.description}
              starIcon={card.starIcon}
              indexClass={index % 2 == 0 ? "dif" : ""}
            ></StacksCard>
          ))}
        </StacksCardsWrap>
      </StacksContainer>
    </Container>
  );
});

export default Stacks;
