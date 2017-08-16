import React from 'react'
import { withTheme } from 'utils'
import { storiesOf } from '@storybook/react'
import { Box, Icon, Button } from '@coderbox/atoms'

import Input from 'Input'
import Control from 'Control'
import FieldGroup from 'FieldGroup'
import Field from '.'

storiesOf('Field', module)
  .add('simple usage', withTheme(() => {
    return (
      <Box>
        <Field label='Email:'>
          <Control hasIcons>
            <Input placeholder='Type username here' />
            <Icon name='user' className='left' />
            <Icon name='check' color='success' className='right' />
          </Control>
        </Field>

        <Field label='Password:'>
          <Control hasIcons>
            <Input color='danger' placeholder='Your password' type='password' />
            <Icon name='unlock' className='left' />
            <Icon name='warning' color='danger' className='right' />
          </Control>
        </Field>
        <Button color='primary'>Login</Button>
      </Box>
    )
  }))
  .add('group', withTheme(() => {
    return (
      <Box>
        <FieldGroup>
          <Field label='Email:'>
            <Control hasIcons>
              <Input placeholder='Type username here' />
              <Icon name='user' className='left' />
              <Icon name='check' color='success' className='right' />
            </Control>
          </Field>

          <Field label='Password:'>
            <Control hasIcons>
              <Input color='danger' isInverted placeholder='Your password' type='password' />
              <Icon name='unlock' className='left' color='white' />
              <Icon name='warning' color='white' className='right' />
            </Control>
          </Field>
        </FieldGroup>
        <Button color='primary'>
          <Icon name='lock' color='white' />
          Login
        </Button>
      </Box>
    )
  }))
