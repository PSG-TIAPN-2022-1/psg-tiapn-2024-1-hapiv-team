import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  .gridjs-head {
    width: 80%;
  }
`;

export const TelaBase = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
`;

export const ContainerBase = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Cabecalho = styled.div`
  display: flex;
  align-items: center;
  height: 15%;
  font-size: 24px;
  margin-bottom: 10px;
`;

export const Titulo = styled.h3`
  font-size: 20px;
  font-family: Cambria;
  padding-left: 45px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  height: 40px;
  cursor: pointer;
  border-radius: 5px;
  padding: 10px;
  font-family: Cambria;
  transition-duration: 0.4s;
  background-color: rgb(245, 245, 220);
  font-weight: 600;
  border: none;

  &:hover {
    background-color: #ffdead;
  }
`;

export const SecaoBotoes = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 95%;
  height: 5%;
  margin-top: 10px;
`;

export const BoxBotoes = styled.div`
  display: flex;
  justify-content: end;
  align-items: end;
  width: 15%;
  margin-right: 30px;
  height: 1%;
  gap: 40%;
`;

export const SecaoTabela = styled.div`
  display: flex;
  height: 90%;
  width: 95%;
  align-self: center;
`;
