import styled from "styled-components";
import img from "../../Assets/img/background-login.jpg";

export const TelaLogin = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background-image: url(${img});
  background-size: cover;
`;

export const ContainerLogin = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  padding-bottom: 30px;
  min-height: 350px;
  width: 450px;
  box-sizing: border-box;
  background-color: rgba(175, 135, 94, 0.585);
  border-radius: 5%;
`;

export const CabecalhoLogin = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  width: 100%;
  padding: 10px;
  text-decoration: underline rgb(78, 44, 16);
`;

export const TituloLogin = styled.span`
  color: rgb(78, 44, 16);
  font-size: 48px;
  font-weight: 700;
  margin: 16px;
`;

export const SecaoInput = styled.div`
  display: flex;
  flex-direction: column;
  width: 65%;
  height: auto;
`;

export const SecaoBotao = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 100%;
  height: 25px;
  gap: 10px;
  margin-top: 12px;
`;

export const SubmitButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(78, 44, 16);
  border-radius: 7px;
  cursor: pointer;
  color: rgb(215, 206, 206);
  font-size: 16px;
  border: none;
  width: 40%;
  height: 100%;
  transition: 1s;
`;

export const EsqueceuSenha = styled.span`
  color: rgb(00, 00, 00);
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  text-decoration: underline;
  margin-top: 12px;
`;
