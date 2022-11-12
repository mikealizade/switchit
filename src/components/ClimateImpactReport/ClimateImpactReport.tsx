import type { NextPage } from 'next'
import { Title } from '@styles/common.style'
import * as S from '@components/ClimateImpactReport/ClimateImpactReport.style'

export type ClimateImpactReportProps = {
  carbonRemoved: number
  trashRemoved: number
}

export const ClimateImpactReport: NextPage<{ data: Partial<ClimateImpactReportProps> }> = ({
  data: { carbonRemoved = 0, trashRemoved = 0 },
}): JSX.Element => {
  return (
    <S.ClimateImpactReport>
      <Title>Climate Impact Report</Title>
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
