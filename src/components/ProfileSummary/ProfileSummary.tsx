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
}): JSX.Element => {
  return (
    <S.ProfileSummary>
      <S.SummaryItem>
        <h2>Switching Statement/Why I Switch</h2>
        <EditableInput name='switchingStatement' defaultValue={switchingStatement} />
      </S.SummaryItem>
      <S.SummaryItem>
        <h2>Campaigns I support</h2>
        <EditableInput name='supportedCampaigns' defaultValue={supportedCampaigns} />
      </S.SummaryItem>
      <S.SummaryItem>
        <h2>Climate action I’m proud of</h2>
        <EditableInput name='proudAction' defaultValue={proudAction} />
      </S.SummaryItem>
    </S.ProfileSummary>
  )
}
