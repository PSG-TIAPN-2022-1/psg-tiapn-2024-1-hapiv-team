import React, { useState } from "react";
import { ContainerFiltro } from "./Select.style";

export default function SelectFiltro({ labelText, options }) {
  const [selectedValue, setSelectedValue] = useState("");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <ContainerFiltro>
      <label>
        {labelText}:
        <select name="selected" value={selectedValue} onChange={handleChange}>
          <option value="" disabled>
            Opções
          </option>
          {options.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </label>
    </ContainerFiltro>
  );
}