import styled from "styled-components";

export const BoxInput = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 380px;
  gap: 8px;
  border-radius: 5px;
  background-color: rgb(245, 245, 220);
`;

export const Input = styled.input`
  display: flex;
  text-align: left;
  border-radius: 5px;
  font-size: 14px;
  width: 80%;
  height: 40%;
  padding: 5px;
  background-color: transparent;

  &::placeholder {
    color: gray;
    opacity: 2;
    font-weight: 500;
    font-size: 14px;
  }
`;
