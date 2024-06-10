import React from "react";
import { ContainerBase, TelaBase, Cabecalho, Titulo } from "./Base.style";
import { BarraLateral } from "./components/BarraLateral/BarraLateral";
import { TelaEstoque } from "./components/TelaEstoque/TelaEstoque";

const Base = () => {
  return (
    <TelaBase>
      <BarraLateral />
      <ContainerBase>
        <Cabecalho>
          <Titulo>Estoque</Titulo>
        </Cabecalho>
        <TelaEstoque/>
        </ContainerBase>
    </TelaBase>
  );
};

export default Base;
