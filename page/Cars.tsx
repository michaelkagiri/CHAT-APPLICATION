"use client"

import CarCard from "@/components/CarCard";
import { Car } from "@/types/Car";
import { useState } from "react";

const dummyCars: Car[] = [
  {
    id: "1",
    name: "Toyota Vitz",
    price: 650000,
    brand: "Toyota",
    bodyType: "Hatchback",
    image: "/vitz.png", // put image in public folder or use placeholder
  },
  {
    id: "2",
    name: "Mazda Demio",
    price: 850000,
    brand: "Mazda",
    bodyType: "Hatchback",
    image: "/demio.png",
  },
  {
    id: "3",
    name: "Land Cruiser",
    price: 7200000,
    brand: "Toyota",
    bodyType: "SUV",
    image: "/cruiser.png",
  },
];

export default function CarsPage() {
  const [cars] = useState<Car[]>(dummyCars);

  return (
    <div className="min-h-screen bg-white text-black p-6">
      <h1 className="text-2xl font-bold mb-6">Posted Cars</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {cars.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>
    </div>
  );
}
