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
  SecaoSenha,
  EsqueceuOuAlterarSenha,
} from "./Login.style";
import { InputLogin } from "./components/Input/InputLogin";

const Login = () => {
  const [ehRegistrado, setEhRegistrado] = useState(true);
  const [esqueceuSenha, setEsqueceuSenha] = useState(false);
  const [alterarSenha, setAlterarSenha] = useState(false);

  const clicouRegistrar = () => {
    setEhRegistrado(!ehRegistrado);
  };

  const clicouEsqueceuSenha = () => {
    setEsqueceuSenha(!esqueceuSenha);
  };

  const clicouAlterarSenha = () => {
    setAlterarSenha(!alterarSenha);
  };

  return (
    <TelaLogin>
      <ContainerLogin>
        <CabecalhoLogin>
          <TituloLogin>{!ehRegistrado ? "Registrar" : "Login"}</TituloLogin>
        </CabecalhoLogin>
        <SecaoInput>
          {!ehRegistrado ? (
            <>
              <InputLogin
                key={!ehRegistrado ? "registrar" : "logar"}
                icon="person"
                placeholder="Usuário"
                type="text"
              />
              <InputLogin
                key={!ehRegistrado ? "registrarEmail" : ""}
                icon="email"
                placeholder="Email"
                type="email"
              />
              <InputLogin
                key={!ehRegistrado ? "registrarSenha" : "loginSenha"}
                icon="key"
                placeholder="Senha"
                type="password"
              />
              <InputLogin
                key={!ehRegistrado ? "registrarRepetirSenha" : ""}
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
          <SubmitButton onClick={clicouRegistrar}>
            {!ehRegistrado ? "Login" : "Registrar"}
          </SubmitButton>
          <SubmitButton>{!ehRegistrado ? "Registrar" : "Entrar"}</SubmitButton>
        </SecaoBotao>
        {ehRegistrado && (
          <SecaoSenha>
            <EsqueceuOuAlterarSenha onClick={clicouEsqueceuSenha}>
              Esqueceu a senha?
            </EsqueceuOuAlterarSenha>
            <EsqueceuOuAlterarSenha onClick={clicouAlterarSenha}>
              Alterar a senha
            </EsqueceuOuAlterarSenha>
          </SecaoSenha>
        )}
      </ContainerLogin>
    </TelaLogin>
  );
};

export default Login;
