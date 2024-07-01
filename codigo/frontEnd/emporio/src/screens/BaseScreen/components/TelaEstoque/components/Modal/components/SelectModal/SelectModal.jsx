import React, { useState } from "react";
import { ContainerSelect, LabelSelect, Select } from "./SelectModal.style";

export const SelectModal = ({ labelText, options }) => {
  const [valorSelecionado, setValorSelecionado] = useState("");

  const handleChange = (event) => {
    setValorSelecionado(event.target.value);
  };

  return (
    <ContainerSelect>
      <LabelSelect>
        {labelText}:
        <Select value={valorSelecionado} onChange={handleChange}>
          {options.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </Select>
      </LabelSelect>
    </ContainerSelect>
  );
};
