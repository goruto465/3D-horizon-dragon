import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black/80 text-white">
      <main className="mx-auto flex min-h-screen max-w-3xl flex-col items-center justify-center px-6 py-16 text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-brand-200">Page not found</p>
        <h1 className="mt-6 text-5xl font-semibold">Oops — this toy is still in development.</h1>
        <p className="mt-4 max-w-xl text-slate-300">
          The beta storefront is growing fast. Head back to the home page to browse current 3D products and previews.
        </p>
        <Link href="/" className="mt-8 inline-flex rounded-full bg-brand-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-400">
          Back to home
        </Link>
      </main>
    </div>
  );
}
