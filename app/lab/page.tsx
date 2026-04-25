export default function LabPage() {
  return (
    <div className="min-h-screen bg-black/80 text-white">
      <main className="mx-auto max-w-5xl px-6 py-10 lg:px-12">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h1 className="text-4xl font-semibold">Customizer Lab</h1>
          <p className="mt-4 text-slate-300">
            Upload your own STL file, apply a color scheme, or personalize an existing design.
          </p>
          <div className="mt-8 space-y-6">
            <div className="rounded-3xl border border-white/10 bg-slate-950/80 p-6">
              <label className="block text-sm font-semibold text-slate-200">Upload STL or GLB</label>
              <input type="file" accept=".stl,.glb,.gltf" className="mt-3 w-full rounded-2xl border border-white/10 bg-slate-900/90 px-4 py-3 text-sm text-slate-100" />
            </div>
            <div className="rounded-3xl border border-white/10 bg-slate-950/80 p-6">
              <h2 className="text-xl font-semibold text-white">Coming soon</h2>
              <p className="mt-3 text-slate-300">Live model editing, color themes, and instant 3D previews are part of the next beta milestone.</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
