import React from "react";
import {
  ContainerLogin,
  CabecalhoLogin,
  TituloLogin,
  TelaLogin,
  SubmitButton,
  Link,
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
        <div> 
          <Link>Não Possui login? <a href="google.com"> Clique aqui</a></Link>
        </div>
      </ContainerLogin>
    </TelaLogin>
  );
};

export default Login;
