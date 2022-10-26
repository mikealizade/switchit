import { useEffect, useState } from 'react'
import Head from 'next/head'
import useSWR from 'swr'
import { useUser } from '@auth0/nextjs-auth0'
import { User } from '@components/User/User'
import { Card } from '@components/Card/Card'
import { fetcher } from '@utils/functions'
import { CheckList } from '@components/CheckList/CheckList'
import * as S from '@modules/Impact/Impact.style'

const Impact = (): JSX.Element => {
  // const { user: { sub = '' } = {}, isLoading = false } = useUser()
  // const { data: { user } = {}, error } = useSWR(sub ? `/api/db/user/${sub}` : null, fetcher)
  // const [userData, setUserData] = useState<User>()

  // useEffect(() => {
  //   user?._id && setUserData(user)
  // }, [user])

  return (
    <>
      <Head>
        <title>SwitchIt</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>

      <S.Content>
        <User />
        <S.ProfileContainer>
          <S.ProfileColumn>
            <Card column>impact content</Card>
          </S.ProfileColumn>
          <S.ProfileColumn>
            <Card>content</Card>
          </S.ProfileColumn>
        </S.ProfileContainer>
      </S.Content>
      <S.Aside>
        <Card shadow>
          <CheckList />
        </Card>
      </S.Aside>
    </>
  )
}

export default Impact