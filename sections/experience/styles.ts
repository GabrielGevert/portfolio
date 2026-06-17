import { device } from "@/utils/media-query";
import styled from "styled-components";

export const ExperienceContainer = styled.div`
  width: 100%;
  padding: 3rem 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media ${device.tablet} {
    align-items: center;
    text-align: center;
  }

  @media ${device.mobileL} {
    padding: 2rem 0;
  }
`;

export const ExperienceTitle = styled.span`
  font-size: 2rem;
  font-family: var(--fonts_primary_bold);
  color: var(--tints_primary_light);
  width: fit-content;
`;

export const ExperienceText = styled.p`
  font-size: 1.1rem;
  color: var(--neutrals_gray);
  margin: 0 0 1rem 0;
  width: 90%;

  @media ${device.mobileL} {
    width: 95%;
    font-size: 1rem;
  }
`;

export const Timeline = styled.div`
  position: relative;
  width: 90%;
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  text-align: left;

  @media ${device.tablet} {
    width: 100%;
  }
`;

export const TimelineItem = styled.div`
  position: relative;
  padding-left: 2.2rem;
  padding-bottom: 2rem;

  &:last-child {
    padding-bottom: 0;
  }

  &::after {
    content: "";
    position: absolute;
    left: 6px;
    top: 13px;
    width: 2px;
    height: 100%;
    background: var(--tints_border);
  }

  &:last-child::after {
    display: none;
  }

  @media ${device.mobileL} {
    padding-left: 1.8rem;
  }
`;

export const TimelineDot = styled.span`
  position: absolute;
  left: 0;
  top: 6px;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: var(--gradient_primary);
  box-shadow: 0 0 0 4px var(--tints_background), 0 0 14px var(--tints_glow);
  z-index: 1;
`;

export const TimelineCard = styled.div`
  background-color: var(--tints_background_3);
  border: 1px solid var(--tints_border);
  border-radius: 14px;
  padding: 1.2rem 1.4rem;
  transition: border-color 0.2s ease, transform 0.2s ease;

  &:hover {
    border-color: var(--tints_border_strong);
    transform: translateY(-2px);
  }

  @media ${device.mobileL} {
    padding: 1rem 1.1rem;
  }
`;

export const TimelineHead = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 0.5rem 1rem;
  flex-wrap: wrap;
`;

export const TimelineRole = styled.h3`
  font-size: 1.15rem;
  margin: 0;
  color: var(--neutrals_light);
  font-family: var(--fonts_primary_bold);

  @media ${device.mobileL} {
    font-size: 1.05rem;
  }
`;

export const TimelinePeriod = styled.span`
  font-size: 0.85rem;
  color: var(--neutrals_gray);
  white-space: nowrap;
`;

export const TimelineCompany = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.95rem;
  font-family: var(--fonts_primary_bold);
  color: var(--tints_primary_light);
  margin-top: 0.2rem;
`;

export const CurrentBadge = styled.span`
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: var(--on_accent);
  background: var(--gradient_primary);
  padding: 0.15rem 0.5rem;
  border-radius: 999px;
`;

export const TimelineDescription = styled.p`
  color: var(--neutrals_gray);
  line-height: 1.6;
  margin: 0.7rem 0 0 0;
  font-size: 0.95rem;
`;

export const TimelineTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 0.9rem;
`;

export const TimelineTag = styled.span`
  font-size: 0.75rem;
  color: var(--neutrals_light_100);
  background: var(--tints_glow_soft);
  border: 1px solid var(--tints_border);
  padding: 0.25rem 0.6rem;
  border-radius: 999px;
`;

export const ExperienceCta = styled.a`
  align-self: flex-start;
  margin-top: 1.8rem;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.8rem 1.4rem;
  font-size: 1rem;
  font-family: var(--fonts_primary_bold);
  color: var(--tints_primary_light);
  background-color: var(--tints_glow_soft);
  border: 1px solid var(--tints_border_strong);
  border-radius: 2rem;
  text-decoration: none;
  transition: all 0.2s ease-in-out;

  &::after {
    content: "→";
  }

  &:hover {
    background: var(--gradient_primary);
    color: var(--on_accent);
    border-color: var(--tints_primary_light);
    box-shadow: 0 0 24px var(--tints_glow);
    transform: translateY(-2px);
  }

  &:focus-visible {
    outline: 2px solid var(--tints_primary_light);
    outline-offset: 3px;
  }

  @media ${device.tablet} {
    align-self: center;
  }
`;
