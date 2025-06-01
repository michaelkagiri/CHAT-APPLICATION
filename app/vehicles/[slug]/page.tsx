'use client';

import { useEffect, useState } from 'react';

export default function CarPage({ params }: { params: { slug: string } }) {
  const [car, setCar] = useState<any>(null);

  useEffect(() => {
    fetch(`/api/cars/${params.slug}`)
      .then(res => res.json())
      .then(setCar);
  }, [params.slug]);

  if (!car) return <p className="p-6 text-white">Loading...</p>;

  return (
    <div className="p-6 text-white bg-gray-900 min-h-screen">
      <img src={car.images[0]} className="w-full h-80 object-cover rounded mb-4" />
      <h1 className="text-2xl font-bold">{car.name}</h1>
      <p>{car.year} | {car.cc} | {car.fuel} | {car.usage}</p>
      <p className="text-xl font-semibold mt-2">{car.price}</p>
      <p className="mt-4">{car.description}</p>
    </div>
  );
}
