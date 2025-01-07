import { device } from "@/utils/media-query";
import styled from "styled-components";

export const SectionWrapper = styled.div`
  width: 100%;
  max-width: calc(100% - 40rem);
  margin: 0 auto;
  padding-left: 20rem;
  padding-right: 20rem;
  position: relative;

  @media ${device.laptop} {
    max-width: calc(100% - 4rem);
    padding-left: 2rem;
    padding-right: 2rem;
  }

  @media ${device.mobileL} {
    max-width: calc(100% - 1.6rem);
    padding-left: 0.8rem;
    padding-right: 0.8rem;
  }

  &.color {
    background-color: var(--tints_background_2);
    margin-top: 2rem;
  }

  &.top {
    top: 4rem;
  }
`;
