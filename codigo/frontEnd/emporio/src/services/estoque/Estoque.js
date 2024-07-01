import { api } from "../../config/api";

export const AdicionarProduto = async (produto) => {
  try {
    const produtoString = JSON.stringify(produto);
    await api.put("/Produtos/Inserir", produtoString);
  } catch (error) {
    throw error;
  }
};

export const EditarProduto = async (produto) => {
  try {
    const produtoString = JSON.stringify(produto);
    await api.patch("/Produtos/Atualizar", produtoString);
  } catch (error) {
    throw error;
  }
};

export const RemoverProduto = async (produto) => {
  try {
    await api.delete("/Produtos/Deletar", {
      data: produto.produtoId,
    });
  } catch (error) {
    throw error;
  }
};

export const ObterProdutos = async () => {
  try {
    const response = await api.get("/Produtos");
    return response;
  } catch (error) {
    throw error;
  }
};
