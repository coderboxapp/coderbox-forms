import styled from 'styled-components'
import { withSize, isHidden } from 'styled-utils'

const radius = p => '3px'

export const Menu = styled.div`
  font-family: ${p => p.theme.fonts.primary};
  font-weight: normal;
  width: 100%;
  background-color: white;
  box-sizing: border-box;
  z-index: 4;

  border: 1px solid transparent;
  border-radius: ${radius};
  padding-bottom: 1px;
  box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);

  .group {
    width: 100%;
  }

  .button {
    justify-content: flex-start;
    padding: 0 0.35em;
  }

  ${withSize}
  ${isHidden}
`
