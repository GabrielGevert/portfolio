"use client";
import React from "react";
import { CardContainer, Title, Description, Icon, StarWrap } from "./styles";
import { Star } from "lucide-react";

interface StacksCardProps {
  title: string;
  icon: React.ReactNode;
  description: string;
  indexClass?: string;
  starIcon?: React.ReactNode;
}

const StacksCard: React.FC<StacksCardProps> = ({
  title,
  icon,
  description,
  indexClass,
  starIcon,
}) => {
  return (
    <CardContainer className={indexClass}>
      <Icon>{icon}</Icon>
      <Title className={indexClass}>{title}</Title>
      <Description>{description}</Description>
      {starIcon && (
        <StarWrap>
          <Star width={32} height={32} />
        </StarWrap>
      )}
    </CardContainer>
  );
};

export default StacksCard;
