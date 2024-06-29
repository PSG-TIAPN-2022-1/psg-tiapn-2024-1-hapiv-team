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
import { ModalRemoverProduto } from "./components/ModalRemoverProduto/ModalRemoverProduto.jsx";
import { Grid, h } from "gridjs";
import "gridjs/dist/theme/mermaid.css";
import { ptBR } from "gridjs/l10n";
import { ObterProdutos } from "../../../../services/estoque/Estoque.js";
import { calcularPercentualLucroUnitario } from "../../../../utils/utils.js";

export const TelaEstoque = () => {
  const [modalAberto, setModalAberto] = useState(false);
  const [tipoModal, setTipoModal] = useState("");
  const [produtos, setProdutos] = useState([]);
  const [produtoSelecionado, setProdutoSelecionado] = useState(null);

  const wrapperRef = useRef(null);

  const renderizarModal = () => {
    if (!modalAberto) return null;
    switch (tipoModal) {
      case "Adicionar Produto":
        return (
          <ModalAdicionarProduto
            estahAberto={modalAberto}
            setAberto={setModalAberto}
            onProdutoAdicionado={handleProdutoAdicionado}
          />
        );
      case "Efetuar Venda":
        return (
          <ModalEfetuarVenda
            estahAberto={modalAberto}
            setAberto={setModalAberto}
          />
        );
      case "Remover Produto":
        return (
          <ModalRemoverProduto
            estahAberto={modalAberto}
            setAberto={setModalAberto}
            produto={produtoSelecionado}
          />
        );
      default:
        return null;
    }
  };

  useEffect(() => {
    var produtosObtidos = [];

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
          width: "11%",
          formatter: (_, row) => {
            const produto = produtosObtidos.find(
              (produto) => produto.nome === row.cells[2].data
            );
            return h(
              "div",
              {
                style: {
                  display: "flex",
                  justifyContent: "space-between",
                },
              },
              h(
                "span",
                {
                  className: "material-symbols-outlined",
                  onClick: () => {
                    setProdutoSelecionado(produto);
                    setTipoModal("Editar Produto");
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
                    setProdutoSelecionado(produto);
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
                    setProdutoSelecionado(produto);
                    setTipoModal("Remover Produto");
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
      data: () => {
        return new Promise(async (resolve) => {
          setTimeout(async () => {
            try {
              const response = await ObterProdutos();

              if (response && response.data) {
                produtosObtidos = response.data;
                setProdutos(produtosObtidos);

                resolve(
                  produtosObtidos.map((produto) => [
                    produto.categoria.tipoCategoria,
                    produto.fornecedor.nome,
                    produto.nome,
                    produto.quantidade,
                    "R$ " + produto.precoDeCompra.toFixed(2),
                    "R$ " + produto.precoDeVenda.toFixed(2),
                    calcularPercentualLucroUnitario(
                      produto.precoDeVenda,
                      produto.precoDeCompra,
                      produto.quantidade
                    ).toFixed(2) + "%",
                  ])
                );
              }
            } catch (error) {
              alert(error);
            }
          }, 2000);
        });
      },
      style: {
        table: {
          fontFamily: "Cambria",
          fontSize: "14px",
          color: "black",
          textAlign: "center",
          wordWrap: "break-word",
          width: "100%",
        },
        th: {
          backgroundColor: "rgb(245, 245, 220)",
          fontWeight: "600",
          fontSize: "10px",
          color: "black",
          textAlign: "center",
          wordWrap: "break-word",
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
  }, [produtos]);

  const handleProdutoAdicionado = () => {
    setModalAberto(false);
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
      {renderizarModal()}
      <SecaoTabela>
        <div ref={wrapperRef}></div>
      </SecaoTabela>
    </Container>
  );
};
