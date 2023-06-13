import Head from 'next/head'
import useSWR, { SWRResponse } from 'swr'
import { SignedOutLayout } from '@modules/SignedOutLanding/SignedOutLayout'
import { BulletList } from '@styles/common.style'
import { fetcher, formatDate } from '@utils/functions'
import * as S from '../SignedOutLanding/SignedOutLanding.style'

const Stats = (): JSX.Element => {
  const { data = [] } = useSWR('/api/stats/findConfimedSwitches', fetcher) as SWRResponse

  const items = data
    .map(({ switchJourneys, email }) => {
      const confirmed = switchJourneys?.find(({ completedSteps }) => completedSteps.includes(5))

      return confirmed
        ? {
            email,
            verified: formatDate(confirmed.isVerified),
          }
        : null
    })
    .filter(Boolean)

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
            <BulletList>
              {items.map(({ email, verified }) => (
                <li key={email}>
                  <span>{email}</span>: <span>{verified}</span>
                </li>
              ))}
            </BulletList>
          </S.ContentContainer>
        </S.PageSection>
      </SignedOutLayout>
    </>
  )
}

export default Stats
