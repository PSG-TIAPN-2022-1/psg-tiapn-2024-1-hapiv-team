import React from "react";
import Modal from "../Modal/Modal";
import { handleRemoverProduto } from "./ModalRemoverProduto.js";
import { RemoverT } from "./ModalRemoverProduto.style.js";

export const ModalRemoverProduto = ({ setAberto, estahAberto, produto }) => {
  const handleConfirmar = async () => {
    // console.log(produto);
    handleRemoverProduto(produto);
    setAberto(false);
  };

  return (
    <Modal
      estahAberto={estahAberto}
      setAberto={setAberto}
      titulo="Remover Produto"
      conteudo={
        <div>
          <RemoverT>Tem certeza que deseja remover o produto {produto.nome}?</RemoverT>
        </div>
      }
      confirmar={handleConfirmar}
    />
  );
};
