import { useState } from 'react';

import { MOCK_BRANDS }  from '@/features/admin/constants/adminMocks';

import SearchIcon from '@/assets/search-normal.svg';
import ArrowDown from '@/assets/arrow-left.svg'; 
import AddIcon from '@/assets/add.svg';
import EditIcon from '@/assets/editsuper.svg';
import DeleteIcon from '@/assets/delete.svg';
import ActiveIcon from '@/assets/active.svg';
import PendingIcon from '@/assets/pending.svg';
import InactiveIcon from '@/assets/inactive.svg';

export const TenantsPage = () => {
  const [brands, setBrands] = useState(MOCK_BRANDS);

  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const [editingId, setEditingId] = useState<number | null>(null);
  const [editFormData, setEditFormData] = useState<any>({});
  const [isAdding, setIsAdding] = useState(false);

  const statusIcons: any = {
    active: ActiveIcon,
    pending: PendingIcon,
    inactive: InactiveIcon
  };

  const filteredBrands = brands.filter((brand) => {
    const matchesSearch = brand.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "All" || brand.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const handleDelete = (id: number, name: string) => {
    if (window.confirm(`Are you sure you want to delete ${name}?`)) {
      setBrands(brands.filter((b) => b.id !== id));
    }
  };

  const handleApprove = (id: number) => {
    setBrands(brands.map((b) => b.id === id ? { ...b, status: "Active", statusKey: "active", icon: ActiveIcon } : b));
  };

  const handleReject = (id: number) => {
    setBrands(brands.map((b) => b.id === id ? { ...b, status: "Inactive", statusKey: "inactive", icon: InactiveIcon } : b));
  };

  const startEdit = (brand: any) => {
    setEditingId(brand.id);
    setEditFormData({ ...brand });
  };

  const saveEdit = () => {
    setBrands(brands.map(b => b.id === editingId ? { ...editFormData } : b));
    setEditingId(null);
  };

  const startAdding = () => {
    setIsAdding(true);
    setEditFormData({ 
      id: Date.now(), 
      name: "", 
      email: "", 
      status: "Pending", 
      products: "0", 
      tryOns: "0", 
      date: new Date().toLocaleDateString(), 
      icon: PendingIcon, 
      statusKey: 'pending' 
    });
  };

  const saveNewBrand = () => {
    if(!editFormData.name) return alert("Please enter brand name");
    setBrands([editFormData, ...brands]);
    setIsAdding(false);
  };

  return (
    <div className="flex flex-col gap-6 animate-in fade-in duration-500 max-w-full">
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div className="font-['Hanuman']">
          <h1 className="text-2xl text-[#14181f] font-normal leading-8">Brand Management</h1>
          <p className="text-sm text-[#A89080] mt-1">Manage brand integrations and partnerships</p>
        </div>
        <button onClick={startAdding} className="flex items-center gap-2.5 bg-[#B6A092] text-white px-5 h-10 rounded-lg font-['Inter'] text-sm hover:bg-[#A89080] transition-all cursor-pointer shadow-sm active:scale-95">
          <img src={AddIcon} className="w-4 h-4" />
          <span>Add Brand</span>
        </button>
      </header>

      <div className="flex flex-col md:flex-row justify-between gap-4 p-2.5 bg-white border border-[#E4DCD1] rounded-xl shadow-sm z-10">
        <div className="flex-1 flex items-center gap-3 bg-white border border-[#E4DCD1] rounded-lg px-3 py-2 focus-within:border-[#B6A092] transition-colors">
          <img src={SearchIcon} className="w-5 h-5 opacity-50" />
          <input type="text" placeholder="Search brands..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="w-full border-none outline-none font-['Inter'] text-sm text-black placeholder:text-black/30" />
        </div>
        <div className="relative w-full md:w-48">
          <div onClick={() => setIsDropdownOpen(!isDropdownOpen)} className="flex items-center justify-between border border-[#E4DCD1] rounded-lg px-3 py-2 cursor-pointer font-['Hanuman'] text-sm text-black/50 hover:bg-gray-50 bg-white">
            <span>{statusFilter === "All" ? "All Status" : statusFilter}</span>
            <img src={ArrowDown} className={`w-3 transition-transform duration-300 ${isDropdownOpen ? 'rotate-90' : 'rotate-270'}`} />
          </div>
          {isDropdownOpen && (
            <div className="absolute top-full left-0 w-full mt-1 bg-white border border-[#E4DCD1] rounded-lg shadow-xl overflow-hidden z-20">
              {["All", "Active", "Pending", "Inactive"].map((opt) => (
                <div key={opt} onClick={() => { setStatusFilter(opt); setIsDropdownOpen(false); }} className="px-4 py-2 text-sm font-['Hanuman'] hover:bg-[#FEF9F2] hover:text-[#B6A092] cursor-pointer"> {opt} </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <section className="bg-white border border-[#E4DCD1] rounded-2xl shadow-sm overflow-hidden">
        <div className="overflow-x-auto w-full custom-scrollbar">
          <table className="w-full border-collapse min-w-max">
            <thead>
              <tr className="bg-[#FEF9F2] border-b-[1.5px] border-[#F6F2EE]">
                {['Brand Name', 'Email', 'Status', 'Products', 'Try-Ons', 'Joined Date', 'Actions'].map((head) => (
                  <th key={head} className="text-left px-6 py-4.5 font-['Hanuman'] font-bold text-sm text-[#6B5D52] whitespace-nowrap">{head}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-[#F6F2EE]">
              {isAdding && (
                <tr className="bg-[#FEF9F2]/50 animate-in slide-in-from-top-2">
                  <td className="px-6 py-4.5"><input className="border rounded px-2 py-1 text-sm w-full outline-[#B6A092]" placeholder="Name" value={editFormData.name} onChange={e=>setEditFormData({...editFormData, name: e.target.value})} /></td>
                  <td className="px-6 py-4.5"><input className="border rounded px-2 py-1 text-sm w-full outline-[#B6A092]" placeholder="Email" value={editFormData.email} onChange={e=>setEditFormData({...editFormData, email: e.target.value})} /></td>
                  <td className="px-6 py-4.5"><span className="text-xs text-[#A89080]">Pending</span></td>
                  <td className="px-6 py-4.5 text-xs text-[#4B5563]">0</td>
                  <td className="px-6 py-4.5 text-xs text-[#4B5563]">0</td>
                  <td className="px-6 py-4.5 text-xs text-[#A89080]">{editFormData.date}</td>
                  <td className="px-6 py-4.5 flex items-center gap-2 mt-2">
                    <button onClick={saveNewBrand} className="bg-[#B6A092] text-white px-3 py-1 rounded text-xs shadow-sm">Save</button>
                    <button onClick={()=>setIsAdding(false)} className="text-xs text-gray-400">Cancel</button>
                  </td>
                </tr>
              )}

              {filteredBrands.map((brand) => (
                <tr key={brand.id} className="hover:bg-[#FDFCFB] group transition-all duration-200">
                  {editingId === brand.id ? (
                    <>
                      <td className="px-6 py-4.5"><input className="border rounded px-2 py-1 text-sm w-full outline-[#B6A092]" value={editFormData.name} onChange={e=>setEditFormData({...editFormData, name: e.target.value})} /></td>
                      <td className="px-6 py-4.5"><input className="border rounded px-2 py-1 text-sm w-full outline-[#B6A092]" value={editFormData.email} onChange={e=>setEditFormData({...editFormData, email: e.target.value})} /></td>
                      <td colSpan={4} className="px-6 py-4.5 text-right">
                        <button onClick={saveEdit} className="bg-[#B6A092] text-white px-3 py-1 rounded text-xs mr-2 shadow-sm">Save</button>
                        <button onClick={()=>setEditingId(null)} className="text-xs text-gray-400">Cancel</button>
                      </td>
                    </>
                  ) : (
                    <>
                      <td className="px-6 py-4.5 font-['Hanuman'] font-medium text-[#3D3530] whitespace-nowrap">{brand.name}</td>
                      <td className="px-6 py-4.5 text-xs text-[#A89080] whitespace-nowrap">{brand.email}</td>
                      <td className="px-6 py-4.5 whitespace-nowrap">
                        <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-['Inter'] font-medium
                          ${brand.statusKey === 'active' ? 'bg-[#E6F7ED] text-[#22C55E]' : 
                            brand.statusKey === 'pending' ? 'bg-[#FFF9E6] text-[#F59E0B]' : 
                            'bg-[#F3F4F6] text-[#364153]'}`}>
                          
                          {brand.statusKey === 'inactive' ? (
                            <span className="w-3 h-3 flex items-center justify-center font-bold text-[10px]">✕</span>
                          ) : (
                            <img src={statusIcons[brand.statusKey]} className="w-3 h-3" alt="" />
                          )}
                          
                          {brand.status}
                        </span>
                      </td>
                      <td className="px-6 py-4.5 text-xs text-[#4B5563] whitespace-nowrap">{brand.products}</td>
                      <td className="px-6 py-4.5 text-xs text-[#4B5563] whitespace-nowrap">{brand.tryOns}</td>
                      <td className="px-6 py-4.5 text-xs text-[#A89080] whitespace-nowrap">{brand.date}</td>
                      <td className="px-6 py-4.5 whitespace-nowrap">
                        <div className="flex gap-3 items-center">
                          <img src={EditIcon} onClick={() => startEdit(brand)} className="w-5 h-5 cursor-pointer hover:scale-110 transition-transform" />
                          <img src={DeleteIcon} onClick={() => handleDelete(brand.id, brand.name)} className="w-5 h-5 cursor-pointer opacity-40 hover:opacity-100 transition-opacity" />
                          
                          {brand.statusKey === "pending" && (
                            <div className="flex gap-2 ml-2 animate-in fade-in slide-in-from-left-2 duration-300">
                              <button onClick={() => handleApprove(brand.id)} className="text-[10px] px-2 py-1 bg-green-100 text-green-600 rounded-md hover:bg-green-200 transition-colors shadow-sm">Approve</button>
                              <button onClick={() => handleReject(brand.id)} className="text-[10px] px-2 py-1 bg-red-100 text-red-600 rounded-md hover:bg-red-200 transition-colors shadow-sm">Reject</button>
                            </div>
                          )}
                        </div>
                      </td>
                    </>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};
