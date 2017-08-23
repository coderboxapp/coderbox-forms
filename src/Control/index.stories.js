import React from 'react'
import { withTheme } from 'utils'
import { storiesOf } from '@storybook/react'
import { Box, Icon, Button } from '@coderbox/atoms'
import { labels } from 'mockup'
import Input from 'Input'
import Dropdown from 'Dropdown'
import Checkbox from 'Checkbox'
import Control from '.'

storiesOf('Control', module)
  .add('simple usage', withTheme(() => {
    return (
      <Box vSpace='0.5rem'>
        <form>
          <Control hasLeftIcon>
            <Input placeholder='Type username here (default)' />
            <Icon name='user' className='left' />
          </Control>
        </form>
        <Control color='danger' hasIcons>
          <Input color='danger' placeholder='Type password (danger)' type='password' />
          <Icon name='unlock' className='left' />
          <Icon color='danger' tone={2} name='warning' className='right' />
        </Control>
        <Control>
          <Dropdown items={labels} isSearch placeholder='Select importance' />
        </Control>
        <Checkbox>Remember me</Checkbox>
        <Button color='primary'>Login</Button>
      </Box>
    )
  }))
