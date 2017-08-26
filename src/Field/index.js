import React from 'react'
import cx from 'classnames'
import * as s from './styles'

const Component = ({ label, children, ...props }) => {
  const className = cx(`field`, props.className)

  return (
    <s.Field {...props} className={className}>
      {label && <label>{label}</label>}
      {children}
    </s.Field>
  )
}

Component.displayName = 'Field'
Component.defaultProps = {
  align: 'normal'
}

export default Component
