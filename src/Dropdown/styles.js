import styled, { css } from 'styled-components'

const isOpen = ({ isOpen }) => {
  if (!isOpen) return

  return css`
    box-shadow: 0 2px 3px 0 rgba(34, 36, 38, 0.15);

    & .input {
      border-radius: 3px 3px 0 0;
    }
  `
}

export const Dropdown = styled.div`
  width: 100%;
  cursor: pointer;
  position: relative;
  min-height: 2.25em;
  display: inline-flex;
  align-items: center;

  & .menu {
    position: absolute;
    top: 100%;
    left: 0;
    margin: -1px 0 0 0;
    border-radius: 0 0 3px 3px;
    border-top: 0 solid;
    box-shadow: 0 2px 3px 0 rgba(34, 36, 38, 0.15);

    & .menu-item:first-child {
      border-radius: 0;
      border-top: 1px solid #efefef;
    }
  }

  & > .icon {
    position: absolute;
    top: 0;
    right: 0;
    width: 2.25em;
    height: 2.25em;
    cursor: pointer;
  }

  & .input {
    padding-right: 2.25em;
    box-shadow: none;
    color: #000;
  }

  ${isOpen}
`
