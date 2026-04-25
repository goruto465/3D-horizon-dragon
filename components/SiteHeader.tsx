import Link from 'next/link';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Catalog', href: '/catalog' },
  { label: 'Lab', href: '/lab' },
  { label: 'About', href: '/about' },
];

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-12">
        <Link href="/" className="text-lg font-semibold text-white">
          3D Horizon Dragon
        </Link>
        <nav className="flex items-center gap-6 text-sm text-slate-300">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-white">
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
