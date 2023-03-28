import type { NextPage } from 'next'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { useMediaQuery } from 'react-responsive'
import useSWR from 'swr'
import { ActionHeader } from '@components/ActionHeader/ActionHeader'
import { Button } from '@components/Button/Button'
import { Card } from '@components/Card/Card'
import { EditableContent } from '@components/EditableContent/EditableContent'
import { Fallback } from '@components/Fallback/Fallback'
import { useGetCurrentJourney } from '@hooks/useGetCurrentJourney'
import { useNextStep } from '@hooks/useNextStep'
import { useUpdatePoints } from '@hooks/useUpdatePoints'
import { Buttons, SwitchingColumnContainer, SwitchingColumn } from '@modules/Switching/Switching.style'
import { Content, TileLinks, Item, Anchor } from '@styles/common.style'
import { actionHeaderSubText, steps } from '@utils/constants'
import { fetcher } from '@utils/functions'
import * as S from './LeaveReviews.style'
import { badBanksConfig } from './data'

export const LeaveReviews: NextPage = () => {
  const { data } = useSWR('/api/json/leavereviews', fetcher)

  console.log('data:', data)

  const isMobile = useMediaQuery({ query: '(max-width: 768px)' })
  const nextStep = useNextStep()
  const { addPoints } = useUpdatePoints('actions')
  const [copy, setCopy] = useState('')
  const { currentJourney: { badBank = '' } = {} } = useGetCurrentJourney()

  console.log('badBank:', badBank)

  const bank = badBanksConfig[badBank as keyof typeof badBanksConfig]
  const googleSize = isMobile ? 62 : 100

  const onNext = (): void => {
    nextStep(steps.leaveReviews, '/switching/tell-us')
    addPoints(50, true)
  }

  useEffect(() => {
    if (data) {
      const reviewsData = JSON.parse(String(data))
      const copy = reviewsData[badBank]

      console.log('copy:', copy)

      setCopy(copy)
    }
  }, [data])

  return (
    <>
      <ErrorBoundary fallbackRender={({ error }) => <Fallback error={error?.message} />}>
        <Content>
          <SwitchingColumnContainer>
            <SwitchingColumn>
              <Card column padded>
                <ActionHeader header='Leave Reviews' subHeader={actionHeaderSubText.leaveReviews} />

                <S.Container>
                  <EditableContent btnText='Copy' data={copy} type='copy' />

                  <TileLinks isColumn>
                    {bank?.trustPilot && (
                      <Item>
                        <Anchor href={`https://uk.trustpilot.com/evaluate/${bank?.trustPilot}`} target='_blank' rel='noreferrer'>
                          <Image src={'/icons/icon_trustpilot.png'} alt='' width={203} height={50} />
                        </Anchor>
                      </Item>
                    )}
                    {bank?.google && (
                      <Item>
                        <Anchor href={`https://www.google.com/search?q=${bank?.google}`} target='_blank' rel='noreferrer'>
                          <Image src={'/icons/icon_google.png'} alt='' width={googleSize} height={googleSize} />
                          <S.GoogleCopy>This will take you to google maps. We suggest leaving a review at your local branch.</S.GoogleCopy>
                        </Anchor>
                      </Item>
                    )}
                  </TileLinks>
                  <S.GoogleCopyMobile>
                    This will take you to google maps. We suggest leaving a review at your local branch.
                  </S.GoogleCopyMobile>
                </S.Container>

                <Buttons align='right'>
                  <Button type='button' onClick={onNext}>
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
