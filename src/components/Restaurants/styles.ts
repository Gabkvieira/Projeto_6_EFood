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

  @media only screen and (max-width: 500px) {
    width: 95%;
    margin-left: 8px;
    height: 470px;
  }

  @media only screen and (min-width: 501px) and (max-width: 767px) {
    margin-left: 9%;
    width: 80%;
    height: 450px;
  }

  @media only screen and (min-width: 768px) and (max-width: 1023px) {
    width: 350px;
    height: 500px;
    margin-left: 5.5%;
  }

  @media only screen and (min-width: 768px) and (max-width: 1023px) and (min-height: 501px) and (max-height: 1050px) {
    width: 350px;
    height: 500px;
    margin-left: 3.5%;
  }

  @media only screen and (min-width: 768px) and (max-width: 900px) and (max-height: 500px) {
    width: 350px;
    height: 500px;
    margin-left: 8%;
  }

  @media only screen and (min-width: 901px) and (max-width: 1023px) and (max-height: 500px) {
    width: 350px;
    height: 500px;
    margin-left: 11%;
  }

  @media only screen and (min-width: 1024px) and (max-width: 1200px) {
    margin-left: 2%;
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

  @media only screen and (min-width: 768px) and (max-width: 1023px) {
    width: 95%;
    margin-top: -5%;
  }
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

  @media only screen and (min-width: 768px) and (max-width: 1023px) {
    width: 95%;
    margin-top: -5%;
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

  @media only screen and (min-width: 501px) and (max-width: 767px) {
    margin-top: -3%;
  }

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

  @media only screen and (min-width: 768px) and (max-width: 1023px) {
    top: 233px;
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

  @media only screen and (max-width: 500px) {
    top: -184px;
    margin-left: 93%;
  }

  @media only screen and (min-width: 501px) and (max-width: 700px) {
    top: -181px;
    margin-left: 95%;
  }

  @media only screen and (min-width: 701px) and (max-width: 767px) {
    top: -182px;
    margin-left: 95%;
  }

  @media only screen and (min-width: 768px) and (max-width: 1023px) {
    top: -175px;
    margin-left: 93%;
  }
`
