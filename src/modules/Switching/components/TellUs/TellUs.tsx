import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { ErrorBoundary } from 'react-error-boundary'
import { useDispatch } from 'react-redux'
import { ActionHeader } from '@components/ActionHeader/ActionHeader'
import { Button } from '@components/Button/Button'
import { Card } from '@components/Card/Card'
import { Fallback } from '@components/Fallback/Fallback'
import { useNextStep } from '@hooks/useNextStep'
import { useStepsByJourneyType } from '@hooks/useStepsByJourneyType'
import {
  Buttons,
  SwitchingColumnContainer,
  SwitchingColumn,
} from '@modules/Switching/Switching.style'
import { toggleDrawer } from '@state/drawer/drawerSlice'
import * as S from '@styles/common.style'
import { actionText } from '@utils/constants'
import { UserContent, VideoContainer, CopyHeader } from './TellUs.style'
import { Testimonial } from './Testimonial'
import { Video } from './Video'

export const TellUs: NextPage = () => {
  const { push } = useRouter()
  const dispatch = useDispatch()
  const nextStep = useNextStep()
  const getSteps = useStepsByJourneyType()
  const steps = getSteps()

  const onNext = (): void => {
    nextStep(steps.tellUs)
  }

  const onCompleteJourney = (): void => {
    push('/switching')
  }

  return (
    <>
      <ErrorBoundary fallbackRender={({ error }) => <Fallback error={error?.message} />}>
        <S.Content>
          <SwitchingColumnContainer>
            <SwitchingColumn>
              <Card column padded>
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
                      {/* <CopyInfo>
                        Want to tell us what it felt like to finally divest? To know that {`you've`}{' '}
                        made an impact? You can submit a video cutting up your card, speaking from
                        the heart, etc. {`We'd`} love your permission to post it to socials or...
                      </CopyInfo> */}
                    </VideoContainer>
                    <UserContent>
                      <Video onNext={onNext} />
                    </UserContent>
                  </S.Item>
                  <S.Item>
                    <VideoContainer>
                      <CopyHeader>Text Submission</CopyHeader>
                      {/* <CopyInfo>
                        Want to tell us what it felt like to finally divest? To know that {`you've`}{' '}
                        made an impact? You can submit a video cutting up your card, speaking from
                        the heart, etc. {`We'd`} love your permission to post it to socials or...
                      </CopyInfo> */}
                    </VideoContainer>
                    <UserContent>
                      <Testimonial onNext={onNext} />
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
              </Card>
            </SwitchingColumn>
          </SwitchingColumnContainer>
        </S.Content>
      </ErrorBoundary>
    </>
  )
}
