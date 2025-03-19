import styled from 'styled-components'
import { cores } from '../../styles'

export const HeaderBar = styled.header`
  border-radius: 16px;
  display: flex;
  text-align: center;
  height: 186px;

  a {
    color: ${cores.fundoTag};
    text-decoration: none;
    font-weight: bold;
    font-size: 18px;
  }
`

export const Links = styled.ul`
  display: flex;
  margin-top: 82px;
  align-items: center;
  margin-left: -80px;

  @media only screen and (max-width: 767px) {
    display: block;
    margin-left: 120px;
    margin-top: 0px;
  }
`

export const LinkItem = styled.li`
  margin-right: 410px;

  @media only screen and (max-width: 767px) {
    margin-bottom: 16px;
    margin-right: 0px;
  }

  p {
    width: 232%;
    font-size: 18px;
    font-weight: bold;

    @media only screen and (max-width: 767px) {
      width: 100%;
    }
  }

  img {
    margin-right: -105px;
  }
`
