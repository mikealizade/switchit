import type { NextPage } from 'next'
import { ErrorBoundary } from 'react-error-boundary'
import { useRouter } from 'next/router'
import { Fallback } from '@components/Fallback/Fallback'
import { Card } from '@components/Card/Card'
import { Button } from '@components/Button/Button'
import { ActionHeader } from '@components/ActionHeader/ActionHeader'
import { Testimonial } from './Testimonial'
import { Video } from './Video'
import { useNextStep } from '@hooks/useNextStep'
import { useStepsByJourneyType } from '@hooks/useStepsByJourneyType'
import { actionText } from '@utils/constants'
import * as S from '@styles/common.style'
import {
  Buttons,
  SwitchingColumnContainer,
  SwitchingColumn,
} from '@modules/Switching/Switching.style'
import { UserContent, VideoContainer, CopyInfo, CopyHeader } from './TellUs.style'

export const TellUs: NextPage = () => {
  const { push } = useRouter()
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
                  header='Action: Tell Us How It Went'
                  subHeader='Get the word out'
                  text={actionText.tellUs}
                />
                <S.TileLinks>
                  <S.Item>
                    <VideoContainer>
                      <CopyHeader>Video Submission</CopyHeader>
                      <CopyInfo>
                        Want to tell us what it felt like to finally divest? To know that {`you've`}{' '}
                        made an impact? You can submit a video cutting up your card, speaking from
                        the heart, etc. {`We'd`} love your permission to post it to socials or...
                      </CopyInfo>
                    </VideoContainer>
                    <UserContent>
                      <Video onNext={onNext} />
                    </UserContent>
                  </S.Item>
                  <S.Item>
                    <VideoContainer>
                      <CopyHeader>Testimonial or anything else</CopyHeader>
                      <CopyInfo>
                        Want to tell us what it felt like to finally divest? To know that {`you've`}{' '}
                        made an impact? You can submit a video cutting up your card, speaking from
                        the heart, etc. {`We'd`} love your permission to post it to socials or...
                      </CopyInfo>
                    </VideoContainer>
                    <UserContent>
                      <Testimonial onNext={onNext} />
                    </UserContent>
                  </S.Item>
                </S.TileLinks>
                <Buttons single>
                  <Button type='button' size='small' onClick={onCompleteJourney}>
                    Wrap Up Impact Actions
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
