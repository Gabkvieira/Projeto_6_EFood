import styled from 'styled-components'
import { colors } from '../../styles'

export const HeaderBar = styled.header`
  display: flex;
  text-align: center;
  height: 186px;

  @media only screen and (min-height: 1480px) and (max-height: 1920px) {
    height: 250px;
  }

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

  @media only screen and (min-height: 1480px) and (max-height: 1920px) {
    margin-top: 100px;
  }

  @media only screen and (min-width: 1024px) and (max-width: 1200px) {
    margin-left: -60px;
  }

  @media only screen and (min-width: 768px) and (max-width: 1023px) {
    margin-left: -65px;
  }

  @media only screen and (min-width: 768px) and (max-width: 1023px) and (min-height: 501px) and (max-height: 1050px) {
    margin-left: -40px;
  }

  @media only screen and (min-width: 768px) and (max-height: 500px) {
    margin-left: 0px;
    margin-top: 32px;
    display: block;
  }

  img {
    margin-left: 50px;

    @media only screen and (max-width: 767px) {
      margin-left: 0px;
    }

    @media only screen and (min-width: 768px) and (max-height: 500px) {
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

  @media only screen and (min-width: 1024px) and (max-width: 1200px) {
    margin-right: 340px;
  }

  @media only screen and (min-width: 768px) and (max-width: 1023px) {
    margin-right: 240px;
  }

  @media only screen and (min-width: 768px) and (max-height: 500px) {
    margin-bottom: 16px;
    margin-right: 0px;
  }

  @media only screen and (min-width: 768px) and (max-width: 1023px) and (min-height: 501px) and (max-height: 1050px) {
    margin-right: 200px;
  }

  p {
    width: 232%;
    font-size: 18px;
    font-weight: 900;

    @media only screen and (max-width: 767px) {
      width: 100%;
    }

    @media only screen and (min-width: 768px) and (max-height: 500px) {
      width: 100%;
    }
  }

  img {
    margin-right: -108px;

    @media only screen and (max-width: 767px) {
      margin-right: 0px;
    }

    @media only screen and (min-width: 768px) and (max-height: 500px) {
      margin-right: 0px;
    }
  }
`
