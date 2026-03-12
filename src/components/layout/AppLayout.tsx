import { Outlet, useNavigate } from "react-router-dom";
import { useAuthStore } from "@/features/auth/useAuthStore";

export function AppLayout() {
  const navigate = useNavigate();
  const logout = useAuthStore((s) => s.logout);

  const handleLogout = () => {
    logout();
    navigate("/login", { replace: true });
  };

  return (
    <div className="min-h-screen">
      <div className="">
        <Outlet />
      </div>
    </div>
  );
}
