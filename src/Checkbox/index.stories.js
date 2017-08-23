import React from 'react'
import { withTheme } from 'utils'
import { storiesOf } from '@storybook/react'
import { Box } from '@coderbox/atoms'

import Checkbox from '.'

storiesOf('Checkbox', module)
  .add('simple usage', withTheme(() => {
    return (
      <div>
        <Box vSpace='0.5rem'>
          <Checkbox checked>Do this at <a href='#'>Coderbox</a></Checkbox>
          <Checkbox color='primary' onChange={(e, checked) => console.log(checked)}>Primary Checkbox</Checkbox>
          <Checkbox color='danger'>This is danger</Checkbox>
        </Box>
        <Box vSpace='0.5rem'>
          <Checkbox size='small'>Small Check</Checkbox>
          <Checkbox size='small' color='success'>Small Success Check</Checkbox>
        </Box>
      </div>
    )
  }))
