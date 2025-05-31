// components/CarCard.tsx
import { Car } from "@/types/Car";
import Link from "next/link";

interface Props {
  car: Car;
}

export default function CarCard({ car }: Props) {
  return (
    <Link href={`/cars/${car.id}`}>
      <div className="bg-white text-black border rounded-md shadow-md overflow-hidden hover:scale-105 transition-transform cursor-pointer">
        <img
          src={car.image || "/placeholder-car.png"}
          alt={car.name}
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h3 className="text-xl font-semibold">{car.name}</h3>
          <p className="text-sm text-gray-400">{car.brand || "Unknown Brand"}</p>
          <p className="mt-2 text-lg font-bold text-black">
            KES {car.price.toLocaleString()}
          </p>
          <p className="text-xs text-gray-500">{car.bodyType || "No Type"}</p>
        </div>
      </div>
    </Link>
  );
}
