import React from "react";
import { ContainerButton } from "./Button.style";

export const Button = ({ title, onClick }) => {
  return <ContainerButton onClick={onClick}>{title}</ContainerButton>;
};