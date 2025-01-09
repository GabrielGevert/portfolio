import { device } from "@/utils/media-query";
import styled from "styled-components";

export const StacksContainer = styled.div`
  width: 100%;
  padding: 2rem 0;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media ${device.mobileL} {
    flex-direction: column;
    text-align: center;
    justify-content: center;
    align-items: center;
  }
`;

export const StacksTitle = styled.span`
  font-size: 2rem;
  color: var(--tints_primary);
`;

export const StacksCardsWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  width: 90%;

  @media ${device.mobileL} {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    width: 95%;
  }
`;
