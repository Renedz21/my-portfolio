import type { NextApiRequest, NextApiResponse } from 'next'
import { query } from '../../../lib/query'
type Props = {}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Props>
) {
    const data = await query();
    res.status(200).json(data)
}