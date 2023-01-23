import type { NextPage } from 'next'
import Link from 'next/link'
import * as S from '@components/SwitchingFaqs/SwitchingFaqs.style'
import { TextLink } from '@styles/common.style'

export const SwitchingFaqs: NextPage = (): JSX.Element => {
  return (
    <S.SwitchingFaqs>
      <h3>Switching FAQs</h3>
      <S.Faqs>
        <S.Item>
          <Link href='/help'>
            <TextLink>Learn about our criteria for recommendation here.</TextLink>
          </Link>
        </S.Item>
        <S.Item>
          <Link href='/help'>
            <TextLink>Learn about our criteria for recommendation here.</TextLink>
          </Link>
        </S.Item>
        <S.Item>
          <Link href='/help'>
            <TextLink>Learn about our criteria for recommendation here.</TextLink>
          </Link>
        </S.Item>
        <S.Item>
          <Link href='/help'>
            <TextLink>Learn about our criteria for recommendation here.</TextLink>
          </Link>
        </S.Item>
        <S.Item>
          <Link href='/help'>
            <TextLink>Learn about our criteria for recommendation here.</TextLink>
          </Link>
        </S.Item>
        <S.Item>
          <Link href='/help'>
            <TextLink>Learn about our criteria for recommendation here.</TextLink>
          </Link>
        </S.Item>
        <S.Item>
          <Link href='/help'>
            <TextLink>Learn about our criteria for recommendation here.</TextLink>
          </Link>
        </S.Item>
        <S.Item>
          <Link href='/help'>
            <TextLink>Learn about our criteria for recommendation here.</TextLink>
          </Link>
        </S.Item>
        <S.Item>
          <Link href='/help'>
            <TextLink>Learn about our criteria for recommendation here.</TextLink>
          </Link>
        </S.Item>
        <S.Item>
          <Link href='/help'>
            <TextLink>Learn about our criteria for recommendation here.</TextLink>
          </Link>
        </S.Item>
      </S.Faqs>
      <S.More>
        <Link href='/help'>More...</Link>
      </S.More>
    </S.SwitchingFaqs>
  )
}
