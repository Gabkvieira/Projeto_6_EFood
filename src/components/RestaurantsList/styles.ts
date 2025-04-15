import styled from 'styled-components'

import { Props } from '.'

export const Container = styled.section<Omit<Props, 'restaurantMenu'>>`
  padding: 32px 0;
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 80px;
  margin-top: 50px;

  @media only screen and (max-width: 767px) {
    grid-template-columns: 1fr;
    margin-top: 20px;
  }

  @media only screen and (min-width: 768px) and (max-width: 1023px) {
    grid-template-columns: 1fr 1fr;
    column-gap: 10px;
  }

  @media only screen and (min-width: 1024px) and (max-width: 1200px) {
    column-gap: 20px;
  }
`
