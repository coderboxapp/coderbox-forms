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
          isSearch
          items={importance}
          value={selected}
          onChange={(item) => console.log(item)}
          placeholder='Select importance' />
      </Box>
      <Box>
        <Dropdown
          items={importance}
          value={[selected]}
          isSearch
          isMultiple
          onChange={(item) => console.log(item)}
          placeholder='Select importance' />
      </Box>
      <Box>
        <Dropdown
          isMultiple
          items={importance}
          color='danger'
          accentColor='gray'
          onChange={(items) => console.log(items)}
          placeholder='Select importance' />
      </Box>
    </div>
  )))
