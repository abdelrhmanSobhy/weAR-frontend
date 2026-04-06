import { useState } from 'react';

import { MOCK_USERS }from '@/features/admin/constants/adminMocks';

import SearchIcon from '@/assets/search-normal.svg';
import FilterIcon from '@/assets/filter.svg'; 
import EditIcon from '@/assets/editsuper.svg';
import DeleteIcon from '@/assets/delete.svg';
import UserIcon from '@/assets/usersuper.svg';
import ArrowDown from '@/assets/arrow-left.svg';

export const UserManagementPage = () => {
  const [users, setUsers] = useState(MOCK_USERS);

  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const [editingId, setEditingId] = useState<number | null>(null);
  const [editFormData, setEditFormData] = useState<any>({});

  const startEdit = (user: any) => {
    setEditingId(user.id);
    setEditFormData({ ...user });
  };

  const saveEdit = () => {
    setUsers(users.map(u => u.id === editingId ? { ...editFormData } : u));
    setEditingId(null);
  };

  const filteredUsers = users.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          user.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "All" || user.avatarStatus === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const handleDelete = (id: number, name: string) => {
    if (window.confirm(`Are you sure you want to delete ${name}?`)) {
      setUsers(users.filter(u => u.id !== id));
    }
  };

  return (
    <div className="flex flex-col gap-6 animate-in fade-in duration-500 max-w-full">
      <header className="font-['Hanuman']">
        <h1 className="text-2xl text-[#14181f] font-normal leading-8">User Management</h1>
        <p className="text-sm text-[#A89080] mt-1">Manage platform users and their activities</p>
      </header>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 font-['Hanuman']">
        {[
          { label: "Total Users", value: users.length },
          { label: "Active Today", value: Math.floor(users.length * 0.8) }, 
          { label: "Avatars Created", value: users.filter(u => u.avatarStatus === "Created").length },
          { label: "Total Try-Ons", value: users.reduce((acc, u) => acc + Number(u.tryOns), 0) }
        ].map((stat, i) => (
          <div key={i} className="bg-white border border-[#E4DCD1] rounded-xl p-6 shadow-sm hover:border-[#B6A092] transition-colors">
            <span className="text-sm text-[#A89080] block mb-2">{stat.label}</span>
            <h2 className="text-xl text-[#3D3530] font-normal">{stat.value}</h2>
          </div>
        ))}
      </section>

      <div className="flex flex-col md:flex-row justify-between gap-4 p-2.5 bg-white border border-[#E4DCD1] rounded-xl shadow-sm z-10">
        <div className="flex-1 flex items-center gap-3 bg-white border border-[#E4DCD1] rounded-lg px-3 py-2 focus-within:border-[#B6A092] transition-colors">
          <img src={SearchIcon} alt="search" className="w-5 h-5 opacity-50" />
          <input 
            type="text" 
            placeholder="Search users..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full border-none outline-none font-['Inter'] text-sm text-black placeholder:text-gray-300"
          />
        </div>

        <div className="relative w-full md:w-48">
          <div onClick={() => setIsDropdownOpen(!isDropdownOpen)} className="flex items-center justify-between w-full border border-[#E4DCD1] rounded-lg px-3 py-2 cursor-pointer text-sm text-black/50 bg-white hover:bg-gray-50 transition-all">
            <div className="flex items-center gap-2"><img src={FilterIcon} alt="filter" className="w-4 h-4 opacity-50" /><span>{statusFilter}</span></div>
            <img src={ArrowDown} className={`w-3 transition-transform ${isDropdownOpen ? 'rotate-90' : 'rotate-270'}`} alt="" />
          </div>
          {isDropdownOpen && (
            <div className="absolute top-full left-0 w-full mt-1 bg-white border border-[#E4DCD1] rounded-lg shadow-xl overflow-hidden z-20 animate-in slide-in-from-top-2">
              {["All", "Created", "Not Created"].map((opt) => (
                <div key={opt} onClick={() => { setStatusFilter(opt); setIsDropdownOpen(false); }} className="px-4 py-2.5 text-sm font-['Hanuman'] hover:bg-[#FEF9F2] hover:text-[#B6A092] cursor-pointer"> {opt} </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="bg-white border border-[#E4DCD1] rounded-2xl shadow-sm overflow-hidden">
        <div className="overflow-x-auto w-full custom-scrollbar">
          <table className="w-full border-collapse min-w-max">
            <thead>
              <tr className="bg-[#FEF9F2] border-b-[1.5px] border-[#F6F2EE]">
                {['User', 'Email', 'Avatar', 'Try-Ons', 'Last Active', 'Actions'].map((head) => (
                  <th key={head} className="text-left px-6 py-4.5 font-['Hanuman'] font-bold text-sm text-[#6B5D52] whitespace-nowrap">{head}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-[#F6F2EE]">
              {filteredUsers.map((user) => (
                <tr key={user.id} className="hover:bg-[#FDFCFB] group transition-all duration-200">
                  {editingId === user.id ? (
                    <>
                      <td className="px-6 py-4.5 whitespace-nowrap">
                        <input className="border rounded px-2 py-1 text-sm outline-[#B6A092] w-full" value={editFormData.name} onChange={e=>setEditFormData({...editFormData, name: e.target.value})} />
                      </td>
                      <td className="px-6 py-4.5 whitespace-nowrap">
                        <input className="border rounded px-2 py-1 text-sm outline-[#B6A092] w-full" value={editFormData.email} onChange={e=>setEditFormData({...editFormData, email: e.target.value})} />
                      </td>
                      <td colSpan={3} className="px-6 py-4.5 text-right whitespace-nowrap">
                        <button onClick={saveEdit} className="bg-[#B6A092] text-white px-4 py-1.5 rounded-lg text-xs mr-2 hover:brightness-90 transition-all shadow-sm">Save</button>
                        <button onClick={()=>setEditingId(null)} className="text-xs text-gray-400 hover:text-gray-600 transition-all">Cancel</button>
                      </td>
                    </>
                  ) : (
                    <>
                      <td className="px-6 py-4.5 whitespace-nowrap">
                        <div className="flex items-center gap-4 font-['Hanuman']">
                          <div className="w-[45px] h-[45px] bg-[#C4A88A] rounded-full flex items-center justify-center border border-[#E5DFD8] shrink-0 shadow-sm">
                            <img 
                             src={UserIcon} 
                             alt="user" 
                             className="w-5 h-5 brightness-0 invert opacity-90" // invert بيخلي الأيقونة بيضا عشان تنطق عالبني
                            />
                          </div>
                          <span className="text-[18px] text-[#3D3530] font-medium group-hover:text-[#B6A092] transition-colors">
                            {user.name}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4.5 font-['Hanuman'] text-xs text-[#A89080] whitespace-nowrap">{user.email}</td>
                      <td className="px-6 py-4.5 whitespace-nowrap">
                        <span className={`px-4 py-1.5 rounded-full text-xs font-['Inter'] font-medium transition-colors ${user.avatarStatus === "Created" ? "bg-[#DCFCE7] text-[#008236]" : "bg-[#F3F4F6] text-[#364153]"}`}>
                          {user.avatarStatus}
                        </span>
                      </td>
                      <td className="px-6 py-4.5 font-['Inter'] text-sm text-[#4B5563] whitespace-nowrap">{user.tryOns}</td>
                      <td className="px-6 py-4.5 font-['Hanuman'] text-sm text-[#A89080] whitespace-nowrap">{user.lastActive}</td>
                      <td className="px-6 py-4.5 whitespace-nowrap">
                        <div className="flex gap-4 items-center">
                          <img 
                            src={EditIcon} 
                            alt="edit" 
                            onClick={() => startEdit(user)}
                            className="w-5 h-5 cursor-pointer hover:scale-110 transition-transform" 
                          />
                          <img 
                            src={DeleteIcon} 
                            alt="delete" 
                            onClick={() => handleDelete(user.id, user.name)} 
                            className="w-5 h-5 cursor-pointer hover:scale-110 transition-transform opacity-40 hover:opacity-100" 
                          />
                        </div>
                      </td>
                    </>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};