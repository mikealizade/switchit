import React from 'react'
import type { NextPage } from 'next'
import { ErrorBoundary } from 'react-error-boundary'
import { Fallback } from '@components/Fallback/Fallback'
import { Letter } from './Letter'
import { actionText, steps } from '@utils/constants'
import { useNextStep } from '@hooks/useNextStep'
import { Content } from '@styles/common.style'
import * as S from '@modules/Switching/Switching.style'

const getDefaultLetterText = (bankName: string = '[bank name]', nickname: string): string => {
  return `
  <div>
    Dear ${bankName} - default letter
    <div>
      <br />
    </div>
    <div>I have had a ${bankName} bank account for 12 years.</div>
    <div>
      <br />
    </div>
    <div>I am writing to inform you that I am leaving you due to your continued investment in fossil fuels. And I am not alone, with 19% of the UK population planning on switching to a sustainable bank in the next 12 months.</div>
    <div>
      <br />
    </div>
    <div>Your claims of compassion in the climate crisis are trivialised by your unwavering financial support for fossil fuel companies. Your sustainability report means nothing until you immediately divest funds which are supporting climate breakdown.</div>
    <div>
      <br />
    </div>
    <div>I want my money to be invested with a bank who cares about our shared future - not just future profits. I will be moving to an alternative provider who has made genuine commitments to **not** be part of the problem. A bank which is aligned with customer values will also be better equipped to effectively serve their audience across the board.</div>
    <div>
      <br />
    </div>
    <div>With growing awareness of the fact that current policies do not account for ${bankName}’s ownership stakes in coal companies set to build 73 new coal plants, with a combined emission potential of 15 billion tonnes of CO2, you are undoubtedly experiencing high numbers of switchers moving to more ethical banks, and will continue to do so until you address your inadequate and detrimental policies. (source - market forces).</div>
    <div>
      <br />
    </div>
    <div>In the meantime, I hope you aren’t too eaten up with guilt from profiting off your remaining customers while sending the planet into climate breakdown.</div>
    <div>
      <br />
    </div>
    <div>Your sincerely</div>
    <div>
      <br />
    </div>
    <div>${nickname}</div>
  </div>
  `
}

export const ActionBreakupLetter: NextPage = () => {
  const nextStep = useNextStep()

  const onNext = (): void => {
    nextStep(steps.breakupLetter, '/switching/action-hello-letter')
  }

  return (
    <>
      <ErrorBoundary fallbackRender={({ error }) => <Fallback error={error?.message} />}>
        <Content>
          <S.Container>
            <Letter
              header='Action: Write Your Breakup Letter'
              subHeader='Tell your old bank how you really feel'
              headerText={actionText.breakupLetter}
              getDefaultLetterText={getDefaultLetterText}
              onNext={onNext}
              letterType='breakup'
              step={steps.breakupLetter}
            />
          </S.Container>
        </Content>
      </ErrorBoundary>
    </>
  )
}