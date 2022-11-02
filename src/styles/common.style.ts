import styled from '@emotion/styled'

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
