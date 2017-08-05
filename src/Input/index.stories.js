import React from 'react'
import { storiesOf } from '@storybook/react'
import Box from '../Box'
import Input from '.'

storiesOf('Input', module)
  .add('with different sizes', () => {
    return (
      <Box withSpace='0.5rem'>
        <Input placeholder='Type username here' isSize='large' />
        <Input placeholder='Type username here' />
        <Input placeholder='Type username here' isSize='small' />
      </Box>
    )
  })
  .add('with colors', () => {
    return (
      <Box withSpace='0.5rem'>
        <Input placeholder='Type username here' />
        <Input placeholder='Type username here' isColor='primary' />
        <Input placeholder='Type username here' isColor='success' />
        <Input placeholder='Type username here' isColor='danger' />
        <Input placeholder='Type username here' isColor='black' />
      </Box>
    )
  })
