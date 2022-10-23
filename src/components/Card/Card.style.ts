import styled from '@emotion/styled'

export const Card = styled.div<{
  column?: boolean
  shadow?: boolean
  compact?: boolean
}>`
  display: flex;
  flex-direction: ${({ column }) => (column ? 'column' : 'flex')};
  box-shadow: ${({ shadow }) =>
    shadow ? '1px 3px 50px rgba(0, 0, 0, 0.1)' : '1px 3px 3px rgba(0, 0, 0, 0.2)'};
  justify-content: space-between;
  column-gap: 40px;
  row-gap: 40px;
  border-radius: 10px;
  background-color: var(--white);
  padding: ${({ compact }) => (compact ? '20px' : '40px 30px')};
`
