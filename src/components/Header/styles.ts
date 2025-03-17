import styled from 'styled-components'
import { cores } from '../../styles'

export const HeaderBar = styled.header`
  border-radius: 16px;
  display: flex;
  justify-content: space-between;
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
  margin-left: 450px;
  margin-top: 82px;
  justify-content: space-between;
  align-items: center;

  @media only screen and (max-width: 767px) {
    display: block;
    margin-left: 120px;
    margin-top: 0px;
  }
`

export const LinkItem = styled.li`
  margin-right: 350px;

  @media only screen and (max-width: 767px) {
    margin-bottom: 16px;
    margin-right: 0px;
  }

  p {
    width: 105%;
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
