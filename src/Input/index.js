import React from 'react'
import cx from 'classnames'
import * as styles from './styles'

const Keys = {
  ENTER: 13,
  ESC: 27
}

class Component extends React.Component {
  static displayName = 'Input'
  static defaultProps = {
    type: 'text',
    size: 'normal'
  }

  focus = () => {
    setTimeout(() => {
      this.input.focus()
      this.input.select()
    }, 50)
  }

  handleRef = (input) => {
    this.input = input
  }

  handleKeyDown = (evt) => {
    const { onKeyDown, onEnter } = this.props

    if (evt.keyCode === Keys.ENTER && onEnter) {
      onEnter(evt)
    }

    if (onKeyDown) {
      onKeyDown(evt)
    }
  }

  render () {
    const { type, readonly, isInverted, ...props } = this.props
    const className = cx(`input`, props.className)

    return (
      <styles.Input
        {...props}
        innerRef={this.handleRef}
        isOutlined={!isInverted}
        isInverted={false}
        type={type}
        onKeyDown={this.handleKeyDown}
        className={className} />
    )
  }
}

export default Component
