import React from "react";
import { ContainerButton, Icon } from "./Button.style";

const Button = ({ icon, title, onClick }) => (
  <ContainerButton onClick={onClick}>
    <Icon className="material-symbols-outlined">{icon}</Icon>
    {title}
  </ContainerButton>
);

export default Button;
