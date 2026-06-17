import { device } from "@/utils/media-query";
import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  flex: 1 1 0;
  min-width: 10rem;
  background-color: var(--tints_background_3);
  border: 1px solid var(--tints_border);
  border-radius: 12px;
  padding: 2rem 1.2rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: translateY(-6px);
    border-color: var(--tints_border_strong);
    box-shadow: 0 8px 32px var(--tints_glow_soft);
  }

  @media ${device.mobileL} {
    flex: 1 1 calc(50% - 10px);
    min-width: calc(50% - 10px);
    padding: 1.5rem 0.8rem;
  }
`;

export const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  border-radius: 14px;
  background: var(--gradient_primary);
  color: var(--on_accent);
  box-shadow: 0 4px 16px var(--tints_glow_soft);
  transition: transform 0.3s ease-in-out;

  > svg {
    width: 28px;
    height: 28px;
  }

  ${CardContainer}:hover & {
    transform: scale(1.08);
  }

  @media ${device.mobileL} {
    width: 44px;
    height: 44px;

    > svg {
      width: 22px;
      height: 22px;
    }
  }
`;

export const Title = styled.h3`
  font-size: 1.05rem;
  font-family: var(--fonts_primary_bold);
  color: var(--neutrals_light_100);
  text-align: center;
  margin: 0;

  @media ${device.mobileL} {
    font-size: 0.9rem;
  }
`;

export const Description = styled.p`
  font-size: 14px;
  color: var(--neutrals_gray);
  text-align: center;
  margin: 0;
`;
