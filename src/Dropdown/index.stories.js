import React from 'react'
import { storiesOf } from '@storybook/react'
import Box from '../Box'
import Dropdown from '.'

const states = [
  {value: 'AL', text: 'Alabama'},
  {value: 'IL', text: 'Chicago'},
  {value: 'WS', text: 'Washinton'}
]

storiesOf('Dropdown', module)
  .add('default', () => {
    return (
      <Box>
        <Dropdown options={states} />
      </Box>
    )
  })
