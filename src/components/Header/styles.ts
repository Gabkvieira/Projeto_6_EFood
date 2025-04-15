import styled from 'styled-components'
import { colors } from '../../styles'

export const HeaderBar = styled.header`
  display: flex;
  text-align: center;
  height: 186px;

  @media only screen and (max-width: 767px) {
    width: 100%;
  }

  a {
    color: ${colors.salmon};
    text-decoration: none;
  }
`

export const Links = styled.ul`
  display: flex;
  margin-top: 82px;
  align-items: center;
  margin-left: -80px;

  @media only screen and (max-width: 767px) {
    margin-left: 0px;
  }

  img {
    margin-left: 50px;
    @media only screen and (max-width: 767px) {
      margin-left: 0px;
    }
  }

  @media only screen and (max-width: 767px) {
    display: block;
    margin-left: 0px;
    margin-top: 32px;
  }
`

export const LinkItem = styled.li`
  cursor: pointer;
  margin-right: 365px;

  @media only screen and (max-width: 767px) {
    margin-bottom: 16px;
    margin-right: 0px;
  }

  p {
    width: 232%;
    font-size: 18px;
    font-weight: 900;

    @media only screen and (max-width: 767px) {
      width: 100%;
    }
  }

  img {
    margin-right: -108px;

    @media only screen and (max-width: 767px) {
      margin-right: 0px;
    }
  }
`
