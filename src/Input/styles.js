import styled, { css } from 'styled-components'
import { rgba } from 'polished'
import { isSize, isColor, isOutlined, colors } from 'styled-utils'

const override = p => {
  if (!p.isColor) return

  let { bgColor, textColor } = colors(p)
  let isInverted = !p.isOutlined
  console.log(isInverted)
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
  display: inline-flex;
  align-items: center;
  justify-content: flex-start;
  max-width: 100%;
  width: 100%;
  height: 2.25em;
  line-height: 1.5;
  box-sizing: border-box;
  appearance: none;
  box-shadow: inset 0 1px 1px rgba(10, 10, 10, 0.1);

  ${isSize}
  ${isColor}
  ${isOutlined}
  ${override}
`
