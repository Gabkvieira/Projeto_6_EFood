import styled from 'styled-components'
import { cores } from '../../styles'
import { TagContainer } from '../Tag/styles'

export const Card = styled.div`
  background-color: ${cores.branca};
  padding: 8px;
  position: relative;
  border: solid 1px ${cores.fundoTag};
  margin-bottom: 32px;

  img {
    widht: 100%;
  }

  ${TagContainer} {
    margin-right: 8px;
  }
`

export const Titulo = styled.h3`
  font-weight: bold;
  font-size: 18px;
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
  background-color: ${cores.fundoTag};
  border: 2px solid ${cores.fundoTag};
  color: ${cores.textoTag};
  font-size: 14px;
  font-weight: bold;
  text-decoration: none;
  height: 24px;
  width: 82px;
  align-itens: center;
  margin-top: 16px;
`

export const Nota = styled.div`
  position: absolute;
  top: 245px;
  right: 32px;
  font-weight: bold;
  font-size: 18px;
`
export const LogoEstrela = styled.div`
  position: absolute;
  width: 21px;
  height: 21px;
  top: 245px;
  margin-left: 465px;
`
