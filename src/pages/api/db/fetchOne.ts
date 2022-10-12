import { connectToDatabase } from '@helpers/mongodb'

export const fetchOne = async (req, res) => {
  const { db } = await connectToDatabase()
  const { query } = req
  const { qry, collection } = query
  try {
    const result = await db.collection(process.env[collection]).findOne(JSON.parse(qry))
    res.status(200).json({ result })
  } catch (e) {
    console.error(e)
    res.status(500).send(e)
  }
}
