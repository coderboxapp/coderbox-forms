import React from 'react'
import cx from 'classnames'
import { isObject } from 'lodash'
import { Icon, Group, Button } from '@coderbox/atoms'
import * as s from './styles'

const Component = ({
  items,
  selectedIndex,
  focusIndex,
  color,
  accentColor,
  tone,
  onItemClick,
  labelField,
  ...props
}) => {
  const className = cx(`menu`, props.className)

  return (
    <s.Menu {...props} className={className}>
      <Group isVertical>
        {items.map(
          (item, index) => {
            let icon = isObject(item) ? item.icon : null
            let text = isObject(item) ? item[labelField] : item

            return (
              <Button
                key={index}
                color={index === selectedIndex ? accentColor : color}
                isHover={index === focusIndex}
                tone={tone}
                onClick={() => onItemClick(item, index)}
              >
                {icon && <Icon size={props.size} name={icon} />}
                {text}
              </Button>
            )
          }
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
  labelField: 'text',
  selectedIndex: -1
}

export default Component
