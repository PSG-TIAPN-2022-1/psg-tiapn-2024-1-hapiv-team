import { api } from "../../config/api";

export const AdicionarProduto = async (produto) => {
  let produtos = [];

  try {
    const produtoObj = JSON.parse(produto);

    produtos.push(produtoObj);

    console.log("Produto adicionado com sucesso!");
  } catch (error) {
    console.error("Erro ao adicionar produto: ", error);
  }
};

export const EditarProduto = async (produto) => {};

export const RemoverProduto = async (produto) => {};

export const VenderProduto = async (produto) => {};

export const ObterCategoriasProdutos = async () => {};

export const ObterProdutos = async () => {};
