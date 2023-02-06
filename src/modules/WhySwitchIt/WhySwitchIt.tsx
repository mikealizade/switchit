import type { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ResourcesType } from '@modules/Resources/Resources'
import { SignedOutLayout } from '@modules/SignedOutLanding/SignedOutLayout'
import { getArticleImageUrl } from '@utils/functions'
import * as S from '../SignedOutLanding/SignedOutLanding.style'

const titles = ['The Problem', 'The Solution', 'The Impact', 'Get Involved']

const WhySwitchIt: NextPage<{ resources: ResourcesType }> = ({ resources = [] }): JSX.Element => {
  const [one, two, three, four] = resources.filter(({ id }) => id !== '3' && id !== '4')
  const whySwitchItResources = [two, one, four, three]

  return (
    <SignedOutLayout>
      <S.PageSection rowGap={50}>
        <S.PageHeader>Why Switch It Green</S.PageHeader>
        <S.Text>
          Switching to green finance {`isn't`} the sexiest thing you can do for the planet but it is
          one of the most impactful climate actions you can take. Let us walk you through the
          problem, the solution, the impact, and how to get involved.
        </S.Text>
        <S.ArticlesList>
          {whySwitchItResources.map(({ id, title, imageName }, i: number) => {
            return (
              <S.Item key={id}>
                <Link href={`/resources/article/${id}`}>
                  <S.ArticleLink>
                    <Image src={getArticleImageUrl(imageName)} alt='' width={350} height={262} />
                    <S.Intro>{titles[i]}</S.Intro>
                    <S.Title>{title}</S.Title>
                  </S.ArticleLink>
                </Link>
              </S.Item>
            )
          })}
        </S.ArticlesList>
      </S.PageSection>
    </SignedOutLayout>
  )
}

export default WhySwitchIt
