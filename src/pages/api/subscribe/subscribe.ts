import type { NextApiRequest, NextApiResponse } from 'next'
import Mailchimp from '@mailchimp/mailchimp_transactional'
import axios from 'axios'

const subscribe = async (req: NextApiRequest, res: NextApiResponse) => {
  const mailchimp = Mailchimp(process.env.MAILCHIMP_API_KEY)

  // const response = await mailchimpClient.users.ping()
  // console.log(response)
  const { email } = req.body

  if (!email || !email.length) {
    return res.status(400).json({ error: 'Email is required' })
  }

  // const API_KEY = process.env.MAILCHIMP_API_KEY
  const API_KEY = process.env.MAILCHIMP_TEST_API_KEY
  const API_SERVER = process.env.MAILCHIMP_API_SERVER
  const AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID

  // const message = {
  //   from_email: 'hello@switchit.green',
  //   subject: 'Hello Mike',
  //   text: 'Welcome to Mailchimp Transactional!',
  //   to: [
  //     {
  //       email: 'mikealizade@hotmail.com',
  //       type: 'to',
  //     },
  //   ],
  // }

  // const response = await mailchimp.messages.send({
  //   message,
  // })
  // console.log(response)

  const url = `https://${API_SERVER}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members`

  console.log('url::::::::::::::', url)
  console.log('API_KEY', API_KEY)

  const data = JSON.stringify({
    email_address: 'mikealizade@hotmail.com',
    status: 'subscribed',
  })

  console.log('email:', email)

  const options = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `api_key ${API_KEY}`,
    },
  }

  try {
    const response = await axios.post(url, data, options)

    console.log('response:', response)

    if (response.status >= 400) {
      return res.status(400).json({
        error: `There was an error subscribing to the newsletter.`,
      })
    }
    return res.status(201).json({ message: 'success' })
  } catch (error) {
    console.log(error)
    return res.status(500).json({ error: error.message })
  }
}

// original one
// mandrill_verify.3Qu0roEl1JNIQ3XevZtbLA
// v=spf1 +a +mx +ip4:66.29.132.113 +ip4:66.29.132.114 include:spf.web-hosting.com include:spf.mandrillapp.com ~all

// new one
// mandrill_verify.3Qu0roEl1JNIQ3XevZtbLA
// v=spf1 mandrill_verify.3Qu0roEl1JNIQ3XevZtbLAv=spf1 +a +mx +ip4:66.29.132.113 +ip4:66.29.132.114 include:spf.web-hosting.com include:spf.mandrillapp.com ~all

//v=spf1 mandrill_verify.3Qu0roEl1JNIQ3XevZtbLAv=spf1 +a +mx +ip4:66.29.132.113 +ip4:66.29.132.114 include:spf.web-hosting

// mandrill_verify.3Qu0roEl1JNIQ3XevZtbLA
// v=spf1 include:spf.mandrillapp.com ?all

// v=spf1 +a +mx +ip4:66.29.132.113 +ip4:66.29.132.114 include:spf.mandrillapp.com -all

export default subscribe
