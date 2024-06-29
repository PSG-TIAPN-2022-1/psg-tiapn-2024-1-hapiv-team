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
import { Grid, h } from "gridjs";
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
            width: "11%",
            sort: true,
          },
          {
            name: "FORNECEDOR",
            width: "14%",
            sort: true,
          },
          {
            name: "DESCRIÇÃO",
            width: "15%",
            sort: true,
          },
          {
            name: "QUANTIDADE",
            width: "11%",
          },
          {
            name: "PREÇO DE COMPRA",
            width: "13%",
          },
          {
            name: "PREÇO DE VENDA",
            width: "13%",
          },
          {
            name: "LUCRO UNITÁRIO",
            width: "12%",
          },
          {
            name: "OPÇÕES",
            width: "12%",
            formatter: () => {
              return h(
                "div",
                {
                  style: {
                    display: "flex",
                    "justify-content": "space-around",
                  },
                },
                h(
                  "span",
                  {
                    className: "material-symbols-outlined",
                    onClick: () => {
                      setTipoModal("Efetuar Venda");
                      setModalAberto(true);
                    },
                    style: {
                      cursor: "pointer",
                      fontSize: "20px",
                    },
                  },
                  "edit"
                ),
                h(
                  "span",
                  {
                    className: "material-symbols-outlined",
                    onClick: () => {
                      setTipoModal("Efetuar Venda");
                      setModalAberto(true);
                    },
                    style: {
                      cursor: "pointer",
                      fontSize: "20px",
                    },
                  },
                  "shopping_cart"
                ),
                h(
                  "span",
                  {
                    className: "material-symbols-outlined",
                    onClick: () => {
                      setTipoModal("Efetuar Venda");
                      setModalAberto(true);
                    },
                    style: {
                      cursor: "pointer",
                      fontSize: "20px",
                    },
                  },
                  "delete"
                )
              );
            },
          },
        ],
        data: produtos.map((produto) => [
          produto.categoria.tipoCategoria,
          produto.fornecedor.nome,
          produto.nome,
          produto.quantidade,
          produto.precoDeCompra,
          produto.precoDeVenda,
          ((produto.precoDeVenda - produto.precoDeCompra) /
            produto.quantidade) *
            100 +
            "%",
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
