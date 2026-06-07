import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding database with existing products...');

  // Existing products from data/products.json
  const products = [
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

  for (const product of products) {
    const existing = await prisma.product.findUnique({
      where: { slug: product.slug },
    });

    if (!existing) {
      await prisma.product.create({
        data: product,
      });
      console.log(`Created product: ${product.title}`);
    } else {
      console.log(`Product already exists: ${product.title}`);
    }
  }

  console.log('Seeding completed!');
}

main()
  .catch((e) => {
    console.error('Error seeding database:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
