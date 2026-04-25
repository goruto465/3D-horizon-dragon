export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black/80 text-white">
      <main className="mx-auto max-w-5xl px-6 py-10 lg:px-12">
        <section className="space-y-6 rounded-3xl border border-white/10 bg-white/5 p-8">
          <h1 className="text-4xl font-semibold">About 3D Horizon Dragon</h1>
          <p className="text-slate-300">
            This beta app brings the 3D toy shop vision to life with a fast, immersive storefront and interactive model preview. The initial release focuses on product browsing, a responsive catalog, and a demo 3D viewer.
          </p>
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-slate-950/80 p-6">
              <h2 className="text-xl font-semibold text-white">Mission</h2>
              <p className="mt-3 text-slate-300">Make 3D printed toys feel accessible, magical, and easy to customize for every family.</p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-slate-950/80 p-6">
              <h2 className="text-xl font-semibold text-white">Technology</h2>
              <p className="mt-3 text-slate-300">Built with Next.js, React Three Fiber, and Tailwind CSS for fast loading and engaging interactive previews.</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
