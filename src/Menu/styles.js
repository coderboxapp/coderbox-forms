import styled, { css } from 'styled-components'
import { isSize, isHidden } from 'styled-utils'

export const Menu = styled.div`
  width: 100%;
  font-family: ${p => p.theme.fonts.primary};
  background-color: white;
  box-sizing: border-box;
  z-index: 4;

  & .button {
    justify-content: flex-start;
  }

  & .buttons {
  }

  ${isSize}
  ${isHidden}
`

const isSelected = ({ isSelected }) => {
  if (!isSelected) return
  return css`
    background-color: #efefef;
  `
}

export const Item = styled.div`
  font-family: inherit;
  font-size: inherit;
  font-weight: ${p => p.isSelected ? 'bold' : 'normal'};
  position: relative;
  cursor: pointer;
  box-sizing: border-box;
  display: inline-flex;
  align-items: center;
  justify-content: flex-start;
  max-width: 100%;
  width: 100%;
  line-height: 1.5;
  height: 2.45em;
  padding: 0 0.75em;

  &:not(:first-child):not(:last-child) {
    border-top: 1px solid;
    border-bottom: 1px solid;
    border-color: #efefef;
  }

  &:hover {
    background-color: #efefef;
  }

  ${isSelected}
`
