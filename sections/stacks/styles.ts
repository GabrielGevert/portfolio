import styled from "styled-components";

export const StacksContainer = styled.div`
  width: 100%;
  padding: 2rem 0;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const StacksTitle = styled.span`
  font-size: 2rem;
  color: var(--tints_primary);
`;

export const StacksCardsWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  width: 90%;
`;