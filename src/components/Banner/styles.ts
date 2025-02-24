import styled from 'styled-components'
import { cores } from '../../styles'

export const Imagem = styled.div`
  width: 100%;
  height: 280px;
  display: block;
  background-repeat: no-repeat;
  background-size: cover;

  .container {
    position: relative;
    padding-top: 340px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }
`
export const Titulo = styled.h2`
  font-size: 32px;
  color: ${cores.branca};
  margin-top: 140px;
  margin-left: 0px;
  font-weight: bold;

  @media only screen and (max-width: 767px) {
    margin-left: 16px;
  }
`
export const Paragrafo = styled.h2`
  font-size: 32px;
  color: ${cores.branca};
  margin-top: -310px;
  font-weight: 100;

  @media only screen and (max-width: 767px) {
    margin-left: 16px;
  }
`
