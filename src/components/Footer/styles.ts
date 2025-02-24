import styled from 'styled-components'
import { cores } from '../../styles'

export const Container = styled.footer`
  margin-bottom: 40px;
  font-size: 10px;
  margin-top: 120px;

  p {
    text-align: center;
    widht: 480px;
  }

  .logo {
    img {
      margin-left: 445px;
      margin-top: 40px;

      @media only screen and (max-width: 767px) {
        margin-left: 150px;
      }
    }
  }
`
export const Links = styled.ul`
  display: flex;
  margin-top: -48px;
  margin-left: 460px;

  @media only screen and (max-width: 767px) {
    margin-left: 160px;
  }
`

export const Link = styled.a`
  color: ${cores.cinzaClaro};
  text-decoration: none;
  margin-right: 8px;
`

export const FooterSection = styled.div`
  margin-bottom: 80px;
`
