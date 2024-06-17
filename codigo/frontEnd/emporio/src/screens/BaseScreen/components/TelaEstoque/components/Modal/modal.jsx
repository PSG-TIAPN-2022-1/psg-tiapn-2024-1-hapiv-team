import React from 'react'
import {
  Container,
  Titulo,
  Central,
  Botoes,
} from ".TelaEstoque/components/Modal/modal.style.js"


export default function Modal({isOpen}){

  if (isOpen) {

    return(
      <Container>
        <Titulo className='titulos'></Titulo>
        <Central className='central'></Central>
        <Botoes className='botoes'></Botoes>
      </Container>
    )
  }


}