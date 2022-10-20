import { connectToDatabase } from '@helpers/mongodb'
import type { NextApiRequest, NextApiResponse } from 'next'

const fetchOne = async (req: NextApiRequest, res: NextApiResponse) => {
  const { db } = await connectToDatabase()
  const {
    query: { user },
  } = req
  const [sub]: any = user

  try {
    const user = await db.collection('users').findOne({ sub })
    res.status(200).json({ user })
  } catch (e) {
    console.error(e)
    res.status(500).send(e)
  }
}

export default fetchOne
