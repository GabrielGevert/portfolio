import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 2px solid var(--tints_primary);
  border-radius: 8px;
  padding: 20px;
  width: 20rem;
  height: 15rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-in-out;
  position: relative;

  &:hover {
    transform: translateY(-5px);
    scale: 1.05;
    filter: brightness(1.2);
    transition: all 0.3s ease-in-out;
  }

  &.dif {
    border: 2px solid var(--neutrals_light_100);
  }
`;

export const Icon = styled.div`
  margin-bottom: 15px;
  color: var(--neutrals_light_100);

  > svg {
    width: 42px;
    height: 42px;
  }
`;

export const Title = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--neutrals_light_100);
  text-align: center;

  &.dif {
    color: var(--tints_primary);
  }
`;

export const Description = styled.p`
  font-size: 1rem;
  color: var(--neutrals_light_100);
  text-align: center;
`;

export const StarWrap = styled.div`
  display: flex;
  position: absolute;
  width: 32px;
  height: 32px;
  right: 0.5rem;
  top: 0.5rem;
  color: #f5c002;
  
  > svg {
    fill: #f5c002;
  }
`;
