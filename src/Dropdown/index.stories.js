import React from 'react'
import { storiesOf } from '@storybook/react'
import { Box } from '@coderbox/atoms'
import Dropdown from '.'

const labels = [
  {value: '1', text: 'Important', icon: 'dot-circle-o'},
  {value: '2', text: 'Normal', icon: 'circle-o'},
  {value: '3', text: 'Low', icon: 'circle'}
]

storiesOf('Dropdown', module)
  .add('default', () => {
    return (
      <Box withSpace='0.5rem'>
        <Dropdown isSize='small' isColor='primary' items={labels} placeholder='Select importance' />
        <Dropdown isSize='normal' items={labels} placeholder='Select importance' isSearch />
      </Box>
    )
  })
