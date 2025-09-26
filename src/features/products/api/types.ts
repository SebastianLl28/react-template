import type { ProductDTO } from "../model/Product";

export type ProductsListDTO = {
  products: ProductDTO[];
  total: number;
  skip: number;
  limit: number;
};
