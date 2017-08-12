import styled from 'styled-components'

const radius = p => p.theme.sizes.radius

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
      border-radius: ${p => `${radius(p)} 0 0 ${radius(p)}`};
    }
  }

  & > .control:last-child {
    & .input,
    & .button {
      border-radius: ${p => `0 ${radius(p)} ${radius(p)} 0`};
    }
  }

  & > .control:not(:last-child) {
    margin-right: -1px;
  }
`
