import styled from 'styled-components'
import { colors } from '../../styles'
import { TagContainer } from '../Tag/styles'

export const Card = styled.div`
  background-color: ${colors.white};
  position: relative;
  border: solid 1px ${colors.salmon};
  margin-bottom: 48px;
  height: 425px;
  width: 472px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  img {
    width: 100%;
    height: 217px;
  }

  @media only screen and (max-width: 767px) {
    width: 95%;
    margin-left: 8px;
    height: 470px;
  }

  ${TagContainer} {
    margin-right: 8px;
  }
`

export const Title = styled.h3`
  align-self: flex-start;
  font-weight: 700;
  font-size: 18px;
  margin-top: 8px;
  margin-left: 7px;
  line-height: 21.09px;
`

export const Description = styled.p`
  align-self: flex-start;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  margin-top: 16px;
  margin-left: 8px;
  width: 456px;
  height: 88px;
  margin-bottom: 8px;
  text-align: justify;

  @media only screen and (max-width: 767px) {
    width: 95%;
    margin-bottom: 52px;
  }
`

export const Info = styled.div`
  position: absolute;
  top: 16px;
  right: 8px;
`
export const Button = styled.button`
  align-self: flex-start;
  background-color: ${colors.salmon};
  border: 2px solid ${colors.salmon};
  font-size: 14px;
  line-height: 16.41px;
  font-weight: 700;
  height: 24px;
  width: 82px;
  margin-left: 8px;
  margin-bottom: 8px;

  a {
    text-decoration: none;
    color: ${colors.beige};
  }
`

export const Rating = styled.div`
  position: absolute;
  top: 226px;
  right: 30px;
  font-weight: 700;
  font-size: 18px;

  @media only screen and (max-width: 767px) {
    top: 227px;
  }
`
export const StarLogo = styled.div`
  position: relative;
  top: -140px;
  margin-left: 440px;

  img {
    width: 21px;
    height: 21px;
  }

  @media only screen and (max-width: 767px) {
    top: -184px;
    margin-left: 93%;
  }
`
