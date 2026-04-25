import ProductCard from '../../components/ProductCard';
import { products } from '../../lib/products';

export default function CatalogPage() {
  return (
    <div className="min-h-screen bg-black/80 text-white">
      <main className="mx-auto max-w-7xl px-6 py-10 lg:px-12">
        <div className="mb-10 space-y-4">
          <p className="text-sm uppercase tracking-[0.3em] text-brand-200">Product Catalog</p>
          <h1 className="text-4xl font-semibold">Browse our 3D toy shop inventory</h1>
          <p className="max-w-2xl text-slate-300">
            Filter by category, age, material, or price to find the perfect model for your next print.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </main>
    </div>
  );
}
