import styled from "styled-components";

export const ContainerButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 40px;
  cursor: pointer;
  border-radius: 5px;
  padding: 10px;
  font-family: Cambria;
  transition-duration: 0.4s;
  background-color: #f7e3dc;
  font-weight: 600;
  border: none;
  margin: 20px;

  &:hover {
    background-color: #ffdead;
  }
`;
