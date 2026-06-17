import { device } from "@/utils/media-query";
import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--tints_background_3);
  border: 1px solid var(--tints_border);
  border-radius: 12px;
  padding: 20px;
  box-sizing: border-box;
  width: 100%;
  min-height: 13rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
  transition: all 0.3s ease-in-out;
  position: relative;

  &:hover {
    transform: translateY(-6px);
    border-color: var(--tints_border_strong);
    box-shadow: 0 8px 32px var(--tints_glow_soft);
  }

  &.featured {
    border: 1px solid var(--tints_border_strong);
    background:
      linear-gradient(var(--tints_background_3), var(--tints_background_3))
        padding-box,
      var(--gradient_primary) border-box;
    box-shadow: 0 0 28px var(--tints_glow_soft);

    &:hover {
      box-shadow: 0 8px 40px var(--tints_glow);
    }
  }

  @media ${device.mobileL} {
    min-height: 9.5rem;
    padding: 16px 10px;
  }
`;

export const Badge = styled.span`
  position: absolute;
  top: -0.7rem;
  left: 50%;
  transform: translateX(-50%);
  padding: 0.2rem 0.9rem;
  font-size: 0.8rem;
  font-family: var(--fonts_primary_bold);
  color: var(--on_accent);
  background: var(--gradient_primary);
  border-radius: 1rem;
  white-space: nowrap;

  @media ${device.mobileL} {
    font-size: 0.7rem;
  }
`;

export const Icon = styled.div`
  margin-bottom: 15px;
  color: var(--neutrals_light_100);
  transition: color 0.3s ease-in-out;

  > svg {
    width: 42px;
    height: 42px;
  }

  &.featured {
    color: var(--tints_primary_light);
  }

  ${CardContainer}:hover & {
    color: var(--tints_primary_light);
  }
`;

export const Title = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--neutrals_light_100);
  text-align: center;
  margin: 0 0 0.5rem 0;

  &.featured {
    color: var(--tints_primary_light);
  }

  @media ${device.mobileL} {
    font-size: 1.05rem;
  }
`;

export const Description = styled.p`
  font-size: 1rem;
  color: var(--neutrals_gray);
  text-align: center;
  margin: 0;

  @media ${device.mobileL} {
    font-size: 0.85rem;
  }
`;

export const StarWrap = styled.div`
  display: flex;
  position: absolute;
  width: 32px;
  height: 32px;
  right: 0.5rem;
  top: 0.5rem;
  color: var(--tints_star);

  > svg {
    fill: var(--tints_star);
  }

  @media ${device.mobileL} {
    width: 24px;
    height: 24px;
    top: 0.2rem;
    right: 0.4rem;
  }
`;
