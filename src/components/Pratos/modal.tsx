import React from 'react'
import styled from 'styled-components'
import { cores } from '../../styles'
import { useDispatch } from 'react-redux'
import { add, open } from '../../store/reducers/cart'
import { formatPrice } from '../../utils'

type ModalProps = {
  isOpen: boolean
  onClose: () => void
  title: string
  children: React.ReactNode
  preco?: string
  id: number
  foto: string
  descricao: string
  porcao: string
}

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`

const ModalContainer = styled.div`
  background-color: ${cores.salmao};
  // border-radius: 8px;
  padding: 0 8px 32px;
  max-width: 90%;
  width: 1024px;
  height: auto;
  overflow-y: auto;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  @media only screen and (max-width: 767px) {
    max-height: 90vh;
  }
`

const ModalHeader = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
`

const ModalTitle = styled.h3`
  font-size: 18px;
  font-weight: 900;
  color: ${cores.branca};
  margin-bottom: 16px;
  margin-top: 8px;
  margin-left: 8px;
`

const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 32px;
  cursor: pointer;
  color: ${cores.cinzaClaro};

  &:hover {
    color: ${cores.salmao};
  }
`

const ModalContent = styled.div`
  display: flex;
  gap: 20px;

  @media only screen and (max-width: 767px) {
    display: block;
  }
`

const ImageContainer = styled.div`
  margin-left: 32px;

  img {
    height: 280px;
    width: 280px;

    @media only screen and (max-width: 767px) {
      height: auto;
      width: 100%;
      border-radius: 8px;
    }
  }

  @media only screen and (max-width: 767px) {
    margin-left: 0;
  }
}
`
const ContentContainer = styled.div`
  flex: 1;
`

const ModalActions = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 24px;
  gap: 12px;
`

const ActionButton = styled.button`
  background-color: ${cores.beje};
  color: ${cores.salmao};
  border: none;
  // border-radius: 4px;
  cursor: pointer;
  font-weight: 700;
  font-size: 14px;
  width: 218px;
  height: 24px;
  margin-left: 8px;

  &:hover {
    opacity: 0.7;
  }
`

const Modal = ({
  isOpen,
  onClose,
  title,
  children,
  preco,
  id,
  foto,
  descricao,
  porcao
}: ModalProps) => {
  const dispatch = useDispatch()

  if (!isOpen) return null

  let childImage: React.ReactNode = null
  const childContent: React.ReactNode[] = []

  if (React.isValidElement(children)) {
    const childDiv = children as React.ReactElement<{
      children?: React.ReactNode
    }>

    if (childDiv.props.children) {
      const childElements = Array.isArray(childDiv.props.children)
        ? childDiv.props.children
        : [childDiv.props.children]

      childElements.forEach((child) => {
        if (React.isValidElement(child)) {
          if (child.type === 'img') {
            childImage = child
          } else {
            childContent.push(child)
          }
        }
      })
    }
  }

  const handleAddToCart = () => {
    if (preco) {
      dispatch(
        add({
          id,
          nome: title,
          foto,
          descricao,
          preco,
          porcao
        })
      )
      dispatch(open())
      onClose()
    }
  }

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <ModalHeader>
          <CloseButton onClick={onClose}>&times;</CloseButton>
        </ModalHeader>

        {childImage && childContent ? (
          <ModalContent>
            <ImageContainer>{childImage}</ImageContainer>
            <ContentContainer>
              <ModalTitle>{title}</ModalTitle>
              {childContent}
              <ActionButton onClick={handleAddToCart}>
                Adicionar ao carrinho - {formatPrice(preco || '0')}
              </ActionButton>
            </ContentContainer>
          </ModalContent>
        ) : (
          <div>{children}</div>
        )}

        {!childImage && (
          <ModalActions>
            <ActionButton onClick={onClose}>Fechar</ActionButton>
          </ModalActions>
        )}
      </ModalContainer>
    </ModalOverlay>
  )
}

export default Modal
