import styled from '@emotion/styled'

export const Links = styled.ul<{ isMobileNav?: boolean }>`
  display: flex;
  align-items: center;
  column-gap: 15px;
  justify-content: ${({ isMobileNav }) => (isMobileNav ? 'center' : `flex-start`)};

  + button:first-of-type:not(:only-child) {
    margin: 0;
  }
`

export const Item = styled.li`
  font-weight: bold;
  margin-right: 20px;
`
