import React from 'react'
import cx from 'classnames'
import * as styles from './styles'

const Box = ({ as = 'div', ...props }) => {
  const className = cx(`box`, props.className)

  return (
    <styles.Box {...props} className={className} />
  )
}

Box.defaultProps = {
}

export default Box
