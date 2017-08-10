import React from 'react'
import { withTheme } from 'utils'
import { storiesOf } from '@storybook/react'
import { Box, Icon, Button } from '@coderbox/atoms'
import { labels } from 'mockup'
import Input from 'Input'
import Dropdown from 'Dropdown'
import Control from 'Control'
import ControlGroup from '.'

storiesOf('ControlGroup', module).add(
  'group controls',
  withTheme(() => {
    return (
      <Box withSpace='0.5rem'>
        <ControlGroup>
          <Control>
            <Button isStatic withColor='gray' withSize='small' isIcon>
              <Icon name='star' withSize='small' />
            </Button>
          </Control>
          <Control withWidth='100px'>
            <Dropdown items={labels} placeholder='Imp.' withSize='small' />
          </Control>
          <Control>
            <Input placeholder='Your email' type='email' withSize='small' />
          </Control>
          <Control>
            <Button isStatic withColor='gray' withSize='small'>
              @gmail.com
            </Button>
          </Control>
        </ControlGroup>
        <ControlGroup>
          <Control>
            <Button isStatic withColor='success' isIcon>
              <Icon name='unlock' />
            </Button>
          </Control>
          <Control>
            <Input placeholder='Your password' type='password' />
          </Control>
          <Control>
            <Button isStatic withColor='success'>
              @gmail.com
            </Button>
          </Control>
        </ControlGroup>
      </Box>
    )
  })
)
