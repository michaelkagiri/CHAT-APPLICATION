// pages/api/cars/[id].ts
import { connectDB } from '@/libs/db';
import Car from '@/model/model';

export default async function handler(req, res) {
  await connectDB();

  const { id } = req.query;

  const car = await Car.findOne({ id });
  if (!car) return res.status(404).json({ error: 'Not found' });

  return res.status(200).json(car);
}
