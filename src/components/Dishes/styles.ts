import styled from 'styled-components'
import { colors } from '../../styles'

export const Card = styled.div`
  background-color: ${colors.salmon};
  height: 480px;
  position: relative;
  color: ${colors.beige};
  margin-bottom: 32px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  @media only screen and (max-width: 500px) {
    width: 95%;
    margin-left: 8px;
    height: 475px;
  }

  @media only screen and (min-width: 1024px) and (max-width: 1200px) {
    width: 90%;
    margin-left: 4%;
  }

  @media only screen and (min-width: 768px) and (max-width: 1023px) {
    width: 90%;
    margin-left: 4%;
  }

  @media only screen and (min-width: 501px) and (max-width: 767px) {
    margin-left: 9%;
    width: 80%;
    height: 450px;
  }

  img {
    margin-top: 8px;
    width: 95%;
    height: 217px;
  }
`

export const Title = styled.h3`
  font-weight: 900;
  font-size: 16px;
  margin-left: 8px;
  align-self: flex-start;
  margin-bottom: 8px;
  margin-top: 8px;

  @media only screen and (max-width: 767px) {
    margin-left: 16px;
  }
`

export const Description = styled.p`
  align-self: flex-start;
  font-size: 14px;
  line-height: 22px;
  width: 95%;
  font-weight: 400;
  margin-bottom: 8px;
  text-align: justify;
  min-height: 176px;
  margin-left: 8px;

  @media only screen and (max-width: 767px) {
    width: 90%;
    margin-left: 16px;
  }
`
export const Button = styled.button`
  background-color: ${colors.beige};
  border: 2px solid ${colors.beige};
  color: ${colors.salmon};
  font-size: 14px;
  line-height: 16.41px;
  font-weight: 700;
  width: 95%;
  height: 24px;
  margin-left: 0;
  cursor: pointer;
  margin-bottom: 8px;

  @media only screen and (max-width: 767px) {
    width: 90%;
  }

  @media only screen and (min-width: 501px) and (max-width: 767px) {
    margin-top: -8%;
  }
`
