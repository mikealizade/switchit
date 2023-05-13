import type { NextApiRequest, NextApiResponse } from 'next'
import { connectToDatabase } from '@helpers/mongodb'

const findConfimedSwitches = async (req: NextApiRequest, res: NextApiResponse) => {
  const { db } = await connectToDatabase()

  try {
    const result = await db.collection('users').find({}).toArray()

    res.status(200).json(result)
  } catch (e) {
    console.error(e)
    res.status(500).send(e)
  }
}

export default findConfimedSwitches
