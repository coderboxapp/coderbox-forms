import styled from 'styled-components'
import { withSize, isHidden } from 'styled-utils'

const radius = p => p.theme.sizes.radius

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
  box-shadow: ${p => p.theme.shadows.normal};

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
