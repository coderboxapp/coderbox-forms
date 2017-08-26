import styled from 'styled-components'

export const Dropdown = styled.div`
  width: 100%;
  cursor: pointer;
  position: relative;
  display: inline-flex;
  align-items: center;

  & .menu {
    position: absolute;
    top: calc(100% + 2px);
    left: 0;
    margin: 0 0 0 0;
    z-index: 10;
  }

  & .input {
    color: #000;
  }

  & > .control {
    width: 100%;
  }
`
