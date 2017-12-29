import styled, { css } from 'styled-components'

const hasIcons = ({ hasIcons, hasLeftIcon, hasRightIcon }) => {
  if (!hasIcons && !hasLeftIcon && !hasRightIcon) return

  return css`
    & > .icon {
      position: absolute;
      top: 0px;
      width: 2.40em;
      height: 2.40em;
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
      ${(hasIcons || hasLeftIcon) && css`padding-left: 2.40em`};
      ${(hasIcons || hasRightIcon) && css`padding-right: 2.40em`};
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
