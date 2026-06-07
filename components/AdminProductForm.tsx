'use client';

import { useState, type ChangeEvent, type FormEvent } from 'react';

const initialState = {
  title: '',
  category: '',
  ageRange: '',
  material: '',
  price: '',
  description: '',
  slug: '',
};

export default function AdminProductForm() {
  const [form, setForm] = useState(initialState);
  const [status, setStatus] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      const response = await fetch('/api/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...form,
          price: Number(form.price),
        }),
      });

      const data = await response.json();
      if (!response.ok) {
        setStatus(data.error || 'Unable to add product');
        return;
      }

      setStatus(`Added product ${data.title} (${data.slug})`);
      setForm(initialState);
    } catch (error) {
      setStatus('Unable to add product. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 rounded-3xl border border-white/10 bg-slate-950/80 p-8">
      <div>
        <p className="text-sm uppercase tracking-[0.3em] text-brand-200">Admin portal</p>
        <h1 className="mt-3 text-3xl font-semibold text-white">Add a new product</h1>
        <p className="mt-2 text-sm leading-6 text-slate-400">
          Submit new product metadata to the product store. The API will generate a slug if one is not provided.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <label className="space-y-2 text-sm text-slate-300">
          <span>Title</span>
          <input
            name="title"
            value={form.title}
            onChange={handleChange}
            className="w-full rounded-3xl border border-white/10 bg-slate-900/80 px-4 py-3 text-sm text-white outline-none transition focus:border-brand-400"
          />
        </label>

        <label className="space-y-2 text-sm text-slate-300">
          <span>Slug (optional)</span>
          <input
            name="slug"
            value={form.slug}
            onChange={handleChange}
            className="w-full rounded-3xl border border-white/10 bg-slate-900/80 px-4 py-3 text-sm text-white outline-none transition focus:border-brand-400"
          />
        </label>

        <label className="space-y-2 text-sm text-slate-300">
          <span>Category</span>
          <input
            name="category"
            value={form.category}
            onChange={handleChange}
            className="w-full rounded-3xl border border-white/10 bg-slate-900/80 px-4 py-3 text-sm text-white outline-none transition focus:border-brand-400"
          />
        </label>

        <label className="space-y-2 text-sm text-slate-300">
          <span>Age range</span>
          <input
            name="ageRange"
            value={form.ageRange}
            onChange={handleChange}
            className="w-full rounded-3xl border border-white/10 bg-slate-900/80 px-4 py-3 text-sm text-white outline-none transition focus:border-brand-400"
          />
        </label>

        <label className="space-y-2 text-sm text-slate-300">
          <span>Material</span>
          <input
            name="material"
            value={form.material}
            onChange={handleChange}
            className="w-full rounded-3xl border border-white/10 bg-slate-900/80 px-4 py-3 text-sm text-white outline-none transition focus:border-brand-400"
          />
        </label>

        <label className="space-y-2 text-sm text-slate-300">
          <span>Price</span>
          <input
            name="price"
            type="number"
            step="0.01"
            value={form.price}
            onChange={handleChange}
            className="w-full rounded-3xl border border-white/10 bg-slate-900/80 px-4 py-3 text-sm text-white outline-none transition focus:border-brand-400"
          />
        </label>
      </div>

      <label className="space-y-2 text-sm text-slate-300">
        <span>Description</span>
        <textarea
          name="description"
          value={form.description}
          onChange={handleChange}
          rows={5}
          className="w-full rounded-3xl border border-white/10 bg-slate-900/80 px-4 py-3 text-sm text-white outline-none transition focus:border-brand-400"
        />
      </label>

      <button
        type="submit"
        disabled={loading}
        className="inline-flex items-center justify-center rounded-full bg-brand-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-400 disabled:cursor-not-allowed disabled:opacity-50"
      >
        {loading ? 'Adding product...' : 'Add product'}
      </button>

      {status ? <p className="text-sm text-slate-300">{status}</p> : null}
    </form>
  );
}
