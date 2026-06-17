"use client";
import styled from "styled-components";
import { device } from "@/utils/media-query";

export const CvScreen = styled.div`
  min-height: 100vh;
  padding: 2.5rem 1rem 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${device.mobileL} {
    padding: 1.5rem 0.8rem 3rem;
  }

  @media print {
    padding: 0;
    min-height: 0;
  }
`;

export const Toolbar = styled.div`
  width: 100%;
  max-width: 880px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 1.4rem;

  @media ${device.mobileL} {
    flex-direction: column;
    align-items: stretch;
    gap: 0.8rem;
  }

  @media print {
    display: none;
  }
`;

export const ToolbarGroup = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: 0.8rem;

  @media ${device.mobileL} {
    gap: 0.5rem;
    justify-content: flex-start;
  }
`;

export const Breadcrumb = styled.nav`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.95rem;
  color: var(--neutrals_gray);
`;

export const BreadcrumbLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  color: var(--neutrals_gray);
  text-decoration: none;
  transition: color 0.2s ease;

  > svg {
    width: 16px;
    height: 16px;
  }

  &:hover {
    color: var(--tints_primary_light);
  }

  &:focus-visible {
    outline: 2px solid var(--tints_primary_light);
    outline-offset: 3px;
    border-radius: 4px;
  }
`;

export const BreadcrumbSep = styled.span`
  color: var(--neutrals_gray_dark);
`;

export const BreadcrumbCurrent = styled.span`
  color: var(--neutrals_light);
  font-family: var(--fonts_primary_bold);
`;

export const ToolbarButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.6rem 1.1rem;
  font-size: 0.95rem;
  font-family: var(--fonts_primary);
  color: var(--neutrals_light);
  background-color: var(--tints_background_3);
  border: 1px solid var(--tints_border_strong);
  border-radius: 0.6rem;
  cursor: pointer;
  transition: all 0.2s ease;

  > svg {
    width: 18px;
    height: 18px;
  }

  &:hover {
    border-color: var(--tints_primary_light);
    background-color: var(--tints_primary);
  }

  &:focus-visible {
    outline: 2px solid var(--tints_primary_light);
    outline-offset: 3px;
  }

  &:disabled {
    opacity: 0.6;
    cursor: default;
  }

  @media ${device.mobileL} {
    padding: 0.55rem 0.9rem;
    font-size: 0.85rem;
    gap: 0.4rem;
    white-space: nowrap;

    > svg {
      width: 16px;
      height: 16px;
    }
  }
`;

export const Paper = styled.article`
  width: 100%;
  max-width: 880px;
  background-color: var(--tints_background_2);
  border: 1px solid var(--tints_border);
  border-radius: 16px;
  padding: 3rem;

  @media ${device.tablet} {
    padding: 2rem;
  }

  @media ${device.mobileL} {
    padding: 1.4rem 1.2rem;
  }

  @media print {
    --neutrals_light: #10101a;
    --neutrals_light_100: #20202e;
    --neutrals_gray: #4a4a55;
    --tints_background_2: #ffffff;
    --tints_background_3: #f3f3f7;
    --tints_border: #e2e2e8;
    --tints_border_strong: #cdc8ee;
    --tints_primary_light: #5847c2;
    max-width: none;
    border: none;
    border-radius: 0;
    padding: 0;
    background: #ffffff;
    color: #10101a;
  }
`;

export const CvHead = styled.header`
  border-bottom: 1px solid var(--tints_border);
  padding-bottom: 1.3rem;
  margin-bottom: 1.6rem;
`;

export const CvName = styled.h1`
  font-size: 2.4rem;
  font-family: var(--fonts_primary_bold);
  color: var(--neutrals_light);
  margin: 0;

  @media ${device.mobileL} {
    font-size: 1.9rem;
  }
`;

export const CvRole = styled.p`
  font-size: 1.15rem;
  color: var(--tints_primary_light);
  margin: 0.3rem 0 1rem;
  font-family: var(--fonts_primary_bold);
`;

export const CvContacts = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem 1.3rem;
  font-size: 0.9rem;
  color: var(--neutrals_gray);
`;

export const CvContact = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  color: var(--neutrals_gray);

  > svg {
    width: 15px;
    height: 15px;
    color: var(--tints_primary_light);
  }

  &:hover {
    color: var(--tints_primary_light);
  }
`;

export const Section = styled.section`
  margin-bottom: 1.7rem;
  border-top: 1px solid var(--tints_border);
  padding-top: 1.5rem;

  &:first-of-type {
    border-top: none;
    padding-top: 0;
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

export const SectionTitle = styled.h2`
  font-size: 0.95rem;
  text-transform: uppercase;
  letter-spacing: 0.09em;
  color: var(--tints_primary_light);
  margin: 0 0 0.9rem;
  font-family: var(--fonts_primary_bold);
  break-after: avoid;
`;

export const Summary = styled.p`
  font-size: 0.98rem;
  line-height: 1.6;
  color: var(--neutrals_gray);
  margin: 0;
`;

export const ExpItem = styled.div`
  margin-bottom: 1.2rem;
  break-inside: avoid;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const ExpHead = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 0.3rem 1rem;
  flex-wrap: wrap;
`;

export const ExpRole = styled.h3`
  font-size: 1.05rem;
  margin: 0;
  color: var(--neutrals_light);
  font-family: var(--fonts_primary_bold);
`;

export const ExpPeriod = styled.span`
  font-size: 0.85rem;
  color: var(--neutrals_gray);
  white-space: nowrap;
`;

export const ExpCompany = styled.p`
  font-size: 0.95rem;
  color: var(--tints_primary_light);
  margin: 0.1rem 0 0.55rem;
`;

export const ExpBullets = styled.ul`
  margin: 0;
  padding-left: 1.1rem;
  display: flex;
  flex-direction: column;
  gap: 0.32rem;
`;

export const ExpBullet = styled.li`
  font-size: 0.92rem;
  line-height: 1.5;
  color: var(--neutrals_gray);
`;

export const SkillRow = styled.div`
  display: flex;
  gap: 0.6rem;
  margin-bottom: 0.5rem;
  font-size: 0.92rem;
  break-inside: avoid;

  &:last-child {
    margin-bottom: 0;
  }

  @media ${device.mobileL} {
    flex-direction: column;
    gap: 0.1rem;
  }
`;

export const SkillLabel = styled.span`
  color: var(--neutrals_light);
  font-family: var(--fonts_primary_bold);
  min-width: 150px;
  flex-shrink: 0;
`;

export const SkillItems = styled.span`
  color: var(--neutrals_gray);
  line-height: 1.5;
`;
