import styled from '@emotion/styled'
import { mediaQuery } from '@utils/functions'

export const ViewResearch = styled.div<{ compact: boolean }>`
  padding: 100px 25px 25px;
  background: var(--porcelain) url('/icons/icon_magnify2.svg') no-repeat center 25px;
  background-size: 50px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-size: var(--fsMedium9);
  border-radius: 10px;

  ${() => mediaQuery.tablet} {
    background: var(--porcelain) url('/icons/icon_magnify2.svg') no-repeat;
    background-position: ${({ compact }) => (compact ? '25px 25px' : '30px center')};
    padding: ${({ compact }) => (compact ? '100px 25px 25px' : '25px 25px 25px 110px')};
  }
`
