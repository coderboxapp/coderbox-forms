import React from 'react'
import { withTheme } from 'utils'
import { storiesOf } from '@storybook/react'
import { Box } from '@coderbox/atoms'
import { labels, importance, stringItems } from 'mockup'
import DropdownMenu from '.'

storiesOf('DropdownMenu', module)
  .add('simple usage', withTheme(() => {
    return (
      <Box vSpace='0.5rem'>
        <DropdownMenu items={labels} selectedIndex={2} />
        <DropdownMenu color='success' accentColor='gray' items={importance} selectedIndex={2} />
        <DropdownMenu color='danger' items={stringItems} />
      </Box>
    )
  }))
