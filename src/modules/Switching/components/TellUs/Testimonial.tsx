import type { NextPage } from 'next'
import { useUser } from '@auth0/nextjs-auth0'
import Image from 'next/image'
import React, { useState, useRef, useEffect } from 'react'
import ContentEditable from 'react-contenteditable'
import sanitizeHtml from 'sanitize-html'
import useSWR, { SWRResponse } from 'swr'
import useSWRMutation from 'swr/mutation'
import { Button } from '@components/Button/Button'
import { useGetCurrentJourney } from '@hooks/useGetCurrentJourney'
// import { useNextStep } from '@hooks/useNextStep'
// import { useStepsByJourneyType } from '@hooks/useStepsByJourneyType'
import { useToast } from '@hooks/useToast'
import { Buttons } from '@modules/Switching/Switching.style'
import { Checkbox, Label } from '@styles/common.style'
import { sanitiseConfig } from '@utils/data'
import { sendRequest, fetcher } from '@utils/functions'
import * as S from './TellUs.style'

type JourneyId = { id: string }

// TODO when savinvg journey steps to db, currently not refetching on any of the action pages

export const Testimonial: NextPage = () => {
  const { user: { sub = '' } = {} } = useUser()
  const { trigger: request } = useSWRMutation('/api/db/updateOne', sendRequest)
  const text = useRef('')
  const toast = useToast()
  // const getSteps = useStepsByJourneyType()
  // const steps = getSteps()
  // const nextStep = useNextStep()
  const { currentJourneyId = {} } = useGetCurrentJourney()
  const { data: [{ switchJourneys = [] } = {}] = [], isValidating } = useSWR(
    sub ? `/api/db/findSwitchJourneys?id=${sub}` : null,
    fetcher,
    { revalidateOnFocus: false },
  ) as SWRResponse
  const [{ testimonial = '' } = {}] = switchJourneys.filter(
    ({ id }: JourneyId) => id === currentJourneyId,
  )
  const [, setTestimonial] = useState('')
  const [isEditable, setEdit] = useState(false)
  const [hasTestimonial, setHasTestimonial] = useState(false)
  const [hasSentTestimonial, setHasSentTestimonial] = useState(false)
  const [canPostPublicly, setCanPostPublicly] = useState(false)
  const isStepCompleted = !!testimonial

  const onSave = async () => {
    try {
      const body = {
        filter: { sub, 'switchJourneys.id': currentJourneyId },
        payload: {
          $set: {
            [`switchJourneys.$.testimonial`]: sanitizeHtml(text.current, sanitiseConfig),
          },
        },
        collection: 'users',
        upsert: false,
      }

      request(body)

      // TODO success msg even when errors!
      toast('Your testimonial was saved successfully', 'success')
    } catch (error) {
      toast('An error occurred saving your testimonial', 'error')
    }
  }

  const onSend = async () => {
    try {
      const body = {
        filter: {},
        payload: {
          $push: {
            testimonials: {
              dateSent: new Date(),
              testimonial: sanitizeHtml(text.current, sanitiseConfig),
              userId: sub,
              canPostPublicly,
            },
          },
        },
        collection: 'userTestimonials',
        upsert: false,
      }

      request(body)
      // nextStep(steps.tellUs)
      setHasSentTestimonial(true)
      toast('Your testimonial was sent successfully', 'success')
    } catch (error) {
      toast('An error occurred sending your testimonial', 'error')
    }
  }

  const onChange = ({ target: { value } }: { target: { value: string } }) => {
    text.current = value
    setHasTestimonial(!!text.current)
  }

  const onToggleEditable = () => {
    setEdit(!isEditable)
  }

  useEffect(() => {
    if (testimonial) {
      text.current = testimonial
      setTestimonial(text.current)
    } else {
      text.current = ''
      setTestimonial(text.current)
    }
  }, [testimonial, text])

  return (
    <>
      <S.Testimonial>
        {!isEditable && !text.current ? (
          <S.TestimonialImage>
            <Image src={`/icons/icon_testimonial.svg`} alt='' width={60} height={42} />
          </S.TestimonialImage>
        ) : (
          <ContentEditable
            className={`editable ${isStepCompleted ? 'disabled' : ''}`}
            tagName='div'
            html={isValidating ? 'Loading testimonial...' : text.current}
            disabled={!isEditable}
            onChange={onChange}
            onBlur={onToggleEditable}
          />
        )}
      </S.Testimonial>

      {!isStepCompleted && (
        <Label htmlFor='canPostPublicly' onClick={() => setCanPostPublicly(!canPostPublicly)}>
          <Checkbox id='canPostPublicly' isActive={canPostPublicly} />
          Allow us to post publicly
        </Label>
      )}

      <Buttons>
        <Button
          type='button'
          onClick={onToggleEditable}
          mode='secondary'
          size='small'
          disabled={isStepCompleted || hasSentTestimonial}
        >
          Edit
        </Button>
        <Button
          type='button'
          size='small'
          mode='secondary'
          onClick={onSave}
          disabled={isStepCompleted || hasSentTestimonial}
        >
          Save Draft
        </Button>
        <Button
          type='button'
          size='small'
          onClick={onSend}
          disabled={isStepCompleted || hasSentTestimonial}
        >
          Send
        </Button>
      </Buttons>
    </>
  )
}
