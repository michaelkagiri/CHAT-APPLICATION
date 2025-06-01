import type { NextApiRequest, NextApiResponse } from 'next';
import { connectDB } from '@/libs/db';
import Car from '@/model/model';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await connectDB();

  try {
    if (req.method === 'POST') {
      const car = await Car.create(req.body);
      return res.status(201).json(car);
    }

    if (req.method === 'GET') {
      const cars = await Car.find().sort({ createdAt: -1 });
      return res.status(200).json(cars);
    }

    res.setHeader('Allow', ['GET', 'POST']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  } catch (error: any) {
    console.error('API error:', error);
    return res.status(500).json({ error: 'Server error' });
  }
}