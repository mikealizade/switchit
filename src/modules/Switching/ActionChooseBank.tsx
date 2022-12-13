import Head from 'next/head'
import { Card } from '@components/Card/Card'
import { bankConfig } from '@utils/constants'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { BankFilters } from '@modules/Switching/BankFilters'
import { BanksTable } from '@modules/Switching/BanksTable'
import { ActionHeader } from '@components/ActionHeader/ActionHeader'
import { Button } from '@components/Button/Button'
import { actionText } from '@utils/constants'
import * as S from '@modules/Switching/Switching.style'
import { Content, Column } from '@styles/common.style'

export const ActionChooseBank = (): JSX.Element => {
  const { push } = useRouter()
  const [bankData, setBankData] = useState(bankConfig)
  const [selectedAccountTypes, selectAccountType] = useState<string[]>([])
  const [selectedFeatures, selectFeatures] = useState<string[]>([])

  const onNext = () => {
    push('/switching/selectaction')
  }

  useEffect(() => {
    console.log('selectedAccountTypes', selectedAccountTypes)
    console.log(', selectedFeatures', selectedFeatures)
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
                subHeader={`We've found 4 switch-worthy banks for you`}
                text={actionText.greenBanks}
                step='1'
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
            </Card>
            <S.Buttons>
              <Button type='button' size='small' onClick={onNext}>
                Next
              </Button>
            </S.Buttons>
          </S.SwitchingColumn>
          {/* <Column>
            <Card stretch column>
              <h2>Impact Card</h2>
            </Card>
          </Column> */}
        </S.SwitchingColumnContainer>
      </Content>
    </>
  )
}
