"use client";

import React, { useEffect, useState } from "react";
import type { DocumentProps } from "@react-pdf/renderer";
import { useLanguage } from "@/utils/LanguageContext";
import { useTheme } from "@/utils/ThemeContext";
import { getLinkedinUrl } from "@/utils/links";
import {
  Download,
  Github,
  Globe,
  Home,
  Languages,
  Linkedin,
  Mail,
  MapPin,
  Moon,
  Phone,
  Sun,
} from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbCurrent,
  BreadcrumbLink,
  BreadcrumbSep,
  CvContact,
  CvContacts,
  CvHead,
  CvLocation,
  CvName,
  CvRole,
  CvScreen,
  ExpBullet,
  ExpBullets,
  ExpCompany,
  ExpCompanyLink,
  ExpHead,
  ExpItem,
  ExpPeriod,
  ExpRole,
  ExpRoleLink,
  Paper,
  Section,
  SectionTitle,
  SkillItems,
  SkillLabel,
  SkillRow,
  Summary,
  Toolbar,
  ToolbarButton,
  ToolbarGroup,
} from "./styles";

const content = {
  pt: {
    role: "Desenvolvedor Full Stack",
    location: "Curitiba, PR, Brasil",
    print: "Baixar Currículo",
    downloading: "Gerando...",
    homeLabel: "Início",
    pageLabel: "Currículo",
    summaryTitle: "Resumo",
    summary:
      "Desenvolvedor Full Stack atuando com desenvolvimento de software desde 2020, construindo aplicações de ponta a ponta, do front-end ao back-end. Mantenho produtos próprios em produção, como o Inefavel Academy (1.000+ vendas), e já contribuí em projetos para marcas globais como Coca-Cola. Experiência sólida com React, Next.js, Node.js, TypeScript e todo o ecossistema AWS, além de IA, mobile (Flutter) e games (Unity). Foco em qualidade, boas práticas e colaboração próxima com o time.",
    experienceTitle: "Experiência profissional",
    projectsTitle: "Projetos",
    achievementsTitle: "Conquistas",
    educationTitle: "Formação",
    skillsTitle: "Habilidades",
    languagesTitle: "Idiomas",
    present: "Atual",
    experience: [
      {
        role: "Desenvolvedor Full Stack",
        company: "SAMPI",
        period: "Fev 2026 - Atual",
        bullets: [
          "Plataforma de IA para marketing: orquestração de agentes de IA e base de conhecimento com RAG e busca semântica (Neo4j).",
          "Processamento de vídeos e criação de artes e templates com IMG.LY.",
          "Integrações com diversas APIs de redes sociais e com modelos de IA (Claude e Gemini).",
          "Backend Node.js no Google Cloud Run, com Redis e camadas de segurança (rate limiting, CAPTCHA, JWT).",
        ],
      },
      {
        role: "Desenvolvedor Full-Stack & Game Developer",
        company: "Form&Fun Studio",
        period: "Fev 2025 - Atual",
        bullets: [
          "Estúdio de tecnologia criativa que combina design, tecnologia e narrativa para experiências imersivas em web, AR/VR, games e web3.",
          "Desenvolvimento e manutenção de aplicações full stack com React, Node.js, Python, TypeScript e AWS Amplify.",
          "Atuação em todo o fluxo AWS (EC2, S3, RDS, Lambda, ECS, CloudFront, CodePipeline) para integração e entrega contínua.",
          "Concepção e implementação de jogos e experiências interativas (WebGL, engines de games, real-time).",
          "Projetos entregues para clientes globais como Coca-Cola e McKinsey, entre outras marcas de relevância mundial.",
        ],
      },
      {
        role: "Desenvolvedor Full Stack",
        company: "L8 Group",
        period: "Set 2024 - Atual",
        bullets: [
          "Desenvolvimento de soluções tecnológicas avançadas em projetos de alta relevância.",
          "Suporte e manutenção de aplicações full stack com React, Node.js, Docker, TypeScript, PostgreSQL, TypeORM e Laravel.",
          "Criação e evolução de aplicações web sob medida, com foco em performance e escalabilidade.",
        ],
      },
      {
        role: "Desenvolvedor Full Stack",
        company: "Signotech",
        period: "Jun 2024 - Ago 2024",
        bullets: [
          "Desenvolvimento de aplicações de e-commerce com React.js e Node.js.",
          "Manutenção e criação de soluções full stack com JavaScript, PHP, Next.js e Laravel.",
        ],
      },
      {
        role: "Desenvolvedor Front-end",
        company: "ISOCRM",
        period: "Dez 2021 - Jun 2023",
        bullets: [
          "Correção de bugs e implementação de novas funcionalidades em sistemas CRM vendidos em módulos.",
          "Trabalho com ExtJS, Python e SQL.",
        ],
      },
    ],
    projects: [
      {
        role: "Inefavel Academy",
        company: "Produto próprio · inefavelacademy.com",
        link: "https://www.inefavelacademy.com",
        period: "Produção",
        bullets: [
          "Plataforma de cursos e coaching com mais de 1.000 vendas, construída de ponta a ponta em arquitetura serverless na AWS (Amplify Gen 2, 70+ funções Lambda, AppSync, DynamoDB, Cognito).",
          "Dois gateways de pagamento (Stripe e Asaas) com PIX, cartão e parcelamento, idempotência completa e webhooks com assinatura verificada.",
          "Segurança aprovada em pentest profissional: JWT RS256, rate limiting, preço calculado no servidor e autorização em nível de campo. SEO dinâmico e dashboards de analytics.",
        ],
      },
      {
        role: "Coach Guaxi",
        company: "Produto próprio · guaxilolcoach.com",
        link: "https://www.guaxilolcoach.com",
        period: "Produção",
        bullets: [
          "Plataforma de coaching de League of Legends com agendamento de aulas e pagamentos via Asaas (PIX e parcelamento com idempotência).",
          "Roleta de Campeões em canvas com mais de 170 campeões carregados da API da Riot, com mecânicas de win streak e revive.",
        ],
      },
    ],
    achievements: [
      {
        role: "Ouro no Cannes Lions (Social & Creator Lions)",
        company: "Chicken Screams for Coke (Coca-Cola), com contribuição ativa no desenvolvimento",
        period: "2026",
        bullets: [],
      },
    ],
    education: [
      {
        role: "Sistemas de Informação",
        company: "PUCPR",
        period: "2020 - 2025",
        bullets: ["Bacharelado concluído."],
      },
      {
        role: "Inglês",
        company: "Talken English School",
        period: "B2+",
        bullets: [],
      },
    ],
    skills: [
      {
        label: "Front-end",
        items: "React, Next.js, TypeScript, JavaScript, Vue.js, HTML, CSS",
      },
      {
        label: "Back-end",
        items: "Node.js, NestJS, Laravel, Python, PHP, SQL",
      },
      {
        label: "Banco de dados",
        items: "DynamoDB, PostgreSQL, Redis, Neo4j",
      },
      {
        label: "Cloud & DevOps",
        items: "AWS (Amplify, EC2, S3, RDS, Lambda, ECS, CloudFront, CodePipeline), Google Cloud, Docker",
      },
      { label: "Mobile & Games", items: "Flutter, Unity" },
      { label: "Outros", items: "Git, TypeORM, ExtJS, IA (RAG, agentes)" },
    ],
    languages: [
      { name: "Português", level: "Nativo" },
      { name: "Inglês", level: "B2+" },
    ],
  },
  en: {
    role: "Full Stack Developer",
    location: "Curitiba, PR, Brazil",
    print: "Download CV",
    downloading: "Generating...",
    homeLabel: "Home",
    pageLabel: "CV",
    summaryTitle: "Summary",
    summary:
      "Full Stack Developer working with software development since 2020, building applications end to end, from front-end to back-end. I run my own products in production, like Inefavel Academy (1,000+ sales), and I've contributed to projects for global brands like Coca-Cola. Solid experience with React, Next.js, Node.js, TypeScript and the full AWS ecosystem, plus AI, mobile (Flutter) and games (Unity). Focused on quality, best practices and close collaboration with the team.",
    experienceTitle: "Professional experience",
    projectsTitle: "Projects",
    achievementsTitle: "Achievements",
    educationTitle: "Education",
    skillsTitle: "Skills",
    languagesTitle: "Languages",
    present: "Present",
    experience: [
      {
        role: "Full Stack Developer",
        company: "SAMPI",
        period: "Feb 2026 - Present",
        bullets: [
          "AI marketing platform: AI agent orchestration and a knowledge base with RAG and semantic search (Neo4j).",
          "Video processing, and image and template creation with IMG.LY.",
          "Integrations with multiple social media APIs and with AI models (Claude and Gemini).",
          "Node.js backend on Google Cloud Run, with Redis and security layers (rate limiting, CAPTCHA, JWT).",
        ],
      },
      {
        role: "Full-Stack & Game Developer",
        company: "Form&Fun Studio",
        period: "Feb 2025 - Present",
        bullets: [
          "Creative tech studio combining design, technology and storytelling for immersive web, AR/VR, games and web3 experiences.",
          "Development and maintenance of full stack applications with React, Node.js, Python, TypeScript and AWS Amplify.",
          "Working across the full AWS stack (EC2, S3, RDS, Lambda, ECS, CloudFront, CodePipeline) for integration and continuous delivery.",
          "Conception and implementation of games and interactive experiences (WebGL, game engines, real-time).",
          "Projects delivered for global clients such as Coca-Cola and McKinsey, among other world-renowned brands.",
        ],
      },
      {
        role: "Full Stack Developer",
        company: "L8 Group",
        period: "Sep 2024 - Present",
        bullets: [
          "Building advanced technological solutions for high-relevance projects.",
          "Support and maintenance of full stack applications with React, Node.js, Docker, TypeScript, PostgreSQL, TypeORM and Laravel.",
          "Creating and evolving tailored web applications focused on performance and scalability.",
        ],
      },
      {
        role: "Full Stack Developer",
        company: "Signotech",
        period: "Jun 2024 - Aug 2024",
        bullets: [
          "Development of e-commerce applications with React.js and Node.js.",
          "Maintenance and creation of full stack solutions with JavaScript, PHP, Next.js and Laravel.",
        ],
      },
      {
        role: "Front-end Developer",
        company: "ISOCRM",
        period: "Dec 2021 - Jun 2023",
        bullets: [
          "Bug fixing and implementation of new features in modular CRM systems.",
          "Worked with ExtJS, Python and SQL.",
        ],
      },
    ],
    projects: [
      {
        role: "Inefavel Academy",
        company: "Own product · inefavelacademy.com",
        link: "https://www.inefavelacademy.com",
        period: "Production",
        bullets: [
          "Courses and coaching platform with 1,000+ sales, built end to end on a serverless AWS architecture (Amplify Gen 2, 70+ Lambda functions, AppSync, DynamoDB, Cognito).",
          "Two payment gateways (Stripe and Asaas) with PIX, card and installments, full idempotency and signature-verified webhooks.",
          "Security approved in a professional pentest: RS256 JWT, rate limiting, server-side pricing and field-level authorization. Dynamic SEO and analytics dashboards.",
        ],
      },
      {
        role: "Coach Guaxi",
        company: "Own product · guaxilolcoach.com",
        link: "https://www.guaxilolcoach.com",
        period: "Production",
        bullets: [
          "League of Legends coaching platform with class scheduling and Asaas payments (PIX and installments with idempotency).",
          "Champions Roulette built on canvas, loading 170+ champions from Riot's API, with win streak and revive mechanics.",
        ],
      },
    ],
    achievements: [
      {
        role: "Gold at Cannes Lions (Social & Creator Lions)",
        company: "Chicken Screams for Coke (Coca-Cola), with active contribution to development",
        period: "2026",
        bullets: [],
      },
    ],
    education: [
      {
        role: "Information Systems",
        company: "PUCPR",
        period: "2020 - 2025",
        bullets: ["Bachelor's degree completed."],
      },
      {
        role: "English",
        company: "Talken English School",
        period: "B2+",
        bullets: [],
      },
    ],
    skills: [
      {
        label: "Front-end",
        items: "React, Next.js, TypeScript, JavaScript, Vue.js, HTML, CSS",
      },
      {
        label: "Back-end",
        items: "Node.js, NestJS, Laravel, Python, PHP, SQL",
      },
      {
        label: "Databases",
        items: "DynamoDB, PostgreSQL, Redis, Neo4j",
      },
      {
        label: "Cloud & DevOps",
        items: "AWS (Amplify, EC2, S3, RDS, Lambda, ECS, CloudFront, CodePipeline), Google Cloud, Docker",
      },
      { label: "Mobile & Games", items: "Flutter, Unity" },
      { label: "Others", items: "Git, TypeORM, ExtJS, AI (RAG, agents)" },
    ],
    languages: [
      { name: "Portuguese", level: "Native" },
      { name: "English", level: "B2+" },
    ],
  },
};

