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

**Dependency rules**

- `shared` → must not depend on `features/pages/app`
- `features` → can use `shared`, must not import `app`
- `pages` → compose `features` + `shared`
- `app` → setup only (providers/router/layouts), no business logic

## 🧱 UI with shadcn

The shadcn CLI is configured to generate components in `src/shared/ui`.
You can tweak this in `components.json`.

Example:

```tsx
import { Button } from "@/shared/ui/button";
```

## 🌐 HTTP client

`src/shared/config/apiClient.ts` exports an Axios instance with `baseURL = VITE_API_URL`.
Response **normalization** is done per feature (mappers or via the hook `select`).

## 🧩 Feature pattern (example: `products`)

**DTOs (backend)**

```ts
// features/products/api/types.ts
export type ProductDTO = { id: number; title: string; price: number /* ... */ };
export type ProductsListDTO = {
  products: ProductDTO[];
  total: number;
  skip: number;
  limit: number;
};
```

**Mapper (DTO → domain)**

```ts
// features/products/api/product.mappers.ts
import type { ProductDTO } from "./types";
import type { Product } from "../model/Product";

export const toProduct = (dto: ProductDTO): Product => ({
  id: dto.id,
  title: dto.title,
  price: dto.price,
  // ...
});
```

**Query keys**

```ts
// features/products/api/product.keys.ts
export const PRODUCT_KEYS = {
  all: ["products"] as const,
  list: (q?: string) => ["products", "list", q ?? ""] as const,
  detail: (id: number) => ["products", "detail", id] as const,
};
```

**Hook (normalize with `select`)**

```ts
// features/products/hooks/queries.ts
import { useQuery } from "@tanstack/react-query";
import { PRODUCT_KEYS } from "../api/product.keys";
import { api } from "@/shared/config/apiClient";
import { toProduct } from "../api/product.mappers";
import type { ProductsListDTO } from "../api/types";

export function useProducts(q?: string) {
  return useQuery({
    queryKey: PRODUCT_KEYS.list(q),
    queryFn: async () => {
      const url = q
        ? `/products/search?q=${encodeURIComponent(q)}`
        : "/products";
      const { data } = await api.get<ProductsListDTO>(url);
      return data;
    },
    select: (dto) => ({
      items: dto.products.map(toProduct),
      total: dto.total,
      skip: dto.skip,
      limit: dto.limit,
    }),
    staleTime: 60_000,
  });
}
```

**UI**

```tsx
// features/products/ui/ProductCard.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/shared/ui/card";

export function ProductCard({
  title,
  price,
  thumbnail,
}: {
  title: string;
  price: number;
  thumbnail?: string;
}) {
  return (
    <Card className="overflow-hidden">
      {thumbnail ? (
        <img src={thumbnail} className="h-40 w-full object-cover" />
      ) : (
        <div className="h-40 bg-muted" />
      )}
      <CardHeader className="p-3">
        <CardTitle className="text-base line-clamp-1">{title}</CardTitle>
      </CardHeader>
      <CardContent className="px-3 pb-3 text-sm text-muted-foreground">
        S/ {price.toFixed(2)}
      </CardContent>
    </Card>
  );
}
```

## ➕ Create a new feature (checklist)

1. `features/<feature>/api/`: `types.ts`, `<feature>.mappers.ts`, `<feature>.keys.ts`, `<feature>.api.ts`
2. `features/<feature>/model/`: domain types and `*.store.ts` (Zustand) if needed
3. `features/<feature>/hooks/`: `queries.ts` / `mutations.ts`
4. `features/<feature>/ui/`: presentational components
5. `features/<feature>/pages/`: feature pages (optional)
6. `features/<feature>/index.ts`: public barrel
7. Add the route in `app/route/routes.tsx`

## 📜 License

MIT (see `LICENSE`).

## 🙌 Contributing

PRs and suggestions are welcome. Please keep the folder/layer conventions and the API mappers in `api/` so the UI stays decoupled from the backend.
