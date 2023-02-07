import type { NextPage } from 'next'
import Image from 'next/image'
// import Link from 'next/link'
// import { useRouter } from 'next/router'
// import { Button } from '@components/Button/Button'
import { useSelector } from 'react-redux'
import * as S from '@components/Hero/Hero.style'
import { Post } from '@pages/dashboard'
// import Draw from '../../../public/icons/icon_draw.svg'
import { RootState } from '@state/store'
import { heroConfig, HeroConfig } from './data'

// export const DashboardHero: NextPage<{ post: Post }> = ({
//   post: { id = '', title = '', summary = '' } = {},
// }): JSX.Element => {
export const DashboardHero: NextPage<{ post: Post }> = (): JSX.Element => {
  // const { push } = useRouter()
  const { isNewUser } = useSelector((state: RootState) => state.user)
  const hero = heroConfig['dashboard']
  const title = isNewUser ? hero.newUserTitle : hero.activeUserTitle
  const text = isNewUser ? hero.newUserText : hero.activeUserText

  // const readBlogPost = (id: string) => () => {
  //   push(`/resources/article/${id}`)
  // }

  return (
    <S.Hero>
      <Image src={`/icons/noimage.jpg`} alt='' width={60} height={60} />
      <S.Content>
        <S.Title>{title}</S.Title>
        <S.Text>{text}</S.Text>
      </S.Content>
    </S.Hero>
  )
}
