import React, { useState } from "react";
import Modal from "../Modal/Modal";
import { InputModal } from "../Modal/components/InputModal/InputModal";
import { ContainerModalEditarProduto } from "./ModalEditarProduto.style";

export const ModalEditarProduto = ({
  estahAberto,
  setAberto,
  onProdutoAdicionado,
}) => {
  const [descricao, setDescricao] = useState("");
  const [fornecedor, setFornecedor] = useState("");
  const [categoria, setCategoria] = useState("");
  const [quantidade, setQuantidade] = useState("");
  const [precoCompra, setPrecoCompra] = useState("");
  const [precoVenda, setPrecoVenda] = useState("");

  return (
    <Modal
      estahAberto={estahAberto}
      setAberto={setAberto}
      titulo="Editar Produto"
      conteudo={
        <ContainerModalEditarProduto>
          <InputModal
            type="text"
            title="Descricao"
            placeholder="Descrição"
            onChange={(e) => setDescricao(e.target.value)}
          />
          <InputModal
            type="text"
            title="Fornecedor"
            placeholder="Fornecedor"
            onChange={(e) => setFornecedor(e.target.value)}
          />
          <InputModal
            type="text"
            title="Categoria"
            placeholder={"Categoria"}
            onChange={(e) => setCategoria(e.target.value)}
          />
          <InputModal
            type="text"
            title="Quantidade"
            placeholder={"Quantidade"}
            onChange={(e) => setQuantidade(e.target.value)}
          />
          <InputModal
            type="text"
            title="Preco de Compra"
            placeholder={"Preço de Compra"}
            onChange={(e) => setPrecoCompra(e.target.value)}
          />
          <InputModal
            type="text"
            title="Preco de Venda"
            placeholder={"Preço de Venda"}
            onChange={(e) => setPrecoVenda(e.target.value)}
          />
        </ContainerModalEditarProduto>
      }
    />
  );
};
