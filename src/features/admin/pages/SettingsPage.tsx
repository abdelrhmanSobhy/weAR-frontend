import { useState } from 'react';
import SettingsIcon from '@/assets/generalsetting.svg';
import BellIcon from '@/assets/notification-bell.svg';
import SecurityIcon from '@/assets/roles.svg';
import DataIcon from '@/assets/data.svg';
import EmailIcon from '@/assets/emailicon.svg';
import PaintIcon from '@/assets/appearance.svg';

export const SettingsPage = () => {
  const [notifs, setNotifs] = useState({
    registration: true,
    milestones: true,
    updates: false,
    reports: true
  });

  const [formData, setFormData] = useState({
    platformName: "weAR",
    supportEmail: "support@wear.com",
    timeZone: "UTC (GMT+0)"
  });

  const [selectedColor, setSelectedColor] = useState('#B6A092');

  const handleSave = () => {
    alert("🚀 Changes saved successfully!");
  };

  return (
    <div className="flex flex-col gap-1 animate-in fade-in duration-500 font-['Hanuman']">
      <header className="mb-10">
        <h1 className="text-2xl text-[#14181F] font-normal leading-none mb-2">Settings</h1>
        <p className="text-base text-[#A89080] font-light">Manage platform configuration and preferences</p> 
      </header>
      <section className="grid grid-cols-1 xl:grid-cols-2 gap-6 w-full">
        <div className="bg-white border-[1.7px] border-[#E5DFD8] rounded-[24px] p-8 flex flex-col gap-9 shadow-sm">
          <div className="flex items-center gap-3.5">
            <div className="w-[61px] h-[61px] bg-[#C4A88A]/13 rounded-[17px] flex items-center justify-center shrink-0">
              <img src={SettingsIcon} alt="" className="w-7.5" />
            </div>
            <h3 className="text-2xl text-[#3D3530] font-normal">General Settings</h3>
          </div>
          <div className="flex flex-col gap-5">
            <div className="space-y-3">
              <label className="text-[22px] text-[#6B5D52]">Platform Name</label>
              <input 
                type="text" 
                value={formData.platformName}
                onChange={(e) => setFormData({...formData, platformName: e.target.value})}
                className="w-full bg-[#F5F1ED] border-[1.7px] border-[#E5DFD8] rounded-[17px] p-5 font-['Inter'] text-xl text-[#6B5D52] outline-none focus:border-[#B6A092]" 
              />
            </div>
            <div className="space-y-3">
              <label className="text-[22px] text-[#6B5D52]">Support Email</label>
              <input 
                type="email" 
                value={formData.supportEmail}
                onChange={(e) => setFormData({...formData, supportEmail: e.target.value})}
                className="w-full border-[1.7px] border-[#E5DFD8] rounded-[17px] p-5 font-['Inter'] text-xl text-[#6B5D52] outline-none focus:border-[#B6A092]" 
              />
            </div>
            <div className="space-y-3">
              <label className="text-[22px] text-[#6B5D52]">Time Zone</label>
              <select 
                className="w-full border-[1.7px] border-[#E5DFD8] rounded-[17px] p-5 font-['Inter'] text-xl text-[#6B5D52] outline-none bg-white cursor-pointer"
                value={formData.timeZone}
                onChange={(e) => setFormData({...formData, timeZone: e.target.value})}
              >
                <option>UTC (GMT+0)</option>
                <option>EST (GMT-5)</option>
                <option>EET (GMT+2)</option>
              </select>
            </div>
          </div>
        </div>
        <div className="bg-white border-[1.7px] border-[#E5DFD8] rounded-[24px] p-8 flex flex-col gap-9 shadow-sm">
          <div className="flex items-center gap-3.5">
            <div className="w-[61px] h-[61px] bg-[#C4A88A]/13 rounded-[17px] flex items-center justify-center shrink-0">
              <img src={BellIcon} alt="" className="w-7.5" />
            </div>
            <h3 className="text-2xl text-[#3D3530] font-normal">Notifications</h3>
          </div>
          <div className="flex flex-col gap-5">
            {[
              { id: 'registration', label: "New brand registration" },
              { id: 'milestones', label: "User milestones" },
              { id: 'updates', label: "System updates" },
              { id: 'reports', label: "Weekly reports" }
            ].map((item) => (
              <div key={item.id} className="flex justify-between items-center py-2.5">
                <span className="text-[22px] text-[#6B5D52]">{item.label}</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input 
                    type="checkbox" 
                    checked={(notifs as any)[item.id]} 
                    onChange={() => setNotifs({...notifs, [item.id]: !(notifs as any)[item.id]})}
                    className="sr-only peer" 
                  />
                  <div className="w-12 h-6 bg-[#E5DFD8] rounded-full peer peer-checked:after:translate-x-6 peer-checked:bg-[#B6A092] after:content-[''] after:absolute after:top-1 after:left-1 after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all"></div>
                </label>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-white border-[1.7px] border-[#E5DFD8] rounded-[24px] p-8 flex flex-col gap-9 shadow-sm">
          <div className="flex items-center gap-3.5">
            <div className="w-[61px] h-[61px] bg-[#C4A88A]/13 rounded-[17px] flex items-center justify-center shrink-0">
              <img src={SecurityIcon} alt="" className="w-7.5" />
            </div>
            <h3 className="text-2xl text-[#3D3530] font-normal">Security</h3>
          </div>
          <div className="flex flex-col gap-3 font-['Inter']">
            {["Change Password", "Two-Factor Authentication", "API Keys Management", "Session Management"].map(btn => (
              <button key={btn} onClick={() => alert(`${btn} configuration...`)} className="w-full p-5 bg-white border border-[#E5DFD8] rounded-[17px] text-xl text-[#6B5D52] text-left hover:bg-[#FEF9F2] hover:border-[#B6A092] transition-all cursor-pointer">
                {btn}
              </button>
            ))}
          </div>
        </div>
        <div className="bg-white border-[1.7px] border-[#E5DFD8] rounded-[24px] p-8 flex flex-col gap-9 shadow-sm">
          <div className="flex items-center gap-3.5">
            <div className="w-[61px] h-[61px] bg-[#C4A88A]/13 rounded-[17px] flex items-center justify-center shrink-0">
              <img src={DataIcon} alt="" className="w-7.5" />
            </div>
            <h3 className="text-2xl text-[#3D3530] font-normal">Data Management</h3>
          </div>
          <div className="flex flex-col gap-7 font-['Inter']">
            <div className="bg-[#F5F1ED] border border-[#E5DFD8] rounded-[17px] p-7 flex flex-col gap-3.5">
              <div className="flex flex-col gap-2">
                <span className="text-[22px] text-[#6B5D52]">Database Size</span>
                <span className="text-2xl text-[#3D3530]">2.4 GB / 10 GB</span>
              </div>
              <div className="w-full h-3.5 bg-white rounded-full overflow-hidden shadow-inner">
                <div className="h-full bg-[#C4A88A] rounded-full transition-all duration-1000" style={{width: '24%'}}></div>
              </div>
            </div>
            <button onClick={() => alert("Exporting data...")} className="w-full p-5 bg-white border border-[#E5DFD8] rounded-[17px] text-xl text-[#6B5D52] text-left hover:bg-[#FEF9F2] transition-all cursor-pointer">Export User Data</button>
            <button onClick={() => alert("Starting Backup...")} className="w-full p-5 bg-white border border-[#E5DFD8] rounded-[17px] text-xl text-[#6B5D52] text-left hover:bg-[#FEF9F2] transition-all cursor-pointer">Backup Database</button>
          </div>
        </div>
        <div className="bg-white border-[1.7px] border-[#E5DFD8] rounded-[24px] p-8 flex flex-col gap-9 shadow-sm">
          <div className="flex items-center gap-3.5 font-['Hanuman']">
            <div className="w-[61px] h-[61px] bg-[#C4A88A]/13 rounded-[17px] flex items-center justify-center shrink-0">
              <img src={EmailIcon} alt="" className="w-7.5" />
            </div>
            <h3 className="text-2xl text-[#3D3530] font-normal">Email Templates</h3>
          </div>
          <div className="flex flex-col gap-3 font-['Inter']">
            {["Welcome Email", "Brand Approval", "Password Reset"].map(btn => (
              <button key={btn} className="w-full p-5 bg-white border border-[#E5DFD8] rounded-[17px] text-xl text-[#6B5D52] text-left hover:bg-[#FEF9F2] transition-all cursor-pointer">
                {btn}
              </button>
            ))}
          </div>
        </div>
        <div className="bg-white border-[1.7px] border-[#E5DFD8] rounded-[24px] p-8 flex flex-col gap-9 shadow-sm">
          <div className="flex items-center gap-3.5 font-['Hanuman']">
            <div className="w-[61px] h-[61px] bg-[#C4A88A]/13 rounded-[17px] flex items-center justify-center shrink-0">
              <img src={PaintIcon} alt="" className="w-7.5" />
            </div>
            <h3 className="text-2xl text-[#3D3530] font-normal">Appearance</h3>
          </div>
          <div className="flex flex-col gap-6">
            <div className="space-y-2.5">
              <label className="text-[22px] text-[#6B5D52]">Color Palette</label>
              <div className="flex gap-4">
                {['#B6A092', '#C9A390', '#949E96', '#E5DFD8', '#FDFCFB'].map(color => (
                  <div 
                    key={color} 
                    onClick={() => setSelectedColor(color)}
                    className={`w-15 h-15 rounded-xl border cursor-pointer transition-all hover:scale-110 active:ring-2 ring-[#B6A092]
                      ${selectedColor === color ? 'border-[#B6A092] shadow-md' : 'border-[#E5DFD8]'}`} 
                    style={{background: color}}
                  ></div>
                ))}
              </div>
            </div>
            <div className="space-y-3">
              <label className="text-[22px] text-[#6B5D52]">Logo</label>
              <div className="border-[3.4px] border-[#E5DFD8] border-dashed rounded-[17px] p-6 flex items-center justify-center text-xl text-[#B6A092] font-['Inter'] cursor-pointer hover:bg-gray-50 transition-colors">
                weAR Logo (Current)
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="flex justify-end mt-12 pt-8 border-t border-[#E5DFD8]">
        <button 
          onClick={handleSave}
          className="bg-[#B6A092] text-white px-8 py-4 rounded-xl font-['Inter'] text-lg shadow-sm hover:brightness-110 active:scale-95 transition-all cursor-pointer"
        >
          Save Changes
        </button>
      </footer>
    </div>
  );
};