import { Outlet, Link } from "react-router-dom";
export default function MainLayout() {
  return (
    <div className="min-h-dvh bg-background text-foreground">
      <header className="p-4 flex gap-4 border-b">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
      </header>
      <main className="p-4">
        <Outlet />
      </main>
    </div>
  );
}
