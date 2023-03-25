import type { NextPage } from 'next'
import { useSelector } from 'react-redux'
import * as S from '@modules/Profile/components/ProfileSummary/ProfileSummary.style'
import { RootState } from '@state/store'
import { Div } from '@styles/common.style'

export type ProfileSummaryProps = {
  proudActions: string
  campaigns: string
  switchingStatement: string
}

export const ProfileSummary: NextPage<{ data: Partial<ProfileSummaryProps> }> = ({
  data: { proudActions = '', campaigns = '', switchingStatement = '' } = {},
}): JSX.Element => {
  const { isNewUser } = useSelector((state: RootState) => state.user)

  return (
    <Div rowGap={30} flex='1'>
      <S.ProfileSummary>
        <S.SummaryItem>
          <h2>Why I Switch</h2>
          <p>{switchingStatement}</p>
        </S.SummaryItem>
        <S.SummaryItem>
          <h2>Campaigns I support:</h2>
          <p>{campaigns}</p>
        </S.SummaryItem>
        <S.SummaryItem>
          <h2>Climate action {`I'm`} proud of:</h2>
          <p>{proudActions}</p>
        </S.SummaryItem>
      </S.ProfileSummary>
      {isNewUser && (
        <S.SummaryHint>Let your friends know why {`you're`} here and spread the word to promote other green initiatives.</S.SummaryHint>
      )}
    </Div>
  )
}
