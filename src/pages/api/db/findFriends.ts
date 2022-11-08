import type { NextApiRequest, NextApiResponse } from 'next'
import { connectToDatabase } from '@helpers/mongodb'

const findFriends = async (req: NextApiRequest, res: NextApiResponse) => {
  const { db } = await connectToDatabase()
  const { query: { id = '' } = {} } = req

  try {
    const result = await db
      .collection('users')
      .find({ friends: { $in: [id] } })
      .toArray() //find returns a cursor so cast to array

    res.status(200).json({ result })
  } catch (e) {
    console.error(e)
    res.status(500).send(e)
  }
}

export default findFriends
