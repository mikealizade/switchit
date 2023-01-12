import type { NextPage } from 'next'
import { useDispatch } from 'react-redux'
import * as S from '@components/ViewResearch/ViewResearch.style'
import { toggleDrawer } from '@state/drawer/drawerSlice'
import { TextLink } from '@styles/common.style'

export const ViewResearch: NextPage = (): JSX.Element => {
  const dispatch = useDispatch()

  return (
    <S.ViewResearch>
      <p>
        Interested in our research? We have conducted a thorough analysis of the financial services
        sector.{' '}
        <TextLink onClick={() => dispatch(toggleDrawer('research'))}>
          Find our resources and criteria for recommendation.
        </TextLink>
      </p>
    </S.ViewResearch>
  )
}
