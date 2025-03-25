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

const Pratos = ({ foto, nome, descricao, preco, porcao }: Props) => {
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
      >
        <div>
          <img
            src={foto}
            alt={nome}
            style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
          />
          <p>{descricao}</p>
          <p style={{ fontStyle: 'italic', margin: '12px 0' }}>
            Serve: {porcao}
          </p>
        </div>
      </Modal>
    </Card>
  )
}

export default Pratos
