import type { NextApiRequest, NextApiResponse } from 'next'
import { connectToDatabase } from '@helpers/mongodb'

const findSharingCode = async (req: NextApiRequest, res: NextApiResponse) => {
  const { db } = await connectToDatabase()
  const { query } = req

  try {
    const result = await db
      .collection('users')
      .findOne({ 'profile.sharingCodes': { $in: Object.values(query) } })
    res.status(200).json({ result })
  } catch (e) {
    console.error(e)
    res.status(500).send(e)
  }
}

export default findSharingCode
