import type { NextPage } from 'next'
import * as S from '@components/ProfileSummary/ProfileSummary.style'
import { EditableInput } from '@components/EditableInput/EditableInput'

export type ProfileSummaryProps = {
  data: {
    proudAction: string
    supportedCampaigns: string
    switchingStatement: string
  }
}

export const ProfileSummary: NextPage<ProfileSummaryProps> = ({
  data: { proudAction = '', supportedCampaigns = '', switchingStatement = '' } = {},
}) => {
  return (
    <S.ProfileSummary>
      <S.SummaryItem>
        <h2>Switching Statement/Why I Switch</h2>
        <EditableInput defaultValue={switchingStatement} />
      </S.SummaryItem>
      <S.SummaryItem>
        <h2>Campaigns I support</h2>
        <EditableInput defaultValue={supportedCampaigns} />
      </S.SummaryItem>
      <S.SummaryItem>
        <h2>Climate action I’m proud of</h2>
        <EditableInput defaultValue={proudAction} />
      </S.SummaryItem>
    </S.ProfileSummary>
  )
}
