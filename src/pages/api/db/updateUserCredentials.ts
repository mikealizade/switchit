import type { NextApiRequest, NextApiResponse } from 'next'
import { connectToDatabase } from '@helpers/mongodb'

const options = {
  method: 'PATCH',
  url: 'https://switchit-weld.vercel.app/api/v2/users/%7BuserId%7D',
  headers: {
    'content-type': 'application/json',
    authorization: `Bearer https://dev-4t4nt6d5.us.auth0.com/api/v2/`,
  },
  data: { password: 'Test1', connection: 'connectionName' },
}

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
