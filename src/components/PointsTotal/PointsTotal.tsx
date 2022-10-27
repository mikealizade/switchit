import type { NextPage } from 'next'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { PointsChart } from '@components/PointsChart/PointsChart'
import * as S from '@components/PointsTotal/PointsTotal.style'
import { ProfileTitle } from '@modules/Profile/Profile.style'

export type PointsTotalProps = Array<{
  type: string
  points: number
}>

export const PointsTotal: NextPage<{ data: PointsTotalProps; points: number }> = ({
  data = [],
  points = 0,
}): JSX.Element => {
  return (
    <S.PointsTotal>
      <ProfileTitle>Switch It Points</ProfileTitle>
      <S.TotalPoints>
        <FontAwesomeIcon size='sm' icon={faStar} /> {points} Points
      </S.TotalPoints>
      <PointsChart data={data} total={points} />
      <S.PointTypes>
        {data.map(({ type, points }: { type: string; points: number }) => (
          <S.Item key={type}>
            <S.PointType>{type}</S.PointType>
            <S.Points>{points}pt</S.Points>
          </S.Item>
        ))}
      </S.PointTypes>
    </S.PointsTotal>
  )
}
