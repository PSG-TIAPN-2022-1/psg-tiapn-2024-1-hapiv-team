import React, { useState } from "react";
import Modal from "../Modal/Modal";
import { InputModal } from "../Modal/components/InputModal/InputModal";
import { ContainerModalAdicionarProduto } from "./ModalAdicionarProduto.style";
import { handleAdicionarProduto } from "./ModalAdicionarProduto";

export const ModalAdicionarProduto = ({
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

  const handleConfirmar = async () => {
    const produtoAdicionado = await handleAdicionarProduto(
      descricao,
      fornecedor,
      categoria,
      quantidade,
      precoCompra,
      precoVenda
    );

    if (produtoAdicionado) onProdutoAdicionado();
  };

  return (
    <Modal
      estahAberto={estahAberto}
      setAberto={setAberto}
      titulo="Adicionar Produto"
      conteudo={
        <ContainerModalAdicionarProduto>
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
            placeholder={"Preço de Compra: R$ "}
            onChange={(e) => setPrecoCompra(e.target.value)}
          />
          <InputModal
            type="text"
            title="Preco de Venda"
            placeholder={"Preço de Venda: R$ "}
            onChange={(e) => setPrecoVenda(e.target.value)}
          />
        </ContainerModalAdicionarProduto>
      }
      confirmar={handleConfirmar}
    />
  );
};
