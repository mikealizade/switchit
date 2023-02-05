import type { NextPage } from 'next'
import { MainSection } from './MainSection'
import { StudentPrograms } from './StudentPrograms'
import { Subscribe } from './Subscribe'
import { WhySwitchIt } from './WhySwitchIt'

export const SignedOutLanding: NextPage = (): JSX.Element => {
  return (
    <>
      <MainSection />
      <WhySwitchIt />
      <StudentPrograms />
      <Subscribe />
    </>
  )
}
