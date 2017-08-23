import styled, { css } from 'styled-components'

const hasIcons = ({ hasIcons, hasLeftIcon, hasRightIcon }) => {
  if (!hasIcons && !hasLeftIcon && !hasRightIcon) return

  return css`
    & > .icon {
      position: absolute;
      top: 0px;
      width: ${p => p.theme.sizes.height};
      height: ${p => p.theme.sizes.height};
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
      ${(hasIcons || hasLeftIcon) && css`padding-left: ${p => p.theme.sizes.height}`};
      ${(hasIcons || hasRightIcon) && css`padding-right: ${p => p.theme.sizes.height}`};
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
