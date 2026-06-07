import { notFound } from 'next/navigation';
import ModelViewer from '../../../components/ModelViewer';
import { getProductBySlug } from '../../../lib/product-service';

type PageProps = {
  params: {
    slug: string;
  };
};

export default async function ProductPage({ params }: PageProps) {
  const product = await getProductBySlug(params.slug);
  if (!product) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-black/80 text-white">
      <main className="mx-auto max-w-7xl px-6 py-10 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <section className="space-y-6">
            <p className="text-sm uppercase tracking-[0.3em] text-brand-200">{product.category}</p>
            <h1 className="text-4xl font-semibold">{product.title}</h1>
            <p className="max-w-2xl text-slate-300">{product.description}</p>
            <div className="flex flex-wrap gap-4 text-sm text-slate-300">
              <span className="rounded-full border border-white/10 px-3 py-2">Age {product.ageRange}</span>
              <span className="rounded-full border border-white/10 px-3 py-2">Material: {product.material}</span>
              <span className="rounded-full border border-white/10 px-3 py-2">Price: ${product.price.toFixed(2)}</span>
            </div>
            <div className="rounded-3xl border border-white/10 bg-slate-950/80 p-6">
              <h2 className="text-xl font-semibold text-white">Customization</h2>
              <p className="mt-3 text-slate-300">Choose a color palette and size for your toy before adding it to the cart.</p>
              <div className="mt-6 flex flex-col gap-4 sm:flex-row">
                <button className="rounded-full bg-brand-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-400">
                  Galaxy Blue
                </button>
                <button className="rounded-full border border-white/10 px-5 py-3 text-sm text-slate-200 transition hover:border-brand-400">
                  Sunset Pink
                </button>
                <button className="rounded-full border border-white/10 px-5 py-3 text-sm text-slate-200 transition hover:border-brand-400">
                  Forest Green
                </button>
              </div>
            </div>
          </section>

          <aside className="space-y-6">
            <div className="rounded-3xl border border-white/10 bg-slate-950/80 p-4">
              <div className="h-[420px] rounded-3xl bg-slate-900/80 p-4">
                <ModelViewer />
              </div>
            </div>
            <div className="rounded-3xl border border-white/10 bg-slate-950/80 p-6">
              <p className="text-sm uppercase tracking-[0.3em] text-brand-200">Order</p>
              <div className="mt-5 space-y-3 text-slate-300">
                <p>Real-time price estimate and print readiness information will be available in the next beta update.</p>
                <button className="mt-4 w-full rounded-full bg-white/10 px-4 py-3 text-sm font-semibold text-white transition hover:bg-white/20">
                  Add to Cart
                </button>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}
