import React from 'react'
import { storiesOf } from '@storybook/react'
import { Icon, Button } from '@coderbox/atoms'
import Box from '../Box'
import Input from '../Input'
import Control from '.'

storiesOf('Control', module).add('simple usage', () => {
  return (
    <Box withSpace='0.5rem'>
      <Control hasIcons>
        <Input isSize='small' placeholder='Type username here' />
        <Icon isSize='small' name='user' className='left' />
        <Icon isSize='small' name='check' isColor='success' className='right' />
      </Control>
      <Control hasIcons>
        <Input isColor='danger' placeholder='Your password' type='password' />
        <Icon name='unlock' className='left' />
        <Icon name='warning' isColor='danger' className='right' />
      </Control>
      <Button isColor='primary'>Login</Button>
    </Box>
  )
})
