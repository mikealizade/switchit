import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { Card } from '@components/Card/Card'
import { Content } from '@styles/common.style'
import { ProgressBar } from '@components/ProgressBar/ProgressBar'
import { Button } from '@components/Button/Button'
import { actionsConfig } from '@utils/constants'
import { Column } from '@styles/common.style'
import * as S from '@modules/Switching/PreSwitching.style'
import { useRef, useState } from 'react'
import { SelectActionCard } from '@components/SelectActionCard/SelectActionCard'
import { SelectActionContainer } from '@components/SelectActionCard/SelectActionCard.style'

const startJourneyConfig = [
  {
    step: 'Step 1',
    text: 'Choose And Switch To or Open A Green Bank Account',
  },
  {
    step: 'Step 2',
    text: `Write your 'Breakup' letter`,
  },
  {
    step: 'Step 3',
    text: `Write your 'Hello' letter`,
  },
  {
    step: 'Step 4',
    text: 'Post to Socials',
  },
  {
    step: 'Step 5',
    text: 'Tell Your Community',
  },
  {
    step: 'Step 6',
    text: 'Write Reviews',
  },
  {
    step: 'Step 7',
    text: 'Tell Us How It Went',
  },
]

const SelectAction = (): JSX.Element => {
  const { replace } = useRouter()
  const [selectedRoute, setRoute] = useState(actionsConfig[0].route)
  // const [, setAction] = useState(actionsConfig[0])
  const [selectedStep, setStep] = useState(0)
  // const indexRef = useRef(0)

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
        <S.SwitchingColumnContainer>
          <S.SwitchingColumn>
            <Card column padded>
              <S.HeaderContainer>
                <S.Header>Welcome to your switching journey!</S.Header>
                <S.Subheader>
                  Congrats on creating this super cool custom switching journey. Click on the first
                  action to get started
                </S.Subheader>
              </S.HeaderContainer>

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
                <S.ButtonContainer>
                  <Button
                    type='button'
                    mode='secondary'
                    onClick={() => {
                      replace(selectedRoute)
                    }}
                  >
                    Edit Journey
                  </Button>
                  <Button
                    type='button'
                    onClick={() => {
                      replace(selectedRoute)
                    }}
                  >
                    Start Journey
                  </Button>
                </S.ButtonContainer>
                <ProgressBar step={5} />
              </S.Section>
            </Card>
          </S.SwitchingColumn>
          <Column>
            <Card stretch column>
              <h2>Impact Card</h2>
            </Card>
          </Column>
        </S.SwitchingColumnContainer>
      </Content>
    </>
  )
}

export default SelectAction
