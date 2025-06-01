'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AddCarForm() {
  const [form, setForm] = useState({ name: '', id: '', year: '', cc: '', fuel: '', usage: '', price: '', description: '', image: '' });
  const [uploading, setUploading] = useState(false);
  const router = useRouter();

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleImageUpload = async (e: any) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append('file', file);
    setUploading(true);
    const res = await fetch('/api/upload', {
      method: 'POST',
      body: formData,
    });
    const data = await res.json();
    setForm({ ...form, image: data.url });
    setUploading(false);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const res = await fetch('/api/cars/index', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...form, images: [form.image] }),
    });
    if (res.ok) {
      router.push('/');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3 max-w-lg">
      <input name="id" placeholder="Slug ID" className="w-full p-2 bg-gray-800 rounded" onChange={handleChange} required />
      <input name="name" placeholder="Car Name" className="w-full p-2 bg-gray-800 rounded" onChange={handleChange} required />
      <input name="year" placeholder="Year" className="w-full p-2 bg-gray-800 rounded" onChange={handleChange} required />
      <input name="cc" placeholder="CC" className="w-full p-2 bg-gray-800 rounded" onChange={handleChange} required />
      <input name="fuel" placeholder="Fuel" className="w-full p-2 bg-gray-800 rounded" onChange={handleChange} required />
      <input name="usage" placeholder="Usage" className="w-full p-2 bg-gray-800 rounded" onChange={handleChange} required />
      <input name="price" placeholder="Price" className="w-full p-2 bg-gray-800 rounded" onChange={handleChange} required />
      <textarea name="description" placeholder="Description" className="w-full p-2 bg-gray-800 rounded" onChange={handleChange} required />
      <input type="file" onChange={handleImageUpload} />
      {uploading && <p className="text-gray-400 text-sm">Uploading...</p>}
      <button type="submit" className="bg-green-600 px-4 py-2 rounded">Submit</button>
    </form>
  );
}
