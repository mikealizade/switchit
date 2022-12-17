import type { NextApiRequest, NextApiResponse } from 'next'
import { connectToDatabase } from '@helpers/mongodb'

const findSwitchJourneys = async (req: NextApiRequest, res: NextApiResponse) => {
  const { db } = await connectToDatabase()
  const { query: { id = '' } = {} } = req

  try {
    const result = await db.collection('users').find({ sub: id }, { switchJourneys: 1 }).toArray() //TODO only return switch journeys, not whole user obj

    res.status(200).json(result)
  } catch (e) {
    console.error(e)
    res.status(500).send(e)
  }
}

export default findSwitchJourneys
