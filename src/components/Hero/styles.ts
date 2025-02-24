import styled from 'styled-components'

export const Imagem = styled.div`
  height: 384px;
  display: block;
  background-repeat: no-repeat;
  background-size: cover;
  font-weight: bold;

  img {
    height: 57.5px;
    width: 125px;
    margin-top: 40px;
    margin-left: 445px;

    @media only screen and (max-width: 767px) {
      margin-left: 145px;
    }
  }
`
export const Titulo = styled.h2`
  font-size: 36px;
  max-width: 539px;
  margin-top: 150px;
  margin-left: 230px;
  text-align: center;

  @media only screen and (max-width: 767px) {
    font-size: 30px;
    width: 80%;
    margin-top: 100px;
    margin-left: 40px;
  }
`
