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
import { handleLogin, handleRegistrar, handleRecuperarSenha } from "./Login.js";

const Login = () => {
  const [visualizacao, setVisualizacao] = useState("login");
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");
  const [senharepetida, setSenhaRepetida] = useState("");

  
  function verificarSenha(x, y){
    if (x === y && x !== "" && x !== null){
      handleRegistrar(usuario, setSenha)
      alert("Deu")
    }else{
      alert("Senhas não são iguais, ou senha vazia")
    }
  };

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
                key="email-Esqueceu-Senha"
                icon="email"
                placeholder="Email"
                type="email"
                onChange={(value) => setUsuario(value)}
              />
            </SecaoInput>
            <SecaoBotao>
              <SubmitButton onClick={() => setVisualizacao("login")}>
                Voltar
              </SubmitButton>
              <SubmitButton onClick={() => handleRecuperarSenha(usuario)}>
                Enviar Email
              </SubmitButton>
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
                key="email-Registrar"
                icon="email"
                placeholder="Email"
                type="email"
                onChange={(value) => setUsuario(value)}
              />
              <InputLogin
                key="senha"
                icon="key"
                placeholder="Senha"
                type="password"
                onChange={(value) => setSenha(value)}
              />
              <InputLogin
                key="repetirSenha"
                icon="key"
                placeholder="Repetir Senha"
                type="password"
                onChange={(value) => setSenhaRepetida(value)}
              />
            </SecaoInput>
            <SecaoBotao>
              <SubmitButton onClick={() => setVisualizacao("login")}>
                Voltar
              </SubmitButton>
              <SubmitButton
                onClick={() => {
                  if (verificarSenha(senha, senharepetida))
                    handleRegistrar(usuario, setSenha);
                }}
              >
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
                key="usuario-Login"
                icon="email"
                placeholder="Email"
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
