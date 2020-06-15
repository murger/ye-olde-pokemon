import React from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles, theme } from '../../theme'
import Search from '../Search'

const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <Search />
  </ThemeProvider>
)

export default App
