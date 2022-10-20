import type { NextApiRequest, NextApiResponse } from 'next'
import { connectToDatabase } from '@helpers/mongodb'

const fetchOne = async (req: NextApiRequest, res: NextApiResponse) => {
  const { db } = await connectToDatabase()
  const { query, body } = req

  // console.log('>> req', req)

  // const { qry, collection } = query

  console.log('>> body', body)

  try {
    const result = await db.collection('users').findOne()
    res.status(200).json({ result })
  } catch (e) {
    console.error(e)
    res.status(500).send(e)
  }
}

export default fetchOne
