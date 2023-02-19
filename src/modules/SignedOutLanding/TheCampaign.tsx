import type { NextPage } from 'next'
import * as S from './SignedOutHome.style'

export const TheCampaign: NextPage = (): JSX.Element => {
  return (
    <S.TheCampaign>
      <S.TheCampaignHeader>The Campaign</S.TheCampaignHeader>

      <S.TheCampaignItems>
        <li>
          <S.TheCampaignFigure>2K</S.TheCampaignFigure>
          <S.TheCampaignText>switchers</S.TheCampaignText>
        </li>
        <li>
          <S.TheCampaignFigure>3K</S.TheCampaignFigure>
          <S.TheCampaignText>switchers</S.TheCampaignText>
        </li>
        <li>
          <S.TheCampaignFigure>£7b</S.TheCampaignFigure>
          <S.TheCampaignText>2023 Goal</S.TheCampaignText>
        </li>
      </S.TheCampaignItems>
    </S.TheCampaign>
  )
}
