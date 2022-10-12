import { connectToDatabase } from '@helpers/mongodb'

export const insertOne = async (req, res) => {
  const { db } = await connectToDatabase()
  const { body } = req
  const { payload, collection } = body
  console.log(payload, collection)

  try {
    await db.collection(process.env[collection]).insertOne(payload)
    res.status(200).json({ result: 'success' })
  } catch (e) {
    console.error(e)
    res.status(500).send(e)
  }
}
