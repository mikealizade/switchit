import { useRef } from 'react'
import { Button } from '@components/Button/Button'

export const FileUploader = () => {
  const fileInput = useRef<HTMLInputElement>(null)

  const handleClick = () => {
    fileInput.current!.click()
  }

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const fileUploaded = event.target.files![0]

    console.log('fileUploaded', fileUploaded)

    // handleFile(fileUploaded)
  }

  return (
    <>
      <Button type='button' mode='primary' onClick={handleClick}>
        Update Profile Picture
      </Button>
      <input type='file' ref={fileInput} onChange={onChange} style={{ display: 'none' }} />
    </>
  )
}
