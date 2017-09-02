import React from 'react'
import { withTheme } from 'utils'
import { storiesOf } from '@storybook/react'
import { Box } from '@coderbox/atoms'

import DatePick from '.'

storiesOf('DatePick', module)
  .add('simple usage', withTheme(() => {
    return (
      <div>
        <Box>
          <DatePick onChange={d => console.log(d.toDate())} color='success' />
        </Box>
      </div>
    )
  }))
