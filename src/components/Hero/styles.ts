import styled from 'styled-components'

export const Image = styled.div`
  height: 384px;
  width: 100%;
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;

  .container {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 16px;
  }
`

export const Logo = styled.img`
  height: 58px;
  width: 125px;
  margin-top: 40px;
`

export const Title = styled.h2`
  font-size: 36px;
  margin-top: 138.5px;
  text-align: center;
  font-weight: 900;

  @media only screen and (max-width: 767px) {
    margin-top: 80px;
    font-size: 30px;
  }
`
