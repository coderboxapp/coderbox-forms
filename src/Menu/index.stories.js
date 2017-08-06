import React from 'react'
import { storiesOf } from '@storybook/react'
import Box from '../Box'
import Menu from '.'

const states = [
  {value: 'AL', text: 'Alabama'},
  {value: 'IL', text: 'Chicago'},
  {value: 'WS', text: 'Washinton'}
]

storiesOf('Menu', module)
  .add('simple usage', () => {
    return (
      <Box>
        <Menu items={states} />
      </Box>
    )
  })
