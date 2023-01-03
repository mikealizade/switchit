import { useRef, useCallback, useState } from 'react'
import { useUser } from '@auth0/nextjs-auth0'
import { NextPage } from 'next'
import { Button } from '@components/Button/Button'
import axios from 'axios'
import useSWRMutation from 'swr/mutation'
import { useToast } from '@hooks/useToast'
import { useGetCurrentJourney } from '@hooks/useGetCurrentJourney'
import { sendRequest } from '@utils/functions'

export const VideoUploader: NextPage<{
  file: any
  setFile: (file: any) => void
}> = ({ file, setFile }) => {
  const { user: { sub } = {} } = useUser()
  const { trigger: request } = useSWRMutation('/api/db/updateOne', sendRequest)
  const toast = useToast()
  const { currentJourneyId } = useGetCurrentJourney()
  const fileInput = useRef<HTMLInputElement>(null)
  const [isUploading, setIsUploading] = useState(false)

  const handleClick = () => {
    fileInput.current!.click()
  }

  const uploadFile = useCallback(async () => {
    try {
      setIsUploading(true)
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
      toast('Uploaded your video successfully', 'success')
    } catch (error) {
      toast('An error occurred uploading your video', 'error')
    }
    setIsUploading(false)
    setFile(null)
  }, [file, sub, toast, currentJourneyId, request, setFile])

  const onUpload = () => {
    const uploadedFileDetail = async () => await uploadFile()
    uploadedFileDetail()
  }

  return (
    <>
      <Button
        type='button'
        size='small'
        mode='secondary'
        onClick={handleClick}
        // disabled={isDisabled}
      >
        Attach
      </Button>
      <input
        type='file'
        ref={fileInput}
        onChange={(e: any) => setFile(e.target.files[0])}
        style={{ display: 'none' }}
        // disabled={isDisabled}
      />
      <Button type='button' size='small' onClick={onUpload} disabled={isUploading}>
        {isUploading ? 'Uploading...' : 'Upload'}
      </Button>
    </>
  )
}
