"use client";
import { Container, StacksCard } from "@/components";
import React, { forwardRef, useRef } from "react";
import { useLanguage } from "@/utils/LanguageContext";
import { useReveal } from "@/utils/use-reveal";
import {
  AchievementsCardsWrap,
  AchievementsContainer,
  AchievementsText,
  AchievementsTitle,
} from "./styles";
import { GraduationCap, Trophy } from "lucide-react";

const translation = {
  en: {
    title: "Achievements:",
    text: "A few milestones I'm proud of.",
    badge: "Achievement",
    cannesTitle: "Gold at Cannes Lions",
    cannesDesc: "Chicken Screams for Coke · Coca-Cola · Social & Creator Lions · 2026",
    degreeTitle: "Bachelor in Information Systems",
    degreeDesc: "PUCPR · Completed in 2025",
  },
  pt: {
    title: "Conquistas:",
    text: "Alguns marcos dos quais me orgulho.",
    badge: "Conquista",
    cannesTitle: "Ouro no Cannes Lions",
    cannesDesc: "Chicken Screams for Coke · Coca-Cola · Social & Creator Lions · 2026",
    degreeTitle: "Bacharel em Sistemas de Informação",
    degreeDesc: "PUCPR · Concluído em 2025",
  },
};

const Achievements = forwardRef<HTMLDivElement>((props, ref) => {
  const { isEnglish } = useLanguage();
  const currentLanguage = isEnglish ? "en" : "pt";
  const t = translation[currentLanguage];
  const innerRef = useRef<HTMLDivElement>(null);
  useReveal(innerRef);

  const cards = [
    {
      title: t.cannesTitle,
      icon: <Trophy />,
      description: t.cannesDesc,
      starIcon: true,
      featured: true,
      badge: t.badge,
    },
    {
      title: t.degreeTitle,
      icon: <GraduationCap />,
      description: t.degreeDesc,
    },
  ];

  return (
    <Container ref={ref}>
      <AchievementsContainer ref={innerRef}>
        <AchievementsTitle>{t.title}</AchievementsTitle>
        <AchievementsText>{t.text}</AchievementsText>
        <AchievementsCardsWrap>
          {cards.map((card, index) => (
            <StacksCard
              key={index}
              title={card.title}
              icon={card.icon}
              description={card.description}
              starIcon={card.starIcon}
              featured={card.featured}
              badge={card.badge}
            />
          ))}
        </AchievementsCardsWrap>
      </AchievementsContainer>
    </Container>
  );
});

Achievements.displayName = "Achievements";

export default Achievements;
