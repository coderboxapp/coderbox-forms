import React from 'react'
import { storiesOf } from '@storybook/react'
import { Icon, Button } from '@coderbox/atoms'
import Box from '../Box'
import Input from '../Input'
import Control from '../Control'
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
        <Field isGrouped>
          <Control>
            <Button isStatic isColor='light' isPaddingless>
              <Icon name='unlock' isColor='gray' />
            </Button>
          </Control>
          <Control>
            <Input placeholder='Your password' type='password' />
          </Control>
          <Control>
            <Button isStatic isColor='light'>@gmail.com</Button>
          </Control>
        </Field>

        <Field isGrouped>
          <Control>
            <Button isStatic isColor='success' isPaddingless>
              <Icon name='unlock' isColor='white' />
            </Button>
          </Control>
          <Control>
            <Input placeholder='Your password' type='password' />
          </Control>
          <Control>
            <Button isStatic isColor='success'>@gmail.com</Button>
          </Control>
        </Field>
      </Box>
    )
  })
