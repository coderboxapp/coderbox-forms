import styled, { css } from 'styled-components'
import { withSize, withColor, isHidden, withHover } from 'styled-utils'

const override = ({ withColor }) => {
  if (withColor) return
  return css`
    background-color: #efefef;
  `
}

const radius = p => p.theme.sizes.radius

export const Menu = styled.div`
  font-family: ${p => p.theme.fonts.primary};
  font-weight: normal;
  width: 100%;
  background-color: white;
  box-sizing: border-box;
  z-index: 4;
  border: 1px solid;
  border-color: ${p => p.withColor ? p.theme.palettes[p.withColor][p.withTone || 0] : '#dbdbdb'};
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

  &:not(:first-child):not(:last-child) {
    border-top: 1px solid;
    border-bottom: 1px solid;
    border-color: #efefef;
    border-radius: 0;
  }

  &:first-child {
    border-radius: ${p => `${radius(p)} ${radius(p)} 0 0`};
  }
  
  &:last-child {
    border-radius: ${p => `0 0 ${radius(p)} ${radius(p)}`};
  } 

  & .icon {
    margin: 0 5px 0 0;
  }

  ${withColor}
  ${withHover}
  ${override}
`
