import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { useDispatch } from 'react-redux'
import { ActionHeader } from '@components/ActionHeader/ActionHeader'
import { Button } from '@components/Button/Button'
import { Card } from '@components/Card/Card'
import { Fallback } from '@components/Fallback/Fallback'
import { useGetCurrentJourney } from '@hooks/useGetCurrentJourney'
import { useStepsByJourneyType } from '@hooks/useStepsByJourneyType'
import { Buttons, SwitchingColumnContainer, SwitchingColumn } from '@modules/Switching/Switching.style'
import { toggleDrawer } from '@state/drawer/drawerSlice'
import * as S from '@styles/common.style'
import { actionText, journeyTypes } from '@utils/constants'
import { UserContent, VideoContainer, CopyHeader, WoohooContainer, WoohooHeader, WoohooText } from './TellUs.style'
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

const routeConfig = {
  6: '/switching/breakup-letter',
  7: '/switching/hello-letter',
  8: '/switching/post-to-socials',
  9: '/switching/tell-your-community',
  10: '/switching/leave-reviews',
  11: '/switching/tell-us',
}

const noBankRouteConfig = {
  4: '/switching/hello-letter',
  5: '/switching/post-to-socials',
  6: '/switching/tell-your-community',
  7: '/switching/tell-us',
}

export const TellUs: NextPage = () => {
  const { push } = useRouter()
  const dispatch = useDispatch()
  const { currentJourney, currentJourneyType } = useGetCurrentJourney()
  const getSteps = useStepsByJourneyType()
  const steps = getSteps()
  const [isMaximised, setMaximised] = useState(false)
  const totalSteps = Object.keys(steps).length / 2
  const [nextIncompletedAction] = Array.from(Array(totalSteps + 1).keys())
    .map((n, i) => (currentJourney!.completedSteps.indexOf(i) < 0 ? i : null))
    .filter(Boolean)
  const isAllStepsComplete = currentJourney?.completedSteps.length === totalSteps
  const btnText = isAllStepsComplete ? 'Complete Impact Actions' : 'Next Impact Action'
  const routes = currentJourneyType === journeyTypes.noBankAccount ? noBankRouteConfig : routeConfig

  const onCompleteJourney = (): void => {
    isAllStepsComplete ? setMaximised(true) : push(routes[nextIncompletedAction as keyof typeof routeConfig])
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
                    <ActionHeader header='Share Your Switching Story"' subHeader={actionText.tellUs} />
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
                        {btnText}
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
