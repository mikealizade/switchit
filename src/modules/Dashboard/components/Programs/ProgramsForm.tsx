import type { NextPage } from 'next'
import { useState } from 'react'
import { FormProvider, useForm, FieldValues } from 'react-hook-form'
import { useSelector } from 'react-redux'
import useSWRMutation from 'swr/mutation'
import { Button } from '@components/Button/Button'
import { Input } from '@components/Input/Input'
import { RadioGroup } from '@components/RadioGroup/RadioGroup'
import { useToast } from '@hooks/useToast'
import { Buttons } from '@modules/Switching/Switching.style'
import { RootState } from '@state/store'
import { Title, Div, Text, Header } from '@styles/common.style'
import { sendRequest, formatDate } from '@utils/functions'
import * as S from './Programs.style'

export const ProgramsForm: NextPage = (): JSX.Element => {
  const { trigger: request } = useSWRMutation('/api/db/updateOne', sendRequest)
  const { sub, nickname, email } = useSelector((state: RootState) => state.user)
  const methods = useForm()
  const toast = useToast()
  const [hasSubmitted, setHasSubmitted] = useState(false)
  const { handleSubmit, reset } = methods

  const save = async (interestedUserData: FieldValues) => {
    try {
      const body = {
        filter: {},
        payload: {
          $push: {
            interestedUsers: interestedUserData,
          },
        },
        collection: 'usersInterestInSwitchIt',
        upsert: false,
      }

      request(body)
    } catch (error) {
      toast('An error has occurred', 'error')
    }
  }

  const onSubmit = async (data: FieldValues): Promise<void> => {
    const interestedUserData = {
      userId: sub,
      name: nickname,
      email,
      registeredInterestDate: formatDate(new Date()),
      ...data,
    }

    await save(interestedUserData)
    setHasSubmitted(true)
    reset()
  }

  return (
    <Div rowGap={30} flex={1}>
      <Title>Interest Form</Title>
      <S.ProgramsContainer>
        {hasSubmitted ? (
          <Div rowGap={40}>
            <Header>Thanks for submitting!</Header>

            <Text>Keep an eye out for an email in your inbox featuring more information and ways we can connect.</Text>
            <Buttons align='right'>
              <Button type='button' mode='primary' size='small' onClick={() => setHasSubmitted(false)}>
                Done
              </Button>
            </Buttons>
          </Div>
        ) : (
          <Div flex={1}>
            <Header>Interested in bringing a Switch It Green program to your school, university or business?</Header>
            <Text>Register your interest by filling out the details below and we will get in touch with more information.</Text>
            <Text>Which best describes you?</Text>
            <FormProvider {...methods}>
              <S.ProgramsForm onSubmit={handleSubmit(onSubmit)} className='form'>
                <fieldset>
                  <RadioGroup
                    name='interestedUserData'
                    labels={[
                      'student at a school or university',
                      'faculty at a school or university',
                      'employee at a business',
                      'business owner',
                    ]}
                    {...methods}
                    disabled={false}
                    required={false}
                  />
                  <Input
                    name='institution'
                    label='What is the name of your institution or business?'
                    {...methods}
                    minLength={1}
                    maxLength={50}
                  />
                </fieldset>
                <Buttons align='right'>
                  <Button type='submit' mode='primary' size='small'>
                    Submit
                  </Button>
                </Buttons>
              </S.ProgramsForm>
            </FormProvider>
          </Div>
        )}
      </S.ProgramsContainer>
    </Div>
  )
}
