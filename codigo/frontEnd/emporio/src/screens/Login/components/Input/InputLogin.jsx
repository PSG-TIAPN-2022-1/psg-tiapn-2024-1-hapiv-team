import React, { useRef } from "react";
import { BoxInput, Input } from "./InputLogin.style";

export const InputLogin = ({ placeholder, type, icon }) => {
  const inputRef = useRef();

  const clicarBoxInput = () => {
    inputRef.current.focus();
  };

  return (
    <BoxInput onClick={clicarBoxInput}>
      <span class="material-symbols-outlined">{icon}</span>
      <label>{placeholder}</label>
      <Input ref={inputRef} type={type} />
    </BoxInput>
  );
};
