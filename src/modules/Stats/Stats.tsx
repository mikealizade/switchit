import Head from 'next/head'
import { Fragment } from 'react'
import useSWR, { SWRResponse } from 'swr'
import { SignedOutLayout } from '@modules/SignedOutLanding/SignedOutLayout'
import { BulletList } from '@styles/common.style'
import { fetcher, formatDate } from '@utils/functions'
import { Details, Summary, Header, Stat, StatTotal, StatContent } from './Stats.style'
import * as S from '../SignedOutLanding/SignedOutLanding.style'

const team = [
  'mike@sciondigital.co.uk',
  'nadinealizade@hotmail.co.uk',
  'lewisjones21@hotmail.com',
  'chico2189@gmail.com',
  'hello@switchit.green',
  'amber@switchit.green',
  'sophie@switchit.green',
  'amberella.ah@gmail.com',
  'anna@switchit.green',
  'mikealizade@hotmail.com',
  'dangarrett10@gmail.com',
  'stanleymcleod85@gmail.com',
  'joannagammel@gmail.com',
  'joanne@goodlinens.com',
]

const stepText = [
  'Users who have selected current bank, excluding green banks',
  'Users who have received bank score',
  'Users who have selected a green bank',
  'Users who have clicked on green bank link',
  'Users who have signed switch agreement',
]

const greenBanks = ['Triodos Bank', 'Starling Bank', 'Monzo', 'Nationwide']

const Stats = (): JSX.Element => {
  const { data = [] } = useSWR('/api/stats/findConfimedSwitches', fetcher) as SWRResponse
  const filteredUsers = data.filter(({ email }) => !team.includes(email))
  console.log('filteredUsers:', filteredUsers)

  const percentageOfUsers = (step: number) => {
    return filteredUsers
      .map(({ switchJourneys, email }) => {
        const confirmed = switchJourneys?.find(
          ({ completedSteps, badBank }) => completedSteps.includes(step) && !greenBanks.includes(badBank),
        )

        return confirmed
          ? {
              email,
              verified: confirmed.isVerified ? formatDate(confirmed.isVerified) : '',
            }
          : null
      })
      .filter(Boolean)
  }

  const step5Users = filteredUsers.filter(({ switchJourneys }) =>
    switchJourneys?.some(({ completedSteps, badBank }) => completedSteps.includes(5) && !greenBanks.includes(badBank)),
  )

  const getUsersMaximised = () => {
    return step5Users
      .map(({ switchJourneys }) => {
        return switchJourneys?.find(({ completedSteps }) =>
          [6, 7, 8, 9, 10, 11].some(maximisingStep => completedSteps.includes(maximisingStep)),
        )
      })
      .filter(Boolean)
  }

  const getUsersGreenBank = () => {
    return filteredUsers
      .map(({ switchJourneys }) => {
        return switchJourneys?.find(
          ({ completedSteps, badBank }) => completedSteps.includes(2) && !completedSteps.includes(3) && greenBanks.includes(badBank),
        )
      })
      .filter(Boolean)
  }

  const usersMaximised = getUsersMaximised()
  const usersGreenBank = getUsersGreenBank()

  return (
    <>
      <Head>
        <title>Switch It Green | Stats</title>
        <link rel='icon' href='/favicon.ico' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>

      <SignedOutLayout>
        <S.PageSection>
          <S.ContentContainer>
            <S.PageHeader>Stats</S.PageHeader>
            <Header>
              Total users: <StatTotal>{data.filter(item => !team.includes(item.email)).length}</StatTotal>
            </Header>

            {[1, 2, 3, 4, 5].map(step => {
              const users = percentageOfUsers(step)

              return (
                <Details key={step}>
                  <Summary>{stepText[step - 1]}</Summary>
                  <br />

                  <StatContent>
                    <p>
                      <strong>Total: {users.length}</strong>
                    </p>
                    <p>
                      <strong>Percentage: {Math.ceil((users.length / data.length) * 100)}%</strong>
                    </p>
                    <BulletList key={step}>
                      {users.map(({ email, verified }) => (
                        <li key={email}>
                          <span>{email}</span>
                          <span>{verified ? `: ${verified}` : ''}</span>
                        </li>
                      ))}
                    </BulletList>
                  </StatContent>
                </Details>
              )
            })}

            <Header>Users who have completed at least one maximise action</Header>
            <Stat>Total: {usersMaximised.length}</Stat>
            <Stat>Percentage: {Math.ceil((usersMaximised.length / step5Users.length) * 100)}%</Stat>

            <Header>Users who have selected a green bank and have not gone any further</Header>
            <Stat>Total: {usersGreenBank.length}</Stat>
            <Stat>Percentage: {Math.ceil((usersGreenBank.length / data.length) * 100)}%</Stat>
          </S.ContentContainer>
        </S.PageSection>
      </SignedOutLayout>
    </>
  )
}

export default Stats
