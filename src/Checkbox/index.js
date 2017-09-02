import React from 'react'
import cx from 'classnames'
import { Icon } from '@coderbox/atoms'
import * as styles from './styles'

class Checkbox extends React.Component {
  state = { checked: this.props.checked }

  static defaultProps = {
    tone: 0
  }

  handleClick = (evt) => {
    let { onChange } = this.props
    let { checked } = this.state

    checked = !checked
    this.setState({ checked })

    if (onChange) {
      onChange(evt, checked)
    }
  }

  render () {
    const { children, ...props } = this.props
    const { checked } = this.state
    const className = cx(`checkbox`, props.className)

    return (
      <styles.Checkbox {...props} className={className}>
        <div onClick={this.handleClick}>{checked && <Icon size={props.size} name='check' />}</div>
        <label>{children}</label>
      </styles.Checkbox>
    )
  }
}

export default Checkbox
