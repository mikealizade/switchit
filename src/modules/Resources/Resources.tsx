import type { NextPage } from 'next'
import Head from 'next/head'
import { ErrorBoundary } from 'react-error-boundary'
import { Card } from '@components/Card/Card'
import { Fallback } from '@components/Fallback/Fallback'
import { Hero } from '@components/Hero/Hero'
import * as S from '@styles/common.style'
import { Articles } from './components/Articles/Articles'

export type Resource = {
  id: string
  type: string
  title: string
  summary: string
  resource: string
  mins: string
  points: string
  imageName: string
  isFeatured: boolean
}

export type ResourcesType = Resource[]

const Resources: NextPage<{ resources: ResourcesType }> = ({ resources }) => {
  return (
    <>
      <Head>
        <title>Switch It Green | Resources</title>
        <meta name='description' content='Switch to a green bank on our Bank Switching Platform' />
        <link rel='icon' href='/favicon.ico' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>

      <ErrorBoundary fallbackRender={({ error }) => <Fallback error={error?.message} />}>
        <S.Content>
          <Hero type='resources' />
          <S.ColumnContainer>
            <S.Column>
              <Card>
                <Articles resources={resources} />
              </Card>
            </S.Column>
          </S.ColumnContainer>
        </S.Content>
      </ErrorBoundary>
    </>
  )
}

export default Resources
