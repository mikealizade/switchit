import type { NextPage } from 'next'
import { useState } from 'react'
import useSWRMutation from 'swr/mutation'
import { Div } from '@styles/common.style'
import { sendRequest } from '@utils/functions'
import { EventType } from '@utils/types'
import * as S from './SignedOutHome.style'
import { Text } from './SignedOutLanding.style'

export const Subscribe: NextPage = (): JSX.Element => {
  const { trigger: request } = useSWRMutation('/api/db/updateOne', sendRequest)
  const [value, setEmail] = useState('')
  const [hasEnteredEmail, setThanks] = useState(false)
  const [isError, setError] = useState(false)

  const onChange = ({ target: { value } }: EventType) => {
    setEmail(value)
  }

  const saveEmail = async () => {
    try {
      const body = {
        filter: {},
        payload: { $push: { [`emails`]: value } },
        collection: 'newsletter',
        upsert: false,
      }

      request(body)
      setThanks(true)
    } catch (error) {
      setError(true)
    }
  }

  return (
    <S.Subscribe rowGap={40}>
      <S.HomePageHeader>Subscribe</S.HomePageHeader>

      <S.SubscribeForm>
        {isError ? (
          <Text>
            Sorry, we {`couldn't`} subscribe you to our newsletter. Please try again later.
          </Text>
        ) : hasEnteredEmail ? (
          <S.NewsletterThanks>Brill! {`We'll`} be in touch</S.NewsletterThanks>
        ) : (
          <>
            <S.EmailField value={value} onChange={onChange} placeholder='Email' />
            <S.EmailButton>
              <span onClick={saveEmail}>Submit</span>
            </S.EmailButton>
          </>
        )}
      </S.SubscribeForm>
      <Div width='30%'>
        <S.TextContainer mobileWidth={50}>
          <Text>Subscribe to our newsletter for news, insights, and updates.</Text>
          <Text>
            No spam - <em>just the juicy bits</em>
          </Text>
        </S.TextContainer>
      </Div>
    </S.Subscribe>
  )
}
