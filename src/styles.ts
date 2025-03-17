import { createGlobalStyle } from 'styled-components'

export const cores = {
  branca: '#FFFFFF',
  preta: '#111',
  cinza: '#333',
  fundoTag: '#E66767',
  cinzaClaro: '#A3A3A3',
  textoTag: '#FFEBD9',
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
    color: ${cores.fundoTag};
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
  }
`
