import type { NextPage } from 'next'
import Image from 'next/image'
import React from 'react'
import { useSelector } from 'react-redux'
import { PointsChart } from '@components/PointsChart/PointsChart'
import * as S from '@components/ProfilePoints/ProfilePoints.style'
import { Tabs } from '@components/Tabs/Tabs'
import { Tabs as StyledTabs } from '@components/Tabs/Tabs.style'
import { useGetTotalPoints } from '@hooks/useGetTotalPoints'
import { RootState } from '@state/store'

export const ProfilePoints: NextPage = (): JSX.Element => {
  const user = useSelector((state: RootState) => state.user)
  const totalPoints = useGetTotalPoints()
  const {
    profile: { switchItPoints = [] },
  } = user

  const panels: [React.ReactNode, React.ReactNode] = [
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
    // <div key='history'>Not done</div>,
    <>
      <S.Header>About Points</S.Header>
      <p>
        Track your impact by earning points. You earn points for taking actions which support the
        campaign goals - moving money out of fossil fuel support and pressuring banks to change
        their investment policies. Check back soon for exciting updates on how you can use your
        points for good.
      </p>
      <S.Header>Scoring Breakdown</S.Header>
      <S.Scoring>
        <li>5 x Send a code</li>
        <li>25 x An Invited Friend Creates A Profile</li>
        <li>250 x An Invited Friend Makes The Switch</li>
        <li>25 x Read An Article</li>
        <li>50 x Post A Review To Trustpilot or Google</li>
        <li>50 x Write A Hello Letter</li>
        <li>75 x Share Your Switching Story</li>
        <li>100 x Post to Socials</li>
        <li>100 x Tell Your Community</li>
        <li>150 x Write Your Breakup Letter</li>
        <li>1000 x Switch Your Provider</li>
        <li>10000 x Start a Program at Your school, University or business</li>
      </S.Scoring>
    </>,
  ]

  return (
    <StyledTabs wide>
      <Tabs tabs={['Overview', 'How It Works']} panels={panels}></Tabs>
    </StyledTabs>
  )
}
