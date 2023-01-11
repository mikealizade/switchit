import type { NextPage } from 'next'
import Head from 'next/head'
import { ErrorBoundary } from 'react-error-boundary'
import { useSelector } from 'react-redux'
import { Card } from '@components/Card/Card'
import { Fallback } from '@components/Fallback/Fallback'
import { DashboardHero } from '@components/Hero/DashboardHero'
import { Posts, Post } from '@pages/dashboard'
import { RootState } from '@state/store'
import * as S from '@styles/common.style'
import { filterSteps } from '@utils/functions'
import { Blog } from './components/Blog/Blog'
import { SharingCodes } from './components/SharingCodes/SharingCodes'
import { SwitchingJourney } from './components/SwitchingJourney/SwitchingJourney'

type PageProps = {
  data: {
    posts: Posts
  }
}

const Dashboard: NextPage<PageProps> = ({ data: { posts = [] } = {} }) => {
  const user = useSelector((state: RootState) => state.user)
  const { switchJourneys = [], profile: { sharingCodes = [] } = {} } = user
  const featuredPost = posts.find(({ isFeatured }: { isFeatured: boolean }) => isFeatured) as Post
  const { name, completedSteps } = switchJourneys.at(-1) ?? {}

  return (
    <>
      <Head>
        <title>SwitchIt</title>
        <meta name='description' content='Generated by create next app' />
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
            </S.Column>
            <S.Column>
              <Card>
                <SharingCodes total={sharingCodes.length} />
              </Card>
            </S.Column>
            <S.Column>
              <Card>
                <SwitchingJourney
                  name={name}
                  progress={completedSteps?.filter(filterSteps).length}
                />
              </Card>
            </S.Column>
          </S.ColumnContainer>
        </S.Content>
      </ErrorBoundary>
    </>
  )
}

export default Dashboard
