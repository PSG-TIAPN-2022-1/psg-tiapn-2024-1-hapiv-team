import { api } from "../../config/api";

export const AdicionarProduto = async (produto) => {
  try {
    const produtoString = JSON.stringify(produto);
    const response = await api.put("/Produtos/Inserir", produtoString);
    alert(response);
  } catch (error) {
    alert(error);
  }
};

export const EditarProduto = async (produto) => {};

export const RemoverProduto = async (produto) => {};

export const VenderProduto = async (produto) => {};

export const ObterCategoriasProdutos = async () => {};

export const ObterProdutos = async () => {};
