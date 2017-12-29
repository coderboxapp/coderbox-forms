import styled, { css } from 'styled-components'
import { rgba } from 'polished'
import { withSize, withColor } from 'styled-utils'
import * as color from 'styled-utils/color'

const override = p => {
  if (!p.color) return

  let { bgColor, textColor } = color.fromProps(p)
  let isInverted = !p.isOutlined

  return css`
    border-color: ${isInverted ? 'transparent' : bgColor};
    &::placeholder {
      color: ${isInverted ? textColor : rgba(bgColor, 0.5)};
    }
  `
}

export const Input = styled.input`
  font-family: ${(p) => p.theme.fonts.primary};
  font-weight: 400;
  background: white;
  margin: 0;
  outline: 0;
  padding: 0 0.55rem;
  border: 1px solid #dbdbdb;
  border-radius: 3px;
  max-width: 100%;
  width: 100%;
  height: 2.40em;
  box-sizing: border-box;
  appearance: none;
  box-shadow: inset 0 1px 2px rgba(100, 100, 100, 0.12);

  ${withSize}
  ${withColor}
  ${override}
`
