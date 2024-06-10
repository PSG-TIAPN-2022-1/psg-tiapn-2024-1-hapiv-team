import { api } from "../../config/api";

export const EfetuarLogin = async (email, senha) => {
  const response = await api.post("/Gerentes/Login", { email, senha });
  return response;
};

export const Registrar = async (email, senha) => {
  const response = await api.put("/Gerentes/Cadastrar", { email, senha });
  return response;
};

export const RecuperarSenha = async (email) => {
  const response = await api.post("/Gerentes/RecuperarSenha", email);
  return response;
};
