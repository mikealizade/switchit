import styled from '@emotion/styled'

export const Card = styled.section<{
  column?: boolean
  shadow?: boolean
  padded?: boolean
  stretch?: boolean
  rowGap?: number
}>`
  display: flex;
  flex-direction: ${({ column }) => (column ? 'column' : 'flex')};
  box-shadow: ${({ shadow }) =>
    shadow ? '1px 3px 50px rgba(0, 0, 0, 0.1)' : '1px 3px 3px rgba(0, 0, 0, 0.2)'};
  column-gap: 40px;
  row-gap: ${({ rowGap }) => (rowGap ? `${rowGap}px` : '80px')};
  border-radius: 10px;
  background-color: var(--white);
  padding: ${({ padded }) => (padded ? '60px' : '30px')};
  flex: ${({ stretch }) => (stretch ? '1' : 'none')};
`
