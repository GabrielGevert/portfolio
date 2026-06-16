import { device } from "@/utils/media-query";
import styled, { keyframes } from "styled-components";

const fadeUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(24px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const OpeningContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 2rem 0;
  align-items: center;
  gap: 2rem;

  @media ${device.tablet} {
    flex-direction: column;
    text-align: center;
    justify-content: center;
    align-items: center;
    gap: 1rem;
  }
`;

export const OpeningFirstContent = styled.div`
  width: 45%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  animation: ${fadeUp} 0.7s ease-out both;

  @media ${device.tablet} {
    width: 95%;
    margin-bottom: 0.2rem;
    align-items: center;
  }
`;

export const OpeningFirstContentBadge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.4rem 1rem;
  margin-bottom: 1.2rem;
  font-size: 0.9rem;
  color: var(--tints_primary_light);
  background-color: var(--tints_glow_soft);
  border: 1px solid var(--tints_border_strong);
  border-radius: 2rem;

  > svg {
    color: var(--tints_primary_light);
  }
`;

export const OpeningFirstContentPresentation = styled.span`
  font-size: 2rem;
  color: var(--neutrals_light);

  @media ${device.tablet} {
    font-size: 1.6rem;
  }
`;

export const OpeningFirstContentTitle = styled.h2`
  font-size: clamp(2.6rem, 5vw, 4rem);
  font-family: var(--fonts_primary_bold);
  line-height: 1.1;
  margin: 0 0 1rem 0;
  color: var(--neutrals_light);
`;

export const OpeningFirstContentText = styled.p`
  font-size: 1.2rem;
  color: var(--neutrals_gray);
  width: 90%;
  margin-top: 0;
  line-height: 1.6;

  @media ${device.tablet} {
    width: 100%;
    font-size: 1rem;
  }
`;

export const OpeningFirstContentItems = styled.div`
  margin-top: 1.5rem;
  display: flex;
  width: 90%;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;

  @media ${device.tablet} {
    width: 100%;
    justify-content: center;
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
  border: 2px solid var(--tints_border_strong);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  transition: all 0.3s ease-in-out;

  > svg {
    width: 44px;
    height: 44px;
  }

  &:hover {
    background-color: var(--tints_primary);
    color: var(--neutrals_light_100);
    border: 2px solid var(--tints_primary_light);
    box-shadow: 0 0 24px var(--tints_glow);
    cursor: pointer;
    transform: translateY(-3px);
  }

  @media ${device.mobileL} {
    width: 52px;
    height: 52px;

    > svg {
      width: 36px;
      height: 36px;
    }
  }
`;

export const OpeningFirstContentButtonWrap = styled.div`
  padding: 1.1rem 1.6rem;
  background-color: var(--tints_background_2);
  border: 1px solid var(--tints_border_strong);
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  gap: 0.8rem;
  border-radius: 2rem;
  transition: all 0.3s ease-in-out;

  > svg {
    color: var(--tints_primary);
  }

  &:hover {
    background: var(--gradient_primary);
    color: var(--neutrals_light_100);
    border: 1px solid var(--tints_primary_light);
    box-shadow: 0 0 28px var(--tints_glow);
    cursor: pointer;
    transform: translateY(-3px);

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
  flex: 1;
  justify-content: center;
  align-items: center;
  animation: ${fadeUp} 0.7s ease-out 0.15s both;

  @media ${device.tablet} {
    display: none;
  }
`;

export const OpeningPhotoFrame = styled.div`
  position: relative;
  width: clamp(240px, 32vw, 380px);
  aspect-ratio: 1 / 1;
  border-radius: 50%;
  background: var(--gradient_primary);
  display: flex;
  align-items: flex-end;
  justify-content: center;
  overflow: hidden;
  box-shadow: 0 0 64px var(--tints_glow);

  img {
    display: block;
    width: 71%;
    height: auto;
    object-fit: cover;
  }
`;
