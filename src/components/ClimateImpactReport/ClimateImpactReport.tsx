import type { NextPage } from 'next'
import { ProfileTitle } from '@modules/Profile/Profile.style'
import * as S from '@components/ClimateImpactReport/ClimateImpactReport.style'

export type ClimateImpactReportProps = {
  data: {
    carbonRemoved: number
    trashRemoved: number
  }
}

export const ClimateImpactReport: NextPage<ClimateImpactReportProps> = ({
  data: { carbonRemoved = 0, trashRemoved = 0 },
}) => {
  return (
    <S.ClimateImpactReport>
      <ProfileTitle>Climate Impact Report</ProfileTitle>
      <S.ReportContainer>
        <div className='grey-card'>
          <S.MainTotal>{carbonRemoved}</S.MainTotal>
          <S.Text>Pounds of carbon removed</S.Text>
        </div>
        <div className='grey-card'>
          <S.Total>{trashRemoved}</S.Total>
          <S.Text>Pounds of rubbish</S.Text>
        </div>
        <div className='grey-card'>
          <S.Total>{trashRemoved}</S.Total>
          <S.Text>Pounds of rubbish</S.Text>
        </div>
      </S.ReportContainer>
    </S.ClimateImpactReport>
  )
}
