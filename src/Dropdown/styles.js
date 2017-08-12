import styled, { css } from 'styled-components'

const radius = p => p.theme.sizes.radius

const isOpen = ({ isOpen }) => {
  if (!isOpen) return

  return css`
    box-shadow: 0 2px 3px 0 rgba(34, 36, 38, 0.15);

    & .input {
      border-radius: ${p => `${radius(p)} ${radius(p)} 0 0`};
    }
  `
}

export const Dropdown = styled.div`
  width: 100%;
  cursor: pointer;
  position: relative;
  display: inline-flex;
  align-items: center;

  & .menu {
    position: absolute;
    top: 100%;
    left: 0;
    margin: -1px 0 0 0;
    border-radius: ${p => `0 0 ${radius(p)} ${radius(p)}`};
    border-top: 0 solid;
    box-shadow: 0 2px 3px 0 rgba(34, 36, 38, 0.15);
    z-index: 10;

    & .menu-item:first-child {
      border-radius: 0;
      border-top: 1px solid #efefef;
    }
  }

  & .input {
    color: #000;
  }

  & > .control {
    width: 100%;
  }

  ${isOpen}
`
