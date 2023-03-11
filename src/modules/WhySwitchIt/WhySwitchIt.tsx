/* eslint-disable @next/next/no-img-element */
import type { NextPage } from 'next'
import Head from 'next/head'
// import Image from 'next/image'
import Link from 'next/link'
import { ResourcesType } from '@modules/Resources/Resources'
import { SignedOutLayout } from '@modules/SignedOutLanding/SignedOutLayout'
import { getArticleImageUrl } from '@utils/functions'
import * as S from '../SignedOutLanding/SignedOutLanding.style'

//img_assets
//img_greenbanking
//img_sustainability
//img_neobank

// img_divestment
//  img_creditscore
//  img_greenbankaccount

// TODO replace native image with next image

const WhySwitchIt: NextPage<{ resources: ResourcesType }> = ({ resources = [] }): JSX.Element => {
  const articles = resources.filter(({ type }) => type === 'website')

  return (
    <>
      <Head>
        <title>Switch It Green | Why Switch to a Green Bank?</title>
        <meta
          name='description'
          content='Switching to a green bank is one of the most impactful climate actions you can take. Find out why we exist and how to get involved. Your questions answered.'
        />
        <link rel='icon' href='/favicon.ico' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>

      <SignedOutLayout>
        <S.PageSection>
          <S.ContentContainer>
            <S.PageHeaderMono>Why Should I Switch It Green?</S.PageHeaderMono>
            <S.Text>
              Switching to green finance {`isn't`} the sexiest thing you can do for the planet but it is one of the most impactful climate
              actions you can take. Let us walk you through the problem, the solution, the impact, and how to get involved.
            </S.Text>
            <S.ArticlesList>
              {articles.map(({ id, title, summary, imageName }) => {
                console.log('imageName link..', getArticleImageUrl(imageName))

                return (
                  <S.Item key={id}>
                    <Link href={`/why-switch-it/article/${id}`}>
                      <S.ArticleLink>
                        <img src={getArticleImageUrl(imageName)} alt='' />
                        <S.Intro>{title}</S.Intro>
                        <S.Title>{summary}</S.Title>
                      </S.ArticleLink>
                    </Link>
                  </S.Item>
                )
              })}
            </S.ArticlesList>
          </S.ContentContainer>
        </S.PageSection>
      </SignedOutLayout>
    </>
  )
}

export default WhySwitchIt
