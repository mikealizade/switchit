import type { NextPage } from 'next'
import { useState } from 'react'
import { FormProvider, useForm, FieldValues } from 'react-hook-form'
import { useSelector } from 'react-redux'
import useSWRMutation from 'swr/mutation'
import { Button } from '@components/Button/Button'
import { RadioGroup } from '@components/RadioGroup/RadioGroup'
import { useToast } from '@hooks/useToast'
import { Buttons } from '@modules/Switching/Switching.style'
import { RootState } from '@state/store'
import { Title, Div, Text, Header } from '@styles/common.style'
import { sendRequest } from '@utils/functions'
import * as S from './Programs.style'

type InterestedUserData = {
  userId: string
  name: string
  email: string
  registeredInterestDate: Date
  // interestedUserData: FieldValues
}

export const Programs: NextPage = (): JSX.Element => {
  const { trigger: request } = useSWRMutation('/api/db/updateOne', sendRequest)
  const { sub, nickname, email } = useSelector((state: RootState) => state.user)
  const methods = useForm()
  const toast = useToast()
  const [hasSubmitted, setHasSubmitted] = useState(false)
  const { handleSubmit, reset } = methods

  const save = async (interestedUserData: InterestedUserData) => {
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
      registeredInterestDate: new Date(),
      ...data,
    }

    await save(interestedUserData)
    setHasSubmitted(true)
    reset()
  }

  return (
    <Div rowGap={30}>
      <Title>Programs</Title>
      <S.ProgramsContainer>
        {hasSubmitted ? (
          <Div flex={1} rowGap={40}>
            <Header>Thanks for submitting!</Header>

            <Text>
              Keep an eye out for an email in your inbox featuring more information and ways we can
              connect.
            </Text>
            <Buttons align='right'>
              <Button
                type='button'
                mode='primary'
                size='small'
                onClick={() => setHasSubmitted(false)}
              >
                Done
              </Button>
            </Buttons>
          </Div>
        ) : (
          <Div flex={1}>
            <Header>Interested in bringing Switch It to your business or university?</Header>
            <Text>Let us know which best describes you, and {`we'll`} reach out</Text>
            <FormProvider {...methods}>
              <S.ProgramsForm onSubmit={handleSubmit(onSubmit)} className='form'>
                <fieldset>
                  <RadioGroup
                    name='interestedUserData'
                    labels={[
                      'Student at school',
                      'Faculty at school',
                      'Employee at a business',
                      'Business owner',
                    ]}
                    {...methods}
                    disabled={false}
                    required={false}
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
