export type Product = {
  slug: string;
  title: string;
  category: string;
  ageRange: string;
  material: string;
  price: number;
  description: string;
};

export const featuredCategories = [
  {
    title: 'Articulated Critters',
    description: 'Print-in-place toy animals that move right out of the box.',
    cta: 'Flexible, tactile, and ready to play.',
  },
  {
    title: 'Modular Building Blocks',
    description: 'Custom pieces that snap together for infinite builds.',
    cta: 'Design your own castles, stations, and marble runs.',
  },
  {
    title: 'Personalized Figures',
    description: 'Mini heroes and trophies made for your name or story.',
    cta: 'Pick a pose, color, and size for the perfect gift.',
  },
];

export const products: Product[] = [
  {
    slug: 'dragon-guardian',
    title: 'Dragon Guardian',
    category: 'Articulated Critters',
    ageRange: '8+',
    material: 'Bio-degradable PLA',
    price: 29.99,
    description: 'A poseable dragon with movable wings and a playful expression.',
  },
  {
    slug: 'space-snap-kit',
    title: 'Space Snap Kit',
    category: 'Modular Building Blocks',
    ageRange: '10+',
    material: 'PLA Blend',
    price: 24.5,
    description: 'Modular space station pieces that snap together and expand.',
  },
  {
    slug: 'hero-mini-me',
    title: 'Hero Mini-Me',
    category: 'Personalized Figures',
    ageRange: '6+',
    material: 'PLA',
    price: 22.0,
    description: 'A personalized hero figure with interchangeable head and cape.',
  },
];

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug) ?? null;
}
