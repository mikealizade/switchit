import type { NextPage } from 'next'
import { ErrorBoundary } from 'react-error-boundary'
import { useRouter } from 'next/router'
import { Fallback } from '@components/Fallback/Fallback'
import { Card } from '@components/Card/Card'
import { Button } from '@components/Button/Button'
import Image from 'next/image'
import { ActionHeader } from '@components/ActionHeader/ActionHeader'
import { actionText } from '@utils/constants'
import { Buttons } from '@modules/Switching/Switching.style'
import * as S from '@modules/Switching/Switching.style'
import { Content, Column } from '@styles/common.style'
import { TileLinks, Item, Anchor } from '@modules/Switching/ActionLeaveReviews.style'

export const ActionLeaveReviews: NextPage = () => {
  const { push } = useRouter()

  const onNext = () => {
    push('/switching/action-tell-us')
  }

  return (
    <>
      <ErrorBoundary fallbackRender={({ error }) => <Fallback error={error?.message} />}>
        <Content>
          <S.SwitchingColumnContainer>
            <S.SwitchingColumn>
              <Card column padded>
                <ActionHeader
                  header='Action: Leave Reviews'
                  subHeader='Get the word out'
                  text={actionText.leaveReviews}
                  step='6'
                />

                <TileLinks>
                  <Item>
                    <Anchor href='https://uk.trustpilot.com/' target='_blank' rel='noreferrer'>
                      <Image src={'/icons/icon_trustpilot.png'} alt='' width={203} height={50} />
                    </Anchor>
                  </Item>
                  <Item>
                    <Anchor href='https://www.google.co.uk/' target='_blank' rel='noreferrer'>
                      <Image src={'/icons/icon_google.png'} alt='' width={100} height={100} />
                    </Anchor>
                  </Item>
                </TileLinks>
                <Buttons>
                  <Button type='button' size='small' onClick={onNext}>
                    Next
                  </Button>
                </Buttons>
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
