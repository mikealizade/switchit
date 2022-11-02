import type { NextPage } from 'next'
import * as S from '@components/ProfileSummary/ProfileSummary.style'
import { EditableInput } from '@components/EditableInput/EditableInput'

export type ProfileSummaryProps = {
  proudAction: string
  supportedCampaigns: string
  switchingStatement: string
}

export const ProfileSummary: NextPage<{ data: Partial<ProfileSummaryProps> }> = ({
  data: { proudAction = '', supportedCampaigns = '', switchingStatement = '' } = {},
}): JSX.Element => {
  return (
    <S.ProfileSummary>
      <S.SummaryItem>
        <h2>Switching Statement/Why I Switch</h2>
        <p>{switchingStatement}</p>
        {/* <EditableInput name='switchingStatement' defaultValue={switchingStatement} /> */}
      </S.SummaryItem>
      <S.SummaryItem>
        <h2>Campaigns I support</h2>
        <p>{supportedCampaigns}</p>
        {/* <EditableInput name='supportedCampaigns' defaultValue={supportedCampaigns} /> */}
      </S.SummaryItem>
      <S.SummaryItem>
        <h2>Climate action I’m proud of</h2>
        <p>{proudAction}</p>
        {/* <EditableInput name='proudAction' defaultValue={proudAction} /> */}
      </S.SummaryItem>
    </S.ProfileSummary>
  )
}
