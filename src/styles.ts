import { createGlobalStyle } from 'styled-components'

export const cores = {
  verde: '#10AC84',
  branca: '#FFFFFF',
  preta: '#111',
  cinza: '#333',
  salmao: '#E66767',
  cinzaClaro: '#A3A3A3',
  beje: '#FFEBD9',
  fundo: '#FFF8F2'
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
    background-color: ${cores.branca};
    color: ${cores.salmao};
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
  }
`
