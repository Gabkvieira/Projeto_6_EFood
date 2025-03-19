import styled from 'styled-components'
import { cores } from '../../styles'
import { TagContainer } from '../Tag/styles'

export const Card = styled.div`
  background-color: ${cores.branca};
  position: relative;
  border: solid 1px ${cores.fundoTag};
  margin-bottom: 48px;
  height: 425px;
  width: 472px;

  img {
    width: 100%;
    height: 217px;
  }

  @media only screen and (max-width: 767px) {
    width: 80%;
    margin-left: 8px;
    height: 470px;
  }

  ${TagContainer} {
    margin-right: 8px;
  }
`

export const Titulo = styled.h3`
  font-weight: 700;
  font-size: 18px;
  display: block;
  margin-top: 8px;
  margin-left: 7px;
  line-height: 21.09px;
`

export const Descricao = styled.p`
  font-size: 14px;
  line-height: 22px;
  display: block;
  margin-top: 16px;
  margin-left: 8px;
  width: 456px;
  height: 88px;
  margin-bottom: 16px;

  @media only screen and (max-width: 767px) {
    width: 95%;
    margin-bottom: 52px;
  }
`

export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 8px;
`
export const Botao = styled.button`
  background-color: ${cores.fundoTag};
  border: 2px solid ${cores.fundoTag};
  font-size: 14px;
  line-height: 16.41px;
  font-weight: 700;
  height: 24px;
  width: 82px;
  margin-left: 8px;

  a {
    text-decoration: none;
    color: ${cores.textoTag};
  }
`

export const Nota = styled.div`
  position: absolute;
  top: 226px;
  right: 37px;
  font-weight: 700;
  font-size: 18px;

  @media only screen and (max-width: 767px) {
    top: 227px;
  }
`
export const LogoEstrela = styled.div`
  position: relative;
  top: -145px;
  margin-left: 440px;

  img {
    width: 21px;
    height: 21px;
  }

  @media only screen and (max-width: 767px) {
    top: -180px;
    margin-left: 300px;
  }
`
