import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/shared/components/ui/card";
import { Button } from "@/shared/components/ui/button";
import type { ProductVM } from "../model/ProductCardVM";

interface ProductCardProps {
  product: ProductVM;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="overflow-hidden">
      {product.thumbnail ? (
        <img
          src={product.thumbnail}
          alt={product.title}
          className="h-40 w-full object-cover"
          loading="lazy"
        />
      ) : (
        <div className="h-40 w-full bg-muted" />
      )}

      <CardHeader className="p-3">
        <CardTitle className="text-base line-clamp-1">
          {product.title}
        </CardTitle>
      </CardHeader>

      <CardContent className="px-3 pb-0">
        <p className="text-sm text-muted-foreground">
          S/ {product.price.toFixed(2)}
        </p>
      </CardContent>

      <CardFooter className="p-3">
        <Button className="w-full" size="sm">
          Ver
        </Button>
      </CardFooter>
    </Card>
  );
}
