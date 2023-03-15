import type { NextPage } from 'next'
import styled from '@emotion/styled'
import Image from 'next/image'
import React from 'react'
// import { useSelector } from 'react-redux'
// import { Accordion } from '@components/Accordion/ProfileAccordion'
import { Tabs } from '@components/Tabs/Tabs'
import { Tabs as StyledTabs } from '@components/Tabs/Tabs.style'
// import { RootState } from '@state/store'
import { HowItWorks } from './HowItWorks'

type Award = {
  total: number
  badge: string
  id: string
}

export const AwardsOverviewList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  row-gap: 30px;

  li {
    margin: 0;
    font-size: 1rem;
    line-height: 1.5;
    letter-spacing: 0.00938em;
    font-size: 1.6rem;
    display: flex;
    align-items: center;
    column-gap: 26px;
  }
`

const AwardsOverview = ({ data = [] }) => {
  return (
    <AwardsOverviewList>
      {data.map(({ total, badge, id: icon }: Award) => (
        <li key={icon}>
          <strong>{total} x</strong>
          <Image src={`/icons/icon_${icon}.svg`} alt='' width={60} height={60} />
          {badge}
        </li>
      ))}
    </AwardsOverviewList>
  )
}

export const ProfileAwardsBadges: NextPage = (): JSX.Element => {
  // const {
  //   profile: { badges = [] },
  // } = useSelector((state: RootState) => state.user)

  //Reinstate accordion and history tab V2

  const panels: [React.ReactNode] = [
    // <Accordion key='accordion' data={badges} />,
    // <AwardsOverview key='accordion' data={badges} />,
    <HowItWorks key='howItWorks' />,
  ]

  return (
    <>
      <StyledTabs>
        <Tabs tabs={['How It Works']} panels={panels}></Tabs>
      </StyledTabs>
    </>
  )
}
