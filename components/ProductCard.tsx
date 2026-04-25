import Link from 'next/link';
import type { Product } from '../lib/products';

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-slate-950/80 p-6 transition hover:-translate-y-1 hover:border-brand-400/70">
      <div className="mb-4 flex h-48 items-center justify-center rounded-3xl bg-brand-950/40">
        <span className="text-brand-200">{product.title}</span>
      </div>
      <h3 className="text-xl font-semibold text-white">{product.title}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-300">{product.description}</p>
      <div className="mt-4 flex flex-wrap gap-2 text-xs text-slate-400">
        <span className="rounded-full border border-white/10 px-3 py-1">{product.category}</span>
        <span className="rounded-full border border-white/10 px-3 py-1">{product.ageRange}</span>
      </div>
      <div className="mt-6 flex items-center justify-between gap-4">
        <span className="text-lg font-semibold text-white">${product.price.toFixed(2)}</span>
        <Link href={`/product/${product.slug}`} className="rounded-full bg-brand-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-brand-400">
          View
        </Link>
      </div>
    </div>
  );
}
