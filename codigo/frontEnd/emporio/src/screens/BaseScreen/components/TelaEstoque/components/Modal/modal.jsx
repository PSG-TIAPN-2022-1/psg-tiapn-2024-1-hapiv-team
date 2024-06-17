import React from 'react'
import {
  Container,
  Titulo,
  Central,
  Botoes,
} from "./modal.style"


export default function Modal({isOpen, setModalOpen}){

  if (isOpen) {

    return(
      <Container>
        <Titulo className='titulos'>deu?</Titulo>
        <Central className='central'></Central>
        <Botoes onClick={setModalOpen} className='botoes'>Botao</Botoes>
      </Container>
    )
  }


}