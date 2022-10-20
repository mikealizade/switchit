import type { NextApiRequest, NextApiResponse } from 'next'
import { connectToDatabase } from '@helpers/mongodb'

const insertOne = async (req: NextApiRequest, res: NextApiResponse) => {
  const { db } = await connectToDatabase()
  const { body } = req

  try {
    await db.collection('users').insertOne(body)
    res.status(200).json({ result: 'success' })
  } catch (e) {
    console.error(e)
    res.status(500).send(e)
  }
}

export default insertOne
