import type { NextApiRequest, NextApiResponse } from 'next'
import { connectToDatabase } from '@helpers/mongodb'

const findSwitchJourneys = async (req: NextApiRequest, res: NextApiResponse) => {
  const { db } = await connectToDatabase()
  const {
    query: { user },
  } = req
  const [sub]: any = user

  try {
    const result = await db.collection('users').find({ sub }).toArray() //find returns a cursor so cast to array

    res.status(200).json(result)
  } catch (e) {
    console.error(e)
    res.status(500).send(e)
  }
}

export default findSwitchJourneys
