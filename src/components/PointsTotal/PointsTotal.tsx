import type { NextPage } from 'next'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { PointsChart } from '@components/PointsChart/PointsChart'
import * as S from '@components/PointsTotal/PointsTotal.style'
import { ProfileTitle } from '@modules/Profile/Profile.style'

export const PointsTotal: NextPage = () => {
  const pointTypes = [
    { type: 'Sharing Codes', points: 150 },
    { type: 'Media Posted', points: 80 },
    { type: 'Switching Campaigns', points: 50 },
    { type: 'Provider Switching Actions', points: 20 },
  ]
  return (
    <S.PointsTotal>
      <ProfileTitle>Switch It Points</ProfileTitle>
      <S.TotalPoints>
        <FontAwesomeIcon size='sm' icon={faStar} /> 268 Points
      </S.TotalPoints>
      <PointsChart />
      <S.PointTypes>
        {pointTypes.map(({ type, points }: { type: string; points: number }) => (
          <S.Item key={type}>
            <S.PointType>{type}</S.PointType>
            <S.Points>{points}pt</S.Points>
          </S.Item>
        ))}
      </S.PointTypes>
    </S.PointsTotal>
  )
}
