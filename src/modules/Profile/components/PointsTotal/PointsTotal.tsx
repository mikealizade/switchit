import type { NextPage } from 'next'
import Image from 'next/image'
import { useSelector } from 'react-redux'
import { Ellipsis } from '@components/Ellipsis/Ellipsis'
import { PointsChart } from '@components/PointsChart/PointsChart'
import * as S from '@modules/Profile/components/PointsTotal/PointsTotal.style'
import { RootState } from '@state/store'
import { Title } from '@styles/common.style'

export type PointsTotalProps = Array<{
  type: string
  points: number
}>

export const PointsTotal: NextPage<{ data: PointsTotalProps }> = ({ data = [] }): JSX.Element => {
  const { totalPoints = 0 } = useSelector((state: RootState) => state.user)

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
    </S.PointsTotal>
  )
}
