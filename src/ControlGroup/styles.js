import styled from 'styled-components'

export const ControlGroup = styled.div`
  display: flex;
  flex-direction: row;

  & > .control {
    & .input,
    & .button {
      margin: 0 0 0 0;
      border-radius: 0;
    }
  }

  & > .control:first-child {
    & .input,
    & .button {
      border-radius: 3px 0 0 3px;
    }
  }

  & > .control:last-child {
    & .input,
    & .button {
      border-radius: 0 3px 3px 0;
    }
  }

  & > .control:not(:last-child) {
    margin-right: -1px;
  }
`
