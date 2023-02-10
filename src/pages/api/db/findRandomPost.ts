import type { NextApiRequest, NextApiResponse } from 'next'
import { connectToDatabase } from '@helpers/mongodb'

const findRandomPost = async (req: NextApiRequest, res: NextApiResponse) => {
  const { db } = await connectToDatabase()

  try {
    const result = await db
      .collection('blog')
      .aggregate([{ $match: { isFeatured: false, id: { $ne: '5' } } }, { $sample: { size: 1 } }]) //don't show blog 5
      .toArray()

    res.status(200).json(result)
  } catch (e) {
    console.error(e)
    res.status(500).send(e)
  }
}

export default findRandomPost
