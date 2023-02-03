import type { NextPage } from 'next'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { useDispatch, useSelector } from 'react-redux'
// import { useMediaQuery } from 'react-responsive'
import { ActionHeader } from '@components/ActionHeader/ActionHeader'
import { Button } from '@components/Button/Button'
import { Card } from '@components/Card/Card'
import { Fallback } from '@components/Fallback/Fallback'
import { ProgressBar } from '@components/ProgressBar/ProgressBar'
import { useGetCurrentJourney } from '@hooks/useGetCurrentJourney'
import { useNextStep } from '@hooks/useNextStep'
import { useStepsByJourneyType } from '@hooks/useStepsByJourneyType'
import { Buttons } from '@modules/Switching/Switching.style'
import { setSignature } from '@state/generic/genericSlice'
import { RootState } from '@state/store'
import { Form, Content, ParagraphCopy } from '@styles/common.style'
import { actionHeaderSubText, journeyTypes } from '@utils/constants'
import { EventType } from '@utils/types'
import * as S from './ConfirmSwitch.style'

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]

export const ConfirmSwitch: NextPage = () => {
  const { back, push } = useRouter()
  const dispatch = useDispatch()
  const signature = useSelector((state: RootState) => state.generic.signature)
  const [value, setValue] = useState(signature)
  const nextStep = useNextStep()
  const date = new Date()
  const getSteps = useStepsByJourneyType()
  const { currentJourney: { goodBank } = {}, currentJourneyType } = useGetCurrentJourney()
  const [hasConfirmed, setConfirmed] = useState(false)
  const steps = getSteps()
  const confirmDate = `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`

  const onNext = (): void => {
    push('/switching/select-action')
  }

  const onConfirm = (): void => {
    nextStep(steps.confirmSwitch, null, { isVerified: new Date() })
    setConfirmed(true)
  }

  const onSign = ({ target: { value } }: EventType): void => {
    setValue(value)
    dispatch(setSignature(value))
  }

  return (
    <>
      <ErrorBoundary fallbackRender={({ error }) => <Fallback error={error?.message} />}>
        <Content>
          <Card column padded>
            <ActionHeader
              header='Sign The Agreement'
              subHeader={actionHeaderSubText.confirmSwitch}
            />

            <>
              {hasConfirmed ? (
                <ParagraphCopy>
                  <p>Congrats on your new green bank account.</p>
                  <p>Thank you. Verifying your switch supports our work.</p>
                  {goodBank === 'starling' && (
                    <p>
                      A donation will be made to our charity partner once we have confirmed your
                      switch with your new provider.
                    </p>
                  )}
                </ParagraphCopy>
              ) : (
                <S.Agreement>
                  I confirm that I have signed up for an account with my chosen provider on their
                  website by providing all the necessary details.
                  {currentJourneyType === journeyTypes.noBankAccount ? (
                    <>I intend to use this account as my sole, or primary, account.</>
                  ) : (
                    <>
                      I have selected to switch my account and have chosen a switch day on which my
                      old account will close. I do not intend to cancel my switch before the switch
                      day I have selected.
                    </>
                  )}
                </S.Agreement>
              )}
            </>

            <S.Signature>
              <Form row>
                <S.SignatureFieldset>
                  <S.Label htmlFor='bankName'>
                    <S.SignatureInput name='signature' onChange={onSign} value={value} />

                    <span>
                      <span>Signature</span>
                      <span>{confirmDate}</span>
                    </span>
                  </S.Label>
                  <S.Date>
                    <Image src={`/icons/icon_date.svg`} alt='' width={20} height={20} />
                    <div>{confirmDate}</div>
                  </S.Date>
                </S.SignatureFieldset>
                <Buttons>
                  <Button type='button' mode='secondary' onClick={() => back()}>
                    Back
                  </Button>
                  {/* <Button type='button' mode='secondary' onClick={onCancel}>
                    Cancel
                  </Button> */}
                  {hasConfirmed ? (
                    <Button type='button' disabled={!value} onClick={onNext}>
                      Maximise Your Impact
                    </Button>
                  ) : (
                    <Button type='button' disabled={!value} onClick={onConfirm}>
                      Submit
                    </Button>
                  )}
                  {/* TODO handle isSubmitting */}
                </Buttons>
              </Form>
            </S.Signature>
          </Card>
          <ProgressBar step={steps.confirmSwitch} />
        </Content>
      </ErrorBoundary>
    </>
  )
}
