import { api } from "../../config/api";

export const AdicionarProduto = async (produto) => {
  try {
    const produtoString = JSON.stringify(produto);
    const response = await api.put("/Produtos/Inserir", produtoString);
    alert(response);
  } catch (error) {
    throw error;
  }
};

export const EditarProduto = async (produto) => {};

export const RemoverProduto = async (produto) => {
  try {
    const response = await api.delete("/Produtos/Deletar", {
      data: produto.produtoId,
    });
    alert(response);
  } catch (error) {
    throw error;
  }
};

export const VenderProduto = async (produto) => {};

export const ObterProdutos = async () => {
  try {
    const response = await api.get("/Produtos");
    // console.log(response);
    return response;
  } catch (error) {
    throw error;
  }
};
