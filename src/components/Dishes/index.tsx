import { useState } from 'react'

import * as S from './styles'
import Modal from './modal'

type Props = {
  foto: string
  id: number
  nome: string
  descricao: string
  preco?: string
  porcao?: string
}

const Dishes = ({ foto, id, nome, descricao, preco, porcao }: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  return (
    <S.Card>
      <img src={foto} alt={nome} />
      <S.Title>{nome}</S.Title>
      <S.Description>{descricao}</S.Description>

      <S.Button onClick={openModal}>Mais detalhes</S.Button>

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
    </S.Card>
  )
}

export default Dishes
