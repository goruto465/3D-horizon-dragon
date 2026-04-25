# Backend and Database Schema

## 1. Current architecture

Right now, the app is a front-end Next.js site with no real backend or database.

- Product data lives in `lib/products.ts` as a static array.
- Pages import that module directly and render from memory.
- There are no API routes, no persistence layer, and no database connection.

That means the app is currently a static/server-rendered storefront without any dynamic data storage.

## 2. Backend direction

For the next step, the app should use a real backend to:

- Store product inventory in a database
- Support product detail queries by slug or category
- Handle user carts and orders
- Persist customization selections
- Store uploaded model previews or user-created files

A good starter stack is:

- Next.js route handlers for backend APIs, or a dedicated Node/Express service
- PostgreSQL as the relational database
- A database access layer such as Prisma, Knex, or raw SQL

## 3. Data flow

1. Frontend requests product or catalog data from backend API routes.
2. Backend queries PostgreSQL and returns JSON.
3. Frontend renders the returned data.
4. Checkout/cart actions write orders and cart items to the database.

## 4. Initial database tables

### `categories`
- `id` UUID PRIMARY KEY
- `name` TEXT UNIQUE NOT NULL
- `description` TEXT
- `created_at` TIMESTAMP WITH TIME ZONE DEFAULT now()
- `updated_at` TIMESTAMP WITH TIME ZONE DEFAULT now()

### `products`
- `id` UUID PRIMARY KEY
- `slug` TEXT UNIQUE NOT NULL
- `title` TEXT NOT NULL
- `category_id` UUID REFERENCES `categories`(id) ON DELETE SET NULL
- `age_range` TEXT
- `material` TEXT
- `color` TEXT
- `price` NUMERIC(10,2) NOT NULL
- `description` TEXT
- `model_url` TEXT
- `image_url` TEXT
- `design_file_url` TEXT
- `quality` TEXT
- `is_active` BOOLEAN DEFAULT true
- `created_at` TIMESTAMP WITH TIME ZONE DEFAULT now()
- `updated_at` TIMESTAMP WITH TIME ZONE DEFAULT now()

### `product_customizations`
- `id` UUID PRIMARY KEY
- `product_id` UUID REFERENCES `products`(id) ON DELETE CASCADE
- `type` TEXT NOT NULL -- e.g. `color`, `size`, `material`
- `name` TEXT NOT NULL
- `value` TEXT NOT NULL
- `price_adjustment` NUMERIC(10,2) DEFAULT 0.00
- `metadata` JSONB
- `created_at` TIMESTAMP WITH TIME ZONE DEFAULT now()
- `updated_at` TIMESTAMP WITH TIME ZONE DEFAULT now()

### `customers`
- `id` UUID PRIMARY KEY
- `email` TEXT UNIQUE NOT NULL
- `name` TEXT
- `password_hash` TEXT
- `created_at` TIMESTAMP WITH TIME ZONE DEFAULT now()
- `updated_at` TIMESTAMP WITH TIME ZONE DEFAULT now()

### `producers`
- `id` UUID PRIMARY KEY
- `email` TEXT UNIQUE NOT NULL
- `name` TEXT
- `password_hash` TEXT
- `printer_brand` TEXT
- `printer_model` TEXT
- `is_active` BOOLEAN DEFAULT false
- `created_at` TIMESTAMP WITH TIME ZONE DEFAULT now()
- `updated_at` TIMESTAMP WITH TIME ZONE DEFAULT now()

### `orders`
- `id` UUID PRIMARY KEY
- `user_id` UUID REFERENCES `users`(id)
- `status` TEXT NOT NULL DEFAULT 'draft' -- values: `draft`, `pending`, `paid`, `fulfilled`, `cancelled`
- `total_amount` NUMERIC(10,2) NOT NULL DEFAULT 0.00
- `currency` TEXT NOT NULL DEFAULT 'USD'
- `shipping_address` JSONB
- `payment_provider` TEXT
- `payment_reference` TEXT
- `created_at` TIMESTAMP WITH TIME ZONE DEFAULT now()
- `updated_at` TIMESTAMP WITH TIME ZONE DEFAULT now()

### `order_items`
- `id` UUID PRIMARY KEY
- `order_id` UUID REFERENCES `orders`(id) ON DELETE CASCADE
- `product_id` UUID REFERENCES `products`(id)
- `quantity` INTEGER NOT NULL DEFAULT 1
- `unit_price` NUMERIC(10,2) NOT NULL
- `total_price` NUMERIC(10,2) NOT NULL
- `customization` JSONB
- `created_at` TIMESTAMP WITH TIME ZONE DEFAULT now()
- `updated_at` TIMESTAMP WITH TIME ZONE DEFAULT now()

### `cart_items` (optional starter table)
- `id` UUID PRIMARY KEY
- `user_id` UUID REFERENCES `users`(id)
- `product_id` UUID REFERENCES `products`(id)
- `quantity` INTEGER NOT NULL DEFAULT 1
- `customization` JSONB
- `created_at` TIMESTAMP WITH TIME ZONE DEFAULT now()
- `updated_at` TIMESTAMP WITH TIME ZONE DEFAULT now()

### `uploads`
- `id` UUID PRIMARY KEY
- `user_id` UUID REFERENCES `users`(id)
- `file_name` TEXT NOT NULL
- `file_url` TEXT NOT NULL
- `file_type` TEXT
- `status` TEXT NOT NULL DEFAULT 'pending' -- e.g. `pending`, `processed`, `failed`
- `metadata` JSONB
- `created_at` TIMESTAMP WITH TIME ZONE DEFAULT now()
- `updated_at` TIMESTAMP WITH TIME ZONE DEFAULT now()

## 5. How to migrate the current app

- Replace `lib/products.ts` with database-backed queries.
- Build a `lib/db.ts` or `lib/prisma.ts` file for DB access.
- Add API route handlers such as:
  - `app/api/products/route.ts`
  - `app/api/products/[slug]/route.ts`
  - `app/api/cart/route.ts`
  - `app/api/orders/route.ts`
- Update pages to fetch from APIs instead of importing static arrays.

## 6. Starter implementation path

1. Add PostgreSQL and Prisma (or another DB client).
2. Define the schema and run migrations.
3. Seed the `categories` and `products` tables from the existing static data.
4. Create simple GET endpoints for catalog and product detail.
5. Add cart/order persistence next.

## 7. Why this schema works for the beta

- `products` keeps the catalog inventory.
- `categories` decouples category metadata from products.
- `product_customizations` supports future color/size/material choices.
- `orders` + `order_items` give a foundation for checkout.
- `uploads` supports file upload preview and model storage.
