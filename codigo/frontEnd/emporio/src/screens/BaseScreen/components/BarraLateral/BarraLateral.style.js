import styled from "styled-components";
import { Link as RouterLink } from 'react-router-dom';

export const Link = styled(RouterLink)`
  text-decoration: none;
  color: inherit;
  }
`;

export const BarraLateralBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 20%;
  height: 100%;
  border-radius: 6px;
  background-color: rgb(245, 245, 220);
  position: fixed; 
  z-index: 1000; 
`;

export const BarraLateralCabecalho = styled.div`
  display: flex;
  justify-content: center;
  height: 30%;
`;

export const BarraLateralLogo = styled.img`
  width: 100%;

`;

export const SecaoBotoes = styled.div`
  display: flex;
  flex-direction: column;
  height: 40%;
  width: 100%;
  padding: 16px;
  gap: 10px;
`;


export const SecaoInferior = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  height: 30%;
  width: 100%;
  padding: 16px;
`;