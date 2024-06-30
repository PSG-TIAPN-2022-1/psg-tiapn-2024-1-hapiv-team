import React, { useState } from "react";
import Modal from "../Modal/Modal";
import { ContainerModalEfetuarVenda } from "./ModalEfetuarVenda.style";
import { InputModal } from "../Modal/components/InputModal/InputModal";

export const ModalEfetuarVenda = ({
  estahAberto,
  setAberto,
  onProdutoAdicionado,
}) => {
  const [quantidade, setQuantidade] = useState("");

  return (
    <Modal
      estahAberto={estahAberto}
      setAberto={setAberto}
      titulo="Efetuar Venda"
      conteudo={
        <ContainerModalEfetuarVenda>
          <InputModal
            type="text"
            title="Quantidade"
            placeholder={"Quantidade de Produto"}
            onChange={(e) => setQuantidade(e.target.value)}
          />
        </ContainerModalEfetuarVenda>
      }
    />
  );
};