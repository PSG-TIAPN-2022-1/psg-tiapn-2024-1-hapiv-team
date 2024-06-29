import { RemoverProduto } from "../../../../../../services/estoque/Estoque.js";

export const handleRemoverProduto = async (produto) => {
  try {
    console.log(produto);
    await RemoverProduto(produto);
    return true;
  } catch (error) {
    alert("Erro ao remover produto");
    return false;
  }
};
