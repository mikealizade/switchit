import Head from 'next/head'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { Card } from '@components/Card/Card'
import { Content } from '@styles/common.style'
import { ProgressBar } from '@components/ProgressBar/ProgressBar'
import { Button } from '@components/Button/Button'
import { ActionHeader } from '@components/ActionHeader/ActionHeader'
import { actionsConfig, startJourneyConfig, actionText } from '@utils/constants'
import { ButtonContainer } from '@styles/common.style'
import { SwitchingColumnContainer, SwitchingColumn } from '@modules/Switching/Switching.style'
import * as S from '@modules/Switching/PreSwitching.style'
import { useState } from 'react'

const SelectAction = (): JSX.Element => {
  const { push } = useRouter()
  const [selectedRoute, setRoute] = useState(actionsConfig[0].route)
  const [selectedStep, setStep] = useState(0)

  const selectStep = (index: number) => () => {
    setRoute(actionsConfig[index].route)
    setStep(index)
  }

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
                header='Welcome to your switching journey!'
                subHeader='Congrats on creating this super cool custom switching journey. Click on the first action to get started'
              />

              <S.Section>
                <S.StepSelector>
                  {startJourneyConfig.map(({ step, text }, i: number) => (
                    <S.StepItem key={step} onClick={selectStep((i += 1))}>
                      <Image
                        src={`/icons/icon_radio_${
                          i === selectedStep ? 'checked' : 'unchecked'
                        }.svg`}
                        alt=''
                        width={35}
                        height={35}
                      />
                      <S.StepContainer>
                        <S.StepHeader>{step}</S.StepHeader>
                        <S.StepText>{text}</S.StepText>
                      </S.StepContainer>
                    </S.StepItem>
                  ))}
                </S.StepSelector>
              </S.Section>

              <S.Section>
                <ButtonContainer>
                  <Button
                    type='button'
                    mode='secondary'
                    onClick={() => {
                      push(selectedRoute)
                    }}
                  >
                    Edit Journey
                  </Button>
                  <Button
                    type='button'
                    onClick={() => {
                      push('/switching/breakup-letter')
                    }}
                  >
                    Start Journey
                  </Button>
                </ButtonContainer>
                <ProgressBar step={5} />
              </S.Section>
            </Card>
          </SwitchingColumn>
        </SwitchingColumnContainer>
      </Content>
    </>
  )
}

export default SelectAction
