import { NavLink } from 'react-router-dom';
import MainLogo from '@/assets/logo.png'; 
import DashboardIcon from '@/assets/dashboard.svg'; 
import BrandIcon from '@/assets/brandManagement.svg';
import UserIcon from '@/assets/userManagement.svg';
import PaymentIcon from '@/assets/subscription.svg';
import ChatIcon from '@/assets/chat.svg';
import RolesIcon from '@/assets/roles.svg';
import SettingsIcon from '@/assets/settings.svg';

interface SideBarProps {
  isOpen: boolean;
  onClose: () => void;
}

const SideBar = ({ isOpen, onClose }: SideBarProps) => {
  const menuItems = [
    { path: '/admin', icon: DashboardIcon, label: 'Dashboard' },
    { path: '/admin/brands', icon: BrandIcon, label: 'Brand Management' },
    { path: '/admin/users', icon: UserIcon, label: 'User Management' },
    { path: '/admin/plans', icon: PaymentIcon, label: 'Subscription Plans' },
    { path: '/admin/chat', icon: ChatIcon, label: 'Chat Support' },
    { path: '/admin/roles', icon: RolesIcon, label: 'Roles & Access' },
  ];

  return (
    <>
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-[60] md:hidden animate-in fade-in duration-300" 
          onClick={onClose}
        />
      )}

      <aside className={`
        fixed inset-y-0 left-0 z-[70] bg-white border-r border-[#B6A092] p-5 transition-transform duration-300 ease-in-out
        md:relative md:translate-x-0 md:flex md:flex-col
        ${isOpen ? 'translate-x-0 w-64' : '-translate-x-full w-0 md:w-20 xl:w-64'}
        h-screen sticky top-0 shrink-0 overflow-hidden
      `}>
        
        <button onClick={onClose} className="md:hidden absolute top-5 right-5 text-[#B6A092] text-xl">✕</button>

        <div className="flex items-center gap-2 pb-4 mb-4 border-b border-[#C9A390]/20 min-w-max">
          <img src={MainLogo} alt="weAR Logo" className="w-10 xl:w-12 h-auto shrink-0" />
          <div className={`flex flex-col leading-tight ${!isOpen ? 'hidden xl:flex' : 'flex'}`}>
            <h1 className="font-allura text-[20px] text-[#9F8062] font-normal">weAR</h1>
            <span className="font-['Hanuman'] text-[12px] text-[#B6A092]/80 whitespace-nowrap">Super Admin Panel</span>
          </div>
        </div>

        <nav className="flex-1 flex flex-col gap-3">
          {menuItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => { if(window.innerWidth < 768) onClose(); }} 
              end={item.path === '/admin'}
              className={({ isActive }) => 
                `flex items-center gap-4 px-3.5 py-2.5 rounded-lg border transition-all duration-300 font-['Hanuman'] text-[14px] min-w-max
                ${isActive 
                  ? 'bg-[#FEF9F2] border-[#A86F52] text-[#A86F52] shadow-[0_0_10px_0_#B6A092]' 
                  : 'bg-white border-[#E4DCD1] text-[#B6A892] hover:border-[#A86F52] hover:text-[#A86F52]'
                }`
              }
            >
              <img src={item.icon} alt={item.label} className="w-5 h-5 object-contain shrink-0" />
              <span className={`${!isOpen ? 'hidden xl:block' : 'block'}`}>{item.label}</span>
            </NavLink>
          ))}
        </nav>

        <div className="mt-auto pt-5 border-t border-[#C9A390]/10">
          <NavLink 
            to="/admin/settings" 
            onClick={() => { if(window.innerWidth < 768) onClose(); }}
            className={({ isActive }) => 
              `flex items-center gap-4 px-3.5 py-2.5 rounded-lg border transition-all font-['Hanuman'] text-[14px] min-w-max
              ${isActive ? 'bg-[#FEF9F2] border-[#A86F52] text-[#A86F52] shadow-[0_0_10px_0_#B6A092]' 
                  : 'bg-white border-[#E4DCD1] text-[#B6A892] hover:border-[#A86F52] hover:text-[#A86F52]'}`
            }
          >
            <img src={SettingsIcon} alt="Settings" className="w-5 h-5 shrink-0" />
            <span className={`${!isOpen ? 'hidden xl:block' : 'block'}`}>Settings</span>
          </NavLink>
        </div>
      </aside>
    </>
  );
};

export default SideBar;