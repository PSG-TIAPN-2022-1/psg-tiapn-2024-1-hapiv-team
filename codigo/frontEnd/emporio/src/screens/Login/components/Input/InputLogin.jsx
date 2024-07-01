import React, { useRef, useState } from "react";
import { BoxInput, Input } from "./InputLogin.style";

export const InputLogin = ({ placeholder, type, icon, onChange }) => {
  const inputRef = useRef();
  const [inputPlaceholder, setInputPlaceholder] = useState(placeholder);

  const handleFocus = () => {
    setInputPlaceholder("");
  };

  const handleBlur = () => {
    setInputPlaceholder(placeholder);
  };

  const handleChange = (event) => {
    if (onChange) {
      onChange(event.target.value);
    }
  };

  return (
    <BoxInput>
      <span class="material-symbols-outlined">{icon}</span>
      <Input
        ref={inputRef}
        type={type}
        placeholder={inputPlaceholder}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleChange}
      />
    </BoxInput>
  );
};
