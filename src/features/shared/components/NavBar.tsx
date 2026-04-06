import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom'; 
import SearchIcon from '@/assets/search-normal.svg'; 
import BellIcon from '@/assets/notification-bell.svg';
import ProfileImg from '@/assets/photo-bg.png'; 
import ArrowDown from '@/assets/arrow-left.svg'; 

interface NavBarProps {
  onMenuClick: () => void;
}

const NavBar = ({ onMenuClick }: NavBarProps) => {
  const navigate = useNavigate();
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isNotifOpen, setIsNotifOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  
  const [notifications, setNotifications] = useState([
    { id: 1, text: "New brand registered: Zara Fashion", time: "2m ago", read: false, link: "/admin/brands" },
    { id: 2, text: "Subscription plan updated for Urban Wear", time: "1h ago", read: false, link: "/admin/plans" },
    { id: 3, text: "New user registered: Ahmed Ali", time: "3h ago", read: true, link: "/admin/users" },
    { id: 4, text: "System update: v2.4 released", time: "5h ago", read: true, link: "/admin/settings" }
  ]);

  const [showAllNotifs, setShowAllNotifs] = useState(false);

  const displayedNotifs = showAllNotifs ? notifications : notifications.slice(0, 2);
  const unreadCount = notifications.filter(n => !n.read).length;

  const handleNotifClick = (id: number, link: string) => {
    setNotifications(notifications.map(n => n.id === id ? { ...n, read: true } : n));
    setIsNotifOpen(false);
    setShowAllNotifs(false); 
    navigate(link);
  };

  const profileRef = useRef<HTMLDivElement>(null);
  const notifRef = useRef<HTMLDivElement>(null);

  const handleSearch = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && searchValue.trim() !== "") {
      const query = searchValue.toLowerCase().trim();

      if (query.includes('brand') || query.includes('zara')) {
        navigate('/admin/brands');
      } else if (query.includes('user') || query.includes('customer')) {
        navigate('/admin/users');
      } else if (query.includes('plan') || query.includes('price')) {
        navigate('/admin/plans');
      } else if (query.includes('chat') || query.includes('support')) {
        navigate('/admin/chat');
      } else if (query.includes('role') || query.includes('access')) {
        navigate('/admin/roles');
      } else if (query.includes('sett') || query.includes('config')) {
        navigate('/admin/settings');
      } else {
        alert("No specific page found for: " + searchValue);
      }
      
      setSearchValue(""); 
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (profileRef.current && !profileRef.current.contains(event.target as Node)) setIsProfileOpen(false);
      if (notifRef.current && !notifRef.current.contains(event.target as Node)) {
        setIsNotifOpen(false);
        setShowAllNotifs(false); 
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="w-full bg-white flex justify-between items-center py-5 px-6 md:px-12 border-b border-[#F0F0F0] shrink-0 relative z-50">
      
      <div className="flex items-center gap-4 w-3/5">
        <button 
          onClick={onMenuClick}
          className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
        >
          <span className="text-2xl text-[#B6A092]">☰</span>
        </button>

        <div className="relative flex-1">
          <img 
            src={SearchIcon} 
            alt="search" 
            className="absolute left-4 top-1/2 -translate-y-1/2 w-5 md:w-6 opacity-60" 
          />
          <input 
            type="text" 
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            onKeyDown={handleSearch} 
            placeholder="Search for ..." 
            className="w-full h-10 bg-white border border-[#B6A892] rounded-xl pl-12 pr-4 font-['Hanuman'] text-sm text-[#3D3530] outline-none focus:border-[#B6A092] transition-all" 
          />
        </div>
      </div>

      <div className="flex items-center gap-4 md:gap-7">
        
        <div className="relative" ref={notifRef}>
          <div onClick={() => setIsNotifOpen(!isNotifOpen)} className="relative cursor-pointer hover:opacity-70 transition-opacity">
            <img src={BellIcon} alt="notifications" className="w-6 h-6" />
            {unreadCount > 0 && (
              <span className="absolute -top-1 -right-0.5 bg-[#B6A092] text-white text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-bold animate-pulse">
                {unreadCount}
              </span>
            )}
          </div>

          {isNotifOpen && (
            <div className="absolute right-0 mt-4 w-72 bg-white border border-[#E5DFD8] rounded-2xl shadow-xl overflow-hidden animate-in fade-in slide-in-from-top-2">
              <div className="p-4 border-b border-[#F0F0F0] font-['Hanuman'] font-bold text-[#3D3530] flex justify-between items-center">
                <span>Notifications</span>
                {notifications.length > 0 && (
                  <button onClick={() => setNotifications([])} className="text-[10px] text-[#A89080] hover:text-[#B6A092] uppercase">Clear All</button>
                )}
              </div>
              <div className="max-h-80 overflow-y-auto custom-scrollbar transition-all">
                {displayedNotifs.length > 0 ? (
                  displayedNotifs.map(n => (
                    <div 
                      key={n.id} 
                      onClick={() => handleNotifClick(n.id, n.link)}
                      className={`p-4 border-b border-[#F9F9F9] hover:bg-[#FEF9F2] transition-colors cursor-pointer flex flex-col gap-1 relative
                        ${!n.read ? 'bg-[#B6A092]/5 border-l-2 border-[#B6A092]' : ''}`}
                    >
                      {!n.read && <div className="absolute top-4 right-4 w-1.5 h-1.5 bg-[#B6A092] rounded-full"></div>}
                      <p className={`text-xs leading-snug ${!n.read ? 'text-[#3D3530] font-bold' : 'text-[#6B5D52]'}`}>{n.text}</p>
                      <span className="text-[10px] text-[#A89080]">{n.time}</span>
                    </div>
                  ))
                ) : (
                  <div className="p-8 text-center text-xs text-[#A89080]">No new notifications</div>
                )}
              </div>

              {!showAllNotifs && notifications.length > 2 ? (
                <button 
                  onClick={() => setShowAllNotifs(true)} 
                  className="w-full py-3 text-xs text-[#B6A092] font-bold hover:bg-gray-50 transition-colors border-t"
                >
                  VIEW ALL NOTIFICATIONS ({notifications.length})
                </button>
              ) : notifications.length > 0 && (
                <div className="p-2 bg-gray-50/50 text-center text-[10px] text-[#A89080] font-bold border-t">
                  END OF UPDATES
                </div>
              )}
            </div>
          )}
        </div>

        <div className="relative" ref={profileRef}>
          <div 
            onClick={() => setIsProfileOpen(!isProfileOpen)}
            className="flex items-center gap-3 cursor-pointer group px-2 py-1 rounded-xl transition-all hover:bg-gray-50"
          >
            <img src={ProfileImg} alt="Admin" className="w-10 h-10 rounded-full object-cover border border-[#F0F0F0]" />
            <div className="hidden lg:flex flex-col">
               <span className="font-['Hanuman'] text-sm font-bold text-[#3D3530]">Sherif Mesbah</span>
            </div>
            <img src={ArrowDown} alt="" className={`hidden md:block w-3 transition-transform duration-300 ${isProfileOpen ? 'rotate-90' : 'rotate-270 opacity-70'}`} />
          </div>

          {isProfileOpen && (
            <div className="absolute right-0 mt-4 w-52 bg-white border border-[#E5DFD8] rounded-2xl shadow-xl py-2 animate-in fade-in slide-in-from-top-2">
              <button onClick={() => navigate('/admin/settings')} className="w-full text-left px-5 py-3 text-sm text-[#3D3530] hover:bg-[#FEF9F2] hover:text-[#B6A092] transition-all">
                  Settings
              </button>
              <button onClick={() => navigate('/admin/settings')} className="w-full text-left px-5 py-3 text-sm text-[#3D3530] hover:bg-[#FEF9F2] hover:text-[#B6A092] transition-all">
                  Edit Profile
              </button>
              <div className="h-[1px] bg-[#F0F0F0] my-1"></div>
              <button onClick={() => alert("Logging out...")} className="w-full text-left px-5 py-3 text-sm text-red-500 hover:bg-red-50 transition-all font-bold">
                  Logout
              </button>
            </div>
          )}
        </div>

      </div>
    </header>
  );
};

export default NavBar;