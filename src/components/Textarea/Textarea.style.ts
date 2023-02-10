import styled from '@emotion/styled'

export const Textarea = styled.textarea<{ height?: number }>`
  width: 100%;
  border-radius: 8px;
  border: 1px solid var(--overcast);
  padding: 10px;
  height: ${({ height }) => (height ? `${height}px` : 'auto')};
  resize: vertical;
  background-color: var(--atol);
`

export const Label = styled.label`
  display: flex;
  flex-direction: row;
  row-gap: 12px;
`
