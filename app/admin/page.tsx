import AdminProductForm from '../../components/AdminProductForm';

export default function AdminPage() {
  return (
    <div className="min-h-screen bg-black/80 text-white">
      <main className="mx-auto max-w-5xl px-6 py-10 lg:px-12">
        <div className="mb-10 space-y-4">
          <p className="text-sm uppercase tracking-[0.3em] text-brand-200">Admin Portal</p>
          <h1 className="text-4xl font-semibold">Manage product inventory</h1>
          <p className="max-w-2xl text-slate-300">
            Add new products to the store and keep the product backend linked to the shared product data source.
          </p>
        </div>
        <AdminProductForm />
      </main>
    </div>
  );
}
