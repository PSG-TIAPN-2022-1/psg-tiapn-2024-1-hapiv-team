import React from "react";
import { useState, useRef, useEffect } from "react";
import {
  BoxBotoes,
  Container,
  SecaoBotoes,
  SecaoSelect,
  SecaoTabela,
  Button,
} from "./TelaEstoque.style";
import { SelectFiltro } from "./components/Select/SelectFiltro";
import { ModalAdicionarProduto } from "./components/ModalAdicionarProduto/ModalAdicionarProduto.jsx";
import { ModalEfetuarVenda } from "./components/ModalEfetuarVenda/ModalEfetuarVenda.jsx";
import { Grid } from "gridjs";
import "gridjs/dist/theme/mermaid.css";

export const TelaEstoque = () => {
  const [modalAberto, setModalAberto] = useState(false);
  const [tipoModal, setTipoModal] = useState("");

  // const wrapperRef = useRef(null);

  // const grid = new Grid({
  //   columns: ["Name", "Email", "Phone Number"],
  //   data: [
  //     ["John", "john@example.com", "(353) 01 222 3333"],
  //     ["Mark", "mark@gmail.com", "(01) 22 888 4444"],
  //   ],
  // });

  // useEffect(() => {
  //   grid.render(wrapperRef.current);
  // });

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
      <SecaoBotoes>
        <BoxBotoes>
          <Button
            onClick={() => {
              setTipoModal("Adicionar Produto");
              setModalAberto(true);
            }}
          >
            Adicionar Produto
          </Button>
          <Button
            onClick={() => {
              setTipoModal("Efetuar Venda");
              setModalAberto(true);
            }}
          >
            Efetuar Venda
          </Button>
        </BoxBotoes>
      </SecaoBotoes>
      <SecaoSelect>
        <SelectFiltro labelText="Filtrar por" options={opcoesFiltrar} />
        <SelectFiltro labelText="Ordenar por" options={opcoesOrdenar} />
      </SecaoSelect>
      {tipoModal === "Adicionar Produto" && (
        <ModalAdicionarProduto
          estahAberto={modalAberto}
          setAberto={setModalAberto}
        />
      )}
      {tipoModal === "Efetuar Venda" && (
        <ModalEfetuarVenda
          estahAberto={modalAberto}
          setAberto={setModalAberto}
        />
      )}
      {/* {tipoModal === "Editar Produto" && (
        <ModalEditarProduto
          estahAberto={modalAberto}
          setAberto={setModalAberto}
        />
      )} */}
      {/* {tipoModal === "Remover Produto" && (
        <ModalRemoverProduto
          estahAberto={modalAberto}
          setAberto={setModalAberto}
        />
      )} */}
      <SecaoTabela>{/* <div ref={wrapperRef}></div> */}</SecaoTabela>
    </Container>
  );
};
