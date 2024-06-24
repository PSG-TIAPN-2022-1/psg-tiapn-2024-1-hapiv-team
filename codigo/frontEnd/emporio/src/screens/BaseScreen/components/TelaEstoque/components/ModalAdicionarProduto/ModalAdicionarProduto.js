import { AdicionarProduto } from "../../../../../../services/estoque/Estoque.js";

export const obterCategorias = () => {
  return [
    { value: "Todos", label: "Todos" },
    { value: "Bebidas", label: "Bebidas" },
    { value: "Carnes", label: "Carnes" },
    { value: "Frutas", label: "Frutas" },
    { value: "Legumes", label: "Legumes" },
    { value: "Laticínios", label: "Laticínios" },
    { value: "Limpeza", label: "Limpeza" },
    { value: "Outros", label: "Outros" },
  ];
};

export const handleAdicionarProduto = async (
  descricao,
  fornecedor,
  categoriaId,
  quantidade,
  precoCompra,
  precoVenda
) => {
  try {
    // Criação do objeto
    const produto = {
      descricao: descricao,
      fornecedor: fornecedor,
      categoriaId: categoriaId,
      quantidade: quantidade,
      precoCompra: precoCompra,
      precoVenda: precoVenda,
    };

    // Converte o objeto em uma string JSON
    const produtoString = JSON.stringify(produto);
    console.log(produtoString);
  } catch (error) {
    console.error(error);
  }
};
