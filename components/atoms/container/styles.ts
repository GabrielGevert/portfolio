import { device } from "@/utils/media-query";
import styled from "styled-components";

export const SectionWrapper = styled.div`
  width: 100%;
  box-sizing: border-box;
  margin: 0 auto;
  padding-left: clamp(1rem, calc((100vw - 1120px) / 2), 22rem);
  padding-right: clamp(1rem, calc((100vw - 1120px) / 2), 22rem);
  position: relative;
  scroll-margin-top: 5.5rem;

  @media ${device.mobileL} {
    padding-left: 0.8rem;
    padding-right: 0.8rem;
  }

  &.color {
    background-color: var(--tints_background_2);
    border-top: 1px solid var(--tints_border);
    border-bottom: 1px solid var(--tints_border);
    margin-top: 2rem;
  }

  &.top.color {
    border-top: none;
    margin-top: 0;
    padding-top: 5rem;
  }
`;
