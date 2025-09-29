# React Feature Template

An opinionated **React + Vite + TypeScript (SWC)** template with a **feature-based architecture**, **Tailwind v4**, and **shadcn/ui**. It includes **TanStack Query** for server state, **Axios** as the HTTP client, routing with **React Router**, and an example `products` feature consuming a public API.

## 🚀 Stack

- **React 19** + **Vite** + **TypeScript (SWC)**
- **Tailwind v4** + **shadcn/ui** (components generated into `src/shared/ui`)
- **TanStack Query** (data caching/invalidations)
- **Axios** (HTTP client with interceptors)
- **Feature-based architecture**: `api / model / hooks / ui / pages`
- Global providers (React Query, Toaster) and routing via `react-router-dom`

## 📦 Requirements

- Node 20+
- package manager: `pnpm` (recommended), `npm`, or `yarn`

## 🧰 Scripts

```bash
pnpm i            # install deps
pnpm dev          # dev mode
pnpm build        # typecheck + vite build
pnpm preview      # serve built app locally
pnpm lint         # run eslint
```

## 🔧 Environment variables

Create a `.env` (or use `.env.example`):

```
VITE_API_URL=https://dummyjson.com
```

> Update `VITE_API_URL` when pointing to your real backend.

## 🗂️ Project structure

```
src/
  app/                     # providers, layouts, router
    layouts/
    providers/
    route/
  shared/                  # cross-cutting library (no business logic)
    config/                # apiClient, env, constants, paths
    hooks/                 # global hooks (add as needed)
    lib/                   # utils (cn, helpers)
    types/                 # global types (ApiResponse, etc.)
    ui/                    # UI (shadcn/ui generated)
  features/
    products/              # sample feature
      api/                 # calls + mappers + query keys + DTOs
      model/               # domain types / stores
      hooks/               # React Query hooks (queries/mutations)
      ui/                  # presentational components
      pages/               # feature pages
      index.ts             # public barrel
  pages/                   # global pages (404, etc.)
  styles/                  # Tailwind entry
  main.tsx                 # bootstrap (providers + router)
```

## 📐 Types and Models Architecture

In this project we differentiate between **DTOs, Entities, Mappers, and View Models** to keep the application scalable and maintainable:

### 🔹 **DTOs (Data Transfer Objects)**

- **Plain interfaces or types**.
- Represent how data is transferred between **frontend ↔ backend**.
- **Contain no logic**, only structure.

Example:

```ts
export type ProductDTO = {
  id: number;
  title: string;
  price: number;
  discountPercentage: number;
};
```

---

### 🔹 **Entities**

- Represent the **business core** on the frontend.
- Implemented as **classes** that encapsulate **business rules, calculations, and invariants**.
- Independent from API or UI, so they are reusable and testable.

Example:

```ts
class Product {
  constructor(
    public readonly id: number,
    public title: string,
    public price: number,
    public discountPercentage: number
  ) {}

  get discountedPrice(): number {
    return this.price * (1 - this.discountPercentage / 100);
  }

  get isExpensive(): boolean {
    return this.price > 1000;
  }
}
```

---

### 🔹 **Mappers**

- Responsible for **transforming DTOs into Entities** and vice versa.
- Handle **format conversion only**, not business logic.

Example:

```ts
export const toProductEntity = (dto: ProductDTO): Product =>
  new Product(dto.id, dto.title, dto.price, dto.discountPercentage);
```

---

### 🔹 **View Models (optional)**

- Adapt an **Entity** to a specific view or component.
- Provide UI-ready props (formatted text, flags, labels).
- Contain **presentation logic only**, never business logic.

Example:

```ts
export type ProductCardVM = {
  title: string;
  formattedPrice: string;
  discounted: boolean;
};
```

---

### 🔹 **Full Flow (Scenarios)**

1. **Simple listing / read-only data**

   - No calculations, just showing backend data.
   - **Flow:**

   ```
   Backend (JSON) → DTO → Component
   ```

   Use DTOs directly, maybe with a mapper if you just want type safety.

2. **Formatting / presentation only**

   - You need to show labels, format dates, prices, etc.
   - **Flow:**

   ```
   Backend (JSON) → DTO → Mapper → ViewModel → Component
   ```

   Here you don’t need business rules, just presentation helpers.

3. **Business p>rules or calculations**

   - You need logic like discounts, stock validation, domain rules.
   - **Flow:**

   ```
   Backend (JSON) → DTO → Mapper → Entity → Component
   ```

   Entities encapsulate rules (`discountedPrice`, `canAddToCart`, etc.).

4. **Complex + UI adaptation**

   - Both **business rules** and **presentation logic** are needed.
   - **Flow:**

   ```
   Backend (JSON) → DTO → Mapper → Entity → ViewModel → Component
   ```

   Example: Cart total (Entity rule) + “formatted currency” (ViewModel).

## 📜 License

MIT (see `LICENSE`).

## 🙌 Contributing

PRs and suggestions are welcome. Please keep the folder/layer conventions and the API mappers in `api/` so the UI stays decoupled from the backend.
