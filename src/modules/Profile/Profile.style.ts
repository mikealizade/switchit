import styled from '@emotion/styled'
import { Form } from '@styles/common.style'
import { Ellipsis } from '@styles/common.style'

export const ProfileEllipsis = styled(Ellipsis)`
  position: absolute;
  top: 68px;
  cursor: pointer;
  font-size: var(--fsLarge);
  right: -5px;
`

export const ProfileForm = styled(Form)`
  fieldset {
    height: 500px;
    overflow-y: auto;
    border: 0;
  }
`
