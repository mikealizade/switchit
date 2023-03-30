import type { NextPage } from 'next'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { ActionHeader } from '@components/ActionHeader/ActionHeader'
import { Button } from '@components/Button/Button'
import { Card } from '@components/Card/Card'
import { Fallback } from '@components/Fallback/Fallback'
import { ProgressBar } from '@components/ProgressBar/ProgressBar'
import { useEmail } from '@hooks/useEmail'
import { useGetCurrentJourney } from '@hooks/useGetCurrentJourney'
import { useNextStep } from '@hooks/useNextStep'
import { useStepsByJourneyType } from '@hooks/useStepsByJourneyType'
import { useUpdateAwards } from '@hooks/useUpdateAwards'
import { useUpdatePoints } from '@hooks/useUpdatePoints'
import { Buttons } from '@modules/Switching/Switching.style'
import { WoohooContainer, WoohooHeader, WoohooText } from '@modules/Switching/components/TellUs/TellUs.style'
import { Form, Content, BoldLink } from '@styles/common.style'
import { actionHeaderSubText, journeyTypes } from '@utils/constants'
import { EventType } from '@utils/types'
import * as S from './ConfirmSwitch.style'

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

const CongratsMessage = ({ goodBank }: { goodBank: string }) => {
  const { push } = useRouter()

  return (
    <WoohooContainer>
      <WoohooHeader>Congrats on your new green bank account</WoohooHeader>
      <WoohooText>Thank you. Verifying your switch supports our work.</WoohooText>
      <WoohooText>
        {goodBank === 'starling' && (
          <p>A donation will be made to our charity partner once we have confirmed your switch with your new provider.</p>
        )}
      </WoohooText>
      <Button type='button' onClick={() => push('/switching/select-action')}>
        Maximise My Switch
      </Button>
      <BoldLink href='/switching/'>Journey Homepage</BoldLink>
    </WoohooContainer>
  )
}

export const ConfirmSwitch: NextPage = () => {
  const { push } = useRouter()
  const sendEmail = useEmail('confirmSwitch')
  const [value, setValue] = useState('')
  const nextStep = useNextStep()
  const updateAwards = useUpdateAwards('providers', 'actions')
  const { addPoints } = useUpdatePoints('actions')
  const date = new Date()
  const getSteps = useStepsByJourneyType()
  const { currentJourney: { goodBank = '' } = {}, currentJourneyType } = useGetCurrentJourney()
  const [hasConfirmed, setConfirmed] = useState(false)
  const steps = getSteps()
  const confirmDate = `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`

  const onNext = (): void => {
    push('/switching/select-action')
  }

  const onConfirm = (): void => {
    nextStep(steps.confirmSwitch, null, { isVerified: new Date() })
    updateAwards(1_000, 'add')
    addPoints(1_000)
    sendEmail()
    setConfirmed(true)
  }

  const onSign = ({ target: { value } }: EventType): void => {
    setValue(value)
  }

  return (
    <>
      <ErrorBoundary fallbackRender={({ error }) => <Fallback error={error?.message} />}>
        <Content>
          <Card column padded stretch>
            {hasConfirmed ? (
              <CongratsMessage goodBank={goodBank} />
            ) : (
              <>
                <ActionHeader header='Verify Your Switch' subHeader={actionHeaderSubText.confirmSwitch} />

                <S.Agreement>
                  I confirm that I have signed up for an account with my chosen provider on their website by providing all the necessary
                  details.
                  {currentJourneyType === journeyTypes.noBankAccount ? (
                    <>I intend to use this account as my sole, or primary, account.</>
                  ) : (
                    <>
                      I have selected to switch my account and have chosen a switch day on which my old account will close. I do not intend
                      to cancel my switch before the switch day I have selected.
                    </>
                  )}
                </S.Agreement>

                <S.Signature>
                  <Form>
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
                      <Button type='button' mode='secondary' onClick={() => push(`/switching/make-the-switch/${goodBank}`)}>
                        Previous Step
                      </Button>
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
              </>
            )}
          </Card>
          <ProgressBar step={steps.confirmSwitch} />
        </Content>
      </ErrorBoundary>
    </>
  )
}
