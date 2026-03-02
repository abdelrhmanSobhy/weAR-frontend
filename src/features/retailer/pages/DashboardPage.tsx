import { useAuthStore } from "@/features/auth/auth-store";

export function DashboardPage() {
  const user = useAuthStore((s) => s.user);
  const logout = useAuthStore((s) => s.logout);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-green-50 space-y-6">
      <h1 className="text-3xl font-bold">Retailer Dashboard</h1>

      <p>User: {user?.email}</p>

      <button
        onClick={logout}
        className="bg-red-600 text-white px-6 py-2 rounded"
      >
        Logout
      </button>
    </div>
  );
}
