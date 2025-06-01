'use client';

import { useEffect, useState } from 'react';
import CarCard from '@/components/CarCard';

export default function Home() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetch('/api/cars')
      .then(res => res.json())
      .then(data => setCars(data));
  }, []);

  return (
    <main className="min-h-screen p-6 bg-gray-900 text-white grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {cars.map((car: any) => <CarCard key={car.id} car={car} />)}
    </main>
  );
}
