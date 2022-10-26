import type { NextPage } from 'next'
import Image from 'next/image'
import { Button } from '@components/Button/Button'
import * as S from '@components/Hero/Hero.style'
import speechBubbles from '../../../public/speech_bubbles.png'

export const Hero: NextPage = (): JSX.Element => {
  return (
    <S.Hero>
      <Image src={speechBubbles} alt='' />
      <S.Content>
        <h3>Talking points</h3>
        <S.Text>
          Unlock tips and tricks to approaching groups in your community. Voluptate adipisicing non
          ut laboris exercitation exercitation laborum pariatur.
        </S.Text>
      </S.Content>
      <Button type='button'>Find Out More</Button>
    </S.Hero>
  )
}
