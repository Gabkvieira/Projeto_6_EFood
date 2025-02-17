import styled from 'styled-components'
import { cores } from '../../styles'

export const HeaderBar = styled.header`
  padding: 24px;
  border-radius: 16px;
  margin-bottom: 16 px;
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
  margin-left: 40px;
`

export const LinkItem = styled.li`
  margin-right: 450px;

  p {
    margin-left: 400px;
    font-size: 18px;
    font-weight: bold;
  }

  img {
    margin-left: -120px;
    margin-top: -15px;
  }
`

export const LinkCart = styled.a`
  display: flex;
  p {
    margin-left: -600px;
  }
`
