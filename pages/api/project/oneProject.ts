import type { NextApiRequest, NextApiResponse } from 'next'
import { getOneQuery } from '../../../lib/query'
type Props = {}

export default async function handler(id: string) {
    const data = await getOneQuery(id);
    console.log(data)
    // res.status(200).json(data)
}