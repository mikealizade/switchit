import Head from 'next/head'
import Link from 'next/link'
import * as S from '@modules/PageNotFound/PageNotFound.style'
import { BlockButton } from '@modules/SignedOutLanding/SignedOutLanding.style'
import { Div } from '@styles/common.style'

const PageNotFound = (): JSX.Element => {
  return (
    <>
      <Head>
        <title>Switch It Green | 404</title>
        <meta name='description' content='Switch to a green bank on our Bank Switching Platform' />
        <link rel='icon' href='/favicon.ico' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>

      <S.Content>
        <Div>
          <S.Header>404?!</S.Header>
          <S.Text>
            Whoops! {`That's`} embarassing. You {`weren't`} meant to be here. Best to...
          </S.Text>
          <BlockButton>
            <Link href='/'>Return to homepage</Link>
          </BlockButton>
        </Div>
      </S.Content>
    </>
  )
}

export default PageNotFound
