import React from 'react'
import { withTheme } from 'utils'
import { storiesOf } from '@storybook/react'
import { Box } from '@coderbox/atoms'

import Checkbox from '.'

storiesOf('Checkbox', module)
  .add('simple usage', withTheme(() => {
    return (
      <div>
        <Box withSpace='0.5rem'>
          <Checkbox checked>Do this at <a href='#'>Coderbox</a></Checkbox>
          <Checkbox withColor='primary' onChange={(e, checked) => console.log(checked)}>Primary Checkbox</Checkbox>
          <Checkbox withColor='danger'>This is danger</Checkbox>
        </Box>
        <Box withSpace='0.5rem'>
          <Checkbox withSize='small'>Small Check</Checkbox>
          <Checkbox withSize='small' withColor='success'>Small Success Check</Checkbox>
        </Box>
      </div>
    )
  }))
