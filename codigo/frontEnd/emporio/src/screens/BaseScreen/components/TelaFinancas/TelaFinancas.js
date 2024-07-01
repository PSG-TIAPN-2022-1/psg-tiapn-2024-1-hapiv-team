import { ObterVendas } from "../../../../services/vendas/Vendas.js";

export const obterVendasAsync = async () => {
  try {
    const response = await ObterVendas();
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
