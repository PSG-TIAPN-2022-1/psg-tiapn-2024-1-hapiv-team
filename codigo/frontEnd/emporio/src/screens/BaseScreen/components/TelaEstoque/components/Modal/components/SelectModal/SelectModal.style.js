import styled from "styled-components";

export const ContainerSelect = styled.div`
  display: flex;
  width: 32%;
  border: 2px solid black;
  border-radius: 5px;
  background-color: rgb(245, 245, 220);
  margin-left: 4%;
  margin-right: 5%
`;

export const LabelSelect = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  width: 100%;
  height: 40%;
  padding: 4px 6px;
`;

export const Select = styled.select`
  width: 100%;
  font-size: 14px;
  font-family: Cambria;
  text-align: center;
  margin-left: 9%;
  border: 0.5px solid black;
  border-radius: 4px;
  background-color: transparent;
`;