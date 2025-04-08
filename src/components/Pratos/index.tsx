import { useState } from 'react'

import { Card, Descricao, Titulo, Botao } from './styles'
import Modal from './modal'

type Props = {
  foto: string
  id: number
  nome: string
  descricao: string
  preco?: string
  porcao?: string
}

const Pratos = ({ foto, id, nome, descricao, preco, porcao }: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  return (
    <Card>
      <img src={foto} alt={nome} />
      <Titulo>{nome}</Titulo>
      <Descricao>{descricao}</Descricao>

      <Botao onClick={openModal}>Mais detalhes</Botao>

      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        title={nome}
        preco={preco}
        id={id}
        foto={foto}
        descricao={descricao}
        porcao={porcao || 'Porção individual'}
      >
        <div>
          <img src={foto} alt={nome} />
          <p
            style={{
              fontWeight: '400',
              fontSize: '14px',
              textAlign: 'justify',
              margin: '0 8px 0'
            }}
          >
            {descricao}
          </p>
          <p
            style={{
              fontWeight: '400',
              fontSize: '14px',
              margin: '16px 8px 16px'
            }}
          >
            Serve: {porcao || 'Porção individual'}
          </p>
        </div>
      </Modal>
    </Card>
  )
}

export default Pratos
