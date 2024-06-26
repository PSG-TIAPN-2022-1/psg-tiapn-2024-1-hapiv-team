import React, { useState, useRef, useEffect } from "react";
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
import { ObterProdutos } from "../../../../services/estoque/Estoque.js";

export const TelaEstoque = () => {
  const [modalAberto, setModalAberto] = useState(false);
  const [tipoModal, setTipoModal] = useState("");
  const [produtos, setProdutos] = useState([]);

  const wrapperRef = useRef(null);

  const fetchProdutos = async () => {
    try {
      const response = await ObterProdutos();

      if (response && response.data) {
        setProdutos(response.data);
      }
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    fetchProdutos();
  }, []);

  useEffect(() => {
    if (produtos.length > 0) {
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
            //TODO: Verificar se funfa => id: (produto) => produto.id,
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
        data: produtos.map((produto) => [
          produto.categoria.tipoCategoria,
          produto.fornecedor.nome,
          produto.nome,
          produto.quantidade,
          produto.precoDeCompra,
          produto.precoDeVenda,
        ]),
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
            "font-weight": "600",
            "font-size": "10px",
            color: "black",
            "text-align": "center",
            "word-wrap": "break-word",
          },
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

      if (wrapperRef.current) {
        grid.render(wrapperRef.current);
      }
    }
  }, [produtos]);

  const handleProdutoAdicionado = () => {
    setModalAberto(false);
    fetchProdutos();
  };

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
          onProdutoAdicionado={handleProdutoAdicionado}
        />
      )}
      {tipoModal === "Efetuar Venda" && (
        <ModalEfetuarVenda
          estahAberto={modalAberto}
          setAberto={setModalAberto}
        />
      )}
      <SecaoTabela>
        <div ref={wrapperRef}></div>
      </SecaoTabela>
    </Container>
  );
};
