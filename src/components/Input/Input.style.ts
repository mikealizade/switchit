import styled from '@emotion/styled'

export const Input = styled.input`
  width: 100%;
  border-radius: 8px;
  border: 1px solid var(--haze);
  padding: 10px;
`

export const Label = styled.label`
  display: flex;
  flex-direction: row;
  row-gap: 12px;

  &.error {
    input {
      border-color: var(--thunderbird);
    }

    p {
      color: var(--thunderbird);
    }
  }
`
