import { useState } from "react";
import { Outlet } from "react-router-dom";
import { RetailerSidebar } from "../components/RetailerSidebar";
import { RetailerTopNav } from "../components/RetailerTopNav";
import { RetailerFooter } from "../components/RetailerFooter";

export function RetailerLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen w-full bg-[#FAFAFA] flex flex-col font-sans">
      <div className="flex flex-1 items-start">
        <RetailerSidebar
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
        />

        <div className="flex-1 flex flex-col min-w-0">
          <RetailerTopNav onOpenSidebar={() => setIsSidebarOpen(true)} />

          <main className="flex-1 w-full p-6 lg:p-8">
            <Outlet />
          </main>
        </div>
      </div>

      <RetailerFooter />
    </div>
  );
}
