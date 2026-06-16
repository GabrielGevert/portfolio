"use client";
import React from "react";
import {
  Badge,
  CardContainer,
  Description,
  Icon,
  StarWrap,
  Title,
} from "./styles";
import { Star } from "lucide-react";

interface StacksCardProps {
  title: string;
  icon: React.ReactNode;
  description: string;
  starIcon?: boolean;
  featured?: boolean;
  badge?: string;
}

const StacksCard: React.FC<StacksCardProps> = ({
  title,
  icon,
  description,
  starIcon,
  featured,
  badge,
}) => {
  return (
    <CardContainer className={featured ? "featured" : ""}>
      {badge && <Badge>{badge}</Badge>}
      <Icon className={featured ? "featured" : ""}>{icon}</Icon>
      <Title className={featured ? "featured" : ""}>{title}</Title>
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
