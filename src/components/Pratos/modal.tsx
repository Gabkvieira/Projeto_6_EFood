import React from 'react'
import styled from 'styled-components'
import { cores } from '../../styles'

type ModalProps = {
  isOpen: boolean
  onClose: () => void
  title: string
  children: React.ReactNode
  preco?: string
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
  background-color: ${cores.fundoTag};
  border-radius: 8px;
  padding: 20px;
  max-width: 90%;
  width: 700px;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`

const ModalHeader = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  margin-bottom: 16px;
`

const ModalTitle = styled.h3`
  font-size: 24px;
  font-weight: bold;
  color: ${cores.branca};
  margin-bottom: 16px;
  margin-top: 16px;
`

const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: ${cores.cinzaClaro};

  &:hover {
    color: ${cores.fundoTag};
  }
`

const ModalContent = styled.div`
  margin-bottom: 16px;
  display: block;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

const ImageContainer = styled.div`
  margin-left: 0;
  flex: 0 0 40%;

  img {
    width: 100%;
    height: auto;
    border-radius: 8px;
    object-fit: fill;
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
  background-color: ${cores.branca};
  color: ${cores.fundoTag};
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  cursor: pointer;
  font-weight: bold;
  margin-top: 8px;

  &:hover {
    opacity: 0.7;
  }
`

const Modal = ({ isOpen, onClose, title, children, preco }: ModalProps) => {
  preco = preco ? parseFloat(preco).toFixed(2) : '0.00'
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
              <ActionButton onClick={onClose}>
                Adicionar ao carrinho - R$ {preco}
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
