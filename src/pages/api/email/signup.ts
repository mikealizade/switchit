import type { NextApiRequest, NextApiResponse } from 'next'
import sendEmail from './sendEmail'

const signup = async (req: NextApiRequest, res: NextApiResponse) => {
  req.body.type = 'signup'
  sendEmail(req, res)
}

export default signup
