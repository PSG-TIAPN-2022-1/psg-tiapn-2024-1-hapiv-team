import {
  EfetuarLogin,
  Registrar,
  RecuperarSenha,
} from "../../services/autenticacao/Autenticacao";
import {
  verificarSeElementoEhNulo,
  verificarSeElementoEhMenor,
  compararElementos,
} from "../../utils/utils";

const handleLogin = async (usuario, senha) => {
  try {
    await EfetuarLogin(usuario, senha);
    return true;
  } catch (error) {
    alert(error);
    return false;
  }
};

const handleRegistrar = async (usuario, senha, alterarVisualizacao) => { // Receber a função como argumento
  try {
    await Registrar(usuario, senha);
    alterarVisualizacao("login"); 
  } catch (error) {
    alert(error);
  }
};


const handleRecuperarSenha = async (usuario) => {
  try {
    await RecuperarSenha(usuario);
  } catch (error) {
    alert(error);
  }
};

export const validarLogin = async (usuario, senha) => {
  if (verificarSeElementoEhNulo(usuario) || verificarSeElementoEhNulo(senha)) {
    alert("Preencha todos os campos!");
    return false;
  }

  try {
    const loginSucesso = await handleLogin(usuario, senha);
    if (loginSucesso) {
      return true;
    }
  } catch (error) {
    alert(error.message);
    return false;
  }
};

export const validarRegistro = (usuario, senha, senhaRepetida, alterarVisualizacao) => {
  if (
    verificarSeElementoEhNulo(usuario) ||
    verificarSeElementoEhNulo(senha) ||
    verificarSeElementoEhNulo(senhaRepetida)
  ) {
    alert("Preencha todos os campos!");
  } else if (verificarSeElementoEhMenor(senha, 8)) {
    alert("A senha deve conter no mínimo 8 caracteres!");
  } else if (!compararElementos(senha, senhaRepetida)) {
    alert("As senhas não são iguais!");
  } else {
    handleRegistrar(usuario, senha, alterarVisualizacao);
  }
};

export const validarRecuperacaoSenha = (usuario) => {
  if (verificarSeElementoEhNulo(usuario)) {
    alert("Preencha o campo com o seu email!");
  } else {
    handleRecuperarSenha(usuario);
  }
};
