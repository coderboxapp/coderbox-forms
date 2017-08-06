import React from 'react'
import { storiesOf } from '@storybook/react'
import { Icon, Button } from '@coderbox/atoms'
import Control from '.'
import ControlGroup from '../ControlGroup'
import Box from '../Box'
import Input from '../Input'

storiesOf('Control', module)
  .add('simple usage', () => {
    return (
      <Box withSpace='0.5rem'>
        <Control hasIcons>
          <Input isSize='small' placeholder='Type username here (Size: small)' />
          <Icon isSize='small' name='user' className='left' />
          <Icon isSize='small' name='check' isColor='success' className='right' />
        </Control>
        <Control hasIcons>
          <Input isColor='danger' placeholder='Type password (Size: normal)' type='password' />
          <Icon name='unlock' className='left' />
          <Icon name='warning' isColor='danger' className='right' />
        </Control>
        <Button isColor='primary'>Login</Button>
      </Box>
    )
  })
  .add('group', () => {
    return (
      <Box withSpace='0.5rem'>
        <ControlGroup>
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
        </ControlGroup>
        <ControlGroup>
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
        </ControlGroup>
      </Box>
    )
  })
