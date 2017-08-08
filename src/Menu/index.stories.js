import React from 'react'
import { withTheme } from 'utils'
import { storiesOf } from '@storybook/react'
import { Box } from '@coderbox/atoms'
import Menu from '.'

const states = [
  {value: 'AL', text: 'Alabama'},
  {value: 'IL', text: 'Chicago'},
  {value: 'WS', text: 'Washinton'}
]

const labels = [
  {value: '1', text: 'Important', icon: 'star'},
  {value: '2', text: 'Normal', icon: 'github'},
  {value: '3', text: 'Low', icon: 'twitter'}
]

storiesOf('Menu', module)
  .add('simple usage', withTheme(() => {
    return (
      <Box>
        Normal:
        <Menu items={states} />
        Primary:
        <Menu isColor='primary' items={states} />
        Success:
        <Menu isColor='success' items={labels} />
      </Box>
    )
  }))
