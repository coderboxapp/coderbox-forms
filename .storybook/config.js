import React from 'react'
import { ThemeProvider } from 'styled-components'
import { configure, addDecorator } from '@storybook/react';
import theme from '../src/theme'

const req = require.context('../src', true, /\.stories\.js$/)
function loadStories() {
  req.keys().forEach((filename) => req(filename))
}

addDecorator((story) => (
  <ThemeProvider theme={theme}>
    {story()}
  </ThemeProvider>
))

configure(loadStories, module);
