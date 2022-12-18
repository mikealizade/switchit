import Head from 'next/head'
import { Card } from '@components/Card/Card'
import { Content } from '@styles/common.style'
import { BankFinder } from '../../modules/Switching/BankFinder'
import * as S from '@modules/Switching/Switching.style'
import { Header } from '@modules/Switching/PreSwitching.style'

export const SelectBank = (): JSX.Element => {
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
            <Card column>
              <Header>{`First, let's see how your bank stacks up...`}</Header>
              <BankFinder />
            </Card>
          </S.SwitchingColumn>
        </S.SwitchingColumnContainer>
      </Content>
    </>
  )
}
