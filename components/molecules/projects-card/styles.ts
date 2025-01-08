import styled from "styled-components";

interface ProjectsCardContainerProps {
  $bgColor?: string;
}

export const ProjectsCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center;
  justify-content: center; */
  border: 1px solid var(--tints_primary);
  border-radius: 8px;
  padding: 1rem;
  width: 20.6rem;
  height: 26rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-in-out;
  background-color: var(--tints_background_3);
  opacity: 0.9;

  &:hover {
    transform: translateY(-5px);
    scale: 1.05;
    filter: brightness(1.2);
    transition: all 0.3s ease-in-out;
  }
`;

export const ProjectsCardTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--tints_primary);
  text-align: start;
  height: 1rem;
`;

export const ProjectsCardDescription = styled.p`
  font-size: 1rem;
  color: var(--neutrals_light_100);
  text-align: start;
  height: 5rem;
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
  background-color: var(--tints_primary);
  color: var(--neutrals_light);
  border-radius: 8px;
  text-align: center;
  text-decoration: none;
  transition: all 0.2s ease-in-out;

  &.noRepo {
    width: 70%;
  }

  &:hover {
    filter: brightness(1.2);
    transition: all 0.2s ease-in-out;
  }
`;

export const ProjectsCardButtonRepo = styled.a`
  width: 37%;
  padding: 1rem;
  background-color: var(--tints_background_3);
  color: var(--neutrals_light);
  border: 1px solid var(--tints_primary);
  border-radius: 2px;
  border-radius: 8px;
  text-align: center;
  text-decoration: none;
  transition: all 0.2s ease-in-out;

  &:hover {
    filter: brightness(1.2);
    transition: all 0.2s ease-in-out;
  }
`;

export const ProjectsHref = styled.a<ProjectsCardContainerProps>`
  margin: 0 auto;
  > img {
    object-fit: contain;
    max-width: calc(100% - 1rem);
    max-height: 100%;
    background-color: ${(props) => props.$bgColor || "transparent"};
    border: 1px solid var(--tints_primary);
    border-radius: 8px;
    align-self: center;
    padding: 0 0.5rem;
    filter: brightness(1.2);
  }
`;
