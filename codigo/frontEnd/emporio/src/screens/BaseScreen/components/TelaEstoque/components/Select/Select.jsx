import React, { useState } from "react";
import { ContainerFiltro } from "./Select.style";

export default function SelectFiltro({ labelText }) {
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
          <option value="PreçoMaior">Maior preço de venda</option>
          <option value="PreçoMenor">Menor preço de venda</option>
        </select>
      </label>
    </ContainerFiltro>
  );
}
