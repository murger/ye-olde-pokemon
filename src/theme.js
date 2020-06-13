import { createGlobalStyle } from 'styled-components'

export const theme = {
  colors: {
    accent: '#3366cc',
    container: '#eaeaea',
    background: '#f8f8f8'
  },
}

export const GlobalStyles = createGlobalStyle`
  html, body, main {
    height: 100%;
    margin: auto;
    overflow: hidden;
    user-select: none;
    background-color: ${theme.background};
  }

  body {
    padding: 0;
    font-family: 'Helvetica Neue', 'Helvetica', Sans-serif;
    font-size: 16px;
    line-height: 1.65em;
    -webkit-tap-highlight-color: transparent;
  }
`
