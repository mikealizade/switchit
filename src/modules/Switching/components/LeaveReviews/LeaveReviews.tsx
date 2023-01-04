import type { NextPage } from 'next'
import { ErrorBoundary } from 'react-error-boundary'
import { Fallback } from '@components/Fallback/Fallback'
import { Card } from '@components/Card/Card'
import { Button } from '@components/Button/Button'
import Image from 'next/image'
import { ActionHeader } from '@components/ActionHeader/ActionHeader'
import { actionText, steps } from '@utils/constants'
import { badBanksConfig } from './data'
import { onCopy } from '@utils/functions'
import { useNextStep } from '@hooks/useNextStep'
import { useGetCurrentJourney } from '@hooks/useGetCurrentJourney'
import { Content, TileLinks, Item, Anchor } from '@styles/common.style'
import {
  Buttons,
  SwitchingColumnContainer,
  SwitchingColumn,
} from '@modules/Switching/Switching.style'
import * as S from './LeaveReviews.style'

export const LeaveReviews: NextPage = () => {
  const nextStep = useNextStep()
  const { currentJourney: { badBank = '' } = {} } = useGetCurrentJourney()
  const bank = badBanksConfig[badBank as keyof typeof badBanksConfig]
  const trustpilotCopy = 'trustpilotCopy'
  const googleCopy = 'googleCopy'

  const onNext = (): void => {
    nextStep(steps.leaveReviews, '/switching/tell-us')
  }

  return (
    <>
      <ErrorBoundary fallbackRender={({ error }) => <Fallback error={error?.message} />}>
        <Content>
          <SwitchingColumnContainer>
            <SwitchingColumn>
              <Card column padded>
                <ActionHeader
                  header='Action: Leave Reviews'
                  subHeader='Get the word out'
                  text={actionText.leaveReviews}
                />

                <TileLinks>
                  <Item>
                    <Anchor
                      href={`https://uk.trustpilot.com/evaluate/${bank?.trustPilot}`}
                      target='_blank'
                      rel='noreferrer'
                    >
                      <Image src={'/icons/icon_trustpilot.png'} alt='' width={203} height={50} />
                    </Anchor>
                    <S.Copy>
                      Trustpilot copy
                      <S.CopyIcon onClick={onCopy(trustpilotCopy)}>
                        <Image src={`/icons/icon_copy.svg`} alt='' width={25} height={32} />
                      </S.CopyIcon>
                    </S.Copy>
                  </Item>
                  <Item>
                    <Anchor
                      href={`https://www.google.com/search?q=${bank?.google}`}
                      target='_blank'
                      rel='noreferrer'
                    >
                      <Image src={'/icons/icon_google.png'} alt='' width={100} height={100} />
                    </Anchor>
                    <S.CopyContainer>
                      <S.CopyInfo>
                        This will take you to google maps. We suggest leaving a review at your
                        nearest branch or your local branch. Note: in lieu of a bank branch, we have
                        gone with a local branch of a parent company
                      </S.CopyInfo>
                      <S.Copy>
                        Google copy
                        <S.CopyIcon onClick={onCopy(googleCopy)}>
                          <Image src={`/icons/icon_copy.svg`} alt='' width={25} height={32} />
                        </S.CopyIcon>
                      </S.Copy>
                    </S.CopyContainer>
                  </Item>
                </TileLinks>
                <Buttons>
                  <Button type='button' size='small' onClick={onNext}>
                    Next Impact Action
                  </Button>
                </Buttons>
              </Card>
            </SwitchingColumn>
          </SwitchingColumnContainer>
        </Content>
      </ErrorBoundary>
    </>
  )
}
