import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'
import { mailchimpTransactionApiUri } from '@utils/constants'

const emailConfig = {
  subscribe: {
    template: 'mvp-signed-up-1',
    subject: `You've Subscribed`,
  },
  signup: {
    template: 'mvp-created-an-account-2',
    subject: `You've created an account`,
  },
  confirmSwitch: {
    template: 'mvp-switched-3',
    subject: `Your switch has been verified`,
  },
}

const sendEmail = async (req: NextApiRequest, res: NextApiResponse) => {
  const { email: emailAddress, type } = req.body
  const API_KEY = process.env.MAILCHIMP_API_KEY
  const email = emailConfig[type]

  if (!emailAddress) {
    return res.status(400).json({ error: 'Email is required' })
  }

  const body = JSON.stringify({
    key: API_KEY,
    template_name: email.template,
    template_content: [{ name: email.template, content: email.template }],
    message: {
      subject: email.subject,
      from_email: 'hello@switchit.green',
      from_name: 'Switch It Green',
      to: [
        {
          email: emailAddress,
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

export default sendEmail
