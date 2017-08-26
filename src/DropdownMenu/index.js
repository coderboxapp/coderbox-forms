import React from 'react'
import cx from 'classnames'
import { Icon, Group, Button } from '@coderbox/atoms'
import * as s from './styles'

const Component = ({ items, selectedIndex, selectedColor, color, tone, onItemClick, ...props }) => {
  const className = cx(`menu`, props.className)

  return (
    <s.Menu {...props} className={className}>
      <Group isVertical>
        {items.map(
          (item, index) => (
            <Button
              key={index}
              color={index === selectedIndex ? selectedColor : color}
              tone={tone}
              onClick={() => onItemClick(item, index)}
            >
              {item.icon && <Icon size={props.size} name={item.icon} />}
              {item.text}
            </Button>
          )
        )}
      </Group>
    </s.Menu>
  )
}

/* <s.MenuItem
  key={index}
  onClick={() => onItemClick(item, index)}
  hasIcon={item.icon}
  className='menu-item'
  {...props} >

  {item.icon && <Icon name={item.icon} />}
  {item.text}

</s.MenuItem> */

Component.displayName = 'DropdownMenu'
Component.defaultProps = {
  size: 'normal',
  color: 'white',
  selectedIndex: -1,
  selectedColor: 'primary'
}

export default Component
