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
          <Link href='/help?tab=switching'>
            <TextLink>Will switching banks affect my credit score?</TextLink>
          </Link>
        </S.Item>
        <S.Item>
          <Link href='/help?tab=switching'>
            <TextLink>How long will it take to switch my current account?</TextLink>
          </Link>
        </S.Item>
        <S.Item>
          <Link href='/help?tab=switching'>
            <TextLink>What is the Current Account Switching Service (CASS)?</TextLink>
          </Link>
        </S.Item>
        <S.Item>
          <Link href='/help?tab=switching'>
            <TextLink>How do I maximize my switch? </TextLink>
          </Link>
        </S.Item>
      </S.Faqs>
      <S.More>
        <Link href='/help'>More...</Link>
      </S.More>
    </S.SwitchingFaqs>
  )
}
