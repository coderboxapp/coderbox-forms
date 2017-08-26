import styled from 'styled-components'

export const Field = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${p => p.align};

  & label {
    color: #363636;
    display: block;
    font-size: 1rem;
    font-weight: 700;
    margin-bottom: 0.5em;
  }

  &:not(:last-child) {
    margin-bottom: 0.75rem;
  }
`
