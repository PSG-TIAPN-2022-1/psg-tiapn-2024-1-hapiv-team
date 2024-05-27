import React from "react";
import {
  ContainerLogin,
  CabecalhoLogin,
  TituloLogin,
  TelaLogin,
  SubmitButton,
} from "./Login.style";
import { InputLogin } from "./components/Input/InputLogin";

const Login = () => {
  return (
    <TelaLogin>
      <ContainerLogin>
        <CabecalhoLogin>
          <TituloLogin>Login</TituloLogin>
          <div className="underLine"></div>
        </CabecalhoLogin>
        <InputLogin placeholder="Nome do usuário" type="text" />
        <InputLogin placeholder="Senha" type="password" />
        <div className="submit-container">
          <SubmitButton>Entrar</SubmitButton>
        </div>
      </ContainerLogin>
    </TelaLogin>
  );
};

export default Login;
