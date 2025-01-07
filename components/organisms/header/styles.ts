import styled from "styled-components";

interface SliderButtonProps {
  $isEnglish: boolean;
}

export const HeaderContainer = styled.header`
  position: fixed;
  display: flex;
  width: calc(100% - 40rem);
  top: 0;
  padding-top: 1rem;
  padding-bottom: 1rem;
  padding-left: 20rem;
  padding-right: 20rem;
  z-index: 9999;
  color: var(--tints_primary);
  background-color: var(--tints_background);
  opacity: 95%;

  /* > svg {
    position: absolute;
    top: 0.5rem;
    right: 9rem;
    border: 2px solid var(--neutrals_light_100);
    border-radius: 1rem;
    width: 2.5rem;
    height: 2.5rem;
  } */
`;

export const HeaderFirstContent = styled.h1`
  width: 60%;
  font-size: 1.4rem;
  justify-content: flex-start;
  align-items: center;
`;

export const HeaderSecondContent = styled.div`
  display: flex;
  width: 40%;
  gap: 1rem;
  text-align: center;
  align-items: center;
`;

export const HeaderItems = styled.a`
  color: var(--neutrals_light);
  font-size: 1rem;
  opacity: 100% !important;
  transition: all 0.3s;

  &:hover {
    cursor: pointer;
    color: var(--tints_primary);
    transition: all 0.3s;
  }
`;

export const HeaderTranslate = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 40px;
  background-color: var(--neutrals_light_100);
  border: 2px solid var(--tints_primary);
  border-radius: 25px;
  cursor: pointer;
  overflow: hidden;
  top: 0.5rem;
  right: 2rem;
`;

export const SliderButton = styled.div<SliderButtonProps>`
  position: absolute;
  top: 5%;
  left: ${(props) => (props.$isEnglish ? "50%" : "5%")};
  width: 40%;
  height: 90%;
  background-color: var(--neutrals_light_100);
  border-radius: 50%;
  transition: left 0.3s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  img {
    width: 100%;
    height: auto;
  }
`;

export const Text = styled.div<SliderButtonProps>`
  width: 30px;
  height: 30px;
  background-color: var(--tints_primary);
  border-radius: 50%;
  position: absolute;
  top: 12%;
  left: ${(props) => (props.$isEnglish ? "5%" : "60%")};
  transition: left 0.3s ease-in-out;
`;


