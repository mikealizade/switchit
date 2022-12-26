import { useRef, useEffect, useState, useCallback } from 'react'
import { useUser } from '@auth0/nextjs-auth0'
import { Button } from '@components/Button/Button'
import axios from 'axios'
import useSWRMutation from 'swr/mutation'
import { useToast } from '@hooks/useToast'
import { useGetCurrentJourney } from '@hooks/useGetCurrentJourney'
import { sendRequest } from '@utils/functions'

export const VideoUploader = () => {
  const { user: { sub } = {} } = useUser()
  const { trigger: request } = useSWRMutation('/api/db/updateOne', sendRequest)
  const { currentJourneyId } = useGetCurrentJourney()
  const fileInput = useRef<HTMLInputElement>(null)
  const toast = useToast()
  const [file, setFile] = useState<any>(null)

  const handleClick = () => {
    fileInput.current!.click()
  }

  const uploadFile = useCallback(async () => {
    try {
      const { data: { url } = {} } = await axios.post('/api/s3/upload', {
        // TODO remove axios
        name: `user_videos/${file.name}`,
        type: file.type,
      })
      const videoUri = url.split('?')[0]
      const response = await axios.put(url, file, {
        headers: {
          'Content-type': file.type,
          'Access-Control-Allow-Origin': '*',
        },
      })

      if (response.status === 200) {
        try {
          const body = {
            filter: { sub, 'switchJourneys.id': currentJourneyId },
            payload: {
              $set: {
                'switchJourneys.$.videoUri': videoUri,
              },
            },
            collection: 'users',
            upsert: false,
          }

          request(body)
        } catch (error) {
          toast('An error occurred uploading your video', 'error')
        }
      }
    } catch (error) {
      toast('An error occurred uploading your video', 'error')
    }

    setFile(null)
  }, [file, sub, toast, currentJourneyId, request])

  useEffect(() => {
    if (file) {
      const uploadedFileDetail = async () => await uploadFile()
      uploadedFileDetail()
    }
  }, [file, uploadFile])

  return (
    <>
      <Button type='button' mode='primary' onClick={handleClick}>
        Upload Video
      </Button>
      <input
        type='file'
        ref={fileInput}
        onChange={(e: any) => setFile(e.target.files[0])}
        style={{ display: 'none' }}
      />
    </>
  )
}
