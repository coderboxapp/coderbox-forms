import styled from 'styled-components'

export const DateRange = styled.div`
  & > div:first-child {
    display: flex;
    align-items: center;

    & > *:not(:last-child) {
      margin-right: 0.4rem;
    }
  }

  & .checkbox {
    margin: 0.4rem 0 0 0;
  }
`
