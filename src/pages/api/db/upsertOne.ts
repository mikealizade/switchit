import { connectToDatabase } from '@helpers/mongodb'

export const upsertOne = async (req, res) => {
  const { db } = await connectToDatabase()
  const { body } = req
  const { filter, payload, upsert, collection } = body

  try {
    await db.collection(process.env[collection]).replaceOne(filter, payload, { upsert })
    res.status(200).json({ result: 'success' })
  } catch (e) {
    console.error(e)
    res.status(500).send(e)
  }
}
