import { device } from "@/utils/media-query";
import styled from "styled-components";

export const OpeningContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 2rem 0;

  @media ${device.mobileL} {
    flex-direction: column;
    text-align: center;
    justify-content: center;
    align-items: center;
  }
`;

export const OpeningFirstContent = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;

  @media ${device.mobileL} {
    width: 95%;
    margin-bottom: 0.2rem;
    align-items: center;
  }
`;

export const OpeningFirstContentPresentation = styled.span`
  font-size: 2rem;
  color: var(--neutrals_light);
  justify-self: center;
`;

export const OpeningFirstContentTitle = styled.h2`
  font-size: 4rem;
  color: var(--neutrals_light_100);
  height: 40px;
  margin-top: 0;

  @media ${device.mobileL} {
    font-size: 3rem;
  }
`;

export const OpeningFirstContentText = styled.p`
  font-size: 1.2rem;
  color: var(--neutrals_light);
  width: 82%;
  margin-top: 0;

  @media ${device.mobileL} {
    width: 100%;
    font-size: 1rem;
  }
`;

export const OpeningFirstContentItems = styled.div`
  margin-top: 1.5rem;
  display: flex;
  width: 80%;
  justify-content: space-between;

  @media ${device.mobileL} {
    width: 100%;
  }
`;

export const OpeningFirstContentItemsWrap = styled.div`
  display: flex;
  gap: 0.5rem;

  @media ${device.mobileL} {
    gap: 0.3rem;
  }
`;

export const OpeningFirstContentItem = styled.a`
  color: var(--tints_primary);
  border: 2px solid var(--tints_primary);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 68px;
  height: 68px;
  transition: ease-in-out 0.3s;

  &:hover {
    background-color: var(--tints_primary);
    color: var(--neutrals_light_100);
    border: 2px solid var(--neutrals_light_100);
    cursor: pointer;
    transition: ease-in-out 0.3s;
  }
`;

export const OpeningFirstContentButtonWrap = styled.div`
  padding: 1.5rem;
  background-color: var(--tints_background_2);
  border: 1px solid var(--tints_primary);
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  gap: 1rem;
  border-radius: 2rem;
  transition: ease-in-out 0.3s;

  > svg {
    color: var(--tints_primary);
  }

  &:hover {
    background-color: var(--tints_primary);
    color: var(--neutrals_light_100);
    border: 1px solid var(--neutrals_light_100);
    cursor: pointer;
    transition: ease-in-out 0.3s;

    > a,
    svg {
      color: var(--neutrals_light_100);
    }
  }
`;

export const OpeningFirstContentButton = styled.a`
  color: var(--tints_primary);
  font-size: 1.2rem;
`;

export const OpeningSecondContent = styled.div`
  display: flex;
  width: 60%;
  justify-content: center;
  position: relative;

  @media ${device.mobileL} {
    display: none;
  }

  &::before {
    content: "";
    position: absolute;
    width: 370px;
    height: 370px;
    background: linear-gradient(
      to bottom,
      var(--tints_primary) 86.7%,
      /* Parte visível da elipse */ var(--tints_background_2) 86.7%
        /* Parte cortada */
    );
    border-radius: 50%;
    z-index: 0;
    top: 33%;
    left: 50.8%;
    transform: translate(-50%, -30%);
  }

  background: var(--tints_background_2);

  img {
    position: relative;
    z-index: 1;
    bottom: 1.06rem;
    border-bottom-right-radius: 0.5rem;
    border-bottom-left-radius: 1.5rem;
  }
`;
