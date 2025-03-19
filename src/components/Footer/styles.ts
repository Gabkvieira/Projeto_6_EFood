import styled from 'styled-components'
import { cores } from '../../styles'

export const Container = styled.footer`
  font-size: 10px;
  margin-top: 120px;

  @media only screen and (max-width: 767px) {
    width: 100%;
  }

  p {
    text-align: center;
  }

  .logo {
    img {
      margin-left: 445px;
      margin-top: 40px;

      @media only screen and (max-width: 767px) {
        margin-left: 145px;
      }
    }
  }
`
export const Links = styled.ul`
  display: flex;
  margin-top: -48px;
  margin-left: 460px;

  @media only screen and (max-width: 767px) {
    margin-left: 165px;
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
