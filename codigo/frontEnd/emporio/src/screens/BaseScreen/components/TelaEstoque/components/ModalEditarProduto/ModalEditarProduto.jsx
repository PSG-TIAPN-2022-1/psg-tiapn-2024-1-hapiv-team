import React, { useState } from "react";
import Modal from "../Modal/Modal";
import { InputModal } from "../Modal/components/InputModal/InputModal";
import { ContainerModalEditarProduto } from "./ModalEditarProduto.style";
import { formatarValoresDecimaisComPontoEComVirgula } from "../../../../../../utils/utils";

export const ModalEditarProduto = ({
  estahAberto,
  setAberto,
  produto,
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
            placeholder={"Descrição: " + produto.nome}
            onChange={(e) => setDescricao(e.target.value)}
          />
          <InputModal
            type="text"
            title="Fornecedor"
            placeholder={"Fornecedor: " + produto.fornecedor.nome}
            onChange={(e) => setFornecedor(e.target.value)}
          />
          <InputModal
            type="text"
            title="Categoria"
            placeholder={"Categoria: " + produto.categoria.tipoCategoria}
            onChange={(e) => setCategoria(e.target.value)}
          />
          <InputModal
            type="text"
            title="Quantidade"
            placeholder={"Quantidade: " + produto.quantidade}
            onChange={(e) => setQuantidade(e.target.value)}
          />
          <InputModal
            type="text"
            title="Preco de Compra"
            placeholder={
              "Preço de Compra: " +
              "R$ " +
              formatarValoresDecimaisComPontoEComVirgula(produto.precoDeCompra)
            }
            onChange={(e) => setPrecoCompra(e.target.value)}
          />
          <InputModal
            type="text"
            title="Preco de Venda"
            placeholder={
              "Preço de Venda: " +
              "R$ " +
              formatarValoresDecimaisComPontoEComVirgula(produto.precoDeVenda)
            }
            onChange={(e) => setPrecoVenda(e.target.value)}
          />
        </ContainerModalEditarProduto>
      }
    />
  );
};
