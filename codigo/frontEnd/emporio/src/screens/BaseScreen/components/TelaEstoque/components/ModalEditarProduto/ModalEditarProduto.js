import { EditarProduto } from "../../../../../../services/estoque/Estoque.js";
import {
  verificarSeElementoEhNulo,
  verificarSeEhPositivo,
} from "../../../../../../utils/utils.js";

const validarCampos = (
  id,
  nome,
  fornecedor,
  categoriaId,
  quantidade,
  precoCompra,
  precoVenda
) => {
  if (
    verificarSeElementoEhNulo(id) ||
    verificarSeElementoEhNulo(nome) ||
    verificarSeElementoEhNulo(fornecedor) ||
    verificarSeElementoEhNulo(categoriaId)
  ) {
    alert("Preencha todos os campos");
    return false;
  } else if (
    !verificarSeEhPositivo(quantidade) ||
    !verificarSeEhPositivo(precoCompra) ||
    !verificarSeEhPositivo(precoVenda)
  ) {
    alert("Preencha os campos de quantidade e preços com números positivos");
    return false;
  }

  return true;
};

export const handleEditarProduto = async (
  id,
  nome,
  quantidade,
  precoCompra,
  precoVenda,
  categoria,
  fornecedor
) => {
  if (
    !validarCampos(
      id,
      nome,
      fornecedor,
      categoria,
      quantidade,
      precoCompra,
      precoVenda
    )
  ) {
    return false;
  }

  const produto = [
    {
      produtoId: id,
      nome: nome,
      precoDeCompra: precoCompra,
      precoDeVenda: precoVenda,
      quantidade: quantidade,
      categoria: categoria,
      fornecedor: fornecedor,
    },
  ];

  try {
    await EditarProduto(produto);
    alert("Produto editado com sucesso");
    return true;
  } catch (error) {
    alert("Erro ao editar produto");
    return false;
  }
};
