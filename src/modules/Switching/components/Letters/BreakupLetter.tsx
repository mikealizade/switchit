import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import React from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { Fallback } from '@components/Fallback/Fallback'
import * as S from '@modules/Switching/Switching.style'
import { Content } from '@styles/common.style'
import { actionText, steps } from '@utils/constants'
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
              subHeader={`Banks don't want to lose customers. By sending thousands of letters to banks explaining why their customers are leaving, we can force them to improve their investment policies. We have drafted a breakup letter for you to edit and sign, which will be sent in batches with others' for maximum impact.`}
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
