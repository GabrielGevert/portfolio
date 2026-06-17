import { device } from "@/utils/media-query";
import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(8, 8, 14, 0.7);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-top: 10%;
  z-index: 10000;

  @media ${device.mobileL} {
    padding-top: 30%;
  }

  &.open {
    animation: ${fadeIn} 0.5s forwards;
  }

  &.close {
    animation: ${fadeOut} 0.5s forwards;
  }
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background: var(--tints_background_2);
  border: 1px solid var(--tints_border_strong);
  border-top: 4px solid var(--tints_primary);
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 8px 40px var(--tints_glow_soft);
  max-width: 400px;
  width: 100%;
  text-align: center;

  @media ${device.mobileL} {
    width: 70%;
  }
`;

export const ModalText = styled.p`
  color: var(--neutrals_light_100);
  line-height: 1.6;
  margin: 0;
`;

export const CloseButton = styled.p`
  padding: 0.6rem;
  width: 60%;
  align-self: center;
  background: var(--gradient_primary);
  color: var(--on_accent);
  font-family: var(--fonts_primary_bold);
  border-radius: 8px;
  transition: all 0.2s ease-in-out;
  height: fit-content;
  margin: 0;

  &:hover {
    cursor: pointer;
    filter: brightness(1.15);
    box-shadow: 0 0 20px var(--tints_glow);
  }
`;
