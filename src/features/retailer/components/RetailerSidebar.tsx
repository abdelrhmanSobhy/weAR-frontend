import { NavLink } from "react-router-dom";
import {
  LayoutGrid,
  Star,
  LayoutDashboard,
  Package,
  Warehouse,
  DollarSign,
  HelpCircle,
  Settings,
  ChevronsLeftRight,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface RetailerSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const HangerIcon = ({ size = 20 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 2v1" />
    <path d="M12 3a2 2 0 0 0-2 2c0 .74.4 1.39 1 1.73V8" />
    <path d="M12 8L2.5 14.5a1 1 0 0 0-.4.8V16a1 1 0 0 0 1 1h17.8a1 1 0 0 0 1-1v-.7a1 1 0 0 0-.4-.8L12 8z" />
  </svg>
);

export function RetailerSidebar({ isOpen, onClose }: RetailerSidebarProps) {
  const topNavItems = [
    { name: "Dashboard", path: "/retailer", icon: LayoutGrid },
    { name: "Offers", path: "/retailer/offers", icon: Star },
    { name: "Categories", path: "/retailer/categories", icon: LayoutDashboard },
    { name: "Products", path: "/retailer/products", icon: HangerIcon },
    { name: "Orders", path: "/retailer/orders", icon: Package },
    { name: "Inventory", path: "/retailer/inventory", icon: Warehouse },
    { name: "Pricing", path: "/retailer/pricing", icon: DollarSign },
  ];

  const bottomNavItems = [
    { name: "Help", path: "/retailer/help", icon: HelpCircle },
    { name: "Settings", path: "/retailer/settings", icon: Settings },
  ];

  const navItemClass = ({ isActive }: { isActive: boolean }) =>
    `flex items-center gap-4 rounded-[6px] px-4 py-3 mb-3 transition-all duration-300 border ${
      isActive
        ? "border-[#B6A092] text-[#B6A092] bg-white shadow-[0_4px_15px_rgba(182,160,146,0.3)] font-semibold"
        : "border-[#E4DCD1] text-[#C9A390] bg-white hover:border-[#B6A092] hover:shadow-sm font-medium hover:text-[#B6A092]"
    }`;

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 lg:hidden transition-opacity backdrop-blur-sm"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      <aside
        className={`fixed top-0 left-0 z-50 flex flex-col w-[300px] h-[843px] bg-white border-r border-b border-[#B6A092] rounded-br-[10px] transition-transform duration-300 lg:static lg:translate-x-0 shrink-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex h-[100px] shrink-0 items-center justify-between px-8 pt-4 mb-2">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center border border-[#941c2f] rounded-[2px] px-1 py-0.5">
              <span className="text-[#941c2f] text-[10px] font-bold leading-none tracking-widest">
                CAVO
              </span>
            </div>
            <h1
              className="text-[26px] text-[#B6A092]"
              style={{ fontFamily: '"PT Serif", serif', fontWeight: 500 }}
            >
              Cavo
            </h1>
          </div>
          <ChevronsLeftRight
            className="text-[#BFC7DE]"
            size={18}
            strokeWidth={1.5}
          />
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden text-[#949E96] absolute right-4"
            onClick={onClose}
          >
            <X size={20} />
          </Button>
        </div>

        <nav className="flex-1 flex flex-col px-6 pb-6 overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          <div className="flex flex-col">
            {topNavItems.map((item) => (
              <NavLink
                end={item.path === "/retailer"}
                key={item.name}
                to={item.path}
                onClick={onClose}
                className={navItemClass}
              >
                <item.icon size={22} strokeWidth={1.5} />
                <span
                  className="text-[16px] tracking-wide"
                  style={{ fontFamily: '"Hanuman", sans-serif' }}
                >
                  {item.name}
                </span>
              </NavLink>
            ))}
          </div>

          <div className="mt-auto flex flex-col pt-4">
            {bottomNavItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                onClick={onClose}
                className={navItemClass}
              >
                <item.icon size={22} strokeWidth={1.5} />
                <span
                  className="text-[16px] tracking-wide"
                  style={{ fontFamily: '"Hanuman", sans-serif' }}
                >
                  {item.name}
                </span>
              </NavLink>
            ))}
          </div>
        </nav>
      </aside>
    </>
  );
}
