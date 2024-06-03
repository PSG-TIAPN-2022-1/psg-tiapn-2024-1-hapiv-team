import React, { useRef, useState } from "react";
import { BoxInput, Input } from "./InputLogin.style";

export const InputLogin = ({ placeholder, type, icon }) => {
  const inputRef = useRef();
  const [inputPlaceholder, setInputPlaceholder] = useState(placeholder);

  const handleFocus = () => {
    setInputPlaceholder("");
  };

  const handleBlur = () => {
    setInputPlaceholder(placeholder);
  };

  return (
    <BoxInput onClick={handleFocus}>
      <span class="material-symbols-outlined">{icon}</span>
      <Input
        ref={inputRef}
        type={type}
        placeholder={inputPlaceholder}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
    </BoxInput>
  );
};
