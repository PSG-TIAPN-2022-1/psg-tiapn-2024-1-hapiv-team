import React from "react";
import Modal from "../Modal/Modal";
import { InputModal } from "../Modal/components/InputModal/InputModal";
import { SelectModal } from "../Modal/components/SelectModal/SelectModal";
import { ContainerModalAdicionarProduto } from "./ModalAdicionarProduto.style";
import { obterCategorias } from "./ModalAdicionarProduto";
import { handleAdicionarProduto } from "./ModalAdicionarProduto";

export const ModalAdicionarProduto = ({ estahAberto, setAberto }) => (
  <Modal
    estahAberto={estahAberto}
    setAberto={setAberto}
    titulo="Adicionar Produto"
    conteudo={
      <ContainerModalAdicionarProduto>
        <InputModal type="text" title="Descricao" placeholder="Descrição" />
        <InputModal type="text" title="Fornecedor" placeholder="Fornecedor" />
        <SelectModal labelText="Categorias" options={obterCategorias()} />
        <InputModal type="text" title="Quantidade" placeholder={"Quantidade"} />
        <InputModal
          type="text"
          title="Preco de Compra"
          placeholder={"Preço de Compra"}
        />
        <InputModal
          type="text"
          title="Preco de Venda"
          placeholder={"Preço de Venda"}
        />
      </ContainerModalAdicionarProduto>
    }
    confirmar={handleAdicionarProduto}
  />
);
