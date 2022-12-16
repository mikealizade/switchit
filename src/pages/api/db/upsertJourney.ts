import type { NextApiRequest, NextApiResponse } from 'next'
import { connectToDatabase } from '@helpers/mongodb'

const upsertJourney = async (req: NextApiRequest, res: NextApiResponse) => {
  const { db } = await connectToDatabase()
  const { body } = req
  const { payload, collection = 'users' } = body
  const [insertPayload, pushPayload] = payload

  try {
    await db.collection(collection).bulkWrite([
      {
        updateOne: insertPayload,
      },
      {
        updateOne: pushPayload,
      },
    ])
    res.status(200).json({ result: 'success' })
  } catch (e) {
    console.error(e)
    res.status(500).send(e)
  }
}

export default upsertJourney
