import styled from "styled-components";

export const ContainerButton = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  padding: 15px;
  gap: 12px;
  border-radius: 15px;
  font-size: 16px;
  font-family: Cambria;
  cursor: pointer;
  transition-duration: 0.4s;

  &:hover {
    background-color: #ffdead;
  }
`;

export const Icon = styled.span`
  margin-right: 10px;
  font-size: 25px;
`;
