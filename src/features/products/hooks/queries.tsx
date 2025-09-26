import { useQuery } from "@tanstack/react-query";
import { PRODUCT_KEYS } from "../api/product.keys";
import { getProducts } from "../api/product.api";
import { toProduct } from "../api/product.mappers";

export const useGetProducts = () =>
  useQuery({
    queryKey: PRODUCT_KEYS.all,
    queryFn: getProducts,
    select: (data) => ({
      ...data,
      products: data.products.map(toProduct),
    }),
  });
