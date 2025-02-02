import type { NextApiRequest, NextApiResponse } from 'next'
import { connectToDatabase } from '@helpers/mongodb'

const updateOne = async (req: NextApiRequest, res: NextApiResponse) => {
  const { db } = await connectToDatabase()
  const { body } = req
  const { filter, payload, upsert = false, collection = 'users' } = body

  try {
    await db.collection(collection).updateOne(filter, payload, { upsert })
    res.status(200).json({ result: 'success' })
  } catch (e) {
    console.error(e)
    res.status(500).send(e)
  }
}

export default updateOne