export default function CvPage() {
  const { isEnglish, toggleLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const data = isEnglish ? content.en : content.pt;
  const [generating, setGenerating] = useState(false);

  useEffect(() => {
    document.title = "Gabriel Gevert - CV";
  }, []);

  const handleDownload = async () => {
    setGenerating(true);
    try {
      const [{ pdf }, { CvDocument }] = await Promise.all([
        import("@react-pdf/renderer"),
        import("./CvPdf"),
      ]);
      const blob = await pdf(
        React.createElement(CvDocument, {
          data: { ...data, linkedinUrl: getLinkedinUrl(isEnglish) },
          theme,
        }) as React.ReactElement<DocumentProps>
      ).toBlob();
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "Gabriel-Gevert-CV.pdf";
      link.click();
      URL.revokeObjectURL(url);
    } finally {
      setGenerating(false);
    }
  };

  return (
    <CvScreen>
      <Toolbar>
        <Breadcrumb aria-label="breadcrumb">
          <BreadcrumbLink href="/portfolio/">
            <Home />
            {data.homeLabel}
          </BreadcrumbLink>
          <BreadcrumbSep>/</BreadcrumbSep>
          <BreadcrumbCurrent>{data.pageLabel}</BreadcrumbCurrent>
        </Breadcrumb>
        <ToolbarGroup>
          <ToolbarButton
            onClick={toggleTheme}
            aria-label={
              isEnglish
                ? theme === "dark"
                  ? "Switch to light theme"
                  : "Switch to dark theme"
                : theme === "dark"
                ? "Mudar para tema claro"
                : "Mudar para tema escuro"
            }
          >
            {theme === "dark" ? <Sun /> : <Moon />}
          </ToolbarButton>
          <ToolbarButton
            onClick={toggleLanguage}
            aria-label="Trocar idioma / Switch language"
          >
            <Languages />
            {isEnglish ? "PT" : "EN"}
          </ToolbarButton>
          <ToolbarButton onClick={handleDownload} disabled={generating}>
            <Download />
            {generating ? data.downloading : data.print}
          </ToolbarButton>
        </ToolbarGroup>
      </Toolbar>

      <Paper>
        <CvHead>
          <CvName>Gabriel Gevert</CvName>
          <CvRole>{data.role}</CvRole>
          <CvLocation>
            <MapPin />
            {data.location}
          </CvLocation>
          <CvContacts>
            <CvContact href="mailto:gevertlolz@gmail.com">
              <Mail />
              gevertlolz@gmail.com
            </CvContact>
            <CvContact href="tel:+5541996790036">
              <Phone />
              +55 (41) 99679-0036
            </CvContact>
            <CvContact
              href={getLinkedinUrl(isEnglish)}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin />
              in/gabrielgevert
            </CvContact>
            <CvContact
              href="https://github.com/GabrielGevert"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github />
              GabrielGevert
            </CvContact>
            <CvContact
              href="https://gabrielgevert.github.io/portfolio/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Globe />
              Portfolio
            </CvContact>
          </CvContacts>
        </CvHead>

        <Section>
          <SectionTitle>{data.summaryTitle}</SectionTitle>
          <Summary>{data.summary}</Summary>
        </Section>

        <Section>
          <SectionTitle>{data.experienceTitle}</SectionTitle>
          {data.experience.map((item) => (
            <ExpItem key={`${item.company}-${item.period}`}>
              <ExpHead>
                <ExpRole>{item.role}</ExpRole>
                <ExpPeriod>{item.period}</ExpPeriod>
              </ExpHead>
              <ExpCompany>{item.company}</ExpCompany>
              <ExpBullets>
                {item.bullets.map((bullet, index) => (
                  <ExpBullet key={index}>{bullet}</ExpBullet>
                ))}
              </ExpBullets>
            </ExpItem>
          ))}
        </Section>

        <Section>
          <SectionTitle>{data.projectsTitle}</SectionTitle>
          {data.projects.map((item) => (
            <ExpItem key={`${item.company}-${item.role}`}>
              <ExpHead>
                <ExpRoleLink
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.role}
                </ExpRoleLink>
                {item.period && <ExpPeriod>{item.period}</ExpPeriod>}
              </ExpHead>
              <ExpCompanyLink
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.company}
              </ExpCompanyLink>
              <ExpBullets>
                {item.bullets.map((bullet, index) => (
                  <ExpBullet key={index}>{bullet}</ExpBullet>
                ))}
              </ExpBullets>
            </ExpItem>
          ))}
        </Section>

        <Section>
          <SectionTitle>{data.achievementsTitle}</SectionTitle>
          {data.achievements.map((item) => (
            <ExpItem key={`${item.role}`}>
              <ExpHead>
                <ExpRole>{item.role}</ExpRole>
                {item.period && <ExpPeriod>{item.period}</ExpPeriod>}
              </ExpHead>
              <ExpCompany>{item.company}</ExpCompany>
              {item.bullets.length > 0 && (
                <ExpBullets>
                  {item.bullets.map((bullet, index) => (
                    <ExpBullet key={index}>{bullet}</ExpBullet>
                  ))}
                </ExpBullets>
              )}
            </ExpItem>
          ))}
        </Section>

        <Section>
          <SectionTitle>{data.educationTitle}</SectionTitle>
          {data.education.map((item) => (
            <ExpItem key={`${item.company}-${item.period}`}>
              <ExpHead>
                <ExpRole>{item.role}</ExpRole>
                <ExpPeriod>{item.period}</ExpPeriod>
              </ExpHead>
              <ExpCompany>{item.company}</ExpCompany>
              {item.bullets.length > 0 && (
                <ExpBullets>
                  {item.bullets.map((bullet, index) => (
                    <ExpBullet key={index}>{bullet}</ExpBullet>
                  ))}
                </ExpBullets>
              )}
            </ExpItem>
          ))}
        </Section>

        <Section>
          <SectionTitle>{data.skillsTitle}</SectionTitle>
          {data.skills.map((group) => (
            <SkillRow key={group.label}>
              <SkillLabel>{group.label}</SkillLabel>
              <SkillItems>{group.items}</SkillItems>
            </SkillRow>
          ))}
        </Section>

        <Section>
          <SectionTitle>{data.languagesTitle}</SectionTitle>
          {data.languages.map((lang) => (
            <SkillRow key={lang.name}>
              <SkillLabel>{lang.name}</SkillLabel>
              <SkillItems>{lang.level}</SkillItems>
            </SkillRow>
          ))}
        </Section>
      </Paper>
    </CvScreen>
  );
}
