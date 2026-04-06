import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 

import { 
  MOCK_ACTIVITIES, 
  MOCK_DASHBOARD_STATS, 
  MOCK_SECONDARY_STATS, 
  MOCK_GROWTH_DATA, 
  MOCK_REGIONS, 
  MOCK_CATEGORIES,
  MOCK_SYSTEM_HEALTH,
  MOCK_DEVICE_USAGE,
  MOCK_TOP_BRANDS 
}from '@/features/admin/constants/adminMocks';

import UserIcon from '@/assets/users.svg'; 
import BrandIcon from '@/assets/activebrands.svg'; 
import TryOnIcon from '@/assets/virtualtryon.svg'; 
import RevenueIcon from '@/assets/revenue.svg';
import SessionIcon from '@/assets/time.svg'; 
import AvatarsIcon from '@/assets/userManagement.svg'; 
import ActiveNowIcon from '@/assets/activenow.svg'; 
import ExportIcon from '@/assets/export.svg'; 
import SettingsArrowIcon from '@/assets/settings-arrow.svg';
import DesktopIcon from '@/assets/desktop.svg'; 
import MobileIcon from '@/assets/mobile.svg';
import LocationIcon from '@/assets/loocation.svg';
import CheckmarkIcon from '@/assets/checkmark.svg'; 
import GreenArrow from '@/assets/greenarrow.svg'; 
import RedArrow from '@/assets/redarrow.svg';

import NewUserActIcon from '@/assets/newuser.svg';
import ActiveBrandsActIcon from '@/assets/activebrands.svg';
import VirtualTryOnActIcon from '@/assets/virtualtryon.svg';
import SystemUpdateActIcon from '@/assets/systemupdate.svg';

