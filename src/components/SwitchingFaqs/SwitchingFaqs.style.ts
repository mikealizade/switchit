import styled from '@emotion/styled'
import { mediaQuery } from '@utils/functions'

export const SwitchingFaqs = styled.div`
  padding: 100px 25px 25px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  font-size: var(--fsMedium6);
  border-radius: 18px;
  background-color: var(--porcelain);
  row-gap: 25px;

  ${() => mediaQuery.tablet} {
    padding: 25px;
  }
`

export const Faqs = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  max-height: 240px;
  overflow-y: auto;
`

export const Item = styled.li`
  span {
    color: var(--fsBase);
  }
`

export const More = styled.p`
  font-weight: bold;
`
