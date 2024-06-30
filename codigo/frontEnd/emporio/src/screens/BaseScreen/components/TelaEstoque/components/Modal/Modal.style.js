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
  z-index: 1000;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  border: 2px solid #888;
  justify-content: center;
  border-radius: 10px;
  background-color: rgb(245, 245, 220);
  padding: 28px;
  gap: 20px;
  max-width: 61%;
`;

export const SecaoTitulo = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  border-bottom: 1px solid;
  height: 15%;
  margin-bottom: 10px;
`;

export const Titulo = styled.h2`
  flex-grow: 1;
  margin-bottom: 13px;
`;

export const FecharModal = styled.div`
  padding: 5px 3px;
  align-self: flex-end;
`;

export const BotaoFecharModal = styled.span`
  display: flex;
  font-size: 25px;
  cursor: pointer;
  
`;

export const SecaoConteudo = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export const SecaoBotoes = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 15%;
  border-top: 1px solid;
  gap: 30%;
`;
