import styled from 'styled-components'
import { cores } from '../../styles'

export const Card = styled.div`
  background-color: ${cores.salmao};
  height: 480px;
  position: relative;
  color: ${cores.beje};
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
    margin-top: 8px;
    width: 95%;
    height: 217px;

    @media only screen and (max-width: 767px) {
      width: 95%;
    }
  }
`

export const Titulo = styled.h3`
  font-weight: 900;
  font-size: 16px;
  display: block;
  margin-left: 16px;
  align-self: flex-start;
  margin-bottom: 8px;
  margin-top: 8px;
`

export const Descricao = styled.p`
  align-self: flex-start;
  font-size: 14px;
  line-height: 22px;
  display: block;
  width: 90%;
  font-weight: 400;
  margin-bottom: 8px;
  text-align: justify;
  min-height: 176px;
  margin-left: 16px;
`

export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`
export const Botao = styled.button`
  background-color: ${cores.beje};
  border: 2px solid ${cores.beje};
  color: ${cores.salmao};
  font-size: 14px;
  line-height: 16.41px;
  font-weight: 700;
  width: 95%;
  height: 24px;
  margin-left: 0;
  cursor: pointer;
  margin-bottom: 8px;

  @media only screen and (max-width: 767px) {
    width: 90%;
  }
`
