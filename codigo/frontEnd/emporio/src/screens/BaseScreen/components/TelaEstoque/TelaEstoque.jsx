import React from "react";
import { useState } from "react";
import {
  BoxBotoes,
  Container,
  SecaoBotoes,
  SecaoSelect,
  SecaoTabela,
  Button,
} from "./TelaEstoque.style";
import { SelectFiltro } from "./components/Select/SelectFiltro";
import Modal from "./components/Modal/modal"

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

  const[openModal, setOpenModal] = useState(false)

  return (
    <Container>
      <SecaoBotoes>
        <BoxBotoes>
          <Button onClick={() => {setOpenModal(true)}} title={"Adicionar Produto"}>Adicionar venda</Button>
          <Button onClick={() => {setOpenModal(true)}} title={"Efetuar Venda"}>Efetuar Venda</Button>
        </BoxBotoes>
      </SecaoBotoes>
      <SecaoSelect>
        <SelectFiltro labelText="Filtrar por" options={opcoesFiltrar} />
        <SelectFiltro labelText="Ordenar por" options={opcoesOrdenar} />
      </SecaoSelect>
      <SecaoTabela>
      <Modal isOpen={openModal} setModalOpen={setOpenModal} title="Produto">
  <p>Categoria x  </p>
</Modal>
      </SecaoTabela>
    </Container>
  );
};
