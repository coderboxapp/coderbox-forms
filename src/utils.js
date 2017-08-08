import React from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from '@coderbox/atoms'

export const withTheme = (Component) => {
  return () => <ThemeProvider theme={theme}><Component /></ThemeProvider>
}
