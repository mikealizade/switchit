import path from 'path'
import type { NextApiRequest, NextApiResponse } from 'next'
import { promises as fs } from 'fs'

export default async function bankdata(req: NextApiRequest, res: NextApiResponse) {
  const jsonDirectory = path.join(process.cwd(), 'json')
  const fileContents = await fs.readFile(jsonDirectory + '/bankdata.json', 'utf8')

  res.status(200).json(fileContents)
}
