"use client";
import React, { forwardRef, useRef } from "react";
import { Container } from "@/components";
import { useLanguage } from "@/utils/LanguageContext";
import { useReveal } from "@/utils/use-reveal";
import {
  CurrentBadge,
  ExperienceCta,
  ExperienceContainer,
  ExperienceText,
  ExperienceTitle,
  Timeline,
  TimelineCard,
  TimelineCompany,
  TimelineDescription,
  TimelineDot,
  TimelineHead,
  TimelineItem,
  TimelinePeriod,
  TimelineRole,
  TimelineTag,
  TimelineTags,
} from "./styles";

const translation = {
  en: {
    title: "Professional experience:",
    text: "My most recent and main experiences. I have others in my CV, but these best represent my work as a full stack developer.",
    current: "Current",
    cv: "View full CV",
    items: [
      {
        role: "Full Stack Developer",
        company: "SAMPI",
        period: "Feb 2026 - Present",
        current: true,
        description:
          "AI marketing platform: AI agents, a knowledge base with RAG and semantic search (Neo4j), video processing, image and template creation with IMG.LY, and integrations with multiple social media APIs. Node.js backend on Google Cloud Run with Redis, security layers (rate limiting, CAPTCHA, JWT) and Claude/Gemini integrations.",
        tags: ["Node.js", "Google Cloud", "Neo4j", "RAG", "IMG.LY", "IA"],
      },
      {
        role: "Full-Stack & Game Developer",
        company: "Form&Fun Studio",
        period: "Feb 2025 - Present",
        current: true,
        description:
          "Creative tech studio that combines design, technology and storytelling to deliver immersive experiences across web, AR/VR, games and web3. I lead the development and maintenance of full stack applications (React, Node.js, Python, TypeScript, AWS Amplify) and build interactive games and experiences (WebGL, game engines, real-time), working across the full AWS stack (EC2, S3, RDS, Lambda, ECS, CloudFront, CodePipeline). I have delivered projects for global clients such as Coca-Cola and McKinsey, among other world-renowned brands.",
        tags: ["React", "Node.js", "AWS", "WebGL", "AR/VR", "Python"],
      },
      {
        role: "Full Stack Developer",
        company: "L8 Group",
        period: "Sep 2024 - Present",
        current: true,
        description:
          "I contribute to high-innovation, high-relevance projects, building advanced and impactful solutions. I provide continuous support and maintenance for full stack applications using React, Node.js, Docker, TypeScript, PostgreSQL, TypeORM and Laravel, creating and evolving tailored web applications focused on high performance and scalability.",
        tags: ["React", "Node.js", "TypeScript", "Docker", "PostgreSQL", "Laravel"],
      },
    ],
  },
  pt: {
    title: "Experiência profissional:",
    text: "Minhas experiências mais recentes e principais. Tenho outras no currículo, mas estas são as que melhor representam meu trabalho como dev full stack.",
    current: "Atual",
    cv: "Ver currículo completo",
    items: [
      {
        role: "Desenvolvedor Full Stack",
        company: "SAMPI",
        period: "Fev 2026 - Atual",
        current: true,
        description:
          "Plataforma de IA para marketing: agentes de IA, base de conhecimento com RAG e busca semântica (Neo4j), processamento de vídeos, criação de artes e templates com IMG.LY e integrações com diversas APIs de redes sociais. Backend Node.js no Google Cloud Run, com Redis, camadas de segurança (rate limiting, CAPTCHA, JWT) e integrações com Claude e Gemini.",
        tags: ["Node.js", "Google Cloud", "Neo4j", "RAG", "IMG.LY", "IA"],
      },
      {
        role: "Desenvolvedor Full-Stack & Game Developer",
        company: "Form&Fun Studio",
        period: "Fev 2025 - Atual",
        current: true,
        description:
          "Estúdio de tecnologia criativa que combina design, tecnologia e narrativa para entregar experiências imersivas em web, AR/VR, games e web3. À frente do desenvolvimento e manutenção de aplicações full stack (React, Node.js, Python, TypeScript, AWS Amplify) e da concepção de jogos e experiências interativas (WebGL, engines de games, real-time), atuando em todo o fluxo AWS (EC2, S3, RDS, Lambda, ECS, CloudFront, CodePipeline). Já entreguei projetos para clientes globais como Coca-Cola e McKinsey, entre outras marcas de relevância mundial.",
        tags: ["React", "Node.js", "AWS", "WebGL", "AR/VR", "Python"],
      },
      {
        role: "Desenvolvedor Full Stack",
        company: "L8 Group",
        period: "Set 2024 - Atual",
        current: true,
        description:
          "Contribuo em projetos de alta inovação e relevância, desenvolvendo soluções tecnológicas avançadas e impactantes. Dou suporte contínuo e manutenção a aplicações full stack com React, Node.js, Docker, TypeScript, PostgreSQL, TypeORM e Laravel, criando e evoluindo aplicações web sob medida para necessidades diversas, com foco em alta performance e escalabilidade.",
        tags: ["React", "Node.js", "TypeScript", "Docker", "PostgreSQL", "Laravel"],
      },
    ],
  },
};

const Experience = forwardRef<HTMLDivElement>((props, ref) => {
  const { isEnglish } = useLanguage();
  const currentLanguage = isEnglish ? "en" : "pt";
  const content = translation[currentLanguage];

  const timelineRef = useRef<HTMLDivElement>(null);
  useReveal(timelineRef, { y: 24 });

  return (
    <Container ref={ref}>
      <ExperienceContainer>
        <ExperienceTitle>{content.title}</ExperienceTitle>
        <ExperienceText>{content.text}</ExperienceText>
        <Timeline ref={timelineRef}>
          {content.items.map((item, index) => (
            <TimelineItem key={index}>
              <TimelineDot />
              <TimelineCard>
                <TimelineHead>
                  <TimelineRole>{item.role}</TimelineRole>
                  <TimelinePeriod>{item.period}</TimelinePeriod>
                </TimelineHead>
                <TimelineCompany>
                  {item.company}
                  {item.current && <CurrentBadge>{content.current}</CurrentBadge>}
                </TimelineCompany>
                <TimelineDescription>{item.description}</TimelineDescription>
                {item.tags.length > 0 && (
                  <TimelineTags>
                    {item.tags.map((tag) => (
                      <TimelineTag key={tag}>{tag}</TimelineTag>
                    ))}
                  </TimelineTags>
                )}
              </TimelineCard>
            </TimelineItem>
          ))}
        </Timeline>
        <ExperienceCta href="/portfolio/cv">{content.cv}</ExperienceCta>
      </ExperienceContainer>
    </Container>
  );
});

Experience.displayName = "Experience";

export default Experience;
