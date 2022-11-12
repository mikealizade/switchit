import type { NextPage } from 'next'
import * as S from '@components/ProfileSummary/ProfileSummary.style'
import { EditableInput } from '@components/EditableInput/EditableInput'

export type ProfileSummaryProps = {
  proudActions: string
  campaigns: string
  switchingStatement: string
}

export const ProfileSummary: NextPage<{ data: Partial<ProfileSummaryProps> }> = ({
  data: { proudActions = '', campaigns = '', switchingStatement = '' } = {},
}): JSX.Element => {
  return (
    <S.ProfileSummary>
      <S.SummaryItem>
        <h2>Switching Statement/Why I Switch</h2>
        <p>switchingStatement</p>
      </S.SummaryItem>
      <S.SummaryItem>
        <h2>Campaigns I support</h2>
        <p>{campaigns}</p>
      </S.SummaryItem>
      <S.SummaryItem>
        <h2>Climate action I’m proud of</h2>
        <p>{proudActions}</p>
      </S.SummaryItem>
    </S.ProfileSummary>
  )
}