export const DashBoardAdmin = () => {
  const navigate = useNavigate();
  
  const [activities, setActivities] = useState(MOCK_ACTIVITIES);

  const activityIcons: any = {
    user: NewUserActIcon,
    brand: ActiveBrandsActIcon,
    tryon: VirtualTryOnActIcon,
    system: SystemUpdateActIcon
  };

  const secondaryIcons = [SessionIcon, AvatarsIcon, ActiveNowIcon, RevenueIcon];
  const mainIcons = [UserIcon, BrandIcon, TryOnIcon, RevenueIcon];

  const deleteActivity = (id: number) => setActivities(activities.filter(act => act.id !== id));
  const handleExport = () => window.print();

  return (
    <div className="flex flex-col gap-10 animate-in fade-in duration-500 max-w-full overflow-hidden font-['Hanuman']">
      <header>
        <h2 className="text-[24px] text-[#141414] font-normal mb-1.5">Welcome back, Sherif</h2>
        <p className="text-[16px] text-[#A89080] font-light">Here's what's happening with weAR today</p>
      </header>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
        {MOCK_DASHBOARD_STATS.map((stat, i) => (
          <div key={i} className="bg-white border-[1.7px] border-[#E5DFD8] rounded-[24px] p-6 shadow-sm hover:-translate-y-1 transition-transform">
            <div className="flex justify-between items-center mb-6">
              <div className="w-[65px] h-[65px] bg-[#C4A88A]/12 rounded-xl flex items-center justify-center">
                <img src={mainIcons[i]} alt="" className="w-[26px] h-[26px]" />
              </div>
              <span className={`font-['Inter'] text-[20px] flex items-center gap-1 ${stat.up ? 'text-[#00A63E]' : 'text-[#E7000B]'}`}>
                <img src={stat.up ? GreenArrow : RedArrow} alt="" className="w-[22px]" /> {stat.trend}
              </span>
            </div>
            <p className="text-[18px] text-[#A89080] mb-2">{stat.label}</p>
            <h3 className="text-[28px] text-[#3D3530] font-normal leading-none">{stat.val}</h3>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-10">
        {MOCK_SECONDARY_STATS.map((sec, i) => (
          <div key={i} className="bg-white border-[1.7px] border-[#E5DFD8] rounded-[24px] p-4 py-5 flex flex-col gap-2 shadow-sm">
            <div className="flex items-center gap-3">
              <img src={secondaryIcons[i]} alt="" className="w-5 h-5 object-contain" />
              <span className="text-sm text-[#A89080]">{sec.label}</span>
            </div>
            <span className="text-[20px] text-[#3D3530] ml-8">{sec.val}</span>
          </div>
        ))}
      </div>
      <div className="flex flex-col lg:flex-row gap-9 items-stretch">
        <div className="lg:flex-[2.2] bg-white border-[2.38px] border-[#E5DFD8] rounded-[33.4px] p-8 md:px-12 flex flex-col min-h-[400px]">
          <h3 className="text-[24px] text-[#3D3530] mb-8">User Growth</h3>
          <div className="flex-1 flex items-end justify-between gap-2 sm:gap-4 px-2 min-h-[250px]">
            {MOCK_GROWTH_DATA.map((bar, i) => (
              <div key={i} className="flex-1 flex flex-col items-center group max-w-[60px] h-full justify-end">
                <div className={`w-full rounded-t-[9.5px] transition-all duration-700 opacity-80 group-hover:opacity-100 ${bar.c}`} style={{ height: bar.h }}></div>
                <span className="text-[14px] text-[#A89080] mt-4 font-['Hanuman']">{bar.day}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:flex-1 bg-white border-[1.8px] border-[#E5DFD8] rounded-[25px] p-8 flex flex-col shadow-sm">
          <h4 className="text-lg text-[#3D3530] mb-5">Quick Actions</h4>
          <div className="flex flex-col gap-3 mb-6">
            <button onClick={() => navigate('/admin/brands')} className="w-full rounded-xl flex justify-between items-center px-7 py-4 bg-[#A89080] text-white text-sm hover:brightness-110 transition-all">
              <span>Add New Brand</span><img src={BrandIcon} alt="" className="w-5 h-5 brightness-0 invert" />
            </button>
            <button onClick={() => navigate('/admin/brands?filter=pending')} className="w-full rounded-xl flex justify-between items-center px-7 py-4 border border-[#E5DFD8] text-[#6B5D52] text-sm hover:bg-gray-50 transition-all">
              <span>Pending Approvals</span><span className="bg-[#FDF1AD] px-2.5 py-0.5 rounded-full text-xs text-[#A65F00] font-bold">12</span>
            </button>
            <button onClick={handleExport} className="w-full rounded-xl flex justify-between items-center px-7 py-4 border border-[#E5DFD8] text-[#6B5D52] text-sm hover:bg-gray-50 transition-all">
              <span>Export Report</span><img src={ExportIcon} alt="" className="w-5.5 h-5.5" />
            </button>
            <button onClick={() => navigate('/admin/settings')} className="w-full rounded-xl flex justify-between items-center px-7 py-4 border border-[#E5DFD8] text-[#6B5D52] text-sm hover:bg-gray-50 transition-all">
              <span>System Settings</span><img src={SettingsArrowIcon} alt="" className="w-5.5 h-5.5" />
            </button>
          </div>
          <div className="h-px bg-[#F8F4F0] mb-6"></div>
          <h4 className="text-lg text-[#6B5D52] mb-5">System Health</h4>
          <div className="space-y-4 font-['Inter']">
            {MOCK_SYSTEM_HEALTH.map((h, i) => (
              <div key={i} className="flex justify-between items-center text-[18px] text-[#A89080]">
                <span>{h.label}</span>
                <div className="flex items-center gap-3">
                  <span className="text-[#3D3530] font-semibold text-base">{h.value}</span>
                  <img src={CheckmarkIcon} alt="" className="w-7 h-7" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="bg-white border-[1.75px] border-[#E5DFD8] rounded-[24.5px] p-10 shadow-sm">
          <div className="flex justify-between items-center mb-9">
            <h3 className="text-[18px] text-[#3D3530]">Top Performing Brands</h3>
            <span onClick={() => navigate('/admin/brands')} className="text-[#C4A88A] text-[16px] cursor-pointer hover:underline">View All</span>
          </div>
          <div className="space-y-7">
            {MOCK_TOP_BRANDS.map((b, i) => (
              <div key={i} className="group">
                <div className="flex justify-between items-start mb-3">
                  <span className="text-[18px] text-[#3D3530]">{b.name} <span className="text-[#00A63E] text-[16px] font-['Inter'] ml-1">{b.growth}</span></span>
                  <div className="text-right flex flex-col font-['Inter']">
                    <span className="text-[18px] text-[#3D3530]">{b.val}</span>
                    <span className="text-[16px] text-[#A89080]">{b.try} try-ons</span>
                  </div>
                </div>
                <div className="h-[10.5px] bg-[#F8F4F0] rounded-full overflow-hidden">
                  <div className="h-full bg-[#D9C5B2] group-hover:bg-[#9F8062] transition-all" style={{ width: b.p }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white border-[1.75px] border-[#E5DFD8] rounded-[24.5px] p-10 shadow-sm">
          <h3 className="text-[18px] text-[#3D3530] mb-8">Device & Platform Usage</h3>
          <div className="flex flex-col sm:flex-row gap-5 mb-11">
            {MOCK_DEVICE_USAGE.summary.map((d, i) => (
              <div key={i} className="flex-1 bg-[#F5F1ED] rounded-3xl p-7 flex flex-col gap-2 font-['Inter']">
                <div className="flex items-center gap-3">
                  <img src={i === 0 ? DesktopIcon : MobileIcon} alt="" className="w-9 h-9" />
                  <span className="text-[#A89080] text-[18px]">{d.label}</span>
                </div>
                <span className="text-[24px] text-[#3D3530]">{d.p}</span>
                <span className="text-[18px] text-[#A89080]">{d.u}</span>
              </div>
            ))}
          </div>
          <div className="space-y-5">
            {MOCK_DEVICE_USAGE.platforms.map((p, i) => (
              <div key={i} className="space-y-2">
                <div className="flex justify-between text-[18px] text-[#6B5D52]">
                  <span>{p.l}</span><span className="text-[#3D3530] font-bold font-['Inter']">{p.v}</span>
                </div>
                <div className="h-[7.8px] bg-[#F8F4F0] rounded-full overflow-hidden">
                  <div className="h-full bg-[#9F8062]" style={{ width: p.v }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="bg-white border-[1.75px] border-[#E5DFD8] rounded-[24.5px] p-10 shadow-sm">
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-[18px] text-[#3D3530]">Top Regions</h3><img src={LocationIcon} alt="" className="w-[22px]" />
          </div>
          <div className="space-y-5.5">
            {MOCK_REGIONS.map((r, i) => (
              <div key={i} className="space-y-2">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <img src={`https://flagcdn.com/w40/${r.code.toLowerCase()}.png`} alt="" className="w-6 rounded-[2px]" />
                    <span className="text-[18px] text-[#3D3530]">{r.country}</span>
                  </div>
                  <span className="text-[16px] text-[#A89080] font-['Inter']">{r.users}</span>
                </div>
                <div className="h-[7.8px] bg-[#F8F4F0] rounded-full overflow-hidden">
                  <div className="h-full bg-[#D9C5B2]" style={{ width: r.percent }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white border-[1.75px] border-[#E5DFD8] rounded-[24.5px] p-10 shadow-sm">
          <h3 className="text-[18px] text-[#3D3530] mb-8">Popular Categories</h3>
          <div className="space-y-5.5">
            {MOCK_CATEGORIES.map((c, i) => (
              <div key={i} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-[18px] text-[#3D3530]">{c.name}</span>
                  <div className="text-right flex flex-col font-['Inter']">
                    <span className="text-[16px] text-[#3D3530] font-bold">{c.val}</span>
                    <span className="text-[14px] text-[#A89080]">{c.sub}</span>
                  </div>
                </div>
                <div className="h-[7.8px] bg-[#F8F4F0] rounded-full overflow-hidden">
                  <div className="h-full bg-[#9F8062]" style={{ width: c.p }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <section className="bg-white border-[1.75px] border-[#E5DFD8] rounded-[24.5px] p-10 mb-12 shadow-sm relative">
        <div className="flex justify-between items-center mb-9">
            <h3 className="font-['Inter'] text-[24px] text-[#3D3530] font-normal">Recent Activity</h3>
            {activities.length > 0 && (
                <button onClick={() => setActivities([])} className="text-[#B6A092] font-bold hover:underline">Clear All</button>
            )}
        </div>
        <div className="divide-y divide-[#F8F4F0]">
          {activities.length > 0 ? activities.map((act) => (
            <div key={act.id} className="flex flex-col sm:flex-row items-start sm:items-center py-6 gap-5 group relative">
              <div className="w-12 h-12 bg-[#FDFBF9] rounded-[14px] flex items-center justify-center shrink-0">
                <img src={activityIcons[act.type]} alt="" className="w-6 h-6 object-contain" />
              </div>
              <div className="flex-1 font-['Inter']">
                <span className="text-[24px] text-[#3D3530] font-normal block mb-2 leading-tight">{act.title}</span>
                <p className="text-[18px] text-[#A89080] leading-normal">{act.desc}</p>
              </div>
              <div className="flex items-center gap-4">
                  <span className="text-[18px] text-[#A89080] font-['Inter'] whitespace-nowrap">{act.time}</span>
                  <button onClick={() => deleteActivity(act.id)} className="opacity-0 group-hover:opacity-100 text-red-400 font-bold transition-all ml-4">Delete</button>
              </div>
            </div>
          )) : (
              <div className="py-10 text-center text-[#A89080]">No recent activities to show.</div>
          )}
        </div>
      </section>
    </div>
  );
};