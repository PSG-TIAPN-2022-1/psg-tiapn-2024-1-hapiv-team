import {
  EfetuarLogin,
  Registrar,
  RecuperarSenha,
} from "../../services/autenticacao/Autenticacao";

export const handleLogin = async (usuario, senha) => {
  try {
    const response = await EfetuarLogin(usuario, senha);
    console.log(response); //Redireconar para a próxima tela
  } catch (error) {
    console.error(error);
  }
};

export const handleRegistrar = async (usuario, senha) => {
  try {
    const response = await Registrar(usuario, senha);
    console.log(response); //Redireconar para a próxima tela
  } catch (error) {
    console.error(error);
  }
};

export const handleRecuperarSenha = async (usuario) => {
  try {
    console.log(usuario);
    const response = await RecuperarSenha(usuario);
    console.log(response); //Redirecionar para a próxima tela
  } catch (error) {
    console.error(error);
  }
};
