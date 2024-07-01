import { RemoverProduto } from "../../../../../../services/estoque/Estoque.js";

export const handleRemoverProduto = async (produto) => {
  try {
    await RemoverProduto(produto);
    alert("Produto removido com sucesso");
    return true;
  } catch (error) {
    alert("Erro ao remover produto");
    return false;
  }
};
