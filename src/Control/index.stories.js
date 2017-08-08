import React from 'react'
import { storiesOf } from '@storybook/react'
import { Box, Icon, Button } from '@coderbox/atoms'
import ControlGroup from 'ControlGroup'
import Input from 'Input'
import Control from '.'

storiesOf('Control', module)
  .add('simple usage', () => {
    return (
      <Box withSpace='0.5rem'>
        <Control hasIcons>
          <Input placeholder='Type username here (default)' />
          <Icon name='user' className='left' />
          <Icon isColor='success' name='check' className='right' />
        </Control>
        <Control isColor='danger' hasIcons>
          <Input isColor='danger' placeholder='Type password (danger)' type='password' />
          <Icon name='unlock' className='left' />
          <Icon isColor='danger' isTone={2} name='warning' className='right' />
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
            <Button isStatic isColor='gray' isIcon>
              <Icon name='unlock' />
            </Button>
          </Control>
          <Control>
            <Input placeholder='Your password' type='password' />
          </Control>
          <Control>
            <Button isStatic isColor='gray'>@gmail.com</Button>
          </Control>
        </ControlGroup>
        <ControlGroup>
          <Control>
            <Button isStatic isColor='success' isIcon>
              <Icon name='unlock' />
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
