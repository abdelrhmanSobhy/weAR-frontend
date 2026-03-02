import { useNavigate } from "react-router-dom";
import { useAuthStore } from "@/features/auth/auth-store";

export default function RetailerLoginPage() {
  const navigate = useNavigate();
  const login = useAuthStore((s) => s.login);

  const handleLogin = () => {
    login({
      id: "1",
      email: "retailer@test.com",
      role: "retailer",
    });

    navigate("/retailer");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-10 rounded-lg shadow-lg w-[400px] text-center space-y-6">
        <h1 className="text-2xl font-bold">Test Login Page</h1>

        <button
          onClick={handleLogin}
          className="w-full bg-black text-white py-2 rounded"
        >
          Login as Retailer
        </button>

        <button
          onClick={() => {
            login({
              id: "2",
              email: "customer@test.com",
              role: "customer",
            });
            navigate("/customer");
          }}
          className="w-full bg-blue-600 text-white py-2 rounded"
        >
          Login as Customer
        </button>
      </div>
    </div>
  );
}
