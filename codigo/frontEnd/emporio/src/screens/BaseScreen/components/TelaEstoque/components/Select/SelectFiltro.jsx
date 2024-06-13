import React, { useState } from "react";
import { ContainerFiltro, LabelSelect, Select } from "./SelectFiltro.style";

export const SelectFiltro = ({ labelText, options }) => {
  const [valorSelecionado, setValorSelecionado] = useState("");

  const handleChange = (event) => {
    setValorSelecionado(event.target.value);
  };

  return (
    <ContainerFiltro>
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
    </ContainerFiltro>
  );
};
