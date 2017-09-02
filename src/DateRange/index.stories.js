import React from 'react'
import { withTheme } from 'utils'
import { storiesOf } from '@storybook/react'
import { Box } from '@coderbox/atoms'
import { dateRange } from 'mockup'
import DateRange from '.'

storiesOf('DateRange', module)
  .add('simple usage', withTheme(() => {
    return (
      <div>
        <Box>
          <DateRange value={dateRange} onChange={v => console.log(v)} color='primary' />
        </Box>
        <Box>
          <DateRange value={dateRange} onChange={v => console.log(v)} color='danger' size='small' />
        </Box>
      </div>
    )
  }))
