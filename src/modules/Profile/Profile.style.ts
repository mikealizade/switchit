import styled from '@emotion/styled'
import { Form, Ellipsis } from '@styles/common.style'
import { mediaQuery } from '@utils/functions'

export const ProfileEllipsis = styled(Ellipsis)`
  position: absolute;
  cursor: pointer;
  font-size: var(--fsLarge);
  top: 60px;
  right: 0;

  ${() => mediaQuery.tablet} {
    top: 90px;
    right: 20px;
  }
`

export const ProfileForm = styled(Form)`
  fieldset {
    height: 500px;
    overflow-y: auto;
    border: 0;
  }
`
