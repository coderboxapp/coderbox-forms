import React from 'react'
import { storiesOf } from '@storybook/react'
import { Box, Icon, Button } from '@coderbox/atoms'

import Input from 'Input'
import Control from 'Control'
import FieldGroup from 'FieldGroup'
import Field from '.'

storiesOf('Field', module)
  .add('simple usage', () => {
    return (
      <Box>
        <Field label='Email:'>
          <Control hasIcons>
            <Input placeholder='Type username here' />
            <Icon name='user' className='left' />
            <Icon name='check' isColor='success' className='right' />
          </Control>
        </Field>

        <Field label='Password:'>
          <Control hasIcons>
            <Input isColor='danger' placeholder='Your password' type='password' />
            <Icon name='unlock' className='left' />
            <Icon name='warning' isColor='danger' className='right' />
          </Control>
        </Field>
        <Button isColor='primary'>Login</Button>
      </Box>
    )
  })
  .add('group', () => {
    return (
      <Box>
        <FieldGroup>
          <Field label='Email:'>
            <Control hasIcons>
              <Input placeholder='Type username here' />
              <Icon name='user' className='left' />
              <Icon name='check' isColor='success' className='right' />
            </Control>
          </Field>

          <Field label='Password:'>
            <Control hasIcons>
              <Input isColor='danger' placeholder='Your password' type='password' />
              <Icon name='unlock' className='left' />
              <Icon name='warning' isColor='danger' className='right' />
            </Control>
          </Field>
        </FieldGroup>
        <Button isColor='primary'>
          <Icon name='lock' isColor='white' />
          Login
        </Button>
      </Box>
    )
  })
