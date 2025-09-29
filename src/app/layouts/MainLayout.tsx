import { Outlet, Link } from "react-router-dom";
import { PRODUCTS_PATH } from "../route/path";

export default function MainLayout() {
  return (
    <div className="h-dvh bg-background text-foreground grid grid-rows-[auto_1fr]">
      <header className="p-4 flex gap-4 border-b">
        <Link to="/">Home</Link>
        <Link to={PRODUCTS_PATH}>Products</Link>
      </header>
      <Outlet />
    </div>
  );
}
