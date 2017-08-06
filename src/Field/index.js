import React from 'react'
import cx from 'classnames'
import * as styles from './styles'

const Field = ({ label, children, ...props }) => {
  const className = cx(`field`, props.className)

  return (
    <styles.Field {...props} className={className}>
      {label && <label>{label}</label>}
      {children}
    </styles.Field>
  )
}

Field.defaultProps = {
  isAlign: 'flex-start'
}

export default Field
