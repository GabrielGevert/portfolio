"use client";

import React, { ReactNode } from "react";
import { SectionWrapper } from "./styles";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

const Container: React.FC<ContainerProps> = ({ children, className }) => (
  <SectionWrapper className={className}>{children}</SectionWrapper>
);

export default Container;