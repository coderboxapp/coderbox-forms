import React from 'react'
import ReactDOM from 'react-dom'
import cx from 'classnames'
import { Icon } from '@coderbox/atoms'
import * as styles from './styles'

import Menu from 'Menu'
import Input from 'Input'

class Dropdown extends React.Component {
  state = {
    open: false,
    searchQuery: null,
    selectedItem: null,
    selectedIndex: 0
  }

  static defaultProps = {
    items: [],
    isColor: 'gray',
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

  setSearchQuery = (searchQuery) => {
    this.setState({ searchQuery })
  }

  selectItem = (item) => {
    this.setState({
      selectedItem: item,
      searchQuery: null
    })
  }

  clearSearchQuery = () => {
    this.setState({ searchQuery: '' })
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

  getItems = () => {
    const { items } = this.props
    const { searchQuery } = this.state
    if (!searchQuery) return items

    return items.filter(i => i.text.toLowerCase().search(searchQuery.toLowerCase()) > -1)
  }

  handleSearch = (evt) => {
    this.setSearchQuery(evt.target.value)
  }

  handleClick = (evt) => {
    let { open } = this.state
    let { search } = this.refs

    if (open) return

    this.toggle(evt)
    search && search.focus()
  }

  handleItemClick = (item, index) => {
    let { onChange } = this.props

    if (onChange) onChange(item)

    this.selectItem(item)
    this.close()
  }

  render () {
    const { isSearch, placeholder, ...rest } = this.props
    const { open, selectedItem, searchQuery } = this.state
    const className = cx(`dropdown`, rest.className)
    const items = this.getItems()
    const itemText = selectedItem ? selectedItem.text : ''

    return (
      <styles.Dropdown
        {...rest}
        isOpen={open}
        onClick={this.handleClick}
        className={className}>

        <Input
          ref='search'
          isColor={rest.isColor}
          value={searchQuery !== null ? searchQuery : itemText}
          onChange={this.handleSearch}
          placeholder={placeholder}
          disabled={!isSearch} />

        <Icon name='caret-down' />
        <Menu
          items={items}
          selected={selectedItem}
          isHidden={!open}
          onItemClick={this.handleItemClick}
          isColor={rest.isColor} />

      </styles.Dropdown>
    )
  }
}

export default Dropdown
