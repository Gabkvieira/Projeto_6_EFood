import styled from 'styled-components'
import { cores } from '../../styles'

export const HeaderBar = styled.header`
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
  margin-left: 450px;
  margin-top: 82px;
`

export const LinkItem = styled.li`
  margin-right: 350px;

  p {
    width: 105%;
    font-size: 18px;
    font-weight: bold;
  }

  img {
    margin-top: -15px;
    margin-right: -105px;
  }
`
