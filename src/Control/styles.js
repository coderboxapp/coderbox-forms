import styled, { css } from 'styled-components'

const hasIcons = ({ hasIcons, hasLeftIcon, hasRightIcon }) => {
  if (!hasIcons && !hasLeftIcon && !hasRightIcon) return

  return css`
    & > .icon {
      position: absolute;
      top: 0px;
      width: 2.20em;
      height: 2.20em;
      pointer-events: none;
      display: flex;
      align-items: center;
      z-index: 4;
    }

    & > .icon.left{
      left: 0;
    }

    & > .icon.right{
      right: 0;
    }

    & .input {
      ${(hasIcons || hasLeftIcon) && 'padding-left: 2.20em'};
      ${(hasIcons || hasRightIcon) && 'padding-right: 2.20em'};
    }
  `
}

const withWidth = ({ withWidth }) => {
  if (!withWidth) return
  return css`
    max-width: ${withWidth}
  `
}

export const Control = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  color: #dbdbdb;

  ${hasIcons}
  ${withWidth}
`
