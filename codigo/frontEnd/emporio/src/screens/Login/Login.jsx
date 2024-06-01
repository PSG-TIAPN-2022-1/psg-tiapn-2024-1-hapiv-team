import React from "react";
import {
  TelaLogin,
  ContainerLogin,
  CabecalhoLogin,
  TituloLogin,
  SecaoInput,
  SecaoBotao,
  SubmitButton,
} from "./Login.style";
import { InputLogin } from "./components/Input/InputLogin";

const Login = () => {
  return (
    <TelaLogin>
      <ContainerLogin>
        <CabecalhoLogin>
          <TituloLogin>Login</TituloLogin>
        </CabecalhoLogin>
        <SecaoInput>
          <InputLogin icon="person" placeholder="Usuário" type="text" />
          <InputLogin icon="key" placeholder="Senha" type="password" />
        </SecaoInput>
        <SecaoBotao>
          <SubmitButton>Entrar</SubmitButton>
          <SubmitButton>Cadastrar</SubmitButton>
        </SecaoBotao>
      </ContainerLogin>
    </TelaLogin>
  );
};

export default Login;
