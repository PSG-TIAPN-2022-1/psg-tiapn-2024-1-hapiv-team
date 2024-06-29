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
import {
  validarLogin,
  validarRecuperacaoSenha,
  validarRegistro,
} from "./Login.js";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [visualizacao, setVisualizacao] = useState("login");
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");
  const [senhaRepetida, setSenhaRepetida] = useState("");

  const navigate = useNavigate();

  const limparCampos = () => {
    setUsuario("");
    setSenha("");
    setSenhaRepetida("");
  };

  const alterarVisualizacao = (novaVisualizacao) => {
    limparCampos();
    setVisualizacao(novaVisualizacao);
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
              <SubmitButton onClick={() => alterarVisualizacao("login")}>
                Voltar
              </SubmitButton>
              <SubmitButton onClick={() => validarRecuperacaoSenha(usuario)}>
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
                key="senha-Registrar"
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
              <SubmitButton onClick={() => alterarVisualizacao("login")}>
                Voltar
              </SubmitButton>
              <SubmitButton
                onClick={async () => {
                  const registroSucesso = await validarRegistro(
                    usuario,
                    senha,
                    senhaRepetida
                  );
                  if (registroSucesso) {
                    alterarVisualizacao("login");
                  }
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
                key="email-Login"
                icon="email"
                placeholder="Email"
                type="text"
                onChange={(value) => setUsuario(value)}
              />
              <InputLogin
                key="senha-Login"
                icon="key"
                placeholder="Senha"
                type="password"
                onChange={(value) => setSenha(value)}
              />
            </SecaoInput>
            <SecaoBotao>
              <SubmitButton onClick={() => alterarVisualizacao("registrar")}>
                Registrar
              </SubmitButton>
              <SubmitButton
                onClick={async () => {
                  const loginSucesso = await validarLogin(usuario, senha);
                  if (loginSucesso) {
                    navigate("/base");
                  }
                }}
              >
                Entrar
              </SubmitButton>
            </SecaoBotao>
            <EsqueceuSenha onClick={() => alterarVisualizacao("esqueceuSenha")}>
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
