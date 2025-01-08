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

const Projects = forwardRef<HTMLDivElement>(( props, ref ) => {
  const { isEnglish, toggleLanguage } = useLanguage();
  const currentLanguage = isEnglish ? "en" : "pt";

  const translations = {
    en: {
      title: "Featured projects:",
      text: "I have worked on several projects throughout my career as a Web Developer. Here are some of my main projects:",
    },
    pt: {
      title: "Projetos em destaque:",
      text: "Trabalhei em diversos projetos ao longo de minha carreira como Desenvolvedor Web. Aqui estão alguns de meus principais projetos:",
    },
  };
  const ProjectsCardMock = [
    {
      img: "/elo-rise.png",
      title: "ELO RISE",
      description: isEnglish
        ? "Application for purchasing services related to the game League Of Legends - Project currently incomplete, made with the purpose of testing my skills."
        : "Aplicativo para compra de serviços relacionados ao jogo League Of Legends - Projeto atualmente incompleto, feito com a finalidade de testar minhas habilidades.",
      site: "https://site-elorise.vercel.app/",
      bgColor: "#732d51",
    },
    {
      img: "/inefavel.png",
      title: "Coach Inefavel",
      description: isEnglish
        ? "Online coaching sales platform, where you can schedule sessions and make payments through PIX/Card."
        : "Plataforma online de venda de coach, onde você pode agendar sessões e realizar pagamentos via PIX/Cartão.",
      site: "https://www.coachinefavel.com/",
      bgColor: "#14100b",
    },
    {
      img: "/git.png",
      title: "Portfolio",
      description: isEnglish
        ? "This Portfolio, highlighted here for the purpose of having the source open for viewing."
        : "Este Portfolio, destacado aqui com a finalidade de ter o código aberto para visualização.",
      site: "https://www.github.com/",
      repo: "https://www.github.com/",
      bgColor: "var(--tints_primary)",
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
            ></ProjectsCard>
          ))}
        </ProjectsCardsWrap>
      </ProjectsContainer>
    </Container>
  );
});

export default Projects;
