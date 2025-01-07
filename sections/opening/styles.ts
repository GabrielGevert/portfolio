import styled from "styled-components";

export const OpeningContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 2rem 0;
`;

export const OpeningFirstContent = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;

export const OpeningFirstContentPresentation = styled.span`
  font-size: 2rem;
  color: var(--neutrals_light);
`;

export const OpeningFirstContentTitle = styled.h2`
  font-size: 4rem;
  color: var(--neutrals_light_100);
  height: 40px;
  margin-top: 0;
`;

export const OpeningFirstContentText = styled.p`
  font-size: 1.2rem;
  color: var(--neutrals_light);
  width: 82%;
  margin-top: 0;
`;

export const OpeningFirstContentItems = styled.div`
  margin-top: 1.5rem;
  display: flex;
  width: 80%;
  justify-content: space-between;
`;

export const OpeningFirstContentItemsWrap = styled.div`
  display: flex;
  gap: 0.5rem;
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

  &::before {
    content: '';
    position: absolute;
    width: 370px; /* Largura da elipse */
    height: 370px; /* Altura da elipse */
    background: linear-gradient(
      to bottom,
      var(--tints_primary) 86.7%, /* Parte visível da elipse */
      var(--tints_background_2) 86.7% /* Parte cortada */
    );
    border-radius: 50%; /* Faz a forma de uma elipse */
    z-index: 0; /* Fica atrás da imagem */
    top: 33%; 
    left: 50.8%;
    transform: translate(-50%, -30%); /* Centraliza e ajusta a posição */
  }

  background: var(--tints_background_2); /* Fundo do componente */

  img {
    position: relative;
    z-index: 1; /* Garante que a imagem fique na frente */
    bottom: 1.06rem;
    border-bottom-right-radius: 0.5rem;
    border-bottom-left-radius: 1.5rem;
  }
`;




