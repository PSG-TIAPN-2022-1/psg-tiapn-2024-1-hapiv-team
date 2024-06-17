import React from "react";
import { BoxInput, Input } from "./InputTelaEstoque.style";

export const InputTelaEstoque = ({ placeholder, type}) => {


  return (
    <BoxInput>
      <Input
        type={type}
        placeholder={placeholder}
      />
    </BoxInput>
  );
};