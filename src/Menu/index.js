import React from 'react'
import cx from 'classnames'
import { Icon } from '@coderbox/atoms'
import * as styles from './styles'

const Menu = ({ items, selected, withColor, withTone, withSize, onItemClick, ...props }) => {
  const className = cx(`menu`, props.className)
  const itemSelectedColor = withColor
  const itemColor = 'white'
  const isSelected = item => {
    if (!selected) return false
    return selected.value === item.value
  }

  return (
    <styles.Menu
      {...props}
      withColor={withColor}
      withTone={withTone}
      withSize={withSize}
      className={className}>

      {items.map(
        (item, index) => (
          <styles.MenuItem
            key={index}
            withColor={isSelected(item) ? itemSelectedColor : itemColor}
            withTone={withTone}
            onClick={() => onItemClick(item, index)}
            hasIcon={item.icon}
            className='menu-item'
            {...props} >

            {item.icon && <Icon withSize={withSize} name={item.icon} />}
            {item.text}

          </styles.MenuItem>
        )
      )}

    </styles.Menu>
  )
}

Menu.defaultProps = {
  withSize: 'normal',
  withTone: 0
}

  /*  */
export default Menu
