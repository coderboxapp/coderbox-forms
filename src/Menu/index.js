import React from 'react'
import cx from 'classnames'
import * as styles from './styles'

const Menu = ({ items, ...props }) => {
  const className = cx(`menu`, props.className)

  return (
    <styles.Menu {...props} className={className}>
      {items.map(
        (item, index) => <styles.Item key={index} {...props}>{item.text}</styles.Item>
      )}
    </styles.Menu>
  )
}

Menu.defaultProps = {
  isSize: 'normal',
  isColor: 'light',
  isTone: 0
}

export default Menu
