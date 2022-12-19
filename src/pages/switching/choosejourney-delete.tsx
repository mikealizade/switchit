import { useEffect, useState } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useSelector, useDispatch } from 'react-redux'
import { toggleDrawer } from '@state/drawer/drawerSlice'
import { setJourneyData } from '@state/switchJourney/switchJourneySlice'
import { Card } from '@components/Card/Card'
import { Content } from '@styles/common.style'
import { ProgressBar } from '@components/ProgressBar/ProgressBar'
import { Button } from '@components/Button/Button'
import { ActionHeader } from '@components/ActionHeader/ActionHeader'
import { journeyTypes, steps } from '@utils/constants'
import { ButtonContainer } from '@styles/common.style'
import { SwitchingColumnContainer, SwitchingColumn } from '@modules/Switching/Switching.style'
import * as S from '@modules/Switching/PreSwitching.style'

// THIS PAGE IS NO LONGER NEEDED

const ChooseJourney = (): JSX.Element => {
  const dispatch = useDispatch()
  const { push } = useRouter()
  const [type, setActive] = useState('readyToSwitch')

  const selectJourney = (type: string) => () => {
    setActive(type)
    // dispatch(toggleDrawer(type))
    dispatch(setJourneyData({ journeyType: type }))
  }

  // useEffect(() => {
  //   dispatch(setJourneyData(type))
  // }, [type, dispatch])

  return (
    <>
      <Head>
        <title>SwitchIt</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>

      <Content>
        <SwitchingColumnContainer>
          <SwitchingColumn>
            <Card column padded>
              <ActionHeader
                header={`Let's figure out the best journey for you.`}
                subHeader={`Please select which of the following best describes what you'd like to do.`}
              />

              <S.Section>
                <S.ChooseJourneyLink
                  onClick={selectJourney(journeyTypes.readyToSwitch)}
                  isActive={type === journeyTypes.readyToSwitch}
                >
                  {/* <Link href='/switching/selectaction'> */}
                  {` Ready to switch or can't switch but still want to open a green bank account`}
                  {/* </Link> */}
                </S.ChooseJourneyLink>
                <S.ChooseJourneyLink
                  onClick={selectJourney(journeyTypes.notReadyToSwitch)}
                  isActive={type === journeyTypes.notReadyToSwitch}
                >
                  {/* <Link href='/switching/selectaction'> */}
                  Not ready to switch but still want to use my voice to act
                  {/* </Link> */}
                </S.ChooseJourneyLink>
              </S.Section>

              <S.Section>
                <ButtonContainer>
                  <Button
                    type='button'
                    onClick={() => {
                      dispatch(toggleDrawer(''))
                      push('/switching/green-banks')
                    }}
                  >
                    Next
                  </Button>
                </ButtonContainer>
                <ProgressBar step={steps.makeSwitch} />
              </S.Section>
            </Card>
          </SwitchingColumn>
          {/* <Column>
            <Card stretch column>
              <h2>Impact Card</h2>
            </Card>
          </Column> */}
        </SwitchingColumnContainer>
      </Content>
    </>
  )
}

export default ChooseJourney