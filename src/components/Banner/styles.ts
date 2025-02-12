import styled from 'styled-components'
import { cores } from '../../styles'

export const Imagem = styled.div`
  width: 100%;
  height: 280px;
  display: block;
  background-repeat: no-repeat;
  background-size: cover;
  font-weight: bold;

  .container {
    position: relative;
    padding-top: 340px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }
`
export const Titulo = styled.h2`
  font-size: 36px;
  max-width: 676px;
  color: ${cores.branca};
  margin-top: -160px;
  margin-left: -1015px;
`
export const Paragrafo = styled.p`
  font-size: 32px;
  max-width: 101px;
  color: ${cores.branca};
  margin-left: -1015px;
`
