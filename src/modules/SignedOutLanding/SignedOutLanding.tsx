import type { NextPage } from 'next'
import Head from 'next/head'
import { GetInvolved } from './GetInvolved'
import { MainSection } from './MainSection'
import { StudentPrograms } from './StudentPrograms'
import { Subscribe } from './Subscribe'
import { TheCampaign } from './TheCampaign'
import { TheImpact } from './TheImpact'
import { TheProblem } from './TheProblem'
import { TheSolution } from './TheSolution'
import { WhySwitchIt } from './WhySwitchIt'

export const SignedOutLanding: NextPage = (): JSX.Element => {
  return (
    <>
      <Head>
        <title>Switch It Green | Green Bank Switching Platform</title>
        <meta
          name='description'
          content='Switch to a green bank on our Bank Switching Platform. Find out if your bank funds fossil fuels and maximise your switch with our six ready-to-go steps.'
        />
        <link rel='icon' href='/favicon.ico' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <MainSection />
      <TheProblem />
      <TheSolution />
      <TheImpact />
      <GetInvolved />
      <TheCampaign />
      <StudentPrograms />
      <WhySwitchIt />
      <Subscribe />
    </>
  )
}
