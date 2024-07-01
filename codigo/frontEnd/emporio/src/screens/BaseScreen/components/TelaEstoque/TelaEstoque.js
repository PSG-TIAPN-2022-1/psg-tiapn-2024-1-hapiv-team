import { ObterProdutos } from "../../../../services/estoque/Estoque.js";

export const obterProdutosAsync = async () => {
  try {
    const response = await ObterProdutos();
    if (response && response.data) {
      return response.data;
    } else {
      return [];
    }
  } catch (error) {
    alert(error);
    return [];
  }
};
