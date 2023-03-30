import type { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Button } from '@components/Button/Button'
import { Buttons } from '@modules/Switching/Switching.style'
import { TitleLink, Div, Text, Header } from '@styles/common.style'
import * as S from './Programs.style'

export const ProgramsInfo: NextPage = (): JSX.Element => {
  const { push } = useRouter()

  return (
    <Div rowGap={30} flex={1}>
      <Link href='/programs'>
        <TitleLink>
          Programs
          <Image src={'/icons/icon_chevron_right.svg'} alt='' width={25} height={25} />
        </TitleLink>
      </Link>

      <S.ProgramsContainer>
        <Div rowGap={30}>
          <Header>Interested in bringing a Switch It Green program to your school, university or business?</Header>
          <Text>
            Get access to bespoke resources, high-profile guest speaker events, exclusive workshops, tailored data reporting & impact
            tracking, and more while moving £ millions out of fossil fuel support.
          </Text>
          <Buttons align='right'>
            <Button type='button' mode='primary' size='small' onClick={() => push('/programs')}>
              Register Your Interest
            </Button>
          </Buttons>
        </Div>
      </S.ProgramsContainer>
    </Div>
  )
}
