import apiClient from "@/shared/config/apiClient";
import { PRODUCTS_ENDPOINT } from "@/shared/config/endpoint";
import type { ProductsResponse } from "./types";

export const getProducts = async () =>
  await apiClient
    .get<ProductsResponse>(PRODUCTS_ENDPOINT)
    .then((res) => res.data);
