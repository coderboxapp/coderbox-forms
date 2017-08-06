import styled, { css } from 'styled-components'
import { isSize } from 'styled-utils'

const isDisabled = ({ isDisabled }) => {
  if (!isDisabled) return

  return css`
    background-color: whitesmoke;
    border-color: whitesmoke;
    box-shadow: none;
    color: #7a7a7a;
  `
}

export const Input = styled.input`
  font-family: ${(p) => p.theme.fonts.primary};
  font-weight: 400;
  background: white;
  margin: 0;
  outline: 0;
  padding: 0 0.65rem;
  border: 1px solid;
  border-radius: 3px;
  border-color: ${(p) => p.theme.palettes[p.isColor][p.isTone]};
  display: inline-flex;
  align-items: center;
  justify-content: flex-start;
  max-width: 100%;
  width: 100%;
  height: 2.25em;
  line-height: 1.5;
  box-sizing: border-box;
  appearance: none;
  box-shadow: inset 0 1px 2px rgba(10, 10, 10, 0.1);

  ${isDisabled}
  ${isSize}
`
