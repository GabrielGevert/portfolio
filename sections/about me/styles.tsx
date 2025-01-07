import styled from "styled-components";

export const AboutMeContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 2rem 0;
  flex-direction: column;
`;

export const AboutMeTitle = styled.span`
  font-size: 2rem;
  color: var(--tints_primary);
`;

export const AboutMeText = styled.p`
  font-size: 1rem;
  color: var(--neutrals_light);
  width: 90%;
`;

export const AboutMeWrapTexts = styled.div`
  width: 90%;
  display: flex;
  gap: 1rem;
  align-items: center;
`;

export const AboutMeYears = styled.span`
  font-size: 4rem;
  color: var(--tints_primary);
`;

export const AboutMeYearsExplanation = styled.p`
  font-size: 1.5rem;
  color: var(--neutrals_light);
`;

export const AboutMeCardsWrap = styled.div`
  display: flex;
  gap: 20px;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 90%;
  padding-bottom: 2rem;
`;
