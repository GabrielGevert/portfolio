import { device } from "@/utils/media-query";
import styled from "styled-components";

export const AboutMeContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 2rem 0;
  flex-direction: column;

  @media ${device.mobileL} {
    align-items: center;
  }
`;

export const AboutMeTitle = styled.span`
  font-size: 2rem;
  font-family: var(--fonts_primary_bold);
  color: var(--neutrals_light);
  width: fit-content;
`;

export const AboutMeText = styled.p`
  font-size: 1rem;
  color: var(--neutrals_gray);
  line-height: 1.7;
  width: 90%;

  @media ${device.mobileL} {
    width: 95%;
    margin-bottom: 0.2rem;
  }
`;

export const AboutMeWrapTexts = styled.div`
  width: 90%;
  display: flex;
  gap: 1.5rem;
  align-items: center;
  padding: 1.2rem 0;

  @media ${device.mobileL} {
    width: 95%;
  }
`;

export const AboutMeYears = styled.span`
  font-size: 4rem;
  font-family: var(--fonts_primary_bold);
  color: var(--tints_primary_light);

  @media ${device.mobileL} {
    font-size: 3.5rem;
  }
`;

export const AboutMeYearsExplanation = styled.p`
  font-size: 1.3rem;
  color: var(--neutrals_light);
  line-height: 1.5;
  border-left: 3px solid var(--tints_primary);
  padding-left: 1.2rem;

  @media ${device.mobileL} {
    font-size: 1.1rem;
  }
`;

export const AboutMeCardsWrap = styled.div`
  display: flex;
  gap: 20px;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 90%;
  padding-bottom: 2rem;

  @media ${device.mobileL} {
    width: 95%;
    justify-content: center;
  }
`;
