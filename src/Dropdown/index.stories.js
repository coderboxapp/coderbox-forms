import React from 'react'
import { withTheme } from 'utils'
import { storiesOf } from '@storybook/react'
import { Box } from '@coderbox/atoms'
import Dropdown from '.'

const labels = [
  {value: '1', text: 'Important', icon: 'dot-circle-o'},
  {value: '2', text: 'Normal', icon: 'circle-o'},
  {value: '3', text: 'Low', icon: 'star'}
]

storiesOf('Dropdown', module)
  .add('default', withTheme(() => (
    <Box withSpace='0.5rem'>
      <Dropdown items={labels} placeholder='Select importance' />
      <Dropdown items={labels} isColor='primary' placeholder='Select importance' isSearch />
    </Box>
  )))
