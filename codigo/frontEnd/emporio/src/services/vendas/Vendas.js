import { api } from "../../config/api";

export const ObterVendas = async () => {
  try {
    const response = await api.get("/Vendas");
    console.log(response.data);
    return response;
  } catch (error) {
    return error.response.data;
  }
};

export const VenderProduto = async (venda) => {
  try {
    const vendaString = JSON.stringify(venda);
    await api.post("/Vendas/EfetuarVenda", vendaString);
  } catch (error) {
    return error.response.data;
  }
};
