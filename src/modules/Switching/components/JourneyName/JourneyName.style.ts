import styled from '@emotion/styled'
import { mediaQuery } from '@utils/functions'
import { PlainInput } from '../../Switching.style'

export const JourneyNameContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 40%;
  row-gap: 40px;
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
`

export const JourneyNameInput = styled(PlainInput)`
  width: 300px;
`
