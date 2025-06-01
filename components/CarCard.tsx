// components/CarCard.tsx
'use client';

import Link from 'next/link';

export default function CarCard({ car }: { car: any }) {
  return (
    <div className="rounded-2xl border overflow-hidden">
      <img src={car.images[0]} alt={car.name} className="w-full h-56 object-cover" />
      <div className="p-2 space-y-2">
        <p className="text-sm text-black">{car.year}</p>
        <h2 className="text-lg font-bold">{car.name}</h2>
        <div className="flex flex-wrap gap-2 text-xs text-white">
          <span className="bg-black px-2 py-1 rounded">{car.fuel}</span>
          <span className="bg-black px-2 py-1 rounded">{car.cc}</span>
          <span className="bg-black px-2 py-1 rounded">{car.usage}</span>
        </div>
        <p className="mt-2 font-bold">{car.price}</p>
        <Link href={`/vehicles/${car.id}`}>
          <button className="bg-green-600 text-white mt-3 px-4 py-1 rounded hover:bg-green-700">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
}
