import React from "react";
import {
  Container,
  SecaoSelect,
  SecaoTabela,
} from "./TelaGrafico.style";
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
    { value: "MaiorPrecoCompra", label: "Maior Preço de Cosmpra" },
    { value: "MenorPrecoCompra", label: "Menor Preço de Compra" },
  ];

  return (
    <Container>
      <SecaoSelect>
        <SelectFiltro labelText="Filtrar por" options={opcoesFiltrar} />
        <SelectFiltro labelText="Ordenar por" options={opcoesOrdenar} />
      </SecaoSelect>
      <SecaoTabela>
      </SecaoTabela>
    </Container>
  );
};