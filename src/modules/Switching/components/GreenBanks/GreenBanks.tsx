import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { ActionHeader } from '@components/ActionHeader/ActionHeader'
import { Button } from '@components/Button/Button'
import { Card } from '@components/Card/Card'
import { ProgressBar } from '@components/ProgressBar/ProgressBar'
import { useGetCurrentJourney } from '@hooks/useGetCurrentJourney'
import { useStepsByJourneyType } from '@hooks/useStepsByJourneyType'
import * as S from '@modules/Switching/Switching.style'
import { BankFilters } from '@modules/Switching/components/GreenBanks/BankFilters'
import { BanksTable } from '@modules/Switching/components/GreenBanks/BanksTable'
import { toggleDrawer } from '@state/drawer/drawerSlice'
import { Content, TextLink } from '@styles/common.style'
import { actionText, journeyTypes } from '@utils/constants'
import { bankConfig } from './data'

export const GreenBanks = (): JSX.Element => {
  const { push } = useRouter()
  const dispatch = useDispatch()
  const { currentJourneyType, currentJourney: { badBank = '' } = {} } = useGetCurrentJourney()
  const [bankData, setBankData] = useState(bankConfig)
  const [selectedAccountTypes, selectAccountType] = useState<string[]>([])
  const [selectedFeatures, selectFeatures] = useState<string[]>([])
  const getSteps = useStepsByJourneyType()
  const steps = getSteps()
  const previousStep = currentJourneyType === journeyTypes.noBankAccount ? '/switching/select-bank' : '/switching/bank-score'
  const offeredBanks = bankData.filter(({ bank }) => bank !== badBank).length

  useEffect(() => {
    if (!selectedAccountTypes.length && !selectedFeatures.length) {
      setBankData(bankConfig)
      return
    }

    const filteredBanks = bankConfig.filter(
      ({ accountTypes, features }: { accountTypes: string[]; features: any }) =>
        (selectedAccountTypes.length
          ? selectedAccountTypes.every((selectedAccountType: string) => accountTypes.includes(selectedAccountType))
          : true) &&
        (selectedFeatures.length ? selectedFeatures.every((selectedFeature: string) => features.includes(selectedFeature)) : true),
    )

    setBankData(filteredBanks)
  }, [selectedAccountTypes, selectedFeatures])

  return (
    <>
      <Head>
        <title>Switch It Green | Green Banks</title>
        <meta name='description' content='Switch to a green bank on our Green Banking Platform' />
        <link rel='icon' href='/favicon.ico' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>

      <Content>
        <S.SwitchingColumnContainer>
          <S.SwitchingColumn>
            <Card column padded rowGap={60}>
              <ActionHeader
                header='Choose Your Green Bank'
                subHeader={`We've found ${offeredBanks} green banks for you`}
                text={actionText.greenBanks}
                component={<TextLink onClick={() => dispatch(toggleDrawer('research'))}>criteria for recommendation</TextLink>}
              />

              <S.Section>
                <BankFilters
                  selectedAccountTypes={selectedAccountTypes}
                  selectedFeatures={selectedFeatures}
                  selectAccountType={selectAccountType}
                  selectFeatures={selectFeatures}
                />
                <BanksTable bankData={bankData} />
              </S.Section>
              <S.Buttons align='left'>
                <Button type='button' mode='secondary' onClick={() => push(previousStep)}>
                  Previous Step
                </Button>
              </S.Buttons>
            </Card>
          </S.SwitchingColumn>
        </S.SwitchingColumnContainer>
        <ProgressBar step={steps.chooseGreenBank} />
      </Content>
    </>
  )
}
