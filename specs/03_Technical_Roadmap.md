# Technical Roadmap: Building the 3D Shop

This guide outlines the tools needed to bring a 3D-heavy website to life.

## 1. The Frontend Stack
* **Framework:** [Next.js](https://nextjs.org/) for SEO and fast loading.
* **3D Rendering:** [React Three Fiber](https://docs.pmnd.rs/react-three-fiber) (a React wrapper for Three.js).
* **Styling:** Tailwind CSS for a modern, responsive layout.

## 2. The 3D Engine Requirements
* **File Formats:** Use **GLB/GLTF** for the web. They are much lighter than STL and support colors/textures.
* **Optimization:** Use tools like `gltf-pipeline` to compress models so the site doesn't lag.
* **Interactivity:** Implement "Orbital Controls" so users can rotate and zoom on the toys.

## 3. Backend & E-commerce
* **Platform:** [Shopify Headless](https://www.shopify.com/headless) or [MedusaJS](https://medusajs.com/) (Open Source).
* **Payments:** Stripe or PayPal.
* **Database:** PostgreSQL for storing custom user configurations.

## 4. Hosting
* **Vercel:** Optimized for Next.js and 3D asset delivery.

## Phase plan

### Phase 1 — Product catalog with backend product store
* Build a product service that reads and writes product metadata from a centralized store.
* Expose a product API at `/api/products` and `/api/products/[slug]`.
* Render the catalog and product pages from the backend product store instead of hard-coded page data.
* Add a simple admin portal at `/admin` that can submit new products to the product store.
* Keep order/cart workflows out of Phase 1.

### Phase 2 — Role-based login for producers and buyers
* Add authentication and separate producer and buyer sessions.
* Builders/producers should access a producer dashboard for product submission and production status.
* Buyers should access a storefront view with product browsing and cart interaction.
* Keep the Phase 2 model focused on roles and access control, not yet on order fulfilment.

### Phase 3 — Producer selection and build planning
* Add producer-specific product visibility and selection.
* Producers choose which products they want to build or manufacture.
* Add producer-managed inventory, build queues, and status updates.
* Connect producer choices with buyer requests in the next phase.
