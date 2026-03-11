import { useLocation } from "react-router-dom";
import { useAuthStore } from "@/features/auth/useAuthStore";

export function AuthDebugPanel() {
  const { pathname } = useLocation();
  const user = useAuthStore((s) => s.user);
  const role = useAuthStore((s) => s.role);
  const isAuthenticated = useAuthStore((s) => s.isAuthenticated);

  return (
    <div className="mt-4 rounded border bg-gray-50 p-3 text-xs text-gray-700">
      <div>
        <b>pathname:</b> {pathname}
      </div>
      <div>
        <b>isAuthenticated:</b> {String(isAuthenticated)}
      </div>
      <div>
        <b>role:</b> {role ?? "null"}
      </div>
      <div>
        <b>email:</b> {user?.email ?? "null"}
      </div>
    </div>
  );
}
