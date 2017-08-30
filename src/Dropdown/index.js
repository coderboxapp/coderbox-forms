import React from 'react'
import ReactDOM from 'react-dom'
import cx from 'classnames'
import { Icon } from '@coderbox/atoms'
import * as styles from './styles'

import DropdownMenu from 'DropdownMenu'
import Input from 'Input'
import Control from 'Control'

const Keys = {
  ENTER: 13,
  ESC: 27,
  BACKSPACE: 8,
  UP_ARROW: 38,
  DOWN_ARROW: 40
}

class Dropdown extends React.Component {
  state = {
    open: false,
    searchQuery: null,
    value: null
  }

  static defaultProps = {
    items: [],
    isSearch: false,
    tone: 0
  }

  componentDidUpdate (prevProps, prevState) {
    let { open } = this.state

    if (open) {
      document.addEventListener('keydown', this.handleKeyDown)
      document.addEventListener('click', this.handleClickOutside, true)
    } else {
      document.removeEventListener('keydown', this.handleKeyDown)
      document.removeEventListener('click', this.handleClickOutside, true)
    }
  }

  open = (evt) => {
    this.setState({ open: true })
  }

  close = (evt) => {
    this.setState({ open: false })
  }

  toggle = (evt) => {
    this.state.open ? this.close(evt) : this.open(evt)
  }

  setSearchQuery = (searchQuery) => {
    this.setState({ searchQuery })
  }

  clearSearchQuery = () => {
    this.setState({ searchQuery: null })
  }

  select = (item) => {
    let { onChange } = this.props
    if (onChange) onChange(item)

    this.setState({ value: item })
  }

  moveIndex = (increment) => {
    let { value, searchQuery } = this.state
    let items = this.getItems(searchQuery)
    let index = this.getItemIndex(value, true)
    let lastIndex = items.length

    index = (index + increment) % lastIndex
    if (index < 0) index = lastIndex - 1

    this.select(items[index])
  }

  getItems = (searchQuery) => {
    const { items, maxItems } = this.props
    if (!searchQuery) return items.slice(0, maxItems)

    return items.filter((i) => i.text.toLowerCase().search(searchQuery.toLowerCase()) > -1).slice(0, maxItems)
  }

  getItemIndex = (item, filtered) => {
    if (!item) return 0

    let { searchQuery } = this.state
    let items = filtered ? this.getItems(searchQuery) : this.getItems()
    let index = 0

    for (index = 0; index < items.length; index++) {
      if (item.value === items[index].value) {
        return index
      }
    }

    return 0
  }

  handleKeyDown = (evt) => {
    const moves = {
      [Keys.UP_ARROW]: -1,
      [Keys.DOWN_ARROW]: 1
    }

    if (evt.keyCode === Keys.ESC) {
      this.close()
      return
    }

    if (evt.keyCode === Keys.ENTER) {
      this.clearSearchQuery()
      this.close()
      return
    }

    let move = moves[evt.keyCode]
    if (move === undefined) return

    evt.stopPropagation()
    evt.preventDefault()

    this.moveIndex(move)
  }

  handleClickOutside = (evt) => {
    const domNode = ReactDOM.findDOMNode(this)
    if (!domNode || !domNode.contains(evt.target)) {
      this.close()
    }
  }

  handleSearch = (evt) => {
    const { open, searchQuery } = this.state

    if (searchQuery !== evt.target.value) {
      this.setSearchQuery(evt.target.value)
      this.setState({ value: this.getItems(evt.target.value)[0] })

      if (!open) {
        this.open()
      }
    }
  }

  handleClick = (evt) => {
    let { open } = this.state
    let { search } = this.refs

    if (open) return

    this.toggle(evt)
    search && search.focus()
  }

  handleItemClick = (item) => {
    this.select(item)
    this.clearSearchQuery()
    this.close()
  }

  render () {
    const { isSearch, placeholder, onChange, ...rest } = this.props
    const { open, value, searchQuery } = this.state
    const className = cx(`dropdown`, rest.className)

    const items = this.getItems(searchQuery)
    const itemText = value ? value.text : ''
    const itemIcon = value && searchQuery === null ? value.icon : null

    return (
      <styles.Dropdown
        isOpen={open}
        onClick={this.handleClick}
        className={className}>

        <Control hasLeftIcon={itemIcon} hasRightIcon>
          <Input
            {...rest}
            ref='search'
            value={searchQuery !== null ? searchQuery : itemText}
            onChange={this.handleSearch}
            placeholder={placeholder}
            disabled={!isSearch}
          />
          {itemIcon && <Icon size={rest.size} name={itemIcon} className='left' />}
          <Icon name='caret-down' size={rest.size} className='right' />
        </Control>

        <DropdownMenu
          items={items}
          selectedIndex={this.getItemIndex(value, true)}
          isHidden={!open}
          onItemClick={this.handleItemClick}
          size={rest.size}
          color={rest.color}
          selectedColor={rest.selectedColor}
          tone={rest.tone}
        />
      </styles.Dropdown>
    )
  }
}

export default Dropdown
