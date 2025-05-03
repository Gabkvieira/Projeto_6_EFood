import styled from 'styled-components'
import { colors } from '../../styles'

export const Container = styled.footer`
  font-size: 10px;
  margin-top: 120px;

  @media only screen and (min-height: 1480px) and (max-width: 1920px) {
    margin-top: 160px;
  }

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

    @media only screen and (min-height: 1480px) and (max-width: 1920px) {
      margin-top: 60px;
      }
    }
  }
`
export const Links = styled.ul`
  display: flex;
  cursor: pointer;

  li {
    margin-top: 32.5px;
    margin-bottom: 80px;

    @media only screen and (min-height: 1480px) and (max-width: 1920px) {
    margin-top: 60px;
  }
`

export const Link = styled.a`
  color: ${colors.lightGray};
  text-decoration: none;
  margin-right: 8px;
`
