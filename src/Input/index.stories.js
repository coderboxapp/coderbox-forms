import React from 'react'
import { withTheme } from 'utils'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { Box } from '@coderbox/atoms'
import Input from '.'

storiesOf('Input', module)
  .add('simple usage', withTheme(() => {
    return (
      <div>
        <Box vSpace='0.5rem'>
          <Input placeholder='Type username here' onEnter={action('on enter')} />
          <Input placeholder='Type password here' type='password' />
        </Box>
        <Box vSpace='0.5rem'>
          <div>With different sizes:</div>
          <Input placeholder='Type username here' />
          <Input placeholder='Type username here' size='small' />
        </Box>
      </div>
    )
  }))
  .add('with colors', withTheme(() => {
    return (
      <Box vSpace='0.5rem'>
        <Input placeholder='Type username here' color='primary' isInverted />
        <Input placeholder='Type username here' />
        <Input placeholder='Type username here' color='success' />
        <Input placeholder='Type username here' color='danger' />
        <Input placeholder='Type username here' color='black' />
      </Box>
    )
  }))
