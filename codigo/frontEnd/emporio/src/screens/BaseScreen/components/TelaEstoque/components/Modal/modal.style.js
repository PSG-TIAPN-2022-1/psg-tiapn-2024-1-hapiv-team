import styled from 'styled-components';

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 1050;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.5);
`;
export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: auto;
  padding: 20px;
  border: 2px solid #888;
  width: 60%; 
  overflow-y: auto; 
  border-radius: 10px;
  background-color: rgb(245, 245, 220);
`;
export const Title = styled.h2`
  text-align: center;
`;

export const Content = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 60%;
  justify-content: space-between;
`;

export const Buttons = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  width: 30%
`;

export const Button = styled.button`
  padding: 10px 20px;
  display: inline-block;
`;