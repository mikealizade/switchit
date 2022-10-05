import type { NextPage } from 'next'
import Image from 'next/image'
import * as S from '@components/SmallCard/SmallCard.style'
import placeholder from '../../../public/placeholder.png'

type SmallCardProps = {
  title: string
  text: string
  image: string
}

export const SmallCard: NextPage<SmallCardProps> = ({ title, text, image }) => {
  return (
    <S.SmallCard>
      <Image src={placeholder} alt='' width={30} height={30} />
      <div>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </S.SmallCard>
  )
}
