import React, { useState } from "react";
import Modal from "../Modal/Modal";
import { InputModal } from "../Modal/components/InputModal/InputModal";
import { ContainerModalEditarProduto } from "./ModalEditarProduto.style";
import { formatarValoresDecimaisComPontoEComVirgula } from "../../../../../../utils/utils";
import { handleEditarProduto } from "./ModalEditarProduto";

export const ModalEditarProduto = ({
  estahAberto,
  setAberto,
  produto,
  onProdutoEditado,
}) => {
  const [descricao, setDescricao] = useState(produto.nome);
  const [fornecedor, setFornecedor] = useState(produto.fornecedor.nome);
  const [categoria, setCategoria] = useState(produto.categoria.tipoCategoria);
  const [quantidade, setQuantidade] = useState(produto.quantidade);
  const [precoCompra, setPrecoCompra] = useState(produto.precoDeCompra);
  const [precoVenda, setPrecoVenda] = useState(produto.precoDeVenda);

  const handleConfirmar = async () => {
    const precoCompraFormatado = Number(precoCompra.toString().replace(',', '.'));
    const precoVendaFormatado = Number(precoVenda.toString().replace(',', '.'));
  
    const produtoEditado = await handleEditarProduto(
      produto.produtoId,
      descricao,
      Number(quantidade),
      precoCompraFormatado,
      precoVendaFormatado,
      categoria,
      fornecedor
    );
  
    if (produtoEditado) onProdutoEditado();
  };
  

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
      confirmar={handleConfirmar}
    />
  );
};
