import React from 'react'
import { storiesOf } from '@storybook/react'
import { Box } from '@coderbox/atoms'
import Input from '.'

storiesOf('Input', module)
  .add('simple usage', () => {
    return (
      <div>
        <Box withSpace='0.5rem'>
          <Input placeholder='Type username here' />
          <Input placeholder='Type password here' type='password' />
        </Box>
        <Box withSpace='0.5rem'>
          <div>With different sizes:</div>
          <Input placeholder='Type username here' />
          <Input placeholder='Type username here' isSize='small' />
        </Box>
      </div>
    )
  })
  .add('with colors', () => {
    return (
      <Box withSpace='0.5rem'>
        <Input placeholder='Type username here' isColor='primary' isTone={0} isInverted />
        <Input placeholder='Type username here' />
        <Input placeholder='Type username here' isColor='success' />
        <Input placeholder='Type username here' isColor='danger' />
        <Input placeholder='Type username here' isColor='black' />
      </Box>
    )
  })
