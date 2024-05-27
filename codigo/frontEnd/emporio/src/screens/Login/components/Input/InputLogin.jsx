import React from "react";
import { BoxInput } from "./InputLogin.style";
import "./InputLogin.style";
import { ImageIcon } from "../../Login.style";

export const InputLogin = ({ icon, placeholder, type }) => {
  return (
    <BoxInput>
      <ImageIcon src={icon} alt="" className="icon" />
      <input type={type} placeholder={placeholder} />
    </BoxInput>
  );
};
