import styled from '@emotion/styled'
import { Card } from '@components/Card/Card.style'
import { PlainInput } from '@styles/common.style'
import { mediaQuery } from '@utils/functions'

export const Goals = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  row-gap: 30px;
  flex: 1;
`

export const GoalsList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  row-gap: 45px;
  flex: 1;
  padding: 20px 30px;
`

export const Item = styled.li`
  display: flex;
  column-gap: 30px;
  flex: 1;
`

export const DivestedItem = styled(Item)`
  border-bottom: 1px solid var(--haze);
  padding: 0 30px 25px;

  h3 {
    font-size: var(--fsVLarge3);
    font-family: 'Konsolev SemiBold';
  }
`

export const Goal = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 6px;
  flex: 1;
`
