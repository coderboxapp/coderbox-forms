import styled from 'styled-components'
import { withSize, withDisplay } from 'styled-utils'
import { darken, rgba } from 'polished'

const color = (p, defaultColor) => p.withColor ? rgba(p.theme.palettes[p.withColor][p.withTone], 0.8) : defaultColor
const colorDark = p => darken(0.2, color(p, '#dbdbdb'))

export const Checkbox = styled.div`
  display: flex;
  align-items: center;
  font-family: ${p => p.theme.fonts.primary};
  cursor: pointer;
  background: white;

  & > div {
    border: 1px solid;
    border-color: ${p => color(p, '#dbdbdb')};
    border-radius: ${p => p.theme.sizes.radius};
    margin-right: 0.5em;
    height: 1.165em;
    width: 1.165em;
    display: inline-flex;
    align-items: center;
    box-shadow: inset 0 1px 2px rgba(100, 100, 100, 0.12);
  }

  & .icon {
    color: ${p => color(p, '#000')};
    width: 1.15em;
    height: 1.15em;
  }

  & > div:hover {
    border-color: ${colorDark};
  }

  ${withSize}
  ${withDisplay}
`
