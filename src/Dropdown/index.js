import React from 'react'
import ReactDOM from 'react-dom'
import cx from 'classnames'
import styled, { css } from 'styled-components'
import Menu from '../Menu'
import Input from '../Input'

const isOpen = ({ isOpen }) => {
  if (!isOpen) return
  return css`
    box-shadow: 0 2px 3px 0 rgba(34, 36, 38, 0.15);
    border-radius: 3px 3px 0 0;
  `
}

const DropdownElement = styled.div`
  cursor: pointer;
  position: relative;
  max-width: 100%;
  width: 100%;

  ${isOpen}

  & .menu {
    position: absolute;
    top: 100%;
    left: 0;
    border-radius: 0 0 3px 3px;
    border-top: 1px solid #efefef !important;
    margin: 0 -1px;
  }

`

class Dropdown extends React.Component {
  state = {
    open: false
  }

  static defaultProps = {
    isColor: 'light',
    isTone: 0
  }

  componentDidMount () {
    document.addEventListener('click', this.handleClickOutside, true)
  }

  componentWillUnmount () {
    document.removeEventListener('click', this.handleClickOutside, true)
  }

  open = (evt) => {
    let { search } = this.refs
    search.focus()
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
    evt.stopPropagation()
    this.toggle(evt)
    search.focus()
  }

  render () {
    const { options, ...rest } = this.props
    const { open } = this.state
    const className = cx(`dropdown`, rest.className)

    return (
      <DropdownElement
        {...rest}
        onClick={this.handleClick}
        className={className}>

        <Input ref='search' />
        <Menu
          items={options}
          isHidden={!open}
          isColor={rest.isColor} />

      </DropdownElement>
    )
  }
}

export default Dropdown
