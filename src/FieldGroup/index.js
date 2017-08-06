import React from 'react'
import styled from 'styled-components'
import cx from 'classnames'

const GroupElement = styled.div`
  display: flex;
  margin-bottom: 0.75rem;

  & .field:not(:last-child) {
    margin: 0 0.75rem 0 0;
  }
`

const Group = ({ children, isVertical, ...props }) => {
  let className = cx('fields', props.className)
  return (
    <GroupElement {...props} className={className}>
      {children}
    </GroupElement>
  )
}

export default Group
