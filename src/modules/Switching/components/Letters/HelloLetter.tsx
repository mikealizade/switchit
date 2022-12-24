import React from 'react'
import type { NextPage } from 'next'
import { ErrorBoundary } from 'react-error-boundary'
import { useRouter } from 'next/router'
import { Fallback } from '@components/Fallback/Fallback'
import { Letter } from './Letter'
import { actionText } from '@utils/constants'
import { getDefaultLetterText } from '@utils/functions'
import { useStepsByJourneyType } from '@hooks/useStepsByJourneyType'
import { Content } from '@styles/common.style'
import * as S from '@modules/Switching/Switching.style'

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
