import { useState } from 'react'
import type { NextPage } from 'next'
import * as S from '@components/PointsChart/PointsChart.style'

export const PointsChart: NextPage<{ total: number; data: any }> = ({
  total,
  data = [],
}): JSX.Element => {
  return (
    <S.PointsChart>
      {data?.length ? (
        data.map(({ type, points }: { type: string; points: number }) => {
          const percentage = (points / total) * 100
          if (percentage < 1) return null

          return (
            <S.Item
              className={type.replace(/\s/g, '').toLowerCase()}
              key={type}
              style={{ width: `${percentage}%` }}
            ></S.Item>
          )
        })
      ) : (
        <S.ItemEmpty style={{ width: '100%' }}></S.ItemEmpty>
      )}
    </S.PointsChart>
  )
}
