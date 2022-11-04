import styled from '@emotion/styled'
import { Button } from '@components/Button/Button.style'

export const Ellipsis = styled.div`
  position: absolute;
  bottom: 15px;
  right: 0;
  cursor: pointer;
  font-size: var(--fsVLarge3);
`

export const ProfileEllipsis = styled(Ellipsis)`
  right: 25px;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  fieldset {
    display: flex;
    flex-direction: column;
    row-gap: 35px;
  }

  label {
    font-weight: bold;
  }

  input {
    margin-top: 10px;
  }
`

export const ShareButton = styled(Button)<{ small?: boolean }>`
  background-color: var(--pink);
  padding: ${({ small }) => (small ? '8px 20px' : '13px 30px')};
  align-self: center;
  width: ${({ small }) => (small ? '150px' : '200px')};
  border-radius: 20px;
  font-size: 2.7rem;
  box-shadow: 1px 3px 5px var(--gallery);
`
