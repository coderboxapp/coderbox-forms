import React from 'react'
import ReactDOM from 'react-dom'
import cx from 'classnames'
import { Icon } from '@coderbox/atoms'
import * as styles from './styles'

import Menu from 'Menu'
import Input from 'Input'

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
    selectedIndex: 0
  }

  static defaultProps = {
    items: [],
    isSearch: false,
    isTone: 0
  }

  componentDidMount () {
  }

  componentWillUnmount () {
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

  setSearchQuery = (searchQuery) => {
    this.setState({ searchQuery })
  }

  selectItemByIndex = (index, resetSearch) => {
    let newState = { selectedIndex: index }
    if (resetSearch) {
      newState.searchQuery = null
    }

    this.setState(newState)
  }

  clearSearchQuery = () => {
    this.setState({ searchQuery: '' })
  }

  handleKeyDown = (evt) => {
    let { selectedIndex } = this.state
    let moves = {
      [Keys.UP_ARROW]: -1,
      [Keys.DOWN_ARROW]: 1
    }

    if (evt.keyCode === Keys.ESC) {
      this.close()
      return
    }

    if (evt.keyCode === Keys.ENTER) {
      let item = this.getItems()[selectedIndex]

      this.selectItemByIndex(this.getItemIndex(item), true)
      this.close()
      return
    }

    let move = moves[evt.keyCode]
    if (move === undefined) return

    evt.stopPropagation()
    evt.preventDefault()

    let lastIndex = this.getItems().length

    selectedIndex = (selectedIndex + move) % lastIndex
    if (selectedIndex < 0) selectedIndex = lastIndex - 1

    this.selectItemByIndex(selectedIndex)
  }

  handleClickOutside = (evt) => {
    const domNode = ReactDOM.findDOMNode(this)
    if (!domNode || !domNode.contains(evt.target)) {
      this.close()
    }
  }

  toggle = (evt) => {
    this.state.open ? this.close(evt) : this.open(evt)
  }

  getItems = () => {
    const { items } = this.props
    const { searchQuery } = this.state
    if (!searchQuery) return items

    return items.filter((i) => i.text.toLowerCase().search(searchQuery.toLowerCase()) > -1)
  }

  getItemIndex = (item) => {
    let items = this.props.items
    let index = 0

    for (index = 0; index < items.length; index++) {
      if (item.value === items[index].value) {
        return index
      }
    }

    return -1
  }

  handleSearch = (evt) => {
    const { open, searchQuery } = this.state

    if (searchQuery !== evt.target.value) {
      this.setSearchQuery(evt.target.value)
      this.setState({ selectedIndex: 0 })

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
    let { onChange } = this.props

    if (onChange) onChange(item)

    this.selectItemByIndex(this.getItemIndex(item), true)
    this.close()
  }

  render () {
    const { isSearch, placeholder, ...rest } = this.props
    const { open, selectedIndex, searchQuery } = this.state
    const className = cx(`dropdown`, rest.className)
    const items = this.getItems()
    const selectedItem = items[selectedIndex]
    const itemText = selectedItem ? selectedItem.text : ''

    return (
      <styles.Dropdown {...rest} isOpen={open} onClick={this.handleClick} className={className}>
        <Input
          ref='search'
          isColor={rest.isColor}
          isTone={rest.isTone}
          value={searchQuery !== null ? searchQuery : itemText}
          onChange={this.handleSearch}
          placeholder={placeholder}
          disabled={!isSearch}
        />

        <Icon name='caret-down' />
        <Menu
          items={items}
          selected={selectedItem}
          isHidden={!open}
          onItemClick={this.handleItemClick}
          isColor={rest.isColor}
          isTone={rest.isTone}
        />
      </styles.Dropdown>
    )
  }
}

export default Dropdown
