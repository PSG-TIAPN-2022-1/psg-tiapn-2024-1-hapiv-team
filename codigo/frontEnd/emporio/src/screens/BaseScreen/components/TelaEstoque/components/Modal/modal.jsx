import React from "react";
import {
  ModalContainer,
  ModalContent,
  Title,
  Content,
  Buttons,
} from "./Modal.style";
import { Button } from "../Button/Button";

export default function Modal({ isOpen, setModalOpen, title, children }) {
  if (!isOpen) {
    return null;
  }

  return (
    <ModalContainer>
      <ModalContent>
        <Title>{title}</Title>
        <Content>{children}</Content>
        <Buttons>
          <Button title="Close" onClick={() => setModalOpen(false)} />
          <Button title={"Salvar"} />
        </Buttons>
      </ModalContent>
    </ModalContainer>
  );
}
