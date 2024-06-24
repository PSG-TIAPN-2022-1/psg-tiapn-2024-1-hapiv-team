import React from "react";
import { BoxInput, Input } from "./InputModal.style";

export const InputModal = ({ placeholder, type, onChange }) => {
  return (
    <BoxInput>
      <Input type={type} placeholder={placeholder} onChange={onChange} />
    </BoxInput>
  );
};
