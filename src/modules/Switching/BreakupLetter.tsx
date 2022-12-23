import React from 'react'
import type { NextPage } from 'next'
import { ErrorBoundary } from 'react-error-boundary'
import { useRouter } from 'next/router'
import { Fallback } from '@components/Fallback/Fallback'
import { Letter } from './Letter'
import { actionText, steps } from '@utils/constants'
import { getDefaultLetterText } from '@utils/functions'
import { Content } from '@styles/common.style'
import * as S from '@modules/Switching/Switching.style'

export const BreakupLetter: NextPage = () => {
  const { push } = useRouter()

  const onNext = (): void => {
    push('/switching/hello-letter')
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
