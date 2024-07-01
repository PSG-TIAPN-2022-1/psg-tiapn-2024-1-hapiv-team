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
import { ModalEditarProduto } from "./components/ModalEditarProduto/ModalEditarProduto.jsx";
import { Grid, h } from "gridjs";
import "gridjs/dist/theme/mermaid.css";
import { ptBR } from "gridjs/l10n";
import { obterProdutosAsync } from "./TelaEstoque.js";
import {
  adicionarPontoACadaTresDigitos,
  formatarValoresDecimaisComPontoEComVirgula,
  calcularPercentualLucro,
} from "../../../../utils/utils.js";

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
        { name: "ID", hidden: true },
        { name: "CATEGORIA", width: "11%", sort: true },
        { name: "FORNECEDOR", width: "13%", sort: true },
        { name: "DESCRIÇÃO", width: "13%", sort: true },
        { name: "QUANTIDADE", width: "12%", sort: true },
        { name: "PREÇO DE COMPRA", width: "14%", sort: true },
        { name: "PREÇO DE VENDA", width: "14%", sort: true },
        { name: "MARGEM LUCRO", width: "13%", sort: true },
        {
          name: "OPÇÕES",
          width: "11%",
          formatter: (_, row) => {
            const produto = produtos.find(
              (produto) => produto.produtoId === row.cells[0].data
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
        produto.produtoId,
        produto.categoria.tipoCategoria,
        produto.fornecedor.nome,
        produto.nome,
        adicionarPontoACadaTresDigitos(produto.quantidade),
        "R$ " +
          formatarValoresDecimaisComPontoEComVirgula(produto.precoDeCompra),
        "R$ " +
          formatarValoresDecimaisComPontoEComVirgula(produto.precoDeVenda),
        calcularPercentualLucro(produto.precoDeVenda, produto.precoDeCompra) +
          "%",
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

  const destruirGrid = () => {
    if (gridRef.current) {
      gridRef.current.destroy();
    }
  };

  useEffect(() => {
    if (!carregando) {
      destruirGrid();

      gridRef.current = configurarGrid();

      if (wrapperRef.current) {
        gridRef.current.render(wrapperRef.current);
      }
    }

    return destruirGrid;
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
            produto={produtoSelecionado}
            onProdutoAdicionado={atualizarTabela}
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
        return (
          <ModalEditarProduto
            estahAberto={modalAberto}
            setAberto={setModalAberto}
            produto={produtoSelecionado}
            onProdutoEditado={atualizarTabela}
          />
        );
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
