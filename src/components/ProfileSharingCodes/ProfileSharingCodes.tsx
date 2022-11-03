import React, { useEffect } from 'react'
import type { NextPage } from 'next'
import { useSelector } from 'react-redux'
import { RootState } from '@state/store'
import { FormProvider, useForm, FieldValues } from 'react-hook-form'
import { useDrawer } from '@hooks/useDrawer'
import { Input } from '@components/Input/Input'
import { FormButtons } from '@components/FormButtons/FormButtons'
import { useUser } from '@auth0/nextjs-auth0'
import Image from 'next/image'
import { fetcher } from '@utils/functions'
import { Button } from '@components/Button/Button'
import { Tabs as StylesTabs } from '@components/Tabs/Tabs.style'
import * as S from '@components/ProfileSharingCodes/ProfileSharingCodes.style'

import { Tabs } from '@components/Tabs/Tabs'

export const ProfileSharingCodes: NextPage<{ data?: any; disabled?: boolean }> = ({
  data,
  disabled,
}): JSX.Element => {
  // const user = useSelector((state: RootState) => state.user)
  // const methods = useForm()
  // const { toggleDrawer } = useDrawer()
  // const { handleSubmit, reset } = methods
  // const { user: { sub, nickname = '', picture = '' } = {}, isLoading = false } = useUser()
  // const {
  //   profile: {
  //     summary: {
  //       proudActions = '',
  //       campaigns = '',
  //       switchingStatement = '',
  //       username = '',
  //       location = '',
  //     } = {},
  //   } = {},
  // } = user

  // const onSubmit = async (data: FieldValues): Promise<void> => {
  //   console.log('>> data', data)
  //   await save(data)
  //   toggleDrawer('')()
  // }

  // const onCancel = (): void => {
  //   reset()
  //   toggleDrawer('')()
  // }

  // const save = async (data): Promise<void> => {
  //   const body = {
  //     filter: { sub },
  //     payload: { $set: { [`profile.summary`]: data } },
  //     collection: 'users',
  //     upsert: false,
  //   }

  //   await fetcher(`/api/db/updateOne`, {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(body),
  //   })
  // }

  // useEffect(() => {
  //   reset && reset(data)
  // }, [data, reset, toggleDrawer])

  const onCancel = () => {
    //
  }

  const panels: [React.ReactNode, React.ReactNode] = [
    <S.Share key='1'>
      <S.ShareButton type='button' onClick={onCancel}>
        Share
      </S.ShareButton>

      <S.SentCodes>
        <p>Sent</p>
        {55}
      </S.SentCodes>
    </S.Share>,
    <>
      <p key='2'>
        Get the word out and earn points - a win win. Share your unique referral link with a friend,
        collegue, or family member and track your impact.
      </p>
      <p>
        Earn points if your friends join, earn more points if they switch, and if your friends
        friends switch? You guessed it. More points.
      </p>
    </>,
  ]

  return (
    <>
      <StylesTabs>
        <Tabs tabs={['Overview & History', 'How It Works']} panels={panels}></Tabs>
      </StylesTabs>
    </>
  )
}
