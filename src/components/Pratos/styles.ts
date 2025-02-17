import styled from 'styled-components'
import { cores } from '../../styles'

export const Card = styled.div`
  background-color: ${cores.fundoTag};
  padding: 8px;
  position: relative;
  color: ${cores.textoTag};
  margin-bottom: 32px;
`

export const Titulo = styled.h3`
  font-weight: bold;
  font-size: 16px;
  display: block;
  margin-top: 16px;
  margin-bottom: 8px;
`

export const Descricao = styled.p`
  font-size: 14px;
  line-height: 22px;
  display: block;
  margin-top: 16px;
`

export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`
export const Botao = styled.button`
  background-color: ${cores.textoTag};
  border: 2px solid ${cores.textoTag};
  color: ${cores.fundoTag};
  font-size: 14px;
  font-weight: bold;
  text-decoration: none;
  width: 100%;
  height: 24px;
  align-itens: center;
`
