import styled, { css } from 'styled-components'

const hasIcons = ({ hasIcons }) => {
  if (!hasIcons) return

  return css`
    & > .icon {
      position: absolute;
      width: 2.25em;
      height: 2.25em;
      pointer-events: none;
      z-index: 4;
    }

    & > .icon.left{
      left: 0;
    }

    & > .icon.right{
      right: 0;
    }

    & .input {
      padding-left: 2.25em;
      padding-right: 2.25em;
    }
  `
}

export const Control = styled.div`
  position: relative;
  display: flex;
  color: #dbdbdb;

  ${hasIcons}
`
