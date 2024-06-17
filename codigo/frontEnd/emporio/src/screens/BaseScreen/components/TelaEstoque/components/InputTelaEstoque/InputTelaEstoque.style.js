import styled from "styled-components";


export const BoxInput = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px;
  margin: 8px;
  width: 40%;
  gap: 8px;
  border-radius: 5px;
  background-color: rgb(245, 245, 220);
`;

export const Input = styled.input`
  display: flex;
  text-align: left;
  border-radius: 5px;
  font-size: 14px;
  background-color: transparent;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: black;
    opacity: 1;
    font-size: 14px;
  }
`;