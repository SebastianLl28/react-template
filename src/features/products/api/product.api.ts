import apiClient from "@/shared/config/apiClient";
import type { ProductsListDTO } from "./types";

export const getProducts = async () =>
  await apiClient.get<ProductsListDTO>("/products").then((res) => res.data);
