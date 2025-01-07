"use client";
import React from "react";
import { CardContainer, Title, Description, Icon } from "./styles";

interface CardProps {
    title: string;
    icon: React.ReactNode;
    description?: string;
  }
  
  const Card: React.FC<CardProps> = ({ title, icon, description }) => {
    return (
      <CardContainer>
        <Icon>{icon}</Icon>
        <Title>{title}</Title>
        {description && <Description>{description}</Description>}
      </CardContainer>
    );
  };
  
  export default Card;