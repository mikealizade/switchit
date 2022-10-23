import { useState } from 'react'
import type { NextPage } from 'next'
import * as S from '@components/PointsChart/PointsChart.style'

export const PointsChart: NextPage = () => {
  const pointTypes = [
    { type: 'Sharing Codes', points: 150 },
    { type: 'Media Posted', points: 80 },
    { type: 'Switching Campaigns', points: 50 },
    { type: 'Provider Switching Actions', points: 20 },
  ]
  const total = pointTypes.reduce((acc, item) => acc + item.points, 0)

  return (
    <S.PointsChart>
      {pointTypes.map(({ type, points }: { type: string; points: number }) => {
        const percentage = (points / total) * 100
        return <S.Item key={type} style={{ width: `${percentage}%` }}></S.Item>
      })}
    </S.PointsChart>
  )
}
