// pages/api/cars/index.ts

import { connectDB } from '@/libs/db';
import Car from '@/model/model';

export default async function handler(req, res) {
  await connectDB();

  if (req.method === 'POST') {
    const car = await Car.create(req.body);
    return res.status(201).json(car);
  }

  if (req.method === 'GET') {
    const cars = await Car.find().sort({ createdAt: -1 });
    return res.status(200).json(cars);
  }

  res.status(405).end(); // Method Not Allowed
}
