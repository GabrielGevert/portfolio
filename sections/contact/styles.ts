import { device } from "@/utils/media-query";
import styled from "styled-components";

export const ContactContainer = styled.div`
  width: 100%;
  padding: 3rem 0;
  display: flex;
  gap: 2rem;
  justify-content: space-between;
  align-items: center;

  @media ${device.tablet} {
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 2rem 0;
  }
`;

export const FirstContent = styled.div`
  width: 42%;
  gap: 1.2rem;
  display: flex;
  flex-direction: column;

  @media ${device.tablet} {
    width: 100%;
    max-width: 28rem;
    text-align: center;
    align-items: center;
  }
`;

export const FirstContentTitle = styled.span`
  font-size: 2rem;
  font-family: var(--fonts_primary_bold);
  color: var(--tints_primary_light);
  width: fit-content;

  @media ${device.tablet} {
    align-self: center;
  }
`;

export const FirstContentText = styled.p`
  font-size: 1.1rem;
  color: var(--neutrals_gray);
  line-height: 1.6;
  width: 90%;
  margin: 0;
`;

export const ContactLinksWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  width: 90%;

  @media ${device.tablet} {
    width: 100%;
    align-items: stretch;
  }
`;

export const ContactLink = styled.a`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  padding: 0.9rem 1.2rem;
  background-color: var(--tints_background_3);
  border: 1px solid var(--tints_border);
  border-radius: 12px;
  color: var(--neutrals_light_100);
  text-decoration: none;
  transition: all 0.2s ease-in-out;

  > svg {
    color: var(--tints_primary_light);
    flex-shrink: 0;
  }

  > span {
    font-size: 1rem;
  }

  &:hover {
    border-color: var(--tints_border_strong);
    background-color: var(--tints_glow_soft);
    transform: translateX(6px);
  }

  @media ${device.tablet} {
    justify-content: center;

    &:hover {
      transform: none;
    }
  }
`;

export const SecondContent = styled.div`
  width: 54%;
  display: flex;
  flex-direction: column;

  @media ${device.tablet} {
    width: 100%;
    max-width: 32rem;
  }
`;

export const FormPanel = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  background-color: var(--tints_background_3);
  border: 1px solid var(--tints_border);
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.25);

  @media ${device.mobileL} {
    padding: 1.5rem 1rem;
  }
`;

export const SecondContentTitle = styled.div`
  font-size: 1.4rem;
  font-family: var(--fonts_primary_bold);
  color: var(--neutrals_light_100);

  @media ${device.mobileL} {
    font-size: 1.15rem;
    text-align: center;
  }
`;

export const SecondContentWrapInputs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const SecondContentInput = styled.input`
  padding: 1.1rem 1rem;
  background-color: var(--tints_background_2);
  font-size: 1rem;
  width: 100%;
  box-sizing: border-box;
  outline: none;
  border: 1px solid var(--tints_border);
  border-radius: 10px;
  color: var(--neutrals_light_100);
  font-family: var(--fonts_primary);
  transition: border-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out;

  &::placeholder {
    color: var(--neutrals_gray_dark);
  }

  &:focus {
    border-color: var(--tints_primary);
    box-shadow: 0 0 16px var(--tints_glow_soft);
  }
`;

export const SecondContentTextArea = styled.textarea`
  padding: 1rem;
  background-color: var(--tints_background_2);
  font-size: 1rem;
  width: 100%;
  min-height: 8rem;
  box-sizing: border-box;
  outline: none;
  resize: vertical;
  border: 1px solid var(--tints_border);
  border-radius: 10px;
  color: var(--neutrals_light_100);
  font-family: var(--fonts_primary);
  transition: border-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out;

  &::placeholder {
    color: var(--neutrals_gray_dark);
  }

  &:focus {
    border-color: var(--tints_primary);
    box-shadow: 0 0 16px var(--tints_glow_soft);
  }
`;

export const SecondContentButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
  width: 100%;
  padding: 1rem;
  background: var(--gradient_primary);
  color: var(--on_accent);
  font-family: var(--fonts_primary_bold);
  font-size: 1rem;
  border-radius: 10px;
  text-align: center;
  transition: all 0.2s ease-in-out;
  border: none;

  &:hover {
    filter: brightness(1.15);
    box-shadow: 0 0 24px var(--tints_glow);
    transform: translateY(-2px);
    cursor: pointer;
  }
`;
