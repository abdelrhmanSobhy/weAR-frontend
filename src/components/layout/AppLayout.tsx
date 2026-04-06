import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useAuthStore, selectRole } from "@/features/auth/useAuthStore"; 
import SideBar from "@/shared/components/SideBar";
import NavBar from "@/shared/components/NavBar";
import Footer from "@/shared/components/Footer";

export function AppLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();
  const role = useAuthStore(selectRole); // بنعرف رتبة اللي داخل دلوقتي إيه
  const logout = useAuthStore((s) => s.logout);

  const handleLogout = () => {
    logout();
    navigate("/login", { replace: true });
  };

  // لو اللي داخل "أدمن" اعرض له التصميم  (السايد بار والناف بار والفوتر)
  if (role === "admin") {
    return (
      <div className="min-h-screen flex flex-col bg-[#F6F2EE]">
        <div className="flex flex-1 relative">
          <SideBar 
            isOpen={isSidebarOpen} 
            onClose={() => setIsSidebarOpen(false)} 
          />
          <main className="flex-1 flex flex-col min-w-0">
            <NavBar onMenuClick={() => setIsSidebarOpen(true)} />
            <div className="p-6 md:p-10 flex-1">
              <Outlet />
            </div>
          </main>
        </div>
        <Footer />
      </div>
    );
  }


  return (
    <div className="min-h-screen">
      <div className="">
        <Outlet />
      </div>
    </div>
  );
}
