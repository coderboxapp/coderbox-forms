import React from 'react'
import { ThemeProvider } from 'styled-components'
import { configure } from '@storybook/react';
import { theme } from '@coderbox/atoms'

const req = require.context('../src', true, /\.stories\.js$/)
function loadStories() {
  req.keys().forEach((filename) => req(filename))
}

configure(loadStories, module);
