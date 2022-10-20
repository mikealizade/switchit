import type { NextPage } from 'next'
import Image from 'next/image'
import * as S from '@components/SwitchingJourney/SwitchingJourney.style'
import placeholder from '../../../public/placeholder.png'

type SwitchingJourneyProps = {
  title: string
  text: string
  image: string
}

export const SwitchingJourney: NextPage<SwitchingJourneyProps> = ({ title, text, image }) => {
  return (
    <S.SwitchingJourney>
      <Image src={placeholder} alt='' width={30} height={30} />
      <div>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </S.SwitchingJourney>
  )
}
