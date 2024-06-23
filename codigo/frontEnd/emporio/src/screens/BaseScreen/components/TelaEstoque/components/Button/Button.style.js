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
  background-color: #F7E3DC;
  font-weight: 600;
  border: none;
  width: 10vw;
  &:hover {
    background-color: #ffdead;
  }
`;