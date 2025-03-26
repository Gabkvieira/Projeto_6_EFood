import styled from 'styled-components'
import { cores } from '../../styles'

export const Card = styled.div`
  background-color: ${cores.fundoTag};
  height: 480px;
  position: relative;
  color: ${cores.textoTag};
  margin-bottom: 32px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  @media only screen and (max-width: 767px) {
    width: 95%;
    margin-left: 8px;
    height: 475px;
  }

  img {
    margin-left: 0px;
    margin-top: 8px;
    width: 95%;
    height: 217px;

    @media only screen and (max-width: 767px) {
      width: 95%;
    }
  }
`

export const Titulo = styled.h3`
  font-weight: bold;
  font-size: 16px;
  display: block;
  margin-top: 8px;
  margin-left: 12px;
  align-self: flex-start;

  @media only screen and (max-width: 767px) {
    margin-left: 24px;
  }
`

export const Descricao = styled.p`
  font-size: 14px;
  line-height: 22px;
  display: block;
  margin-top: 0;
  margin-left: 8px;
  width: 95%;
  font-weight: 400;
  margin-bottom: 8px;

  @media only screen and (max-width: 767px) {
    width: 90%;
    margin-left: 8px;
  }
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
  width: 95%;
  height: 24px;
  align-itens: center;
  margin-left: 0;
  cursor: pointer;
  margin-bottom: 8px;

  @media only screen and (max-width: 767px) {
    width: 90%;
  }
`
