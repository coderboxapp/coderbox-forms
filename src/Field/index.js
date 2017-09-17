import React from 'react'
import cx from 'classnames'
import { Title } from '@coderbox/atoms'
import * as s from './styles'

const Component = ({ label, isRequired, children, ...props }) => {
  const className = cx(`field`, props.className)

  return (
    <s.Field {...props} className={className}>
      {label && (
        <Title size='normal'>
          {label}
          {isRequired && <span>*</span>}
        </Title>
      )}
      {children}
    </s.Field>
  )
}

Component.displayName = 'Field'
Component.defaultProps = {
  align: 'normal'
}

export default Component
