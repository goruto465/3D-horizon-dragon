# Website Architecture & User Experience

A 3D toy shop requires a specific layout to handle interactive models.

## 1. Core Pages
1.  **Landing Page (Home):**
    * Hero section with a rotating 3D model (using Three.js).
    * Featured categories (Articulated, Action Figures, Puzzles).
    * "How it Works" section (Design -> Print -> Play).
2.  **Product Catalog:**
    * Filter by: Category, Age, Printing Material, Price.
    * Search bar with autocomplete.
3.  **The 3D Viewer (Product Page):**
    * Interactive 3D preview window.
    * Customization options (Color picker, size selection).
    * Material specifications (e.g., "Bio-degradable PLA").
4.  **Customizer / Lab:**
    * A tool where users can upload their own STL files or modify existing ones.
5.  **About / Sustainability:**
    * Explaining the benefit of on-demand manufacturing (less waste).

## 2. User Journey
* **Discovery:** User lands on Home, sees a 3D dragon rotating.
* **Interaction:** User clicks the dragon, enters the Product Page, and changes its color to "Galaxy Blue."
* **Conversion:** User sees a real-time price update and adds to cart.
* **Fulfillment:** User receives an automated email when the 3D printer starts their specific job.
