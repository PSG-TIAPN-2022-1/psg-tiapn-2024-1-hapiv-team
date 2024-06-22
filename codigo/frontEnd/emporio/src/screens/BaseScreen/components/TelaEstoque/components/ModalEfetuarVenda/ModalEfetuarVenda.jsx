import React from "react";
import Modal from "../Modal/Modal";

export const ModalEfetuarVenda = ({ estahAberto, setAberto }) => (
  <Modal
    estahAberto={estahAberto}
    setAberto={setAberto}
    titulo="Efetuar Venda"
    conteudo={<></>}
  />
);
