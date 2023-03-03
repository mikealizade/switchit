import type { NextPage } from 'next'
import React from 'react'
import { useSelector } from 'react-redux'
import { Accordion } from '@components/Accordion/ProfileAccordion'
import { Tabs } from '@components/Tabs/Tabs'
import { Tabs as StyledTabs } from '@components/Tabs/Tabs.style'
import { RootState } from '@state/store'
import { HowItWorks } from './HowItWorks'

export const ProfileAwardsBadges: NextPage = (): JSX.Element => {
  const {
    profile: { badges = [] },
  } = useSelector((state: RootState) => state.user)

  const panels: [React.ReactNode, React.ReactNode] = [
    <Accordion key='accordion' data={badges} />,
    <HowItWorks key='howItWorks' />,
  ]

  return (
    <>
      <StyledTabs>
        <Tabs tabs={['Overview & History', 'How It Works']} panels={panels}></Tabs>
      </StyledTabs>
    </>
  )
}
