import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.css";
import QueryProvider from "./app/providers/react-query.tsx";
import ToasterProvider from "./app/providers/toaster.tsx";
import { RouterProvider } from "react-router-dom";
import { router } from "./app/route/routes.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryProvider>
      <ToasterProvider />
      <RouterProvider router={router} />
    </QueryProvider>
  </StrictMode>
);
