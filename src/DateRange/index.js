import React from 'react'
import DatePick from 'DatePick'
import { object, bool, string } from 'prop-types'
import { Icon } from '@coderbox/atoms'
import { DateRange } from './styles'
import Checkbox from 'Checkbox'

class Component extends React.Component {
  state = { range: this.props.range || { start: new Date() } }

  static displayName = 'DateRange'
  static propTypes = {
    range: object,
    hideMonths: bool,
    label: string
  }

  handletDateChange = (date, field) => {
    const { onChange } = this.props

    this.setState((prev) => {
      const range = { ...prev.range, [field]: date.toDate() }
      if (onChange) onChange(range)
      return { range }
    })
  }

  handleChecked = (evt, checked) => {
    let { range } = this.state
    let { onChange } = this.props
    let newRange = { ...range, end: (range && range.end) || new Date() }

    if (checked) {
      newRange.end = null
    }

    this.setState({ range: newRange })
    if (onChange) onChange(newRange)
  }

  render () {
    const { range } = this.state
    const { hideMonths, label, ...props } = this.props

    return (
      <DateRange {...props}>
        <div>
          <DatePick value={range.start} onChange={d => this.handletDateChange(d, 'start')} hideMonths={hideMonths} color={props.color} />
          <Icon name='long-arrow-right' />
          {range.end
            ? <DatePick value={range.end} onChange={d => this.handletDateChange(d, 'end')} hideMonths={hideMonths} color={props.color} />
            : <div>Present</div>
          }
        </div>
        <Checkbox checked={!range.end} onChange={this.handleChecked}>{label || 'I still work here'}</Checkbox>
      </DateRange>
    )
  }
}

export default Component
