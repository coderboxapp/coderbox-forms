import React from 'react'
import cx from 'classnames'
import * as styles from './styles'

class Input extends React.Component {
  static defaultProps = {
    type: 'text',
    isSize: 'normal'
  }

  focus = () => {
    setTimeout(() => { this.input.focus() }, 50)
  }

  handleRef = (input) => {
    this.input = input
  }

  render () {
    const { type, readonly, isInverted, ...props } = this.props
    const className = cx(`input`, props.className)

    return (
      <styles.Input
        innerRef={this.handleRef}
        {...props}
        isOutlined={!isInverted}
        isInverted={false}
        type={type}
        className={className} />
    )
  }
}

export default Input
