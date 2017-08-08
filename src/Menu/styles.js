import styled, { css } from 'styled-components'
import { isSize, isColor, isHidden, isHover } from 'styled-utils'

const override = ({ isColor }) => {
  if (isColor) return
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
  border-color: ${p => p.isColor ? p.theme.palettes[p.isColor][p.isTone || 0] : '#dbdbdb'};
  border-radius: 3px;
  color: #000;

  ${isSize}
  ${isHidden}
`

export const MenuItem = styled.div`
  font-family: inherit;
  font-size: inherit;
  font-weight: ${p => p.isSelected ? 'bold' : 'normal'};
  width: 100%;
  height: 2.25em;
  display: inline-flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0px 1.0em;
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
    border-radius: 3px 3px 0 0;
  }
  
  &:last-child {
    border-radius: 0 0 3px 3px;
  } 

  & .icon {
    margin: 0 5px 0 0;
  }

  ${isColor}
  ${isHover}
  ${override}
`
