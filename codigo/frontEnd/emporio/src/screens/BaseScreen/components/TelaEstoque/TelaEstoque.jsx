import React from "react";
import {
  BoxBotoes,
  Container,
  SecaoBotoes,
  SecaoTabela,
  SecaoSelected,
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
      <SecaoSelected>
    <SelectFiltro 
    labelText="Filtrar por"
    options={[
      {value: 'MaiorPreço', label: 'Maior preço de venda'},
      {value: 'MenorPreço', label: 'Menor preço de venda'}
    ]}
   />
   <SelectFiltro 
    labelText="Ordenar por"
    options={[
      {value: 'opcao2', label: 'Pessoal'},
    ]}
  />
</SecaoSelected>

      <SecaoTabela></SecaoTabela>
    </Container>
  );
};
