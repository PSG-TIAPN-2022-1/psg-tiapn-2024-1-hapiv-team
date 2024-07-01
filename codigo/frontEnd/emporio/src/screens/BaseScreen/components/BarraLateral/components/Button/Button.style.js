import styled from "styled-components";

export const ContainerButton = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  padding: 15px;
  gap: 12px;
  border-radius: 15px;
  font-size: 16px;
  font-weight: 400;
  font-family: Cambria;
  cursor: pointer;
  transition-duration: 0.4s;
  @media (max-width: 700px) {
    font-size: 10px;
    padding: 12px;
    gap: 1px;
  }

  &:hover {
    background-color: #ffdead;
  }
`;

export const Icon = styled.span`
  margin-right: 7%;
  font-size: 25px;
  @media (max-width: 700px) {
    font-size: 15px;
  }
`;
