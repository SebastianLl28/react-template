import type { RouteObject } from "react-router-dom";
import ProductsPage from "./pages/ProductsPage";
import { PRODUCTS_PATH } from "@/app/route/path";

const productRoute: RouteObject[] = [
  {
    path: PRODUCTS_PATH,
    Component: ProductsPage,
    children: [],
  },
];

export default productRoute;
