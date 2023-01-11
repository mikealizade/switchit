import type { NextPage } from 'next'
import Image from 'next/image'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { PointsChart } from '@components/PointsChart/PointsChart'
import * as S from '@components/ProfilePoints/ProfilePoints.style'
import { Tabs } from '@components/Tabs/Tabs'
import { Tabs as StyledTabs } from '@components/Tabs/Tabs.style'
import { useShareCode } from '@hooks/useShareCode'
import { PointsTotal } from '@modules/Profile/components/PointsTotal/PointsTotal'
import { RootState } from '@state/store'

export const ProfilePoints: NextPage = (): JSX.Element => {
  const user = useSelector((state: RootState) => state.user)
  const shareCode = useShareCode()
  const {
    profile: { switchItPoints = [] },
    totalPoints,
  } = user

  const panels: [React.ReactNode, React.ReactNode, React.ReactNode] = [
    // <PointsTotal key='overview' data={switchItPoints} />,
    <>
      <PointsChart data={switchItPoints} total={totalPoints} />
      <S.TotalPoints>
        <Image src={'/icons/icon_star_grey.svg'} alt='' width={25} height={25} />
        {totalPoints} Points
      </S.TotalPoints>
      <S.Header>Breakdown</S.Header>
      <S.PointTypes>
        {switchItPoints.map(({ type, points }: { type: string; points: number }) => (
          <S.Item key={type}>
            <S.PointType>{type}</S.PointType>
            <S.Points>{points}pt</S.Points>
          </S.Item>
        ))}
      </S.PointTypes>
    </>,
    <div key='history'>10/5/23 - Banks switched</div>,
    <>
      <S.Header>About Points</S.Header>
      <p>
        Track your impact by earning points, and use those points to give back. Every year we
        partner with a new nonprofit to expand our reach. We believe tackling climate change is
        wholistic. Points can be spent in our coin store and are earned through a variety of
        different actions across the Switch It web app.
      </p>
      <S.Header>Scoring Breakdown</S.Header>
      <S.Scoring>
        <li>1 x Send a code</li>
        <li>5 x Post a Google Review</li>
        <li>10 x An invited friend creates a profile</li>
        <li>15 x Post to socials</li>
        <li>50 x Writee your breakup letter</li>
        <li>100 x Write a hello letter</li>
        <li>500 x Start a program</li>
      </S.Scoring>
    </>,
  ]

  return (
    <StyledTabs wide>
      <Tabs tabs={['Overview', 'History', 'How It Works']} panels={panels}></Tabs>
    </StyledTabs>
  )
}
