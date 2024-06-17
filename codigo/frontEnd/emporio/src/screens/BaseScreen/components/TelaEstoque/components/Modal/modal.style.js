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
  margin: auto;
  padding: 20px;
  border: 2px solid #888;
  width: 30%; 
  max-height: 90vh;
  overflow-y: auto; 
  border-radius: 10px;
   background-color: #FBF2EF;
`;
export const Title = styled.h2`
  text-align: center;
`;

export const Content = styled.div`
  margin-top: 20px;
`;

export const Buttons = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-around;
`;

export const Button = styled.button`
  padding: 10px 20px;
  display: inline-block;
`;