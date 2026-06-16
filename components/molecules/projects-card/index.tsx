"use client";

import React from "react";
import {
  ProjectsCardBadge,
  ProjectsCardButtonRepo,
  ProjectsCardButtonSite,
  ProjectsCardContainer,
  ProjectsCardDescription,
  ProjectsCardTag,
  ProjectsCardTagsWrap,
  ProjectsCardTitle,
  ProjectsCardWrapButtons,
  ProjectsHref,
} from "./styles";
import Image from "next/image";
import { useLanguage } from "@/utils/LanguageContext";

interface ProjectsCardProps {
  img: string;
  title: string;
  description: string;
  site: string;
  repo?: string;
  bgColor?: string;
  tags?: string[];
  featured?: boolean;
  badge?: string;
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
  tags,
  featured,
  badge,
}) => {
  const { isEnglish } = useLanguage();
  const currentLanguage = isEnglish ? "en" : "pt";
  const basePath = "/portfolio";

  return (
    <ProjectsCardContainer className={featured ? "featured" : ""}>
      {badge && <ProjectsCardBadge>{badge}</ProjectsCardBadge>}
      <ProjectsHref
        $bgColor={bgColor}
        $featured={featured}
        href={site}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          alt={`${title} image`}
          src={`${basePath}${img}`}
          width={320}
          height={175}
        />
      </ProjectsHref>
      <ProjectsCardTitle>{title}</ProjectsCardTitle>
      {tags && tags.length > 0 && (
        <ProjectsCardTagsWrap>
          {tags.map((tag, index) => (
            <ProjectsCardTag key={index}>{tag}</ProjectsCardTag>
          ))}
        </ProjectsCardTagsWrap>
      )}
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
