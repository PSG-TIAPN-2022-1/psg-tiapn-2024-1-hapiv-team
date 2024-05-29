import React from "react";
import { BoxInput, Input } from "./InputLogin.style";
import "./InputLogin.style";
import { ImageIcon } from "../../Login.style";

export const InputLogin = ({ icon, placeholder, type }) => {
  return (
    <BoxInput>
      <ImageIcon src={icon} alt="" className="icon" />
      <Input  type={type} placeholder={placeholder} />
    </BoxInput>
  );
};
