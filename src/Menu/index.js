import React from 'react'
import cx from 'classnames'
import * as styles from './styles'
import { Button, ButtonGroup, Icon } from '@coderbox/atoms'

const Menu = ({ items, selected, isColor, isSelectedColor, onItemClick, ...props }) => {
  const className = cx(`menu`, props.className)
  const isSelected = item => {
    if (!selected) return false
    return selected.value === item.value
  }

  return (
    <styles.Menu {...props} isColor={isColor} className={className}>
      <ButtonGroup isVertical>
        {items.map(
          (item, index) => (
            <Button
              key={index}
              isOutlined
              isColor={isSelected(item) ? isSelectedColor : isColor}
              onClick={() => onItemClick(item)}
              {...props}>
              {item.icon && <Icon name={item.icon} />}
              {item.text}
            </Button>
          )
        )}
      </ButtonGroup>
    </styles.Menu>
  )
}

Menu.defaultProps = {
  isSize: 'normal',
  isColor: 'gray',
  isTone: 1
}

  /* <styles.Item
            {...props}
            key={index}
            isSelected={isSelected(item)}
            onClick={() => onItemClick(item, index)}>
            {item.text}
          </styles.Item> */
export default Menu
