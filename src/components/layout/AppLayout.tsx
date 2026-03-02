import { Outlet, Link } from "react-router-dom"

export const AppLayout = () => {
  return (
    <div className="min-h-screen flex">
      <aside className="w-60 bg-black text-white p-4 space-y-4">
        <Link to="/retailer">Retailer</Link>
        <Link to="/customer">Customer</Link>
        <Link to="/admin">Admin</Link>
      </aside>

      <main className="flex-1 p-8 bg-gray-50">
        <Outlet />
      </main>
    </div>
  )
}
