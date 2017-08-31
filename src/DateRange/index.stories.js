import React from 'react'
import { withTheme } from 'utils'
import { storiesOf } from '@storybook/react'
import { Box } from '@coderbox/atoms'

import DateRange from '.'

storiesOf('DateRange', module)
  .add('simple usage', withTheme(() => {
    return (
      <div>
        <Box>
          <DateRange onChange={v => console.log(v)} color='danger' />
        </Box>
      </div>
    )
  }))
