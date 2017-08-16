import styled, { css } from 'styled-components'
import { rgba } from 'polished'
import { withSize, withColor, colors } from 'styled-utils'

const override = p => {
  if (!p.color) return

  let { bgColor, textColor } = colors(p)
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
  border-radius: ${p => p.theme.sizes.radius};
  max-width: 100%;
  width: 100%;
  height: ${p => p.theme.sizes.height};
  box-sizing: border-box;
  appearance: none;
  box-shadow: inset 0 1px 2px rgba(100, 100, 100, 0.12);

  ${withSize}
  ${withColor}
  ${override}
`
