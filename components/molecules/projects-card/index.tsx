"use client";

import React from "react";
import {
  ProjectsCardButtonRepo,
  ProjectsCardButtonSite,
  ProjectsCardContainer,
  ProjectsCardDescription,
  ProjectsCardTitle,
  ProjectsCardWrapButtons,
} from "./styles";
import Image from "next/image";
import { useLanguage } from "@/utils/LanguageContext";

interface ProjectsCardProps {
  img: string; // Caminho da imagem ou URL
  title: string; // Título do projeto
  description: string; // Descrição do projeto
  site: string; // URL do site
  repo?: string; // URL do repositório (opcional)
  bgColor?: string; // Cor de fundo opcional
}

const translations = {
  en: {
    site: "View Site",
    repo: "View Repo",
  },
  pt: {
    site: "Ver Site",
    repo: "Ver Código",
  },
};
const ProjectsCard: React.FC<ProjectsCardProps> = ({
  img,
  title,
  description,
  site,
  repo,
  bgColor,
}) => {

  const { isEnglish, toggleLanguage } = useLanguage();
  const currentLanguage = isEnglish ? "en" : "pt";
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

  return (
    <ProjectsCardContainer $bgColor={bgColor}>
      <Image alt={`${title} image`} src={`${basePath}${img}`} width={320} height={175} />
      <ProjectsCardTitle>{title}</ProjectsCardTitle>
      <ProjectsCardDescription>{description}</ProjectsCardDescription>
      <ProjectsCardWrapButtons className={repo ? "" : "noRepo"}>
        <ProjectsCardButtonSite
          target="_blank"
          href={site}
          className={repo ? "" : "noRepo"}
        >
          {translations[currentLanguage].site}
        </ProjectsCardButtonSite>
        {repo && (
          <ProjectsCardButtonRepo href={repo} target="_blank">
            {translations[currentLanguage].repo}
          </ProjectsCardButtonRepo>
        )}
      </ProjectsCardWrapButtons>
    </ProjectsCardContainer>
  );
};

export default ProjectsCard;
