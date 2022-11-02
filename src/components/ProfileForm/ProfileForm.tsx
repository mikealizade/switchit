import { useEffect } from 'react'
import type { NextPage } from 'next'
import { useSelector } from 'react-redux'
import { RootState } from '@state/store'
import { FormProvider, useForm, FieldValues } from 'react-hook-form'
import { Input } from '@components/Input/Input'
import { FormButtons } from '@components/FormButtons/FormButtons'
import { useUser } from '@auth0/nextjs-auth0'
import Image from 'next/image'
import { fetcher } from '@utils/functions'
import * as S from '@components/ProfileHead/ProfileHead.style'
import * as St from '@modules/Profile/Profile.style'

export const ProfileForm: NextPage<{ data?: any; disabled?: boolean }> = ({
  data,
  disabled,
}): JSX.Element => {
  const user = useSelector((state: RootState) => state.user)
  const methods = useForm()
  const { handleSubmit, reset } = methods
  const { user: { sub, nickname = '', picture = '' } = {}, isLoading = false } = useUser()
  const {
    profile: {
      summary: {
        proudActions = '',
        campaigns = '',
        switchingStatement = '',
        username = '',
        location = '',
      } = {},
    } = {},
  } = user

  const onSubmit = async (data: FieldValues): Promise<void> => {
    console.log('>> data', data)
    await save(data)
  }

  const onCancel = (): void => {
    reset()
  }

  const save = async (data): Promise<void> => {
    const body = {
      filter: { sub },
      payload: { $set: { [`profile.summary`]: data } },
      collection: 'users',
      upsert: false,
    }

    await fetcher(`/api/db/updateOne`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })
  }

  useEffect(() => {
    reset && reset(data)
  }, [data, reset])

  return (
    <>
      <S.ProfileHead isProfile>
        <div>
          {picture && nickname && (
            <Image src={picture} alt={nickname} width={132} height={132} unoptimized />
          )}
        </div>
        <div>
          <S.ProfileName>{nickname}</S.ProfileName>
        </div>
      </S.ProfileHead>
      <FormProvider {...methods}>
        <St.ProfileForm onSubmit={handleSubmit(onSubmit)} className='form'>
          <fieldset>
            <Input
              name='name'
              label='Name'
              {...(nickname && { defaultValue: nickname })}
              {...methods}
              minLength={1}
              maxLength={50}
              pattern='alpha'
              message='Please enter a valid name'
              disabled={disabled}
              required={false}
            />
            <Input
              name='username'
              label='Username'
              {...(username && { defaultValue: username })}
              {...methods}
              minLength={1}
              maxLength={50}
              pattern='alpha'
              message='Please enter a valid username'
              disabled={disabled}
              required={false}
            />
            <Input
              name='location'
              label='Where do you live?'
              {...(location && { defaultValue: location })}
              {...methods}
              minLength={1}
              maxLength={50}
              pattern='alpha'
              message='Please enter a valid name'
              disabled={disabled}
              required={false}
            />
            <Input
              name='switchingStatement'
              label={`Why I'm switching`}
              {...(switchingStatement && { defaultValue: switchingStatement })}
              {...methods}
              minLength={1}
              maxLength={50}
              disabled={false}
              required={false}
            />
            <Input
              name='campaigns'
              label='Campaigns I support'
              {...(campaigns && { defaultValue: campaigns })}
              {...methods}
              disabled={false}
              required={false}
            />
            <Input
              name='proudActions'
              label={`Climate actions I'm proud of`}
              {...(proudActions && { defaultValue: proudActions })}
              {...methods}
              disabled={false}
              required={false}
            />
          </fieldset>
          <FormButtons disabled={false} isSubmitting={false} onCancel={onCancel} />
        </St.ProfileForm>
      </FormProvider>
    </>
  )
}
