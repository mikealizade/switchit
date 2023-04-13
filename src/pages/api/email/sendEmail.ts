import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'
import { mailchimpTransactionApiUri } from '@utils/constants'

const emailConfig = {
  subscribe: {
    template: 'untitled-template',
    subject: 'Switch It Green newsletter',
  },
  signup: {
    template: 'untitled-template',
    subject: 'Welcome to Switch It Green',
  },
  confirmSwitch: {
    template: 'untitled-template',
    subject: `You've confirmed your switch!`,
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
