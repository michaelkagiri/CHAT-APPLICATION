// components/CarDetail.tsx
export default function CarDetail({ car }: { car: any }) {
  return (
    <div className="p-8 bg-gray-900 text-white min-h-screen">
      <h1 className="text-2xl font-bold mb-4">{car.name}</h1>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-4">
          {car.images.map((src: string, i: number) => (
            <img key={i} src={src} alt={`Car image ${i}`} className="w-full rounded-lg" />
          ))}
        </div>
        <div>
          <p>{car.description}</p>
          <div className="mt-4 space-y-2">
            <p><strong>Year:</strong> {car.year}</p>
            <p><strong>Engine:</strong> {car.cc}</p>
            <p><strong>Fuel:</strong> {car.fuel}</p>
            <p><strong>Usage:</strong> {car.usage}</p>
            <p><strong>Stock:</strong> {car.stock}</p>
            <p className="font-bold text-lg mt-4">{car.price}</p>
            <button className="bg-green-600 mt-4 px-4 py-2 rounded hover:bg-green-700">
              Enquire via WhatsApp
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
