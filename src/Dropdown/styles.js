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
    flex: 1;
    border: none;
    box-shadow: none;
    background-color: transparent;
    height: calc(2.40em - 2px);
  }

  & > .control {
    width: 100%;
    border: 1px solid ${p => p.borderColor ? p.theme.palettes[p.borderColor][0] : '#dbdbdb'};
    box-shadow: inset 0 1px 2px rgba(100, 100, 100, 0.12);
    border-radius: 3px;
    flex-direction: column;
    align-items: flex-start;
  }

  & .tags {
    display: flex;
    flex-wrap: wrap;
    padding: 0.35em 2.40em 0 0.35em;
  }

  & .tags .group:not(:last-child) {
    margin-right: 0.25em;
    margin-bottom: 0.25em;
  }
`
