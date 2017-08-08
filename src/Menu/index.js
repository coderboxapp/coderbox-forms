import React from 'react'
import cx from 'classnames'
import { Icon } from '@coderbox/atoms'
import * as styles from './styles'

const Menu = ({ items, selected, isColor, isTone, onItemClick, ...props }) => {
  const className = cx(`menu`, props.className)
  const itemSelectedColor = isColor
  const itemColor = 'white'
  const isSelected = item => {
    if (!selected) return false
    return selected.value === item.value
  }

  return (
    <styles.Menu
      {...props}
      isColor={isColor}
      isTone={isTone}
      className={className}>

      {items.map(
        (item, index) => (
          <styles.MenuItem
            key={index}
            isColor={isSelected(item) ? itemSelectedColor : itemColor}
            isTone={isTone}
            onClick={() => onItemClick(item, index)}
            className='menu-item'
            {...props} >

            {item.icon && <Icon name={item.icon} />}
            {item.text}

          </styles.MenuItem>
        )
      )}

    </styles.Menu>
  )
}

Menu.defaultProps = {
  isSize: 'normal',
  isTone: 0
}

  /*  */
export default Menu
