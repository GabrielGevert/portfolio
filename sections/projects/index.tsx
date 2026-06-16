"use client";

import React, { forwardRef } from "react";
import { Container, ProjectsCard } from "@/components";
import {
  ProjectsCardsWrap,
  ProjectsContainer,
  ProjectsText,
  ProjectsTitle,
} from "./styles";
import { useLanguage } from "@/utils/LanguageContext";

const Projects = forwardRef<HTMLDivElement>((props, ref) => {
  const { isEnglish } = useLanguage();
  const currentLanguage = isEnglish ? "en" : "pt";

  const translations = {
    en: {
      title: "Featured projects:",
      text: "I have worked on several products throughout my career, from web platforms to serverless infrastructure. Here are some highlights:",
    },
    pt: {
      title: "Projetos em destaque:",
      text: "Trabalhei em diversos produtos ao longo da minha carreira, de plataformas web a infraestrutura serverless. Aqui estão alguns destaques:",
    },
  };

  const ProjectsCardMock = [
    {
      img: "/guaxi.png",
      title: "Coach Guaxi",
      description: isEnglish
        ? "League of Legends coaching platform with class scheduling and Asaas payments (PIX and installments, with idempotency and fee pass-through). It even has a fun touch: a Champions Roulette built on canvas that loads 170+ champions from Riot's API, with win-streak and revive-token mechanics."
        : "Plataforma de coaching de League of Legends com agendamento de aulas e pagamentos via Asaas (PIX e cartão parcelado, com idempotência e repasse de taxas). Tem até um detalhe divertido: uma Roleta dos Campeões feita em canvas que carrega 170+ campeões da API da Riot, com mecânicas de win streak e fichas de ressurreição.",
      site: "https://www.guaxilolcoach.com",
      bgColor: "#1a0d10",
      tags: ["Next.js", "AWS Amplify", "Riot API"],
    },
    {
      img: "/inefavel.png",
      title: "Inefavel Academy",
      description: isEnglish
        ? "League of Legends courses and coaching platform running in production. Serverless backend with 70+ Lambdas and 26 tables: two payment gateways (Stripe and Asaas, with installments scheduled via EventBridge), class scheduling with automatic rescheduling, signed video URLs on Cloudflare Stream and field-level authorization."
        : "Plataforma de cursos e coaching de League of Legends em produção. Backend serverless com 70+ Lambdas e 26 tabelas: dois gateways de pagamento (Stripe e Asaas, com parcelamento agendado via EventBridge), agendamento de aulas com reagendamento automático, vídeos com URLs assinadas no Cloudflare Stream e autorização a nível de campo.",
      site: "https://www.inefavelacademy.com",
      bgColor: "#000000",
      tags: [
        "AWS Amplify",
        "Next.js",
        isEnglish ? "In production" : "Em produção",
      ],
      featured: true,
    },
    {
      img: "/git.png",
      title: "Portfolio",
      description: isEnglish
        ? "This portfolio, open source so you can explore how it was built with React 19, Next.js 15 and styled-components."
        : "Este portfolio, com código aberto para você explorar como foi construído com React 19, Next.js 15 e styled-components.",
      site: "https://gabrielgevert.github.io/portfolio/",
      repo: "https://github.com/GabrielGevert/portfolio",
      bgColor: "var(--tints_primary)",
      tags: ["Next.js", "React 19"],
    },
  ];

  return (
    <Container ref={ref}>
      <ProjectsContainer>
        <ProjectsTitle>{translations[currentLanguage].title}</ProjectsTitle>
        <ProjectsText>{translations[currentLanguage].text}</ProjectsText>
        <ProjectsCardsWrap>
          {ProjectsCardMock.map((card, index) => (
            <ProjectsCard
              key={index}
              img={card.img}
              title={card.title}
              description={card.description}
              site={card.site}
              repo={card.repo}
              bgColor={card.bgColor}
              tags={card.tags}
              featured={card.featured}
              badge={
                card.featured
                  ? isEnglish
                    ? "Featured"
                    : "Destaque"
                  : undefined
              }
            />
          ))}
        </ProjectsCardsWrap>
      </ProjectsContainer>
    </Container>
  );
});

export default Projects;
