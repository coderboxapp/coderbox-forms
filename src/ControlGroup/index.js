import React from 'react'
import cx from 'classnames'
import * as styles from './styles'

const ControlGroup = ({ children, ...props }) => {
  let className = cx('controls', props.className)

  return (
    <styles.ControlGroup {...props} className={className}>
      {children}
    </styles.ControlGroup>
  )
}

export default ControlGroup
