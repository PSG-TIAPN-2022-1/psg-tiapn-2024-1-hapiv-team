import React from "react";
import {
  BoxBotoes,
  Container,
  SecaoBotoes,
  SecaoSelect,
  SecaoTabela,
} from "./TelaEstoque.style";
import { Button } from "./components/Button/Button";
import { SelectFiltro } from "./components/Select/SelectFiltro";

export const TelaEstoque = () => {
  const opcoesFiltrar = [
    { value: "Todos", label: "Todos" },
    { value: "Bebidas", label: "Bebidas" },
    { value: "Carnes", label: "Carnes" },
    { value: "Frutas", label: "Frutas" },
    { value: "Legumes", label: "Legumes" },
    { value: "Laticínios", label: "Laticínios" },
    { value: "Limpeza", label: "Limpeza" },
    { value: "Outros", label: "Outros" },
  ];

  const opcoesOrdenar = [
    { value: "Categoria", label: "Categoria" },
    { value: "Produto", label: "Produto" },
    { value: "Fornecedor", label: "Fornecedor" },
    { value: "MaiorPrecoVenda", label: "Maior Preço de Venda" },
    { value: "MenorPrecoVenda", label: "Menor Preço de Venda" },
    { value: "MaiorPrecoCompra", label: "Maior Preço de Compra" },
    { value: "MenorPrecoCompra", label: "Menor Preço de Compra" },
  ];

  return (
    <Container>
      <SecaoBotoes>
        <BoxBotoes>
          <Button title={"Adicionar Produto"}></Button>
          <Button title={"Efetuar Venda"}></Button>
        </BoxBotoes>
      </SecaoBotoes>
      <SecaoSelect>
        <SelectFiltro labelText="Filtrar por" options={opcoesFiltrar} />
        <SelectFiltro labelText="Ordenar por" options={opcoesOrdenar} />
      </SecaoSelect>
      <SecaoTabela></SecaoTabela>
    </Container>
  );
};
