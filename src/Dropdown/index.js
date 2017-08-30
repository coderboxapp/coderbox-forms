import React from 'react'
import ReactDOM from 'react-dom'
import cx from 'classnames'
import { difference } from 'lodash'
import { Icon, Tag, Group } from '@coderbox/atoms'
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
    value: null,
    focusIndex: 0
  }

  static defaultProps = {
    items: [],
    isSearch: false,
    isMultiple: false,
    accentColor: 'primary',
    labelField: 'text',
    valueField: 'value',
    tone: 0
  }

  constructor (props) {
    super(props)
    this.state.value = props.value

    if (props.isMultiple && !this.state.value) {
      this.state.value = []
    }
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
    let { onChange, isMultiple } = this.props

    if (isMultiple) {
      this.setState(prev => {
        if (onChange) onChange([...prev.value, item])
        return { value: [...prev.value, item], focusIndex: 0 }
      })
    } else {
      this.setState({ value: item, focusIndex: this.getItemIndex(item) })
      if (onChange) onChange(item)
    }
  }

  deselect = (evt, item) => {
    let { isMultiple, onChange } = this.props

    if (isMultiple) {
      this.setState(prev => {
        if (onChange) onChange(difference(prev.value, [item]))
        return { value: difference(prev.value, [item]) }
      })
    }

    if (evt) evt.stopPropagation()
  }

  moveIndex = (increment) => {
    let { focusIndex, searchQuery } = this.state
    let items = this.getItems(searchQuery)
    let lastIndex = items.length

    focusIndex = (focusIndex + increment) % lastIndex
    if (focusIndex < 0) focusIndex = lastIndex - 1

    this.setState({ focusIndex })
  }

  getItems = (searchQuery) => {
    let { items, isMultiple, labelField, maxItems } = this.props
    let { value } = this.state

    if (searchQuery) {
      items = items.filter((i) => i[labelField].toLowerCase().search(searchQuery.toLowerCase()) > -1)
    }

    if (isMultiple) {
      items = difference(items, value)
    }

    return items.slice(0, maxItems)
  }

  getItemIndex = (item) => {
    if (!item) return 0

    let { searchQuery } = this.state
    let { valueField } = this.props
    let items = this.getItems(searchQuery)
    let index = 0

    for (index = 0; index < items.length; index++) {
      if (item[valueField] === items[index][valueField]) {
        return index
      }
    }

    return -1
  }

  handleInputKeyDown = (evt) => {
    const { isMultiple } = this.props
    const { value, searchQuery } = this.state

    if (evt.keyCode === Keys.BACKSPACE && isMultiple) {
      if (!searchQuery && value.length) {
        this.deselect(null, value.concat().pop())
      }
    }
  }

  handleKeyDown = (evt) => {
    const { focusIndex, searchQuery } = this.state
    const moves = {
      [Keys.UP_ARROW]: -1,
      [Keys.DOWN_ARROW]: 1
    }

    if (evt.keyCode === Keys.ESC) {
      this.close()
      return
    }

    if (evt.keyCode === Keys.ENTER) {
      let items = this.getItems(searchQuery)
      if (items.length) {
        this.select(items[focusIndex])
        this.clearSearchQuery()
      }
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
      this.setState({ focusIndex: 0 })

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
    const { isSearch, placeholder, isMultiple, labelField, onChange, ...rest } = this.props
    const { open, value, focusIndex, searchQuery } = this.state
    const className = cx(`dropdown`, rest.className)

    let items = this.getItems(searchQuery)
    let itemText = value ? value[labelField] : ''
    let itemIcon = value && searchQuery === null ? value.icon : null
    let selectedIndex = isMultiple ? 0 : this.getItemIndex(value)

    if (isSearch && items.length === 0) {
      items.push({ value: 0, text: 'No search result.' })
      selectedIndex = -1
    }

    if (isMultiple) {
      itemText = ''
      selectedIndex = -1
    }

    return (
      <styles.Dropdown
        isOpen={open}
        onClick={this.handleClick}
        className={className}>

        <Control hasLeftIcon={itemIcon} hasRightIcon>
          {(isMultiple && value.length > 0) &&
            <div className='tags'>
              {value.map((v, vIndex) => {
                return (
                  <Group key={vIndex}>
                    <Tag color={rest.color || rest.accentColor}>{v[labelField]}</Tag>
                    <Tag onClick={(e) => this.deselect(e, v)} color={rest.color || rest.accentColor} tone={1} isDelete />
                  </Group>
                )
              })}
            </div>
          }
          <Input
            ref='search'
            value={searchQuery !== null ? searchQuery : itemText}
            onChange={this.handleSearch}
            onKeyDown={this.handleInputKeyDown}
            placeholder={placeholder}
            disabled={!isSearch}
          />
          {itemIcon && <Icon size={rest.size} name={itemIcon} className='left' />}
          <Icon name='caret-down' size={rest.size} className='right' />
        </Control>

        <DropdownMenu
          items={items}
          selectedIndex={selectedIndex}
          focusIndex={focusIndex}
          isHidden={!open}
          onItemClick={this.handleItemClick}
          size={rest.size}
          color={rest.color}
          accentColor={rest.accentColor}
          tone={rest.tone}
        />
      </styles.Dropdown>
    )
  }
}

export default Dropdown
