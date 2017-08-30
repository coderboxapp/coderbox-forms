import React from 'react'
import cx from 'classnames'
import { Icon, Group, Button } from '@coderbox/atoms'
import * as s from './styles'

const Component = ({ items, selectedIndex, focusIndex, accentColor, color, tone, onItemClick, ...props }) => {
  const className = cx(`menu`, props.className)

  return (
    <s.Menu {...props} className={className}>
      <Group isVertical>
        {items.map(
          (item, index) => (
            <Button
              key={index}
              color={index === selectedIndex ? accentColor : color}
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

Component.displayName = 'DropdownMenu'
Component.defaultProps = {
  size: 'normal',
  color: 'white',
  accentColor: 'primary',
  selectedIndex: -1
}

export default Component
