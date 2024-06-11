import styled from "styled-components";

export const BarraLateralBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 20%;
  height: 100%;
  border-radius: 6px;
  background-color: rgb(245, 245, 220);
`;

export const BarraLateralCabecalho = styled.div`
  display: flex;
  justify-content: center;
  height: 30%;
`;

export const BarraLateralLogo = styled.img`
  width: 170px;
`;

export const SecaoBotoes = styled.div`
  display: flex;
  flex-direction: column;
  height: 40%;
  padding: 16px;
  gap: 8px;
`;

export const SecaoInferior = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  height: 30%;
  padding: 16px;
`;
