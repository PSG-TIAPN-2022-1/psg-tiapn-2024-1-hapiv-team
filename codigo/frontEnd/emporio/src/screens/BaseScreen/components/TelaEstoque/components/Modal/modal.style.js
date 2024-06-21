import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  border: 2px solid #888;
  width: 60%;
  height: 60%;
  border-radius: 10px;
  background-color: rgb(245, 245, 220);
`;

export const SecaoTitulo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 15%;
  border-bottom: 1px solid #888;
`;

export const Titulo = styled.h2``;

export const FecharModal = styled.div`
  display: flex;
`;

export const BotaoFecharModal = styled.span`
  display: flex;
  font-size: 20px;
  cursor: pointer;
`;

export const SecaoConteudo = styled.div`
  display: flex;
  width: 60%;
  height: 70%;
`;

export const SecaoBotoes = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 15%;
  border-top: 1px solid #888;
`;
