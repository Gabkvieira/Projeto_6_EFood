import { createGlobalStyle } from 'styled-components'

export const colors = {
  white: '#FFFFFF',
  gray: '#333',
  salmon: '#E66767',
  lightGray: '#A3A3A3',
  beige: '#FFEBD9',
  lightBeige: '#FFF8F2'
}

export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
  }

  body {
    background-color: ${colors.lightBeige};
    color: ${colors.salmon};
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
  }
`
