import React from "react";
import { useState } from "react";
import {
  TelaLogin,
  ContainerLogin,
  CabecalhoLogin,
  TituloLogin,
  SecaoInput,
  SecaoBotao,
  SubmitButton,
  EsqueceuSenha,
} from "./Login.style";
import { InputLogin } from "./components/Input/InputLogin";

const Login = () => {
  const [isRegister, setIsRegister] = useState(false);

  const handleButtonClick = () => {
    setIsRegister(!isRegister);
  };

  return (
    <TelaLogin>
      <ContainerLogin>
        <CabecalhoLogin>
          <TituloLogin>{isRegister ? "Registrar" : "Login"}</TituloLogin>
        </CabecalhoLogin>
        <SecaoInput>
          {isRegister ? (
            <>
              <InputLogin
                key={isRegister ? "registerUser" : "loginUser"}
                icon="person"
                placeholder="Usuário"
                type="text"
              />
              <InputLogin
                key={isRegister ? "registerEmail" : ""}
                icon="email"
                placeholder="Email"
                type="email"
              />
              <InputLogin
                key={isRegister ? "registerPassword" : "loginPassword"}
                icon="key"
                placeholder="Senha"
                type="password"
              />
              <InputLogin
                key={isRegister ? "registerRepeatPassword" : ""}
                icon="key"
                placeholder="Repetir Senha"
                type="password"
              />
            </>
          ) : (
            <>
              <InputLogin icon="person" placeholder="Usuário" type="text" />
              <InputLogin icon="key" placeholder="Senha" type="password" />
            </>
          )}
        </SecaoInput>
        <SecaoBotao>
          <SubmitButton onClick={handleButtonClick}>
            {isRegister ? "Login" : "Registrar"}
          </SubmitButton>
          <SubmitButton>{isRegister ? "Registrar" : "Entrar"}</SubmitButton>
        </SecaoBotao>
        {!isRegister && <EsqueceuSenha>Esqueceu a senha?</EsqueceuSenha>}
      </ContainerLogin>
    </TelaLogin>
  );
};

export default Login;
