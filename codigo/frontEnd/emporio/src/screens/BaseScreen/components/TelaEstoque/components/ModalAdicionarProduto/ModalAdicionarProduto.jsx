import React, { useState } from "react";
import Modal from "../Modal/Modal";
import { InputModal } from "../Modal/components/InputModal/InputModal";
import { SelectModal } from "../Modal/components/SelectModal/SelectModal";
import { ContainerModalAdicionarProduto } from "./ModalAdicionarProduto.style";
import { obterCategorias } from "./ModalAdicionarProduto";
import { handleAdicionarProduto } from "./ModalAdicionarProduto";

export const ModalAdicionarProduto = ({ estahAberto, setAberto }) => {
  const [descricao, setDescricao] = useState("");
  const [fornecedor, setFornecedor] = useState("");
  const [categoriaId, setCategoriaId] = useState("");
  const [quantidade, setQuantidade] = useState("");
  const [precoCompra, setPrecoCompra] = useState("");
  const [precoVenda, setPrecoVenda] = useState("");

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
          <SelectModal
            labelText="Categorias"
            options={obterCategorias()}
            onChange={(e) => setCategoriaId(e.target.value)}
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
        </ContainerModalAdicionarProduto>
      }
      confirmar={() =>
        handleAdicionarProduto(
          descricao,
          fornecedor,
          categoriaId,
          quantidade,
          precoCompra,
          precoVenda
        )
      }
    />
  );
};
