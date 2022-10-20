import styled from '@emotion/styled'

export const EditableInputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  column-gap: 20px;
`

export const EditableInput = styled.input`
  border: 1px solid grey;
  padding: 6px 10px;
  flex: 10;
  border-radius: 6px;

  &:read-only {
    border: 1px solid var(--white);
    padding: 6px 0;
  }
`

export const EditIcon = styled.span`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  svg {
    color: var(--grey);
    cursor: pointer;
    width: 20px;
  }
`
