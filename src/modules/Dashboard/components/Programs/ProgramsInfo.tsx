import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { Button } from '@components/Button/Button'
import { Buttons } from '@modules/Switching/Switching.style'
import { Title, Div, Text, Header } from '@styles/common.style'
import * as S from './Programs.style'

export const ProgramsInfo: NextPage = (): JSX.Element => {
  const { push } = useRouter()

  return (
    <Div rowGap={30} flex={1}>
      <Title>Programs</Title>
      <S.ProgramsContainer>
        <Div rowGap={30}>
          <Header>
            Interested in bringing a Switch It Green program to your school, university or business?
          </Header>
          <Text>
            Get access to bespoke resources, high-profile guest speaker events, exclusive workshops,
            tailored data reporting & impact tracking, and more while moving £ millions out of
            fossil fuel support.
          </Text>
          <Buttons align='right'>
            <Button type='button' mode='primary' size='small' onClick={() => push('/programs')}>
              Register Yout Interest
            </Button>
          </Buttons>
        </Div>
      </S.ProgramsContainer>
    </Div>
  )
}
