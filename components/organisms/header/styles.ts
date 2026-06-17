import { device } from "@/utils/media-query";
import styled from "styled-components";

interface FlagOptionProps {
  $active: boolean;
}

export const HeaderContainer = styled.header`
  position: fixed;
  display: flex;
  align-items: center;
  gap: 2rem;
  width: 100%;
  box-sizing: border-box;
  top: 0;
  padding: 1rem clamp(1rem, calc((100vw - 1120px) / 2), 22rem);
  z-index: 9999;
  color: var(--tints_primary);
  background-color: var(--header_bg);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--tints_border);

  @media ${device.tablet} {
    gap: 0.8rem;
    padding: 0.8rem 1rem;
  }
`;

export const MobileMenuWrap = styled.div`
  display: none;
  align-items: center;

  @media ${device.tablet} {
    display: flex;
  }
`;

export const LogoPrefix = styled.span`
  @media ${device.tablet} {
    display: none;
  }
`;

export const HeaderFirstContent = styled.h1`
  font-size: 1.4rem;
  font-family: var(--fonts_primary_bold);
  margin: 0;
  white-space: nowrap;
  color: var(--tints_primary_light);

  @media ${device.laptop} {
    font-size: 1.15rem;
  }

  @media ${device.tablet} {
    font-size: 1rem;
  }

  @media ${device.mobileM} {
    font-size: 0.9rem;
  }
`;

export const HeaderSecondContent = styled.div`
  display: flex;
  margin-left: auto;
  gap: 1.5rem;
  align-items: center;

  @media ${device.laptop} {
    gap: 1rem;
  }

  @media ${device.tablet} {
    display: none;
  }
`;

export const HeaderItems = styled.a`
  color: var(--neutrals_light);
  font-size: 1rem;
  position: relative;
  padding-bottom: 0.2rem;
  white-space: nowrap;
  transition: all 0.3s;

  @media ${device.laptop} {
    font-size: 0.95rem;
  }

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 0;
    height: 2px;
    background: var(--gradient_primary);
    border-radius: 2px;
    transition: width 0.3s ease-in-out;
  }

  &:hover {
    cursor: pointer;
    color: var(--tints_primary_light);

    &::after {
      width: 100%;
    }
  }
`;

export const HeaderControls = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  flex-shrink: 0;

  @media ${device.tablet} {
    margin-left: auto;
    gap: 0.4rem;
  }
`;

export const ThemeToggle = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;
  border-radius: 999px;
  background-color: var(--tints_background_3);
  border: 1px solid var(--tints_border_strong);
  color: var(--tints_primary_light);
  cursor: pointer;
  flex-shrink: 0;
  transition: border-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out;

  > svg {
    width: 18px;
    height: 18px;
  }

  &:hover {
    border-color: var(--tints_primary_light);
    box-shadow: 0 0 12px var(--tints_glow_soft);
  }

  &:focus-visible {
    outline: 2px solid var(--tints_primary_light);
    outline-offset: 2px;
  }

  @media ${device.tablet} {
    width: 34px;
    height: 34px;
  }
`;

export const HeaderTranslate = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 4px;
  background-color: var(--tints_background_3);
  border: 1px solid var(--tints_border_strong);
  border-radius: 999px;
  cursor: pointer;
  flex-shrink: 0;
  transition: border-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out;

  &:hover {
    border-color: var(--tints_primary_light);
    box-shadow: 0 0 12px var(--tints_glow_soft);
  }

  @media ${device.tablet} {
    justify-self: end;
    padding: 3px;
  }
`;

export const FlagOption = styled.div<FlagOptionProps>`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: transform 0.25s ease-in-out, box-shadow 0.25s ease-in-out;
  transform: ${(props) => (props.$active ? "scale(1)" : "scale(0.82)")};
  box-shadow: ${(props) =>
    props.$active ? "0 0 0 2px var(--tints_primary_light)" : "none"};

  img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
    border-radius: 50%;
    -webkit-mask-image: radial-gradient(circle, #000 97%, transparent 100%);
    mask-image: radial-gradient(circle, #000 97%, transparent 100%);
    opacity: ${(props) => (props.$active ? 1 : 0.4)};
    filter: ${(props) => (props.$active ? "none" : "grayscale(1)")};
    transition: opacity 0.25s ease-in-out, filter 0.25s ease-in-out;
  }

  ${HeaderTranslate}:hover & img {
    opacity: ${(props) => (props.$active ? 1 : 0.65)};
  }

  @media ${device.tablet} {
    width: 24px;
    height: 24px;
  }
`;
