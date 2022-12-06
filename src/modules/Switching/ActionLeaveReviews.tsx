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
import { TileLinks, Item } from '@modules/Switching/ActionLeaveReviews.style'

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
                    <Image src={'/icons/icon_trustpilot.svg'} alt='' width={25} height={25} />
                  </Item>
                  <Item>
                    <Image src={'/icons/icon_trustpilot.svg'} alt='' width={25} height={25} />
                  </Item>
                </TileLinks>
                <Buttons>
                  <Button type='button' size='small' onClick={onNext}>
                    Next
                  </Button>
                </Buttons>
              </Card>
            </S.SwitchingColumn>
            <Column>
              <Card stretch column>
                <h2>Impact Card</h2>
              </Card>
            </Column>
          </S.SwitchingColumnContainer>
        </Content>
      </ErrorBoundary>
    </>
  )
}
