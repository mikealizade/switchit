import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import React from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { Fallback } from '@components/Fallback/Fallback'
import { useStepsByJourneyType } from '@hooks/useStepsByJourneyType'
import * as S from '@modules/Switching/Switching.style'
import { Content } from '@styles/common.style'
import { actionText } from '@utils/constants'
import { getDefaultLetterText } from '@utils/functions'
import { Letter } from './Letter'

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
              header='Action: Write Your Hello Letter'
              subHeader={`Tell your new bank why you've switched`}
              headerText={actionText.helloLetter}
              getDefaultLetterText={getDefaultLetterText}
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
