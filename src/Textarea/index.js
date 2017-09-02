import React from 'react'
import cx from 'classnames'
import { Textarea } from './styles'

const Component = ({ children, ...props }) => {
  const className = cx(`textarea`, props.className)

  return (
    <Textarea {...props} className={className}>
      {children}
    </Textarea>
  )
}

Component.displayName = 'Textarea'
Component.defaultProps = {
  rows: 5,
  size: 'normal'
}

export default Component
