// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  message: string
}

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>): void {
  if (req.method === 'POST') {
    // Process a POST request
    res.status(200).json({ message: 'John Doe' })
  } else {
    res.status(405).json({ message: 'Invalid method' })
  }
}
