import Head from 'next/head'
import { Card } from '@components/Card/Card'
import { ProgressBar } from '@components/ProgressBar/ProgressBar'
import * as S from '@modules/Switching/Switching.style'
import { Header } from '@modules/Switching/Switching.style'
import { Content } from '@styles/common.style'
import { steps } from '@utils/constants'
import { BankFinder } from './BankFinder'

export const SelectBank = (): JSX.Element => {
  return (
    <>
      <Head>
        <title>Switch It Green | Select Your Bank</title>
        <meta name='description' content='Switch to a green bank on our Bank Switching Platform' />
        <link rel='icon' href='/favicon.ico' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>

      <Content>
        <S.SwitchingColumnContainer>
          <S.SwitchingColumn>
            <Card column stretch padded>
              <Header>{`First, let's see how your bank stacks up...`}</Header>
              <BankFinder />
            </Card>
          </S.SwitchingColumn>
        </S.SwitchingColumnContainer>
        <ProgressBar step={steps.selectBank} />
      </Content>
    </>
  )
}
