import { Outlet, useNavigate } from "react-router-dom";
import { useAuthStore } from "@/features/auth/auth-store";

export function AppLayout() {
  const navigate = useNavigate();
  const logout = useAuthStore((s) => s.logout);

  const handleLogout = () => {
    logout();
    navigate("/login", { replace: true });
  };

  return (
    <div className="min-h-screen">
      {/* Simple header for now */}
      <div className="flex items-center justify-between bg-black px-6 py-4 text-white">
        <h1>weAR Portal</h1>

        <button
          onClick={handleLogout}
          className="rounded bg-red-600 px-4 py-2 text-sm"
        >
          Logout
        </button>
      </div>

      <div className="p-6">
        <Outlet />
      </div>
    </div>
  );
}
