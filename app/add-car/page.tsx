// app/add-car/page.tsx
import AddCarForm from '@/components/AddCar';

export default function AddCarPage() {
  return (
    <main className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Add a New Car</h1>
      <AddCarForm />
    </main>
  );
}
