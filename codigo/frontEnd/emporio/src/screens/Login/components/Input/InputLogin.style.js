import styled from "styled-components";

export const BoxInput = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 30%;
  padding: 8px;
  margin: 8px;
  gap: 8px;
  border-radius: 5px;
  background-color: rgba(107, 75, 49, 0.461);
  cursor: pointer;
`;

export const LabelInput = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30%;
  height: 100%;
  padding: 4px;
  font-size: 16px;
  color: rgb(215, 206, 206);
  font-weight: 700;
  cursor: pointer;
`;

export const Input = styled.input`
  display: flex;
  justify-items: center;
  align-items: center;
  text-align: center;
  width: 100%;
  height: 100%;
  border: none;
  cursor: pointer;
  font-size: 12px;
  background-color: transparent;
`;
