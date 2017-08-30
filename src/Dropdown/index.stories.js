import React from 'react'
import { withTheme } from 'utils'
import { storiesOf } from '@storybook/react'
import { Box } from '@coderbox/atoms'
import Dropdown from '.'
import { importance } from 'mockup'

const selected = importance[1]

storiesOf('Dropdown', module)
  .add('default', withTheme(() => (
    <div>
      <Box>
        <Dropdown
          items={importance}
          value={selected}
          isSearch
          maxItems={3}
          onChange={(item) => console.log(item)}
          placeholder='Select importance' />
      </Box>
      <Box>
        <Dropdown
          items={importance}
          color='success'
          selectedColor='gray'
          onChange={(item) => console.log(item)}
          placeholder='Select importance' />
      </Box>
    </div>
  )))
