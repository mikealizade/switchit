import type { NextPage } from 'next'
import Image from 'next/image'
import { Title, Text } from '@styles/common.style'
import * as S from './Goals.style'

export const Goals: NextPage = (): JSX.Element => {
  return (
    <S.Goals>
      <Title>Switch It {`Green's`} 2023 Goals</Title>

      <S.GoalsList>
        <S.DivestedItem>
          <Image src={`/icons/icon_impact.svg`} alt='' width={55} height={55} />
          <S.Goal>
            <h3>£7b</h3>
            <Text>Withdrawn from Fossil Fuel Support</Text>
          </S.Goal>
        </S.DivestedItem>
        <S.Item>
          <Image src={`/icons/icon_providers.svg`} alt='' width={44} height={44} />
          <S.Goal>
            <h3>5,000</h3>
            <Text>Green Accounts Opened</Text>
          </S.Goal>
        </S.Item>
        <S.Item>
          <Image src={`/icons/icon_programs.svg`} alt='' width={48} height={48} />
          <S.Goal>
            <h3>15,000</h3>
            <Text>Climate Actions Taken</Text>
          </S.Goal>
        </S.Item>
      </S.GoalsList>
    </S.Goals>
  )
}
