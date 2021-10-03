// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import * as hubspot from '@hubspot/api-client'
import { eventTemplateIds } from '../../../utils/constans'
const hubspotClient = new hubspot.Client({})

type Data = {
  message: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
): Promise<void> {
  if (req.method === 'POST') {
    const isValidWebhookCall = hubspotClient.webhooks.validateSignature('', '', req.body)
    if (!isValidWebhookCall) {
      res.status(403).json({ message: 'Forbidden' })
    }
    const tokens = {
      notification_title: 'Art3mis',
      notification_body: '',
    }

    const TimelineEvent = {
      eventTemplateId: eventTemplateIds.sentNotification,
      email: 'art3mis-pup@petspot.com',
      tokens,
      id: 'undefined',
    }

    try {
      const apiResponse = await hubspotClient.crm.timeline.eventsApi.create(TimelineEvent)
      console.log(JSON.stringify(apiResponse.body, null, 2))
    } catch (e) {
      console.log('error', e)
    }
    // Process a POST request
    res.status(200).json({ message: 'John Doe' })
  } else {
    res.status(405).json({ message: 'Invalid method' })
  }
}
