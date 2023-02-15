import Head from 'next/head'
import { Card } from '@components/Card/Card'
import { Hero } from '@components/Hero/Hero'
import * as S from '@styles/common.style'

const Impact = (): JSX.Element => {
  return (
    <>
      <Head>
        <title>Switch It Green | Impact</title>
        <meta name='description' content='Switch to a green bank on our Bank Switching Platform' />
        <link rel='icon' href='/favicon.ico' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>

      <S.Content>
        <Hero type='impact' />
        <S.ColumnContainer>
          <S.Column>
            <Card>content</Card>
          </S.Column>
          <S.Column>
            <Card>content</Card>
          </S.Column>
          <S.Column>
            <Card>content</Card>
          </S.Column>
        </S.ColumnContainer>
      </S.Content>
    </>
  )
}

export default Impact
