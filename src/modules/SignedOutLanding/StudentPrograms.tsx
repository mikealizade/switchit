import type { NextPage } from 'next'
import Link from 'next/link'
import { Div } from '@styles/common.style'
import * as S from './SignedOutHome.style'
import { BlockButton } from './SignedOutLanding.style'
export const StudentPrograms: NextPage = (): JSX.Element => {
  return (
    <S.StudentPrograms>
      <S.StudentProgramsContent>
        <S.StudentProgramsHeader>Student Programs:</S.StudentProgramsHeader>
        <Div rowGap={24}>
          <S.StudentProgramsText>
            Work or study at a school, college, or university?
          </S.StudentProgramsText>
          <S.StudentProgramsText>
            We are partnering with educational institutions to harness the power of switching en
            masse.
          </S.StudentProgramsText>
          <S.StudentProgramsText>
            Our programs deliver financial literacy and tangible climate education to students while
            moving £ billions out of fossil fuel support.
          </S.StudentProgramsText>
          <S.StudentProgramsText>
            Get access to bespoke resources, high-profile guest speaker events, exclusive workshops,
            tailored data reporting & impact tracking, and more
          </S.StudentProgramsText>
        </Div>

        <BlockButton>
          <Link href='/students'>Find out more</Link>
        </BlockButton>
      </S.StudentProgramsContent>
    </S.StudentPrograms>
  )
}
