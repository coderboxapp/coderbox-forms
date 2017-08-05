import React from 'react'
import cx from 'classnames'
import styled from 'styled-components'
import { withModifiers, helperModifiers } from 'styled-utils'

const InputElement = styled.input`
  font-family: ${p => p.theme.fonts.primary};
  font-weight: 400;
  background: white;
  margin: 0;
  padding: 0 0.65rem;
  outline: 0;
  border: 1px solid transparent;
  border-radius: 3px;
  height: 2.25em;
  display: inline-flex;
  align-items: center;
  justify-content: flex-start;
  max-width: 100%;
  width: 100%;
  line-height: 1.5;
  box-sizing: border-box;
  appearance: none;
  box-shadow: inset 0 1px 2px rgba(10, 10, 10, 0.1);
  border-color: ${p => p.theme.palettes[p.isColor][p.isTone]};

  &.disabled {
    background-color: whitesmoke;
    border-color: whitesmoke;
    box-shadow: none;
    color: #7a7a7a;
  }
`

const Input = ({ type, ...props }) => {
  const className = cx(`input`, {disabled: props.disabled}, props.className)
  const Element = withModifiers(InputElement, [
    ...helperModifiers
  ])

  return (
    <Element {...props} type={type} className={className} />
  )
}

Input.defaultProps = {
  type: 'text',
  isSize: 'normal',
  isColor: 'light',
  isTone: 0
}

export default Input
