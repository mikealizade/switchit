import type { NextPage } from 'next'
import Image from 'next/image'
import { Ellipsis } from '@components/Ellipsis/Ellipsis'
import { PointsChart } from '@components/PointsChart/PointsChart'
import { useGetTotalPoints } from '@hooks/useGetTotalPoints'
import * as S from '@modules/Profile/components/PointsTotal/PointsTotal.style'
import { Title } from '@styles/common.style'

export type PointsTotalProps = Array<{
  type: string
  points: number
}>

export const PointsTotal: NextPage<{ data: PointsTotalProps }> = ({ data = [] }): JSX.Element => {
  const totalPoints = useGetTotalPoints()

  return (
    <S.PointsTotal>
      <Title>
        Switch It Points
        <Ellipsis section='points' />
      </Title>
      <S.TotalPoints>
        <Image src={'/icons/icon_star_grey.svg'} alt='' width={45} height={45} />
        {totalPoints} Points
      </S.TotalPoints>
      <PointsChart data={data} total={totalPoints} />
      <S.PointTypes>
        {data.map(({ type, points }: { type: string; points: number }) => (
          <S.Item key={type}>
            <S.PointType>{type}</S.PointType>
            <S.Points>{points}pt</S.Points>
          </S.Item>
        ))}
      </S.PointTypes>
      <S.ComingSoon>Coming soon: spend your points on planet positive prizes.</S.ComingSoon>
    </S.PointsTotal>
  )
}
