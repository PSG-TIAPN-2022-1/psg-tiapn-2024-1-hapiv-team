import React from "react";
import { ContainerButton, Icon } from "./Button.style";

const Button = ({ icon, title }) => (
  <ContainerButton>
    <Icon className="material-symbols-outlined">{icon}</Icon>
    {title}
  </ContainerButton>
);

export default Button;
