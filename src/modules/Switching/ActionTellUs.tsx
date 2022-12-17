import type { NextPage } from 'next'
import { ErrorBoundary } from 'react-error-boundary'
import { Fallback } from '@components/Fallback/Fallback'
import { Card } from '@components/Card/Card'
import { Button } from '@components/Button/Button'
import { ActionHeader } from '@components/ActionHeader/ActionHeader'
import { useNextStep } from '@hooks/useNextStep'
import { actionText, steps } from '@utils/constants'
import { Content } from '@styles/common.style'
import * as S from '@modules/Switching/Switching.style'
import { TileLinks, Item, Anchor } from '@modules/Switching/ActionLeaveReviews.style'

export const ActionTellUs: NextPage = () => {
  const nextStep = useNextStep()

  const onNext = (): void => {
    nextStep(steps.tellUs, '/switching')
  }

  return (
    <>
      <ErrorBoundary fallbackRender={({ error }) => <Fallback error={error?.message} />}>
        <Content>
          <S.SwitchingColumnContainer>
            <S.SwitchingColumn>
              <Card column padded>
                <ActionHeader
                  header='Action: Tell Us How It Went'
                  subHeader='Get the word out'
                  text={actionText.tellUs}
                  // step='7'
                />
                <TileLinks>
                  <Item>
                    <Anchor href='https://uk.trustpilot.com/' target='_blank' rel='noreferrer'>
                      {/* <Image src={'/icons/icon_trustpilot.png'} alt='' width={203} height={50} /> */}
                    </Anchor>
                  </Item>
                  <Item>
                    <Anchor href='https://www.google.co.uk/' target='_blank' rel='noreferrer'>
                      {/* <Image src={'/icons/icon_google.png'} alt='' width={100} height={100} /> */}
                    </Anchor>
                  </Item>
                </TileLinks>
                <S.Buttons>
                  <Button type='button' size='small' onClick={onNext}>
                    Next Impact Action
                  </Button>
                </S.Buttons>
              </Card>
            </S.SwitchingColumn>
            {/* <Column>
              <Card stretch column>
                <h2>Impact Card</h2>
              </Card>
            </Column> */}
          </S.SwitchingColumnContainer>
        </Content>
      </ErrorBoundary>
    </>
  )
}
