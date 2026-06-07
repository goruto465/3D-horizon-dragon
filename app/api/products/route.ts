import { NextResponse } from 'next/server';
import { createProduct, getAllProducts } from '../../../lib/product-service';

export async function GET() {
  const products = await getAllProducts();
  return NextResponse.json(products);
}

export async function POST(request: Request) {
  try {
    const payload = await request.json();
    const requiredFields = ['title', 'category', 'ageRange', 'material', 'price', 'description'];

    for (const field of requiredFields) {
      if (!payload[field]) {
        return NextResponse.json({ error: `Missing required field: ${field}` }, { status: 400 });
      }
    }

    const newProduct = await createProduct(payload);
    return NextResponse.json(newProduct, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Unable to create product' },
      { status: 500 }
    );
  }
}
