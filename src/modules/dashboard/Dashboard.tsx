import type { NextPage } from 'next'
import { useUser } from '@auth0/nextjs-auth0'
import Head from 'next/head'
import { ErrorBoundary } from 'react-error-boundary'
import useSWR, { SWRResponse } from 'swr'
import { Card } from '@components/Card/Card'
import { Fallback } from '@components/Fallback/Fallback'
import { DashboardHero } from '@components/Hero/DashboardHero'
import { Loader } from '@components/Loader/Loader'
import { Posts, Post } from '@pages/dashboard'
import * as S from '@styles/common.style'
import { fetcher } from '@utils/functions'
import { Blog } from './components/Blog/Blog'
import { Goals } from './components/Goals/Goals'
import { ProgramsInfo } from './components/Programs/ProgramsInfo'
import { SharingCodes } from './components/SharingCodes/SharingCodes'
import { SwitchingJourney } from './components/SwitchingJourney/SwitchingJourney'

type PageProps = {
  data: {
    posts: Posts
  }
}

const Dashboard: NextPage<PageProps> = ({ data: { posts = [] } = {} }) => {
  const { user: { sub = '' } = {} } = useUser()
  const {
    data: { user: { switchJourneys = [], profile: { sharingCodes = [] } = {} } = {} } = {},
    // error,
    isValidating,
  } = useSWR(`/api/db/user/${sub}`, fetcher, { revalidateOnFocus: false }) as SWRResponse
  const featuredPost = posts.find(({ isFeatured }: { isFeatured: boolean }) => isFeatured) as Post

  return (
    <>
      <Head>
        <title>Switch It Green | Dashboard</title>
        <meta name='description' content='Switch to a green bank on our Bank Switching Platform' />
        <link rel='icon' href='/favicon.ico' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>

      <ErrorBoundary fallbackRender={({ error }) => <Fallback error={error?.message} />}>
        <S.Content>
          <DashboardHero post={featuredPost} />
          <S.ColumnContainer>
            <S.Column>
              <Card>
                <Blog data={posts} />
              </Card>
              <Card stretch>
                <ProgramsInfo />
              </Card>
            </S.Column>
            <S.Column>
              <Card>
                {isValidating ? (
                  <Loader height={164} />
                ) : (
                  <SharingCodes total={sharingCodes.length} />
                )}
              </Card>
              <Card stretch>
                <Goals />
              </Card>
            </S.Column>
            <S.Column>
              <Card stretch>
                {isValidating ? <Loader /> : <SwitchingJourney switchJourneys={switchJourneys} />}
              </Card>
            </S.Column>
          </S.ColumnContainer>
        </S.Content>
      </ErrorBoundary>
    </>
  )
}

export default Dashboard
