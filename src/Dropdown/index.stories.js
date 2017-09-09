import React from 'react'
import { withTheme } from 'utils'
import { storiesOf } from '@storybook/react'
import { Box } from '@coderbox/atoms'
import Dropdown from '.'
import { importance, stringItems } from 'mockup'

const selected = importance[1]

storiesOf('Dropdown', module)
  .add('default', withTheme(() => (
    <div>
      <Box>
        <Dropdown
          items={importance}
          value={[selected]}
          isSearch
          isMultiple
          allowNew
          onChange={(item) => console.log(item)}
          placeholder='Select importance' />
      </Box>
      <Box>
        <Dropdown
          isMultiple
          items={stringItems}
          color='danger'
          accentColor='gray'
          onChange={(items) => console.log(items)}
          placeholder='Select importance' />
      </Box>
      <Box>
        <Dropdown
          isSearch
          allowNew
          value=''
          items={stringItems}
          color='danger'
          accentColor='gray'
          onChange={(item) => console.log(item)}
          placeholder='Select importance' />
      </Box>
    </div>
  )))
