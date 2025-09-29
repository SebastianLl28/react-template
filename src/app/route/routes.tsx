import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import NotFoundPage from "@/pages/NotFoundPage";
import authRoute from "@/features/auth/route";
import productRoute from "@/features/products/route";

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      { index: true, element: <div>Home</div> },
      ...productRoute,
      ...authRoute,
      { path: "*", element: <NotFoundPage /> },
    ],
  },
]);
