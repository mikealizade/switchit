import type { NextPage } from 'next'
import * as S from '@components/PointsChart/PointsChart.style'

export const PointsChart: NextPage<{ total: number; data: any }> = ({
  total,
  data = [],
}): JSX.Element => {
  const hasPoints = data.some(({ points }: { points: number }) => points > 0)

  return (
    <>
      {hasPoints ? (
        <S.PointsChart>
          {data?.length &&
            data.map(({ type, points }: { type: string; points: number }) => {
              const percentage = (points / total) * 100

              return (
                <S.Item
                  className={type.replace(/\s/g, '').toLowerCase()}
                  key={type}
                  style={{ width: `${percentage}%` }}
                ></S.Item>
              )
            })}
        </S.PointsChart>
      ) : (
        <S.ItemEmpty></S.ItemEmpty>
      )}
    </>
  )
}
