import { device } from "@/utils/media-query";
import styled from "styled-components";

export const StacksContainer = styled.div`
  width: 100%;
  padding: 2rem 0 3rem 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media ${device.tablet} {
    text-align: center;
    justify-content: center;
    align-items: center;
  }
`;

export const StacksTitle = styled.span`
  font-size: 2rem;
  font-family: var(--fonts_primary_bold);
  color: var(--tints_primary_light);
  width: fit-content;
`;

export const StacksText = styled.p`
  font-size: 1.1rem;
  color: var(--neutrals_gray);
  margin: 0 0 1rem 0;
  width: 90%;

  @media ${device.mobileL} {
    width: 95%;
    font-size: 1rem;
  }
`;

export const StacksCardsWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  width: 90%;

  @media ${device.tablet} {
    grid-template-columns: repeat(2, 1fr);
    width: 100%;
  }

  @media ${device.mobileL} {
    gap: 14px;
    width: 100%;
  }
`;
