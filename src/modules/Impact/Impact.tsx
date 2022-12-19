import Head from 'next/head'
import { Card } from '@components/Card/Card'
import { Hero } from '@components/Hero/Hero'
import * as S from '@styles/common.style'

const Impact = (): JSX.Element => {
  return (
    <>
      <Head>
        <title>SwitchIt</title>
        <meta name='description' content='Generated by create next app' />
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
