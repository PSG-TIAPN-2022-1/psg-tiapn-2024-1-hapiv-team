import styled from "styled-components";

export const ContainerButton = styled.div`
  display: flex;
  text-align: center;
  padding: 15px;
  border-radius: 5px;
  font-family: Cambria;
  cursor: pointer;
  transition-duration: 0.4s; 
  height: 50%;

  &:hover {
    background-color: #ffdead;
  }
`;
