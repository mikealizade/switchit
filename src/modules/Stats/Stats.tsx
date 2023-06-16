import Head from 'next/head'
import { Fragment } from 'react'
import useSWR, { SWRResponse } from 'swr'
import { SignedOutLayout } from '@modules/SignedOutLanding/SignedOutLayout'
import { BulletList } from '@styles/common.style'
import { fetcher, formatDate } from '@utils/functions'
import * as S from '../SignedOutLanding/SignedOutLanding.style'

const Stats = (): JSX.Element => {
  const { data = [] } = useSWR('/api/stats/findConfimedSwitches', fetcher) as SWRResponse

  const percentageOfUsers = (step: number) => {
    return data
      .map(({ switchJourneys, email }) => {
        const confirmed = switchJourneys?.find(({ completedSteps }) => completedSteps.includes(step))

        return confirmed
          ? {
              email,
              verified: formatDate(confirmed.isVerified),
            }
          : null
      })
      .filter(Boolean)
  }

  const getUsersMaximised = () => {
    return data
      .map(({ switchJourneys, email }) => {
        const confirmed = switchJourneys?.find(
          ({ completedSteps }) =>
            // [6, 7, 8, 9, 10, 11].some(maximisingStep => completedSteps.includes(maximisingStep)),
            completedSteps.includes(6) ||
            completedSteps.includes(7) ||
            completedSteps.includes(8) ||
            completedSteps.includes(9) ||
            completedSteps.includes(10) ||
            completedSteps.includes(11),
        )

        return confirmed
          ? {
              email,
              verified: formatDate(confirmed.isVerified),
            }
          : null
      })
      .filter(Boolean)
  }

  const usersMaximised = getUsersMaximised()

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
            <h2>Total users</h2>
            <p style={{ fontSize: '30px' }}>{data.length}</p>

            {[1, 2, 3, 4, 5].map(step => {
              const users = percentageOfUsers(step)
              return (
                <details key={step} style={{ marginBottom: '24px' }}>
                  <summary style={{ fontSize: '24px' }}>Users who have completed step {step}</summary>
                  <br />

                  <div style={{ display: 'flex', flexDirection: 'column', rowGap: '14px', paddingLeft: '20px' }}>
                    <p>
                      <strong>Total: {users.length}</strong>
                    </p>
                    <p>
                      <strong>Percentage: {Math.ceil((users.length / data.length) * 100)}%</strong>
                    </p>
                    <BulletList key={step}>
                      {users.map(({ email, verified }) => (
                        <li key={email}>
                          <span>{email}</span>: <span>{verified}</span>
                        </li>
                      ))}
                    </BulletList>
                  </div>
                </details>
              )
            })}

            <h2>Number/percentage of users who have completed at least one maximise action</h2>
            <p style={{ fontSize: '30px' }}>Total: {usersMaximised.length}</p>
            <p style={{ fontSize: '30px' }}>Percentage: {Math.ceil((usersMaximised.length / data.length) * 100)}%</p>
          </S.ContentContainer>
        </S.PageSection>
      </SignedOutLayout>
    </>
  )
}

export default Stats
