import React from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles, theme } from '../../theme'
import Search from '../Search'
import Favourites from '../Favourites'

const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <Search />
    <Favourites />
  </ThemeProvider>
)

export default App
