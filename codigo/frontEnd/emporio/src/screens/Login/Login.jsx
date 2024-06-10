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
import { handleLogin } from "./Login.js";

const Login = () => {
  const [visualizacao, setVisualizacao] = useState("login");
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");

  const renderizarPagina = () => {
    switch (visualizacao) {
      case "esqueceuSenha":
        return (
          <>
            <CabecalhoLogin>
              <TituloLogin>Esqueceu a Senha</TituloLogin>
            </CabecalhoLogin>
            <SecaoInput>
              <InputLogin
                key="email"
                icon="email"
                placeholder="Email"
                type="email"
              />
            </SecaoInput>
            <SecaoBotao>
              <SubmitButton onClick={() => setVisualizacao("login")}>
                Voltar
              </SubmitButton>
              <SubmitButton>Enviar Email</SubmitButton>
            </SecaoBotao>
          </>
        );
      case "registrar":
        return (
          <>
            <CabecalhoLogin>
              <TituloLogin>Registrar</TituloLogin>
            </CabecalhoLogin>
            <SecaoInput>
              <InputLogin
                key="usuario"
                icon="person"
                placeholder="Usuário"
                type="text"
              />
              <InputLogin
                key="email"
                icon="email"
                placeholder="Email"
                type="email"
              />
              <InputLogin
                key="senha"
                icon="key"
                placeholder="Senha"
                type="password"
              />
              <InputLogin
                key="repetirSenha"
                icon="key"
                placeholder="Repetir Senha"
                type="password"
              />
            </SecaoInput>
            <SecaoBotao>
              <SubmitButton onClick={() => setVisualizacao("login")}>
                Voltar
              </SubmitButton>
              <SubmitButton onClick={() => setVisualizacao("registrar")}>
                Registrar
              </SubmitButton>
            </SecaoBotao>
          </>
        );
      default:
        return (
          <>
            <CabecalhoLogin>
              <TituloLogin>Login</TituloLogin>
            </CabecalhoLogin>
            <SecaoInput>
              <InputLogin
                key="usuario"
                icon="person"
                placeholder="Usuário"
                type="text"
                onChange={(value) => setUsuario(value)}
              />
              <InputLogin
                key="senha"
                icon="key"
                placeholder="Senha"
                type="password"
                onChange={(value) => setSenha(value)}
              />
            </SecaoInput>
            <SecaoBotao>
              <SubmitButton onClick={() => setVisualizacao("registrar")}>
                Registrar
              </SubmitButton>
              <SubmitButton onClick={() => handleLogin(usuario, senha)}>
                Entrar
              </SubmitButton>
            </SecaoBotao>
            <EsqueceuSenha onClick={() => setVisualizacao("esqueceuSenha")}>
              Esqueceu a senha?
            </EsqueceuSenha>
          </>
        );
    }
  };

  return (
    <TelaLogin>
      <ContainerLogin>{renderizarPagina()}</ContainerLogin>
    </TelaLogin>
  );
};

export default Login;
