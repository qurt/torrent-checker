// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { db } from '../../utils/db'

type Data = {
  data: ListItem[]
}

export type ListItem = {
  name: string,
  source_folder: string,
  season: number,
  studio: string,
  url: string,
  seriesDowload: number,
  seriesTotal: number
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const items = await db.collection('items').get();
  const list = items.docs.map((item) => item.data() as ListItem)
  res.status(200).json({ data: list })
}
