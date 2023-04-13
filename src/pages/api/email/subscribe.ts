import type { NextApiRequest, NextApiResponse } from 'next'
// import Mailchimp from '@mailchimp/mailchimp_transactional'
import sendEmail from './sendEmail'

const subscribe = async (req: NextApiRequest, res: NextApiResponse) => {
  // const mailchimp = Mailchimp(process.env.MAILCHIMP_API_KEY)
  // const templates = `https://mandrillapp.com/api/1.0/templates/list`
  // const templatesBody = JSON.stringify({
  //   key: API_KEY,
  // })

  req.body.type = 'subscribe'
  sendEmail(req, res)
}

export default subscribe
