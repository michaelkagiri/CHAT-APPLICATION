// app/vehicles/[slug]/page.tsx
import CarDetail from '@/components/CarDetail';
import { cars } from '@/data/cars';

export default function CarPage({ params }: { params: { slug: string } }) {
  const car = cars.find(c => c.id === params.slug);
  if (!car) return <div className="text-white p-8">Vehicle not found.</div>;
  return <CarDetail car={car} />;
}
