"use client";

import React, { ReactNode, forwardRef } from "react";
import { SectionWrapper } from "./styles";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ children, className }, ref) => (
    <SectionWrapper ref={ref} className={className}>
      {children}
    </SectionWrapper>
  )
);

export default Container;
