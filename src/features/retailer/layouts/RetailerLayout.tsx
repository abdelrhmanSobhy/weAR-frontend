import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { useAuthStore } from "@/features/auth/useAuthStore";

const linkBase = "block rounded px-3 py-2 text-sm transition hover:bg-gray-100";
const linkActive = "bg-gray-200 font-medium";

export function RetailerLayout() {
  const navigate = useNavigate();
  const logout = useAuthStore((s) => s.logout);

  const handleLogout = () => {
    logout();
    navigate("/login", { replace: true });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex min-h-screen">
        <aside className="w-64 border-r bg-white p-4">
          <div className="mb-4 text-lg font-semibold">Retailer Portal</div>

          <nav className="space-y-1">
            <NavLink
              to="/retailer"
              end
              className={({ isActive }) =>
                `${linkBase} ${isActive ? linkActive : ""}`
              }
            >
              Dashboard
            </NavLink>

            <NavLink
              to="/retailer/products"
              className={({ isActive }) =>
                `${linkBase} ${isActive ? linkActive : ""}`
              }
            >
              Products
            </NavLink>

            <NavLink
              to="/retailer/products/new"
              className={({ isActive }) =>
                `${linkBase} ${isActive ? linkActive : ""}`
              }
            >
              Add Product
            </NavLink>

            <NavLink
              to="/retailer/settings"
              className={({ isActive }) =>
                `${linkBase} ${isActive ? linkActive : ""}`
              }
            >
              Settings
            </NavLink>
          </nav>

          <div className="mt-6 border-t pt-4">
            <button
              onClick={handleLogout}
              className="w-full rounded bg-red-600 px-3 py-2 text-sm text-white hover:bg-red-700"
            >
              Logout
            </button>
          </div>
        </aside>

        <main className="flex-1 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
