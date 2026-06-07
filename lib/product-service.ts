import { prisma } from './db';
import type { Product } from './products';

function slugify(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

export async function getAllProducts(): Promise<Product[]> {
  const products = await prisma.product.findMany({
    orderBy: { createdAt: 'desc' },
  });
  return products.map((p) => ({
    slug: p.slug,
    title: p.title,
    category: p.category,
    ageRange: p.ageRange,
    material: p.material,
    price: p.price,
    description: p.description,
  }));
}

export async function getProductBySlug(slug: string): Promise<Product | null> {
  const product = await prisma.product.findUnique({
    where: { slug },
  });

  if (!product) return null;

  return {
    slug: product.slug,
    title: product.title,
    category: product.category,
    ageRange: product.ageRange,
    material: product.material,
    price: product.price,
    description: product.description,
  };
}

export type CreateProductPayload = Omit<Product, 'slug'> & {
  slug?: string;
};

export async function createProduct(payload: CreateProductPayload): Promise<Product> {
  const slug = payload.slug
    ? slugify(payload.slug)
    : slugify(payload.title || 'new-product');

  // Validate price
  if (payload.price < 0) {
    throw new Error('Price must be non-negative');
  }

  // Check if slug already exists
  const existing = await prisma.product.findUnique({
    where: { slug },
  });

  if (existing) {
    throw new Error(`Product slug already exists: ${slug}`);
  }

  const newProduct = await prisma.product.create({
    data: {
      slug,
      title: payload.title,
      category: payload.category,
      ageRange: payload.ageRange,
      material: payload.material,
      price: payload.price,
      description: payload.description,
    },
  });

  return {
    slug: newProduct.slug,
    title: newProduct.title,
    category: newProduct.category,
    ageRange: newProduct.ageRange,
    material: newProduct.material,
    price: newProduct.price,
    description: newProduct.description,
  };
}
