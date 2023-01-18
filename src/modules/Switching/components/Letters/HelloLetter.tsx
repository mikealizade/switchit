import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import React from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { Fallback } from '@components/Fallback/Fallback'
import { useStepsByJourneyType } from '@hooks/useStepsByJourneyType'
import * as S from '@modules/Switching/Switching.style'
import { Content } from '@styles/common.style'
import { Letter } from './Letter'
import { getDefaultHelloLetterText } from './data'

export const HelloLetter: NextPage = () => {
  const { push } = useRouter()
  const getSteps = useStepsByJourneyType()
  const steps = getSteps()

  const onNext = (): void => {
    push('/switching/post-to-socials')
  }

  return (
    <>
      <ErrorBoundary fallbackRender={({ error }) => <Fallback error={error?.message} />}>
        <Content>
          <S.Container>
            <Letter
              header='Write Your Hello Letter'
              subHeader={`We all love a bit of positive reinforcement. Tell your new bank why you've switched. We've set you up for success with a prewritten letter below. Feel free to update, change, edit any of the text. We'll send it on the 1st of the month along with everyone else`}
              headerText=''
              getDefaultLetterText={getDefaultHelloLetterText}
              onNext={onNext}
              letterType='hello'
              step={steps.helloLetter}
            />
          </S.Container>
        </Content>
      </ErrorBoundary>
    </>
  )
}
