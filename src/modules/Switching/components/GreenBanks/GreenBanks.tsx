import Head from 'next/head'
import { Card } from '@components/Card/Card'
import { bankConfig } from './data'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { BankFilters } from '@modules/Switching/components/GreenBanks/BankFilters'
import { BanksTable } from '@modules/Switching/components/GreenBanks/BanksTable'
import { ActionHeader } from '@components/ActionHeader/ActionHeader'
import { Button } from '@components/Button/Button'
import { ProgressBar } from '@components/ProgressBar/ProgressBar'
import { useStepsByJourneyType } from '@hooks/useStepsByJourneyType'
import { actionText } from '@utils/constants'
import * as S from '@modules/Switching/Switching.style'
import { Content } from '@styles/common.style'

export const GreenBanks = (): JSX.Element => {
  const { push, back } = useRouter()
  const [bankData, setBankData] = useState(bankConfig)
  const [selectedAccountTypes, selectAccountType] = useState<string[]>([])
  const [selectedFeatures, selectFeatures] = useState<string[]>([])
  const getSteps = useStepsByJourneyType()
  const steps = getSteps()

  const onNext = () => {
    push('/switching/select-action')
  }

  useEffect(() => {
    if (!selectedAccountTypes.length && !selectedFeatures.length) {
      setBankData(bankConfig)
      return
    }

    const filteredBanks = bankConfig.filter(
      ({ accountTypes, features }: { accountTypes: string[]; features: any }) =>
        (selectedAccountTypes.length
          ? selectedAccountTypes.every((selectedAccountType: string) =>
              accountTypes.includes(selectedAccountType),
            )
          : true) &&
        (selectedFeatures.length
          ? selectedFeatures.every((selectedFeature: string) => features.includes(selectedFeature))
          : true),
    )

    setBankData(filteredBanks)
  }, [selectedAccountTypes, selectedFeatures])

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
              <ActionHeader
                header='Action Choose Your Bank'
                subHeader={`We've found 4 green banks for you`}
                text={actionText.greenBanks}
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
              {/* <S.Buttons>
                <Button type='button' mode='secondary' onClick={() => back()}>
                  Back
                </Button>
                <Button type='button' size='small' onClick={onNext}>
                  Next
                </Button>
              </S.Buttons> */}
            </Card>
          </S.SwitchingColumn>
        </S.SwitchingColumnContainer>
        <ProgressBar step={steps.chooseGreenBank} />
      </Content>
    </>
  )
}
