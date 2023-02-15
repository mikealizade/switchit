import Head from 'next/head'
import { Card } from '@components/Card/Card'
import * as S from '@modules/News/News.style'

const News = (): JSX.Element => {
  return (
    <>
      <Head>
        <title>Switch It Green | News</title>
        <meta name='description' content='Switch to a green bank on our Bank Switching Platform' />
        <link rel='icon' href='/favicon.ico' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>

      <S.Content>
        <S.ProfileContainer>
          <S.ProfileColumn>
            <Card column>news content</Card>
          </S.ProfileColumn>
          <S.ProfileColumn>
            <Card>content</Card>
          </S.ProfileColumn>
        </S.ProfileContainer>
      </S.Content>
    </>
  )
}

export default News
