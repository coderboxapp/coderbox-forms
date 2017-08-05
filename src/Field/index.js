import React from 'react'
import cx from 'classnames'
import styled, { css } from 'styled-components'

const isGrouped = ({ isGrouped }) => {
  if (!isGrouped) return
  return css`
    flex-direction: row;
    & .control:not(:last-child) {
      margin-right: -1px;
    }

    & .control {
      & .input,
      & .button {
        margin: 0 0 0 0;
        border-radius: 0;
      }
    }

    & .control:first-child {
      & .input,
      & .button {
        border-radius: 3px 0 0 3px;
      }
    }

    & .control:last-child {
      & .input,
      & .button {
        border-radius: 0 3px 3px 0;
      }
    }
  `
}

const FieldElement = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: ${p => p.isAlign};

  & label {
    color: #363636;
    display: block;
    font-size: 1rem;
    font-weight: 700;
    margin-bottom: 0.5em;
  }

  &:not(:last-child) {
    margin-bottom: 0.75rem;
  }

  ${isGrouped}
`

const Field = ({ label, children, ...props }) => {
  const className = cx(`field`, props.className)

  return (
    <FieldElement {...props} className={className}>
      {label && <label>{label}</label>}
      {children}
    </FieldElement>
  )
}

Field.defaultProps = {
  isAlign: 'flex-start'
}

export default Field
