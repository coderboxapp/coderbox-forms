import React from 'react'
import cx from 'classnames'
import { Icon } from '@coderbox/atoms'
import * as styles from './styles'

const Menu = ({
  items,
  selected,
  color,
  tone,
  size,
  onItemClick,
  ...props
}) => {
  const className = cx(`menu`, props.className)
  const itemSelectedColor = color
  const itemColor = 'white'
  const isSelected = item => {
    if (!selected) return false
    return selected.value === item.value
  }

  return (
    <styles.Menu
      {...props}
      color={color}
      tone={tone}
      size={size}
      className={className}>

      {items.map(
        (item, index) => (
          <styles.MenuItem
            key={index}
            color={isSelected(item) ? itemSelectedColor : itemColor}
            tone={tone}
            onClick={() => onItemClick(item, index)}
            hasIcon={item.icon}
            className='menu-item'
            {...props} >

            {item.icon && <Icon size={size} name={item.icon} />}
            {item.text}

          </styles.MenuItem>
        )
      )}

    </styles.Menu>
  )
}

Menu.defaultProps = {
  size: 'normal',
  tone: 0
}

  /*  */
export default Menu
