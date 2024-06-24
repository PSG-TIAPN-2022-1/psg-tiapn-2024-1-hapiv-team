import React from "react";
import {
  Container,
  Box,
  SecaoTitulo,
  Titulo,
  FecharModal,
  BotaoFecharModal,
  SecaoConteudo,
  SecaoBotoes,
} from "./Modal12345.style";
import { Button } from "../Button/Button";

export default function Modal({
  estahAberto,
  setAberto,
  titulo,
  conteudo,
  confirmar,
}) {
  if (!estahAberto) {
    return null;
  }

  return (
    <Container>
      <Box>
        <SecaoTitulo>
          <Titulo>{titulo}</Titulo>
          <FecharModal>
            <BotaoFecharModal
              className="material-symbols-outlined"
              onClick={() => setAberto(false)}
            >
              close
            </BotaoFecharModal>
          </FecharModal>
        </SecaoTitulo>
        <SecaoConteudo>{conteudo}</SecaoConteudo>
        <SecaoBotoes>
          <Button title="Cancelar" onClick={() => setAberto(false)} />
          <Button title="Confirmar" onClick={() => confirmar()} />
        </SecaoBotoes>
      </Box>
    </Container>
  );
}
