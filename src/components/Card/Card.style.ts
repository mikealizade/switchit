import styled from '@emotion/styled'
import { mediaQuery } from '@utils/functions'

export const Card = styled.section<{
  column?: boolean
  shadow?: boolean
  padded?: boolean
  stretch?: boolean
  rowGap?: number
  notPaddedMobile?: boolean
}>`
  display: flex;
  flex-direction: column;
  box-shadow: ${({ shadow }) => (shadow ? '1px 3px 3px rgba(0, 0, 0, 0.2)' : 'none')};
  column-gap: 40px;
  row-gap: ${({ rowGap }) => (rowGap ? `${rowGap}px` : '80px')};
  border-radius: 0;
  background-color: var(--white);
  padding: ${({ notPaddedMobile }) => (notPaddedMobile ? '0' : '30px')};
  flex: ${({ stretch }) => (stretch ? '1' : 'none')};

  ${() => mediaQuery.tablet} {
    flex-direction: ${({ column }) => (column ? 'column' : 'flex')};
    padding: ${({ padded }) => (padded ? '50px' : '30px')};
    border-radius: 10px;
  }
`
