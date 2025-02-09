import { device } from "@/utils/media-query";
import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: end;
  background-color: var(--tints_primary);
  border-radius: 8px;
  padding: 20px;
  width: 13rem;
  height: 13rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: translateY(-5px);
    scale: 1.05;
    filter: brightness(1.2);
    transition: all 0.3s ease-in-out;
  }

  @media ${device.mobileL} {
    width: 7.5em;
    height: 7.5rem;
    justify-content: center;
    align-items: center;
  }
`;

export const Icon = styled.div`
  margin-bottom: 15px;
  color: var(--neutrals_light_100);

  > svg {
    width: 42px;
    height: 42px;
  }

  @media ${device.mobileL} {
    margin-top: 1.5rem;
  }
`;

export const Title = styled.h3`
  font-size: 1rem;
  font-weight: bold;
  color: var(--neutrals_light_100);
  text-align: center;
`;

export const Description = styled.p`
  font-size: 14px;
  color: var(--neutrals_light_100);
  text-align: center;
`;
