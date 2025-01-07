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

const shining = keyframes`
  0% {
    filter: brightness(1);
  }
  25% {
    filter: brightness(1.05);
  }
  50% {
    filter: brightness(1.15);
  }
  75% {
    filter: brightness(1.05);
  }
  100% {
    filter: brightness(1);
  }
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-top: 10%;
  z-index: 1000;

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
  background: #fff;
  padding: 0.5rem 2rem;
  border-radius: 0.5rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  width: 100%;
  text-align: center;
  border-top: 1.5rem solid var(--tints_secondary);
  border-bottom: 1.5rem solid var(--tints_secondary);

  @media ${device.mobileL} {
    width: 70%;
  }
`;

export const ModalText = styled.p`
`;

export const CloseButton = styled.p`
  padding: 0.5rem;
  width: 60%;
  align-self: center;
  background-color: var(--tints_primary);
  color: white;
  border-radius: 0.25rem;
  animation: ${shining} 1s ease infinite;
  transition: transform .3s ease-in-out;
  height: fit-content;

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`;