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
    await AdicionarProduto({
      descricao,
      fornecedor,
      categoriaId,
      quantidade,
      precoCompra,
      precoVenda,
    });
  } catch (error) {
    console.error(error);
  }
};
