// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import db from '../../utils/db'

type Data = {
  data: ListItem[]
}

type ListItem = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const items = await db.collection('items').get();
  const list = items.docs.map((item) => item.data() as ListItem)
  res.status(200).json({ data: list })
}
