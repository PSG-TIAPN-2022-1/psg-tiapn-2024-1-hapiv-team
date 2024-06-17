import styled from "styled-components";

export const ContainerButton = styled.button`
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
