import React from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles, theme } from '../../theme'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      Poke, poke, poke
    </ThemeProvider>
  )
}

export default App
