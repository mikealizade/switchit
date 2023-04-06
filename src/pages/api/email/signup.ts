import type { NextApiRequest, NextApiResponse } from 'next'
// import Mailchimp from '@mailchimp/mailchimp_transactional'
import axios from 'axios'
import { mailchimpTransactionApiUri } from '@utils/constants'

const signup = async (req: NextApiRequest, res: NextApiResponse) => {
  // const mailchimp = Mailchimp(process.env.MAILCHIMP_API_KEY)
  const { email } = req.body
  const API_KEY = process.env.MAILCHIMP_API_KEY

  if (!email) {
    return res.status(400).json({ error: 'Email is required' })
  }

  const body = JSON.stringify({
    key: API_KEY,
    template_name: 'untitled-template',
    template_content: [{ name: 'untitled-template', content: 'untitled-template' }],
    message: {
      subject: 'Welcome to Switch It Green',
      from_email: 'hello@switchit.green',
      from_name: 'Switch It Green',
      to: [
        {
          email,
        },
      ],
    },
  })

  const options = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `api_key ${API_KEY}`,
    },
  }

  try {
    await axios.post(mailchimpTransactionApiUri, body, options)
    return res.status(201).json({ message: 'success' })
  } catch (error: unknown) {
    return res.status(500).json({ error: error instanceof Error ? error.message : 'Unknown error' })
  }
}

export default signup
