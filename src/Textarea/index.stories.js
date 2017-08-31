import React from 'react'
import { withTheme } from 'utils'
import { storiesOf } from '@storybook/react'
import { Box } from '@coderbox/atoms'

import Textarea from '.'

storiesOf('Textarea', module)
  .add('simple usage', withTheme(() => {
    return (
      <div>
        <Box>
          <Textarea placeholder='Hello Textarea!' />
        </Box>
        <Box>
          <Textarea placeholder='Hello Textarea!' color='primary' />
        </Box>
      </div>
    )
  }))
