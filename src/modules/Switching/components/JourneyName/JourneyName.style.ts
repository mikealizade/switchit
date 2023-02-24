import styled from '@emotion/styled'
import { PlainInput } from '@styles/common.style'
import { mediaQuery } from '@utils/functions'

export const JourneyNameContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: auto;
  row-gap: 40px;

  ${() => mediaQuery.tablet} {
    width: 60%;
  }
`

export const JourneyNameHeader = styled.header`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
`

export const JourneyNameTitle = styled.h2`
  font-weight: bold;
  font-size: var(--fsLarge4);
`

export const JourneyNameSubHeader = styled.p`
  font-size: var(--fsLarge0);
`

export const Label = styled.label`
  display: flex;
  column-gap: 20px;
  font-weight: bold;
  align-items: center;
  flex-wrap: wrap;
  row-gap: 10px;
  font-size: var(--fsLarge0);
`

export const JourneyNameInput = styled(PlainInput)`
  width: 100%;
  padding: 7px 15px;

  &::placeholder {
    color: var(--gallery);
  }

  ${() => mediaQuery.tablet} {
    width: 315px;
  }
`
