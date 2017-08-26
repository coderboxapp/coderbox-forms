import React from 'react'
import cx from 'classnames'
import * as styles from './styles'

const Component = ({ hasIcons, children, ...props }) => {
  const className = cx(`control`, props.className)

  return (
    <styles.Control {...props} hasIcons={hasIcons} className={className}>
      {children}
    </styles.Control>
  )
}

Component.displayName = 'Control'
Component.defaultProps = {
  hasIcons: false
}

export default Component
