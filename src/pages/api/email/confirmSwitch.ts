import type { NextApiRequest, NextApiResponse } from 'next'
import sendEmail from './sendEmail'

const confirmSwitch = async (req: NextApiRequest, res: NextApiResponse) => {
  req.body.type = 'confirmSwitch'
  sendEmail(req, res)
}

export default confirmSwitch
