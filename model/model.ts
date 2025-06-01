// models/Car.ts
import mongoose from 'mongoose';

const CarSchema = new mongoose.Schema({
  id: String,
  name: String,
  year: String,
  cc: String,
  fuel: String,
  usage: String,
  price: String,
  description: String,
  images: [String],
}, { timestamps: true });

export default mongoose.models.Car || mongoose.model('Car', CarSchema);
