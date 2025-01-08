import styled, { keyframes } from "styled-components";

const bump = keyframes`
0% {
  transform: scale(1);
}
50% {
  transform: scale(1.05);
}
100% {
  transform: scale(1);
}
`;

export const ContactContainer = styled.div`
  width: 100%;
  padding: 2rem 0;
  display: flex;
  gap: 1rem;
`;

export const FirstContent = styled.div`
  width: 40%;
  gap: 1rem;
  display: flex;
  flex-direction: column;
`;

export const SecondContent = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
`;

export const FirstContentTitle = styled.span`
  font-size: 2rem;
  color: var(--tints_primary);
`;

export const FirstContentText = styled.p`
  font-size: 1.2rem;
  color: var(--neutrals_light);
  width: 90%;
  margin-top: 0;
`;

export const FirstContentWrapItens = styled.div`
  display: flex;
  gap: 1rem;
  color: var(--tints_primary);
`;

export const Href = styled.a`
  margin: 0;
  text-decoration: none;
  outline: none;
  border: none;
  > svg {
    transition: all 0.2s ease-in-out;
    color: var(--tints_primary);
    &:hover {
      cursor: pointer;
      filter: brightness(1.2);
      transform: scale(1.15);
      transition: all 0.2s ease-in-out;
    }
  }
`;

export const SecondContentTitle = styled.div`
  font-size: 1.6rem;
  color: var(--neutrals_light_100);
`;

export const SecondContentWrapInputs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const SecondContentInput = styled.input`
  padding: 1.5rem 1rem;
  background-color: #323240;
  font-size: 1rem;
  width: 27rem;
  align-items: left;
  outline: none;
  text-decoration: none;
  border: none;
  border-radius: 8px;
  justify-content: center;
  color: #939399;
  font-family: "Satoshi";
`;

export const SecondContentTextArea = styled.textarea`
  padding: 1rem 1rem 2.5rem 1rem;
  background-color: #323240;
  font-size: 1rem;
  width: 27rem;
  align-items: left;
  outline: none;
  text-decoration: none;
  border: none;
  border-radius: 8px;
  color: #939399;
  border: 1px solid var(--tints_primary);
  font-family: "Satoshi";

  ::placeholder {
    color: #939399;
    opacity: 1;
    position: absolute;
    top: 0.5rem;
  }
`;

export const SecondContentButton = styled.button`
  width: 22rem;
  padding: 1rem;
  background-color: var(--tints_primary);
  color: var(--neutrals_light);
  border-radius: 8px;
  text-align: center;
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  align-self: center;
  animation: ${bump} 1s ease-in-out infinite;
  border: none;

  &:hover {
    filter: brightness(1.2);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;
