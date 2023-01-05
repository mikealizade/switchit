import styled from '@emotion/styled'
import { mediaQuery } from '@utils/functions'
import { PlainInput } from '@styles/common.style'

export const JourneyNameContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: auto;
  row-gap: 40px;

  ${() => mediaQuery.tablet} {
    width: 40%;
  }
`

export const JourneyNameHeader = styled.header`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
`

export const JourneyNameTitle = styled.h2`
  font-weight: bold;
  font-size: var(--fsMedium9);
`

export const JourneyNameSubHeader = styled.p`
  font-size: var(--fsMedium6);
`

export const Label = styled.label`
  display: flex;
  column-gap: 20px;
  font-weight: bold;
  align-items: center;
  flex-wrap: wrap;
  row-gap: 10px;
`

export const JourneyNameInput = styled(PlainInput)`
  width: 100%;

  ${() => mediaQuery.tablet} {
    width: 300px;
  }
`
