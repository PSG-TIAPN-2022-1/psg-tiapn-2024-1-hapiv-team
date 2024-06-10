import { efetuarLogin } from "../../services/autenticacao/Autenticacao";

export const handleLogin = async (usuario, senha) => {
  try {
    const response = await efetuarLogin(usuario, senha);
    console.log(response);
  } catch (error) {
    console.error(error);
  }
};
