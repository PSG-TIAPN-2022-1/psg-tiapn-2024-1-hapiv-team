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
import { efetuarLogin } from "../../services/autenticacao/Autenticacao";

const Login = () => {
  const [visualizacao, setVisualizacao] = useState("login");
  const [usuario, setUsuario] = useState("hello@gmail.com");
  const [senha, setSenha] = useState("hellohello");

  const handleLogin = async () => {
    try {
      console.log(usuario, senha);
      const response = await efetuarLogin(usuario, senha);
      console.log(response); // ou faça o que quiser com a resposta
    } catch (error) {
      console.error(error);
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
                onChange={(e) => setUsuario(e.target.value)}
              />
              <InputLogin
                key="senha"
                icon="key"
                placeholder="Senha"
                type="password"
                onChange={(e) => setSenha(e.target.value)}
              />
            </SecaoInput>
            <SecaoBotao>
              <SubmitButton onClick={() => setVisualizacao("registrar")}>
                Registrar
              </SubmitButton>
              <SubmitButton onClick={handleLogin}>Entrar</SubmitButton>
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
