import React from 'react'
import ReactDOM from 'react-dom'
import cx from 'classnames'
import { Icon } from '@coderbox/atoms'
import * as styles from './styles'

import Menu from 'Menu'
import Input from 'Input'

class Dropdown extends React.Component {
  state = {
    open: false
  }

  static defaultProps = {
    isColor: 'light',
    isSearch: false,
    isTone: 0
  }

  componentDidMount () {
    document.addEventListener('click', this.handleClickOutside, true)
  }

  componentWillUnmount () {
    document.removeEventListener('click', this.handleClickOutside, true)
  }

  open = (evt) => {
    this.setState({ open: true })
  }

  close = (evt) => {
    this.setState({ open: false })
  }

  handleClickOutside = (evt) => {
    const domNode = ReactDOM.findDOMNode(this)
    if ((!domNode || !domNode.contains(evt.target))) {
      this.close()
    }
  }

  toggle = evt => {
    this.state.open ? this.close(evt) : this.open(evt)
  }

  handleClick = (evt) => {
    let { open } = this.state
    let { search } = this.refs

    if (open) return

    this.toggle(evt)
    search && search.focus()
  }

  render () {
    const { options, isSearch, placeholder, ...rest } = this.props
    const { open } = this.state
    const className = cx(`dropdown`, rest.className)

    return (
      <styles.Dropdown
        {...rest}
        isOpen={open}
        onClick={this.handleClick}
        className={className}>

        <Input ref='search' placeholder={placeholder} disabled={!isSearch} />
        <Icon name='caret-down' />
        <Menu
          items={options}
          isHidden={!open}
          isColor={rest.isColor} />

      </styles.Dropdown>
    )
  }
}

export default Dropdown
