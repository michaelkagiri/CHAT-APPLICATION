// app/page.tsx
import { cars } from '@/data/cars';
import CarCard from '@/components/CarCard';

export default function Content() {
  return (
    <main className="p-25 grid md:grid-cols-4 gap-2 bg-white text-black">
      {cars.map(car => (
        <CarCard key={car.id} car={car} />
      ))}
    </main>
  );
}
