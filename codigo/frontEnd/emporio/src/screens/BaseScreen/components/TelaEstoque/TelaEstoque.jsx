import React from "react";
import {
  BoxBotoes,
  Container,
  SecaoBotoes,
  SecaoTabela,
} from "./TelaEstoque.style";
import { Button } from "./components/Button/Button";
import SelectFiltro from "./components/Select/Select";

export const TelaEstoque = () => {
  return (
    <Container>
      <SecaoBotoes>
        <BoxBotoes>
          <Button title={"Adicionar Produto"}></Button>
          <Button title={"Efetuar Venda"}></Button>
        </BoxBotoes>
      </SecaoBotoes>

      <SelectFiltro />

      <SecaoTabela></SecaoTabela>
    </Container>
  );
};
