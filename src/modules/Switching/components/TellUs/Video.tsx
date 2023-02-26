import type { NextPage } from 'next'
import { useUser } from '@auth0/nextjs-auth0'
import Image from 'next/image'
import React, { useState, useRef, useEffect } from 'react'
import useSWR, { SWRResponse } from 'swr'
import { useGetCurrentJourney } from '@hooks/useGetCurrentJourney'
import { Buttons } from '@modules/Switching/Switching.style'
import { Checkbox, Label } from '@styles/common.style'
import { fetcher } from '@utils/functions'
import * as S from './TellUs.style'
import { VideoUploader } from './VideoUploader'

type JourneyId = { id: string }

export const Video: NextPage = () => {
  const { user: { sub = '' } = {} } = useUser()
  const text = useRef('')
  const { currentJourneyId } = useGetCurrentJourney()
  const { data: [{ switchJourneys = [] } = {}] = [], isValidating } = useSWR(
    sub ? `/api/db/findSwitchJourneys?id=${sub}` : null,
    fetcher,
    { revalidateOnFocus: false },
  ) as SWRResponse
  const [{ videoUri = '' } = {}] = switchJourneys.filter(
    ({ id }: JourneyId) => id === currentJourneyId,
  )
  const [, setTestimonial] = useState('')
  const [canPostPublicly, setCanPostPublicly] = useState(false)
  const [file, setFile] = useState<any>(null)
  const [isUploaded, setIsUploaded] = useState(false)
  const isStepCompleted = !!videoUri

  useEffect(() => {
    if (videoUri) {
      text.current = 'You have previously uploaded a video'
      setTestimonial(text.current)
    }
  }, [videoUri, text])

  return (
    <>
      <S.Testimonial>
        <S.VideoImage>
          {isUploaded || videoUri ? (
            <Image src='/icons/icon_checked.svg' alt='' width={83} height={55} />
          ) : !file?.name ? (
            <Image src='/icons/icon_upload.svg' alt='' width={50} height={37} />
          ) : (
            <div>{isValidating ? 'Loading...' : `${file?.name} is ready to upload`}</div>
          )}
        </S.VideoImage>
      </S.Testimonial>

      {!isStepCompleted && (
        <Label htmlFor='canPostPublicly' onClick={() => setCanPostPublicly(!canPostPublicly)}>
          <Checkbox id='canPostPublicly' isActive={canPostPublicly} />
          Allow us to post publicly
        </Label>
      )}

      <Buttons>
        <VideoUploader
          file={file}
          isUploaded={isUploaded}
          isStepCompleted={isStepCompleted}
          canPostPublicly={canPostPublicly}
          setFile={setFile}
          setIsUploaded={setIsUploaded}
        />
      </Buttons>
    </>
  )
}
