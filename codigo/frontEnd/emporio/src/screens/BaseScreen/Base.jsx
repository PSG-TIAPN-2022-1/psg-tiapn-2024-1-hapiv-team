import React from "react";
import { ContainerBase, TelaBase } from "./Base.style";
import { BarraLateral } from "./components/BarraLateral/BarraLateral";

const Base = () => {
  return (
    <TelaBase>
      <BarraLateral />
      <ContainerBase></ContainerBase>
    </TelaBase>
  );
};

export default Base;
