import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import React from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { Fallback } from '@components/Fallback/Fallback'
import * as S from '@modules/Switching/Switching.style'
import { Content } from '@styles/common.style'
import { actionHeaderSubText, steps } from '@utils/constants'
import { Letter } from './Letter'
import { getDefaultBreakupLetterText } from './data'

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
              header='Write Your Breakup Letter'
              subHeader={actionHeaderSubText.breakupLetter}
              headerText=''
              getDefaultLetterText={getDefaultBreakupLetterText}
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
