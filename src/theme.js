import { createGlobalStyle } from 'styled-components'

const tones = {
  full: 1,
  higher: 0.850,
  high: 0.700,
  mid: 0.550,
  low: 0.425,
  lower: 0.300,
  base: 0.175,
  none: 0
}

export const theme = {
  colors: {
    grey: '#a0a0a0',
    blue: '#365fac',
    yellow: '#ffcc02',
    black: '#1a1c1f'
  },
  tone: (level, mode = true) =>
    `rgba(${mode ? '255, 255, 255' : '0, 0, 0'}, ${tones[level]})`
}

export const GlobalStyles = createGlobalStyle`
  html, body, main {
    height: 100%;
    margin: auto;
    overflow: hidden;
    user-select: none;
    background-color: ${theme.colors.black};
  }

  body {
    padding: 0;
    font-family: 'Helvetica Neue', 'Helvetica', Sans-serif;
    font-size: 16px;
    line-height: 1.65em;
    -webkit-tap-highlight-color: transparent;
  }

  main {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`
