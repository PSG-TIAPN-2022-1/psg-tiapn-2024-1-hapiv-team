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
import { obterProdutosAsync } from "./TelaEstoque.js";
import { calcularPercentualLucroUnitario } from "../../../../utils/utils.js";
import { ModalEditarProduto } from "./components/ModalEditarProduto/ModalEditarProduto.jsx";

export const TelaEstoque = () => {
  const [modalAberto, setModalAberto] = useState(false);
  const [tipoModal, setTipoModal] = useState("");
  const [produtos, setProdutos] = useState([]);
  const [produtoSelecionado, setProdutoSelecionado] = useState(null);
  const [carregando, setCarregando] = useState(true);

  const wrapperRef = useRef(null);
  const gridRef = useRef(null);

  const atualizarProdutos = async () => {
    try {
      setCarregando(true);
      const produtosObtidos = await obterProdutosAsync();
      setProdutos(produtosObtidos);
    } catch (error) {
      console.error("Erro ao obter produtos:", error);
    } finally {
      setCarregando(false);
    }
  };

  useEffect(() => {
    const carregarProdutos = async () => {
      await atualizarProdutos();
    };

    carregarProdutos();
  }, []);

  const configurarGrid = () => {
    return new Grid({
      columns: [
        { name: "CATEGORIA", width: "11%", sort: true },
        { name: "FORNECEDOR", width: "14%", sort: true },
        { name: "DESCRIÇÃO", width: "15%", sort: true },
        { name: "QUANTIDADE", width: "11%" },
        { name: "PREÇO DE COMPRA", width: "13%" },
        { name: "PREÇO DE VENDA", width: "13%" },
        { name: "LUCRO UNITÁRIO", width: "12%" },
        {
          name: "OPÇÕES",
          width: "11%",
          formatter: (_, row) => {
            const produto = produtos.find(
              (produto) => produto.nome === row.cells[2].data
            );
            return h(
              "div",
              { style: { display: "flex", justifyContent: "space-between" } },
              h(
                "span",
                {
                  className: "material-symbols-outlined",
                  onClick: () => {
                    setProdutoSelecionado(produto);
                    setTipoModal("Editar Produto");
                    setModalAberto(true);
                  },
                  style: { cursor: "pointer", fontSize: "20px" },
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
                  style: { cursor: "pointer", fontSize: "20px" },
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
                  style: { cursor: "pointer", fontSize: "20px" },
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
        "R$ " + produto.precoDeCompra.toFixed(2),
        "R$ " + produto.precoDeVenda.toFixed(2),
        calcularPercentualLucroUnitario(
          produto.precoDeVenda,
          produto.precoDeCompra,
          produto.quantidade
        ).toFixed(2) + "%",
      ]),
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
      pagination: { enabled: true, limit: 5, summary: true },
      language: ptBR,
    });
  };

  useEffect(() => {
    if (!carregando) {
      if (gridRef.current) {
        if (gridRef.current.__gridjs) {
          gridRef.current.destroy();
        }
      }

      gridRef.current = configurarGrid();

      if (wrapperRef.current) {
        gridRef.current.render(wrapperRef.current);
      }
    }

    return () => {
      if (gridRef.current) {
        gridRef.current.destroy();
      }
    };
  }, [produtos, carregando]);

  const atualizarTabela = () => {
    atualizarProdutos();
    setModalAberto(false);
  };

  const renderizarModal = () => {
    switch (tipoModal) {
      case "Adicionar Produto":
        return (
          <ModalAdicionarProduto
            estahAberto={modalAberto}
            setAberto={setModalAberto}
            onProdutoAdicionado={atualizarTabela}
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
            onProdutoRemovido={atualizarTabela}
          />
        );
        case "Editar Produto":
          return(
            <ModalEditarProduto
            estahAberto={modalAberto}
            setAberto={setModalAberto}
            />
          )
      default:
        return null;
    }
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
        </BoxBotoes>
      </SecaoBotoes>
      {renderizarModal()}
      <SecaoTabela>
        {carregando ? <div>Carregando...</div> : <div ref={wrapperRef}></div>}
      </SecaoTabela>
    </Container>
  );
};

export default TelaEstoque;
