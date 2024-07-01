import { VenderProduto } from "../../../../../../services/vendas/Vendas.js";
import {
  verificarSeEhPositivo,
  verificarSeNumeroEhMenor,
} from "../../../../../../utils/utils.js";

const validarCampos = (produto, quantidade) => {
  if (!verificarSeEhPositivo(quantidade)) {
    alert("Preencha a quantidade com um número positivo");
    return false;
  }

  if (verificarSeNumeroEhMenor(produto.quantidade, quantidade)) {
    alert("Quantidade maior que a disponível em estoque!");
    return false;
  }

  return true;
};

export const handleVenderProduto = async (produto, quantidade) => {
  if (!validarCampos(produto, quantidade)) {
    return false;
  }

  const venda = [
    {
      produtoId: produto.produtoId,
      quantidade: quantidade,
    },
  ];

  try {
    await VenderProduto(venda);
    alert("Produto vendido com sucesso");
    return true;
  } catch (error) {
    alert("Erro ao vender produto");
    return false;
  }
};
