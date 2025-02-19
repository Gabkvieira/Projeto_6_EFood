import styled from 'styled-components'
import { cores } from '../../styles'

export const Card = styled.div`
  background-color: ${cores.fundoTag};
  height: 338px;
  position: relative;
  color: ${cores.textoTag};
  margin-bottom: 32px;

  img {
    margin-left: 8px;
    margin-top: 8px;
  }
`

export const Titulo = styled.h3`
  font-weight: bold;
  font-size: 16px;
  display: block;
  margin-top: 8px;
  margin-left: 8px;
`

export const Descricao = styled.p`
  font-size: 14px;
  line-height: 22px;
  display: block;
  margin-top: 8px;
  margin-left: 8px;
  width: 95%;
  font-weight: 400;
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
  line-height: 16.41px;
  font-weight: 700;
  text-decoration: none;
  width: 95%;
  height: 24px;
  align-itens: center;
  margin-top: 3px;
  margin-left: 8px;
`
