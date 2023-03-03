import S3 from 'aws-sdk/clients/s3'
import { NextApiRequest, NextApiResponse } from 'next'

const s3 = new S3({
  region: process.env.S3_REGION,
  accessKeyId: process.env.S3_ACCESS_KEY,
  secretAccessKey: process.env.S3_SECRET_KEY,
  signatureVersion: 'v4',
})

const upload = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  try {
    const { name, type } = req.body
    const fileParams = {
      Bucket: process.env.S3_BUCKET_NAME,
      Key: name,
      Expires: 600,
      ContentType: type,
      ACL: 'public-read', //public-write?
    }
    const url = await s3.getSignedUrlPromise('putObject', fileParams)

    res.status(200).json({ url })
  } catch (err) {
    res.status(400).json({ message: err })
  }
}

export default upload
