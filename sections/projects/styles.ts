import { device } from "@/utils/media-query";
import styled from "styled-components";

export const ProjectsContainer = styled.div`
  width: 100%;
  padding-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const ProjectsTitle = styled.span`
  font-size: 2rem;
  font-family: var(--fonts_primary_bold);
  color: var(--tints_primary_light);
  width: fit-content;

  @media ${device.tablet} {
    text-align: center;
    align-self: center;
  }
`;

export const ProjectsText = styled.p`
  font-size: 1.2rem;
  color: var(--neutrals_gray);
  width: 90%;
  margin-top: 0;

  @media ${device.tablet} {
    text-align: center;
    font-size: 1rem;
    width: 100%;
  }
`;

export const ProjectsCardsWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  width: 90%;
  padding-top: 1.5rem;
  align-items: stretch;
  justify-items: center;

  @media ${device.tablet} {
    grid-template-columns: 1fr;
    gap: 2rem;
    width: 100%;
    padding-top: 1rem;
  }
`;
