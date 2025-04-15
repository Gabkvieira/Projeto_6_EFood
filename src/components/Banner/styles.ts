import styled from 'styled-components'
import { colors } from '../../styles'

export const Image = styled.div`
  width: 100%;
  height: 280px;
  display: block;
  background-repeat: no-repeat;
  background-size: cover;

  @media only screen and (max-width: 767px) {
    width: 100%;
  }

  .container {
    position: relative;
    padding-top: 340px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }
`
export const Title = styled.h2`
  font-size: 32px;
  color: ${colors.white};
  margin-top: 140px;
  margin-left: 0px;
  font-weight: bold;

  @media only screen and (max-width: 767px) {
    margin-left: 16px;
    margin-top: 128px;
  }

  @media only screen and (min-width: 768px) and (max-width: 1023px) {
    margin-left: 16px;
    margin-top: 128px;
  }

  @media only screen and (min-width: 1024px) and (max-width: 1200px) {
    margin-left: 16px;
    margin-top: 128px;
  }
`
export const Paragraph = styled.h2`
  font-size: 32px;
  color: ${colors.white};
  margin-top: -310px;
  font-weight: 100;

  @media only screen and (max-width: 767px) {
    margin-left: 16px;
  }

  @media only screen and (min-width: 768px) and (max-width: 1023px) {
    margin-left: 16px;
  }

  @media only screen and (min-width: 1024px) and (max-width: 1200px) {
    margin-left: 16px;
  }
`
