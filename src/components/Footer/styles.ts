import styled from 'styled-components'
import { colors } from '../../styles'

export const Container = styled.footer`
  font-size: 10px;
  margin-top: 120px;

    .container {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    @media only screen and (max-width: 767px) {
    width: 65%;
  }

  p {
    margin-bottom: 40px;
  }

  .logo {
    img {
      margin-top: 40px;
    }
  }
`
export const Links = styled.ul`
  display: flex;
  margin-top: -32px;
`

export const Link = styled.a`
  color: ${colors.lightGray};
  text-decoration: none;
  margin-right: 8px;
`

export const FooterSection = styled.div`
  margin-bottom: 80px;
`
