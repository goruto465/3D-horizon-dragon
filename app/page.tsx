import Link from 'next/link';
import ModelViewer from '../components/ModelViewer';
import { featuredCategories } from '../lib/products';

export default function HomePage() {
  return (
    <main className="min-h-screen px-6 py-8 lg:px-12">
      <section className="mx-auto max-w-7xl rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-xl">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl space-y-6">
            <p className="inline-flex rounded-full border border-brand-500/40 bg-brand-500/10 px-4 py-2 text-sm text-brand-100">
              Beta Launch
            </p>
            <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              3D Horizon Dragon — a playful 3D toy shop.
            </h1>
            <p className="text-lg text-slate-300">
              Explore interactive toys, customize color and size, and build your first model order with a fast, modern storefront.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link href="/catalog" className="rounded-full bg-brand-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-400">
                Browse catalog
              </Link>
              <Link href="/lab" className="rounded-full border border-slate-700 px-6 py-3 text-sm text-slate-200 transition hover:border-brand-400">
                Open customization lab
              </Link>
            </div>
          </div>
          <div className="w-full max-w-2xl rounded-3xl border border-white/10 bg-slate-950/80 p-4 shadow-xl">
            <div className="h-[420px] rounded-3xl bg-slate-900/80 p-4">
              <ModelViewer />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-10 max-w-7xl space-y-6">
        <div className="grid gap-6 lg:grid-cols-3">
          {featuredCategories.map((category) => (
            <article key={category.title} className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h2 className="text-xl font-semibold text-white">{category.title}</h2>
              <p className="mt-3 text-slate-300">{category.description}</p>
              <div className="mt-4 text-sm text-brand-200">{category.cta}</div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
