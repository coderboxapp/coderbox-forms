import styled, { css } from 'styled-components'
import { withSize, withColor, isHidden, withHover } from 'styled-utils'

const radius = p => p.theme.sizes.radius
const override = ({ color }) => {
  if (color) return
  return css`
    background-color: #efefef;
  `
}

export const Menu = styled.div`
  font-family: ${p => p.theme.fonts.primary};
  font-weight: normal;
  width: 100%;
  background-color: white;
  box-sizing: border-box;
  z-index: 4;
  border: 1px solid;
  border-color: ${p => p.color ? p.theme.palettes[p.color][p.tone || 0] : '#dbdbdb'};
  border-radius: ${p => radius(p)};
  color: #000;

  ${withSize}
  ${isHidden}
`

export const MenuItem = styled.div`
  font-family: inherit;
  font-size: inherit;
  font-weight: ${p => p.isSelected ? 'bold' : 'normal'};
  width: 100%;
  height: 2.185em;
  display: inline-flex;
  align-items: center;
  justify-content: flex-start;
  padding: ${p => p.hasIcon ? '0px 0.35em' : '0 0.6rem'};
  cursor: pointer;
  outline: none;
  box-sizing: border-box;

  &:not(:first-child) {
    border-top: 1px solid;
    border-color: #efefef;
    border-radius: 0;
  }

  &:first-child {
    border-radius: ${radius} ${radius} 0 0;
  }
  
  &:last-child {
    border-radius: 0 0 ${radius} ${radius};
  } 

  & .icon {
    margin: 0 5px 0 0;
  }

  ${withColor}
  ${withHover}
  ${override}
`
