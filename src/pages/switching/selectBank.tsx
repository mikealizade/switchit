import Head from 'next/head'
import { Card } from '@components/Card/Card'
import { Content } from '@styles/common.style'
import BankFinder from '../../modules/Switching/BankFinder'
import { Column } from '@styles/common.style'
import * as S from '@modules/Switching/PreSwitching.style'

const SelectBank = (): JSX.Element => {
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
              <S.Header>{`First, let's see how your bank stacks up...`}</S.Header>
              <BankFinder />
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

export default SelectBank
