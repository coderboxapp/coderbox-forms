import React from 'react'
import moment from 'moment'
import { Button, Icon } from '@coderbox/atoms'
import { bool, oneOfType, func, string, instanceOf } from 'prop-types'
import Dropdown from 'Dropdown'
import ControlGroup from 'ControlGroup'
import Control from 'Control'
import { DatePick } from './styles'

const months = [
  {value: 0, text: 'January'},
  {value: 1, text: 'February'},
  {value: 2, text: 'March'},
  {value: 3, text: 'April'},
  {value: 4, text: 'May'},
  {value: 5, text: 'June'},
  {value: 6, text: 'July'},
  {value: 7, text: 'August'},
  {value: 8, text: 'September'},
  {value: 9, text: 'October'},
  {value: 10, text: 'November'},
  {value: 11, text: 'December'}
]

const years = [
  {value: 2017, text: '2017'},
  {value: 2016, text: '2016'},
  {value: 2015, text: '2015'},
  {value: 2014, text: '2014'},
  {value: 2013, text: '2013'},
  {value: 2012, text: '2012'},
  {value: 2011, text: '2011'},
  {value: 2010, text: '2010'},
  {value: 2009, text: '2009'},
  {value: 2008, text: '2008'},
  {value: 2007, text: '2007'},
  {value: 2006, text: '2006'},
  {value: 2005, text: '2005'},
  {value: 2004, text: '2004'},
  {value: 2003, text: '2003'},
  {value: 2002, text: '2002'},
  {value: 2001, text: '2001'},
  {value: 2000, text: '2000'},
  {value: 1999, text: '1999'},
  {value: 1998, text: '1998'},
  {value: 1997, text: '1997'},
  {value: 1996, text: '1996'},
  {value: 1995, text: '1995'},
  {value: 1994, text: '1994'},
  {value: 1993, text: '1993'},
  {value: 1992, text: '1992'},
  {value: 1991, text: '1991'},
  {value: 1990, text: '1990'}
]

const Component = ({ value, hideMonths, hideIcon, onChange, ...props }) => {
  let month = moment(value).month()
  let year = moment(value).year()

  return (
    <DatePick {...props}>
      <ControlGroup>
        {!hideIcon &&
        <Control>
          <Button isStatic color={props.color} isIcon>
            <Icon name='calendar' />
          </Button>
        </Control>
        }
        {
          !hideMonths &&
          <Control>
            <Dropdown
              items={months}
              value={months[month]}
              accentColor={props.color}
              className='months'
              onChange={m => onChange(moment().year(year).month(m.value))}
            />
          </Control>
        }

        <Control>
          <Dropdown
            items={years}
            value={{value: year, text: year}}
            accentColor={props.color}
            className='years'
            onChange={y => onChange(moment().year(y.value).month(month))}
          />
        </Control>
      </ControlGroup>
    </DatePick>
  )
}

Component.displayName = 'DatePick'
Component.propTypes = {
  value: oneOfType([instanceOf(Date), string]),
  hideMonths: bool,
  onChange: func
}
Component.defaultProps = {
  color: 'primary',
  onChange: () => true
}

export default Component
