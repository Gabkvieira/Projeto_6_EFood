import styled from 'styled-components'
import { cores } from '../../styles'

export const Container = styled.footer`
  padding: 32px 0;
  font-size: 10px;

  p {
    text-align: center;
    widht: 480px;
  }

  .logo {
    margin-left: 445px;
  }
`
export const Links = styled.ul`
  display: flex;
  margin-top: -32px;
  margin-left: 460px;
`

export const Link = styled.a`
  color: ${cores.cinzaClaro};
  text-decoration: none;
  margin-right: 8px;
`

export const FooterSection = styled.div`
  margin-bottom: 64px;
`
