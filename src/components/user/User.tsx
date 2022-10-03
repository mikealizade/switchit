import type { NextPage } from 'next'
import Image from 'next/image'
import user from '../../../public/me.jpg'
import * as S from '@components/user/User.style'

type PageProps = {
  data: any
}

export const User: NextPage<PageProps> = ({
  data: {
    results: [
      {
        name: { first = '', last = '' },
        picture: { thumbnail = '' },
      },
    ],
  },
}: any) => {
  return (
    <S.UserContainer>
      <S.User>
        <Image src={thumbnail} alt={`${first} ${last}`} width={50} height={50} unoptimized />
        <span>Hi {first}, welcome back!</span>
      </S.User>
      <S.Score>120</S.Score>
    </S.UserContainer>
  )
}
