import { useGetProducts } from "../hooks/queries";
import { ProductCard } from "../ui/ProductCard";
import { Input } from "@/shared/ui/input";
import { Button } from "@/shared/ui/button";
import ProductSkeletonCard from "../ui/ProductSkeletonCard";

export default function ProductsPage() {
  const { data, isLoading, isError, isFetching, refetch } = useGetProducts();
  const items = data?.products ?? [];

  return (
    <div className="space-y-4 relative">
      <header className="flex items-center gap-2">
        <h2 className="text-2xl font-bold">Products</h2>
        <div className="ml-auto flex gap-2">
          <Input placeholder="Buscar…" className="max-w-xs" />
          <Button type="button" variant="secondary" onClick={() => refetch()}>
            Recargar
          </Button>
        </div>
      </header>

      {/* Primera carga: skeletons (pocos y compactos) */}
      {isLoading && (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <ProductSkeletonCard key={i} />
          ))}
        </div>
      )}

      {/* Error */}
      {isError && (
        <div className="text-sm text-red-500">
          Ocurrió un error al cargar los productos.
        </div>
      )}

      {/* Contenido */}
      {!isLoading && !isError && (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 relative">
          {items.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}

          {/* Recarga silenciosa: overlay sutil mientras isFetching */}
          {isFetching && (
            <div className="absolute inset-0 bg-background/40 backdrop-blur-[1px] pointer-events-none rounded-xl">
              <div className="absolute left-0 right-0 top-0 h-0.5 bg-primary/60 animate-pulse" />
            </div>
          )}
        </div>
      )}
    </div>
  );
}
