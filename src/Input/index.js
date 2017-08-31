import React from 'react'
import cx from 'classnames'
import * as styles from './styles'

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
        className={className} />
    )
  }
}

export default Component
