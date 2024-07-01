import React, { useState } from "react";
import Modal from "../Modal/Modal";
import { ContainerModalEfetuarVenda } from "./ModalEfetuarVenda.style";
import { InputModal } from "../Modal/components/InputModal/InputModal";
import { handleVenderProduto } from "./ModalEfetuarVenda";

export const ModalEfetuarVenda = ({
  estahAberto,
  setAberto,
  produto,
  onProdutoAdicionado,
}) => {
  const [quantidade, setQuantidade] = useState("");

  const handleConfirmar = async () => {
    const produtoVendido = await handleVenderProduto(produto, quantidade);

    if (produtoVendido) onProdutoAdicionado();
  };

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
      confirmar={handleConfirmar}
    />
  );
};
