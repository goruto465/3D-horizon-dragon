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
