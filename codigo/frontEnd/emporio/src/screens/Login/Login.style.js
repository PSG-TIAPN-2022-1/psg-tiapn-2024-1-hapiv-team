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
  margin: auto;
  padding-bottom: 30px;
  height: 350px;
  width: 450px;
  justify-content: center;
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
`;

export const TituloLogin = styled.span`
  color: rgb(78, 44, 16);
  font-size: 48px;
  font-weight: 700;
  margin-top: 20px;
  text-decoration-offset: 100px;
`;

export const ImageIcon = styled.img`
  position: absolute;
  left: 10px;
`;

export const SubmitButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(78, 44, 16);
  border-radius: 7px;
  cursor: pointer;
  color: rgb(215, 206, 206);
  border: none;
  width: 250px;
  height: 25px;
  transition: 1s;
`;
