import React from "react";
import { useState, useRef, useEffect } from "react";
import {
  BoxBotoes,
  Container,
  SecaoBotoes,
  SecaoTabela,
  Button,
} from "./TelaEstoque.style";
import { ModalAdicionarProduto } from "./components/ModalAdicionarProduto/ModalAdicionarProduto.jsx";
import { ModalEfetuarVenda } from "./components/ModalEfetuarVenda/ModalEfetuarVenda.jsx";
import { Grid } from "gridjs";
import "gridjs/dist/theme/mermaid.css";
import { ptBR } from "gridjs/l10n";

export const TelaEstoque = () => {
  const [modalAberto, setModalAberto] = useState(false);
  const [tipoModal, setTipoModal] = useState("");

  const wrapperRef = useRef(null);

  const grid = new Grid({
    columns: [
      {
        name: "CATEGORIA",
        width: "12%",
        sort: true,
      },
      {
        name: "FORNECEDOR",
        width: "15%",
        sort: true,
      },
      {
        name: "DESCRIÇÃO",
        width: "15%",
        sort: true,
      },
      {
        name: "QUANTIDADE",
        width: "13%",
      },
      {
        name: "PREÇO DE COMPRA",
        width: "15%",
      },
      {
        name: "PREÇO DE VENDA",
        width: "15%",
      },
      {
        name: "OPÇÕES",
        width: "12%",
      },
    ],
    data: [
      ["John", "john@example.com", "(353) 01 222 3333"],
      ["Mark", "mark@gmail.com", "(01) 22 888 4444"],
      ["John", "john@example.com", "(353) 01 222 3333"],
      ["Mark", "mark@gmail.com", "(01) 22 888 4444"],
      ["John", "john@example.com", "(353) 01 222 3333"],
      ["Mark", "mark@gmail.com", "(01) 22 888 4444"],
      ["John", "john@example.com", "(353) 01 222 3333"],
      ["Mark", "mark@gmail.com", "(01) 22 888 4444"],
      ["John", "john@example.com", "(353) 01 222 3333"],
      ["Mark", "mark@gmail.com", "(01) 22 888 4444"],
      ["John", "john@example.com", "(353) 01 222 3333"],
      ["Mark", "mark@gmail.com", "(01) 22 888 4444"],
      ["John", "john@example.com", "(353) 01 222 3333"],
      ["Mark", "mark@gmail.com", "(01) 22 888 4444"],
      ["John", "john@example.com", "(353) 01 222 3333"],
      ["Mark", "mark@gmail.com", "(01) 22 888 4444"],
      ["John", "john@example.com", "(353) 01 222 3333"],
      ["Mark", "mark@gmail.com", "(01) 22 888 4444"],
    ],
    style: {
      table: {
        "font-family": "Cambria",
        "font-size": "14px",
        color: "black",
        "text-align": "center",
        "word-wrap": "break-word",
        width: "100%",
      },
      th: {
        "background-color": "rgb(245, 245, 220)",
        "font-family": "Cambria",
        "font-weight": "600",
        "font-size": "10px",
        color: "black",
        "text-align": "center",
        "word-wrap": "break-word",
      },
      td: {},
    },
    fixedHeader: true,
    resizable: true,
    search: true,
    pagination: {
      enabled: true,
      limit: 5,
      summary: true,
    },
    language: ptBR,
  });

  useEffect(() => {
    grid.render(wrapperRef.current);
  });

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
      <SecaoTabela>
        <div ref={wrapperRef}></div>
      </SecaoTabela>
    </Container>
  );
};
