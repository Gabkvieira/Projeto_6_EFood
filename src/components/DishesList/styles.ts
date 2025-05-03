import styled from 'styled-components'

import { Props } from '.'

export const Container = styled.section<Omit<Props, 'restaurants'>>`
  padding: 16px 0;
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 32px;
  margin-top: 40px;

  @media only screen and (min-height: 1480px) and (max-width: 1920px) {
    margin-top: 80px;
  }

  @media only screen and (max-width: 767px) {
    grid-template-columns: 1fr;
  }

  @media only screen and (min-width: 768px) and (max-width: 1023px) {
    grid-template-columns: 1fr 1fr;
    column-gap: 10px;
  }

  @media only screen and (min-width: 1024px) and (max-width: 1200px) {
    column-gap: 10px;
  }
`

export const Title = styled.h2`
  font-size: 18px;
  font-weight: bold;
`
