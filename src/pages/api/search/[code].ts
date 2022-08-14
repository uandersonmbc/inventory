// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://go-upc.com/api',
});
type Data = {
  name: string;
};

export default async function  handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { data } = await api.get(`/v1/code/${req.query.code}`);
  res.status(200).json({ ...data });
}
``