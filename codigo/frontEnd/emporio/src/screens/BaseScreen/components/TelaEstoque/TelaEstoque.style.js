import styled from "styled-components";

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
  justify-content: center;
  align-items: center;
  height: 20%;
  width: 80%;
  margin-top: 30px;
`;

export const BoxBotoes = styled.div`
  display: flex;

  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100%;
  gap: 40%;
`;

export const SecaoTabela = styled.div`
  display: flex;
  height: 80%;
  width: 95%;
  border-radius: 5px;
  margin-top: 10px;
`;

export const SecaoSelect = styled.div`
  display: flex;
  align-self: center;
  height: 10%;
  width: 40%;
  margin-left: 10%;
`;
