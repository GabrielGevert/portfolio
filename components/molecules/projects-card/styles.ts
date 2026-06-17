import { device } from "@/utils/media-query";
import styled from "styled-components";

interface ProjectsCardContainerProps {
  $bgColor?: string;
  $featured?: boolean;
}

export const ProjectsCardContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  border: 1px solid var(--tints_border);
  border-radius: 12px;
  padding: 1rem;
  box-sizing: border-box;
  width: 100%;
  max-width: 26rem;
  min-height: 27rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
  transition: all 0.3s ease-in-out;
  background-color: var(--tints_background_3);

  &:hover {
    transform: translateY(-6px);
    border-color: var(--tints_border_strong);
    box-shadow: 0 8px 32px var(--tints_glow_soft);
  }

  &.featured {
    border: 1px solid var(--tints_border_strong);
    background:
      linear-gradient(var(--tints_background_3), var(--tints_background_3))
        padding-box,
      var(--gradient_primary) border-box;
    box-shadow: 0 0 32px var(--tints_glow_soft);
    transform: translateY(-12px) scale(1.02);

    &:hover {
      transform: translateY(-18px) scale(1.02);
      box-shadow: 0 8px 48px var(--tints_glow);
    }

    @media ${device.tablet} {
      transform: none;

      &:hover {
        transform: translateY(-6px);
      }
    }
  }
`;

export const ProjectsCardBadge = styled.span`
  position: absolute;
  top: -0.8rem;
  left: 50%;
  transform: translateX(-50%);
  padding: 0.25rem 1rem;
  font-size: 0.8rem;
  font-family: var(--fonts_primary_bold);
  color: var(--on_accent);
  background: var(--gradient_primary);
  border-radius: 1rem;
  white-space: nowrap;
  z-index: 1;
`;

export const ProjectsCardTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--tints_primary_light);
  text-align: start;
  margin-bottom: 0.5rem;
`;

export const ProjectsCardTagsWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin-bottom: 0.8rem;
`;

export const ProjectsCardTag = styled.span`
  font-size: 0.75rem;
  color: var(--tints_primary_light);
  background-color: var(--tints_glow_soft);
  border: 1px solid var(--tints_border);
  border-radius: 1rem;
  padding: 0.2rem 0.7rem;
  white-space: nowrap;
`;

export const ProjectsCardDescription = styled.p`
  font-size: 1rem;
  color: var(--neutrals_gray);
  text-align: start;
  line-height: 1.5;
  flex: 1;
  margin-top: 0;
`;

export const ProjectsCardWrapButtons = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;

  &.noRepo {
    justify-content: center;
  }
`;

export const ProjectsCardButtonSite = styled.a`
  width: 37%;
  padding: 1rem;
  background: var(--gradient_primary);
  color: var(--on_accent);
  border-radius: 8px;
  text-align: center;
  text-decoration: none;
  transition: all 0.2s ease-in-out;

  &.noRepo {
    width: 70%;
  }

  &:hover {
    filter: brightness(1.15);
    box-shadow: 0 0 20px var(--tints_glow);
  }
`;

export const ProjectsCardButtonRepo = styled.a`
  width: 37%;
  padding: 1rem;
  background-color: transparent;
  color: var(--neutrals_light);
  border: 1px solid var(--tints_border_strong);
  border-radius: 8px;
  text-align: center;
  text-decoration: none;
  transition: all 0.2s ease-in-out;

  &:hover {
    border-color: var(--tints_primary_light);
    background-color: var(--tints_glow_soft);
  }
`;

export const ProjectsHref = styled.a<ProjectsCardContainerProps>`
  margin: 0 auto;

  > img {
    object-fit: contain;
    max-width: ${(props) => (props.$featured ? "100%" : "calc(100% - 1rem)")};
    max-height: 100%;
    background-color: ${(props) => props.$bgColor || "transparent"};
    border: 1px solid var(--tints_border);
    border-radius: 8px;
    align-self: center;
    padding: ${(props) => (props.$featured ? "0" : "0 0.5rem")};
    filter: brightness(1.1);
    transition: filter 0.3s ease-in-out;
  }

  &:hover > img {
    filter: brightness(1.25);
  }
`;
