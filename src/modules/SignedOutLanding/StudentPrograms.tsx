import type { NextPage } from 'next'
import Link from 'next/link'
import { Div } from '@styles/common.style'
import * as S from './SignedOutLanding.style'

export const StudentPrograms: NextPage = (): JSX.Element => {
  return (
    <S.PageSection rowGap={30}>
      <S.HomePageHeader>Student Programs</S.HomePageHeader>
      <Div width='50%'>
        <S.Text>Work or study at a school, college, or university? </S.Text>
        <S.Text>
          We are partnering with educational institutions to harness the power of switching en
          masse.
        </S.Text>
        <S.Text>
          Our programs deliver financial literacy and tangible climate education to students while
          moving £ billions out of fossil fuel support.
        </S.Text>
        <S.Text>
          Get access to bespoke resources, high-profile guest speaker events, exclusive workshops,
          tailored data reporting & impact tracking, and more
        </S.Text>
      </Div>
      <S.BlockButton margin='40px 0 0'>
        <Link href='/programs'>Find out more</Link>
      </S.BlockButton>
    </S.PageSection>
  )
}
