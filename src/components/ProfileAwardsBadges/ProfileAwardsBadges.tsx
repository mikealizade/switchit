import React from 'react'
import type { NextPage } from 'next'
import { useSelector, useDispatch } from 'react-redux'
import Image from 'next/image'
import { RootState } from '@state/store'
import { Tabs as StyledTabs } from '@components/Tabs/Tabs.style'
import { Tabs } from '@components/Tabs/Tabs'
import * as S from '@components/ProfileAwardsBadges/ProfileAwardsBadges.style'
import Link from 'next/link'
import { Accordion } from '@components/Accordion/Accordion'

export const ProfileAwardsBadges: NextPage = (): JSX.Element => {
  const user = useSelector((state: RootState) => state.user)
  // const {
  //   profile: { switchItPoints = [] },
  //   totalPoints,
  // } = user

  const data = [
    {
      count: 3,
      type: 'Providers switched',
      icon: 'provider',
    },
    {
      count: 9,
      type: 'Friends switched',
      icon: 'friends',
    },
    {
      count: 33,
      type: 'Articles Read',
      icon: 'draw',
    },
    {
      count: 3,
      type: 'Programs Completed',
      icon: 'programs',
    },
  ]

  const panels: [React.ReactNode, React.ReactNode] = [
    <Accordion key='accordion' data={data} />,
    <>
      <S.Header>Providers Switched</S.Header>
      <p>
        Switching providers couldn’t be easier. We’ll walk you through the steps to choosing a
        greener bank, pension or energy provider. Once you’ve made the switch, we’ll award you a
        badge. Switching providers is also a great way to earn Switch It points.
      </p>
      <S.StartLink>
        <Link href={''}>Start a Switching Journey</Link>
        <Image src={'/icons/icon_chevron_right.svg'} alt='' width={10} height={10} />
      </S.StartLink>

      <S.Header>Programs Completed</S.Header>
      <p>
        In 2023, Switch It is focusing on peer to peer support for switching in sixth forms and
        universities. Write to us if you’d like Switch It to come to your school. Collect badges for
        completing programs in school. Or start your own program. Additional information can be
        found on our Program page
      </p>
      <S.StartLink>
        <Link href={''}>Start a Program</Link>
        <Image src={'/icons/icon_chevron_right.svg'} alt='' width={10} height={10} />
      </S.StartLink>

      <S.Header>Articles Read</S.Header>
      <p>
        Reading up on what’s new in green finance and other climate related news is a great way to
        grow your knowledge and empower impactful choices. Dive into interviews, news articles, and
        blog posts. Want to know the best way to talk to your community about the importance of
        switching green? We’ve got you covered.
      </p>
      <S.StartLink>
        <Link href={''}>Visit the blog</Link>
        <Image src={'/icons/icon_chevron_right.svg'} alt='' width={10} height={10} />
      </S.StartLink>

      <S.Header>Friends Switched</S.Header>
      <p>
        Getting the word out is one of the most impactful ways to move the needle. Switching is
        important, but switching together is when real change happens. Get your mom, collegues,
        enimies and frenemies on board
      </p>
      <S.StartLink>
        <Link href={''}>Invite Friends</Link>
        <Image src={'/icons/icon_chevron_right.svg'} alt='' width={10} height={10} />
      </S.StartLink>
    </>,
  ]

  return (
    <>
      <StyledTabs>
        <Tabs tabs={['Overview & History', 'How It Works']} panels={panels}></Tabs>
      </StyledTabs>
    </>
  )
}
