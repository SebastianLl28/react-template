import { createBrowserRouter } from "react-router-dom";
import NotFoundPage from "@/pages/NotFoundPage";
import MainLayout from "../layouts/MainLayout";
import ProductsPage from "@/features/products/pages/ProductsPage";

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      { index: true, element: <div>Home</div> },
      { path: "/products", element: <ProductsPage /> },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
]);
