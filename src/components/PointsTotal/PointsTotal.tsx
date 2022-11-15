import type { NextPage } from 'next'
import Image from 'next/image'
import { PointsChart } from '@components/PointsChart/PointsChart'
import * as S from '@components/PointsTotal/PointsTotal.style'
import { Title } from '@styles/common.style'

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
      <Title>Switch It Points</Title>
      <S.TotalPoints>
        <Image src={'/icons/icon_star_grey.svg'} alt='' width={45} height={45} />
        {points} Points
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
