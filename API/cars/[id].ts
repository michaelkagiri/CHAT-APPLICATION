import type { NextApiRequest, NextApiResponse } from 'next';
import { connectDB } from '@/libs/db';
import Car from '@/model/model';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await connectDB();

  const { id } = req.query;

  try {
    const car = await Car.findOne({ id }); // Use {_id: id} if you're querying MongoDB's _id
    if (!car) return res.status(404).json({ error: 'Car not found' });

    return res.status(200).json(car);
  } catch (error: any) {
    console.error('Error fetching car:', error);
    return res.status(500).json({ error: 'Server error' });
  }
}
