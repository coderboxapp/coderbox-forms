import React from 'react'
import { withTheme } from 'utils'
import { storiesOf } from '@storybook/react'
import { Box } from '@coderbox/atoms'
import Input from '.'

storiesOf('Input', module)
  .add('simple usage', withTheme(() => {
    return (
      <div>
        <Box withSpace='0.5rem'>
          <Input placeholder='Type username here' />
          <Input placeholder='Type password here' type='password' />
        </Box>
        <Box withSpace='0.5rem'>
          <div>With different sizes:</div>
          <Input placeholder='Type username here' />
          <Input placeholder='Type username here' withSize='small' />
        </Box>
      </div>
    )
  }))
  .add('with colors', withTheme(() => {
    return (
      <Box withSpace='0.5rem'>
        <Input placeholder='Type username here' withColor='primary' isInverted />
        <Input placeholder='Type username here' />
        <Input placeholder='Type username here' withColor='success' />
        <Input placeholder='Type username here' withColor='danger' />
        <Input placeholder='Type username here' withColor='black' />
      </Box>
    )
  }))
