import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { useDispatch } from 'react-redux'
import { ActionHeader } from '@components/ActionHeader/ActionHeader'
import { Button } from '@components/Button/Button'
import { Card } from '@components/Card/Card'
import { Fallback } from '@components/Fallback/Fallback'
import { useNextStep } from '@hooks/useNextStep'
import { useStepsByJourneyType } from '@hooks/useStepsByJourneyType'
import { useUpdatePoints } from '@hooks/useUpdatePoints'
import {
  Buttons,
  SwitchingColumnContainer,
  SwitchingColumn,
} from '@modules/Switching/Switching.style'
import { toggleDrawer } from '@state/drawer/drawerSlice'
import * as S from '@styles/common.style'
import { actionText } from '@utils/constants'
import {
  UserContent,
  VideoContainer,
  CopyHeader,
  WoohooContainer,
  WoohooHeader,
  WoohooText,
} from './TellUs.style'
import { Testimonial } from './Testimonial'
import { Video } from './Video'

const WooHoo = () => {
  const { push } = useRouter()

  return (
    <WoohooContainer>
      <WoohooHeader>Woohoo!</WoohooHeader>
      <WoohooText>You have reached your full switching potential.</WoohooText>
      <WoohooText>Keep an eye out on our socials for more ways to get involved.</WoohooText>
      <Button type='button' onClick={() => push('/switching')}>
        Back to My Journeys
      </Button>
    </WoohooContainer>
  )
}

export const TellUs: NextPage = () => {
  const dispatch = useDispatch()
  const nextStep = useNextStep()
  const getSteps = useStepsByJourneyType()
  const steps = getSteps()
  const { addPoints } = useUpdatePoints('actions')
  const [isMaximised, setMaximised] = useState(false)

  const onCompleteJourney = (): void => {
    setMaximised(true)
    nextStep(steps.tellUs)
    addPoints(75, true)
  }

  return (
    <>
      <ErrorBoundary fallbackRender={({ error }) => <Fallback error={error?.message} />}>
        <S.Content>
          <SwitchingColumnContainer>
            <SwitchingColumn>
              <Card column padded stretch>
                {isMaximised ? (
                  <WooHoo />
                ) : (
                  <>
                    <ActionHeader
                      header='Tell Us How It Went'
                      subHeader='Get the word out'
                      text={actionText.tellUs}
                    />
                    <S.Div>
                      <S.TextLink>
                        <strong onClick={() => dispatch(toggleDrawer('tellUsPrompts'))}>
                          Need some inspiration? Check out our prompts.
                        </strong>
                      </S.TextLink>
                    </S.Div>

                    <S.TileLinks>
                      <S.Item>
                        <VideoContainer>
                          <CopyHeader>Video Submission</CopyHeader>
                        </VideoContainer>
                        <UserContent>
                          <Video />
                        </UserContent>
                      </S.Item>
                      <S.Item>
                        <VideoContainer>
                          <CopyHeader>Text Submission</CopyHeader>
                        </VideoContainer>
                        <UserContent>
                          <Testimonial />
                        </UserContent>
                      </S.Item>
                    </S.TileLinks>
                    <Buttons>
                      <S.TextLink isGrey onClick={() => dispatch(toggleDrawer('postingPublicly'))}>
                        What happens if I give you permission to post publicly?
                      </S.TextLink>
                      <Button type='button' size='small' onClick={onCompleteJourney}>
                        Complete Impact Actions
                      </Button>
                    </Buttons>
                  </>
                )}
              </Card>
            </SwitchingColumn>
          </SwitchingColumnContainer>
        </S.Content>
      </ErrorBoundary>
    </>
  )
}
