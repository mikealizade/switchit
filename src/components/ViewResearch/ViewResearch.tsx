import type { NextPage } from 'next'
import * as S from '@components/ViewResearch/ViewResearch.style'

export const ViewResearch: NextPage = (): JSX.Element => {
  return (
    <S.ViewResearch>
      <p>
        Interested in our research? We have conducted a thorough analysis of the financial services
        sector.{' '}
        <a href='#' target='_blank'>
          Find our resources and criteria for recommendation.
        </a>
      </p>
    </S.ViewResearch>
  )
}
