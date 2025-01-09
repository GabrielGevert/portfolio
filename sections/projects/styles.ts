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
  color: var(--tints_primary);

  @media ${device.mobileL} {
    text-align: center;
  }
`;

export const ProjectsText = styled.p`
  font-size: 1.2rem;
  color: var(--neutrals_light);
  width: 90%;
  margin-top: 0;

  @media ${device.mobileL} {
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

  @media ${device.mobileL} {
    grid-template-columns: repeat(1, 1fr);
    gap: 2rem;
  }
`;

