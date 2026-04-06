import { useState } from 'react';

import { MOCK_ROLES, MOCK_ADMIN_USERS } from '@/features/admin/constants/adminMocks';

import AddIcon from '@/assets/add.svg';
import EditIcon from '@/assets/edit.svg'; 
import EditSpecial from '@/assets/editsuper.svg'; 
import DeleteIcon from '@/assets/delete.svg';
import ShieldIcon from '@/assets/roles.svg'; 
import UsersIcon from '@/assets/users.svg'; 
import TickIcon from '@/assets/checked.svg';

export const RoleAccessPage = () => {
  const [roles, setRoles] = useState(MOCK_ROLES);
  const [adminUsers, setAdminUsers] = useState(MOCK_ADMIN_USERS);

  const [selectedRoleId, setSelectedRoleId] = useState<number | null>(null);
  const [isAddingRole, setIsAddingRole] = useState(false);
  const [newRoleTitle, setNewRoleTitle] = useState("");
  const [isAddingAdmin, setIsAddingAdmin] = useState(false);
  const [editingAdminId, setEditingAdminId] = useState<number | null>(null);
  const [adminFormData, setAdminFormData] = useState<any>({});
  const [isEditingPermissions, setIsEditingPermissions] = useState(false);

  const activeRole = selectedRoleId !== null ? roles.find(r => r.id === selectedRoleId) : null;

  const togglePermission = (permName: string) => {
    if (!isEditingPermissions) return; 
    setRoles(prev => prev.map(role => 
      role.id === selectedRoleId 
        ? { ...role, permissions: role.permissions.map(p => p.name === permName ? { ...p, checked: !p.checked } : p) } 
        : role
    ));
  };

  const handleCreateRole = () => {
    if (!newRoleTitle) return setIsAddingRole(false);
    const newRole = { 
        id: Date.now(), 
        title: newRoleTitle, 
        users: 0, 
        desc: "Custom role permissions", 
        permissions: roles[0].permissions.map(p => ({ ...p, checked: false })) 
    };
    setRoles([...roles, newRole]);
    setIsAddingRole(false);
    setNewRoleTitle("");
  };

  const handleAddAdmin = () => {
    if (!adminFormData.name) return setIsAddingAdmin(false);
    setAdminUsers([{ ...adminFormData, id: Date.now(), lastActive: "Just now", status: "Active" }, ...adminUsers]);
    setIsAddingAdmin(false);
    setAdminFormData({});
  };

  const saveAdminEdit = () => {
    setAdminUsers(adminUsers.map(u => u.id === editingAdminId ? { ...adminFormData } : u));
    setEditingAdminId(null);
  };

  return (
    <div className="flex flex-col gap-8 animate-in fade-in duration-500 max-w-full font-['Hanuman']">
      <header className="flex justify-between items-center px-1">
        <div>
          <h1 className="text-2xl text-[#14181F] font-normal">Role & Access Control</h1>
          <p className="text-base text-[#A89080] mt-1">Manage admin roles and permissions</p>
        </div>
        <button onClick={() => setIsAddingRole(true)} className="bg-[#B6A092] text-white px-6 py-3 rounded-xl flex items-center gap-2 font-['Inter'] text-sm active:scale-95 transition-all shadow-sm">
          <img src={AddIcon} alt="" className="w-4" /> <span>Create New Role</span>
        </button>
      </header>

      <section className="flex flex-col xl:flex-row gap-8 items-start">
        <div className="w-full xl:w-[350px] bg-white border border-[#E5DFD8] rounded-[24.5px] overflow-hidden shrink-0 shadow-sm">
          <div className="bg-[#FEF9F2] p-7 border-b border-[#E5DFD8]">
            <h2 className="text-[28px] font-bold text-[#3D3530]">Roles</h2>
          </div>
          <div className="flex flex-col">
            {roles.map((role) => (
              <div 
                key={role.id} 
                onClick={() => { setSelectedRoleId(role.id); setIsEditingPermissions(false); }} 
                className={`p-7 flex gap-5 cursor-pointer border-b border-[#E5DFD8] transition-all relative min-h-[180px] ${selectedRoleId === role.id ? 'bg-[#FFFEFC] shadow-[0_0_10px_0_#B6A09233] z-10' : 'bg-white hover:bg-gray-50'}`}
              >
                <div className="w-[55px] h-[55px] bg-[#F6F2EE] rounded-xl flex items-center justify-center shrink-0">
                  <img src={ShieldIcon} alt="" className="w-7.5 h-7.5" />
                </div>
                <div className="flex flex-col">
                  <h3 className="text-xl text-[#3D3530] font-['Inter'] font-normal">{role.title}</h3>
                  <p className="text-lg text-[#A89080] leading-tight mt-1 mb-2 pr-5">{role.desc}</p>
                  <div className="flex items-center gap-2 mt-auto">
                    <img src={UsersIcon} alt="" className="w-4" />
                    <span className="text-lg text-[#A89080]">{role.users} users</span>
                  </div>
                </div>
              </div>
            ))}
            {isAddingRole && (
              <div className="p-7 bg-[#FEF9F2] animate-in slide-in-from-top-2">
                <input autoFocus className="w-full border-b border-[#B6A092] bg-transparent outline-none py-2 text-lg font-['Inter']" placeholder="Role Title..." value={newRoleTitle} onChange={e => setNewRoleTitle(e.target.value)} onBlur={handleCreateRole} onKeyPress={e => e.key === 'Enter' && handleCreateRole()} />
              </div>
            )}
          </div>
        </div>

        <div className="flex-1 bg-white border border-[#E5DFD8] rounded-[24.5px] shadow-sm overflow-hidden min-h-[450px]">
          {!activeRole ? (
            <div className="h-[450px] flex flex-col items-center justify-center p-10 bg-white">
              <img src={ShieldIcon} className="w-16 opacity-10 mb-4" alt="" />
              <p className="text-lg text-[#A89080] font-light text-center">Select a role to view details and permissions</p>
            </div>
          ) : (
            <div className="animate-in slide-in-from-right-4 duration-300">
              <div className="p-8 border-b border-[#E5DFD8] flex justify-between items-center bg-white">
                <div className="flex items-center gap-[18px]">
                  <div className="w-[65px] h-[65px] bg-[#F6F2EE] rounded-xl flex items-center justify-center">
                    <img src={ShieldIcon} alt="" className="w-10" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#3D3530] font-['Inter'] mb-1.5">{activeRole.title}</h3>
                    <p className="text-sm text-[#A89080]">{activeRole.desc}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  {isEditingPermissions && (
                    <button onClick={() => setIsEditingPermissions(false)} className="bg-[#B6A092] text-white px-4 py-1.5 rounded-lg text-xs font-['Inter'] shadow-md">
                      Save Changes
                    </button>
                  )}
                  <img 
                    src={EditIcon} 
                    alt="edit" 
                    className={`w-8 p-1 cursor-pointer hover:scale-110 transition-all rounded-lg ${isEditingPermissions ? 'bg-[#B6A092] brightness-0 invert shadow-inner' : ''}`} 
                    onClick={() => setIsEditingPermissions(!isEditingPermissions)} 
                  />
                  <img src={DeleteIcon} alt="delete" className="w-8 p-1 cursor-pointer hover:scale-110 transition-transform" onClick={() => {if(window.confirm('Delete Role?')) setRoles(roles.filter(r=>r.id !== selectedRoleId)); setSelectedRoleId(null);}} />
                </div>
              </div>

              <div className="p-8">
                <h4 className="text-[22px] text-[#3D3530] font-normal mb-8">Permissions</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {activeRole.permissions.map((perm, idx) => (
                    <div 
                      key={idx} 
                      onClick={() => togglePermission(perm.name)}
                      className={`flex justify-between items-center p-6 px-5 rounded-[18px] border transition-all select-none
                        ${isEditingPermissions ? 'cursor-pointer hover:shadow-sm border-dashed' : 'cursor-default opacity-90'}`}
                      style={{ 
                        backgroundColor: perm.checked ? 'rgba(196, 168, 138, 0.05)' : 'rgba(229, 223, 216, 0.1)',
                        borderColor: perm.checked ? '#C4A88A' : '#E5DFD8'
                      }}>
                      <span className="text-[17px] text-[#3D3530]">{perm.name}</span>
                      {perm.checked ? (
                        <div className="w-6 h-6 bg-[#B6A092] rounded-full flex items-center justify-center shadow-sm">
                          <img src={TickIcon} alt="" className="w-3.5 brightness-0 invert" />
                        </div>
                      ) : (
                        <div className="w-6 h-6 bg-[#E5DFD8] border-2 border-[#E5DFD8] rounded-full"></div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="bg-white border border-[#E4DCD1] rounded-[20px] overflow-hidden shadow-sm">
        <header className="p-6 md:px-8 flex justify-between items-center border-b border-[#F6F2EE]">
          <h2 className="text-lg text-[#3D3530] font-bold">Admin Users</h2>
          <button onClick={() => setIsAddingAdmin(true)} className="text-[#C4A88A] font-['Inter'] text-sm hover:underline cursor-pointer">+ Add Admin User</button>
        </header>
        <div className="overflow-x-auto custom-scrollbar w-full">
          <table className="w-full border-collapse min-w-max">
            <thead>
              <tr className="bg-[#FEF9F2] text-[#6B5D52] font-bold">
                {['Name', 'Email', 'Role', 'Last Active', 'Status', 'Actions'].map(h => (
                  <th key={h} className="text-left p-4 md:px-6 border-b border-[#F6F2EE] whitespace-nowrap">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {isAddingAdmin && (
                <tr className="bg-[#FEF9F2]/50 animate-in slide-in-from-top-2 font-['Inter']">
                  <td className="p-4 px-6"><input autoFocus className="border rounded px-2 py-1 text-sm w-full outline-[#B6A092]" placeholder="Full Name" onChange={e => setAdminFormData({...adminFormData, name: e.target.value})} /></td>
                  <td className="p-4 px-6"><input className="border rounded px-2 py-1 text-sm w-full outline-[#B6A092]" placeholder="Email" onChange={e => setAdminFormData({...adminFormData, email: e.target.value})} /></td>
                  <td className="p-4 px-6">
                    <select className="border rounded px-2 py-1 text-sm outline-[#B6A092]" onChange={e => setAdminFormData({...adminFormData, role: e.target.value})}>
                      <option value="">Select Role</option>
                      {roles.map(r => <option key={r.id} value={r.title}>{r.title}</option>)}
                    </select>
                  </td>
                  <td colSpan={3} className="p-4 px-6 text-right">
                    <button onClick={handleAddAdmin} className="bg-[#B6A092] text-white px-4 py-1.5 rounded-lg text-xs mr-2 shadow-sm">Save</button>
                    <button onClick={() => setIsAddingAdmin(false)} className="text-xs text-gray-400">Cancel</button>
                  </td>
                </tr>
              )}
              {adminUsers.map((user) => (
                <tr key={user.id} className="hover:bg-gray-50 transition-colors font-['Inter']">
                  {editingAdminId === user.id ? (
                    <>
                      <td className="p-4 px-6"><input className="border rounded px-2 py-1 text-sm w-full outline-[#B6A092]" value={adminFormData.name} onChange={e => setAdminFormData({...adminFormData, name: e.target.value})} /></td>
                      <td className="p-4 px-6"><input className="border rounded px-2 py-1 text-sm w-full outline-[#B6A092]" value={adminFormData.email} onChange={e => setAdminFormData({...adminFormData, email: e.target.value})} /></td>
                      <td colSpan={4} className="p-4 px-6 text-right">
                        <button onClick={saveAdminEdit} className="bg-[#B6A092] text-white px-4 py-1.5 rounded-lg text-xs mr-2 shadow-sm">Save</button>
                        <button onClick={() => setEditingAdminId(null)} className="text-xs text-gray-400">Cancel</button>
                      </td>
                    </>
                  ) : (
                    <>
                      <td className="p-4 md:px-6 font-semibold text-[#3D3530] whitespace-nowrap">{user.name}</td>
                      <td className="p-4 md:px-6 text-[#A89080] text-xs whitespace-nowrap">{user.email}</td>
                      <td className="p-4 md:px-6 whitespace-nowrap"><span className="bg-[#F6F2EE] text-[#6B5D52] px-3 py-1 rounded-full text-xs">{user.role}</span></td>
                      <td className="p-4 md:px-6 text-[#A89080] text-xs whitespace-nowrap">{user.lastActive}</td>
                      <td className="p-4 md:px-6 whitespace-nowrap">
                        <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[13px] font-medium ${user.status === 'Active' ? 'text-[#008236] bg-[#DCFCE7] before:content-["●"] before:text-[#00C950]' : 'text-[#364153] bg-[#F3F4F6] before:content-["●"]'}`}>
                          {user.status}
                        </span>
                      </td>
                      <td className="p-4 md:px-6 flex gap-4 whitespace-nowrap">
                        <img src={EditSpecial} onClick={() => {setEditingAdminId(user.id); setAdminFormData(user);}} alt="edit" className="w-6 cursor-pointer hover:scale-110 transition-transform" />
                        <img src={DeleteIcon} onClick={() => setAdminUsers(adminUsers.filter(u => u.id !== user.id))} alt="delete" className="w-6 cursor-pointer hover:scale-110 grayscale opacity-40 hover:opacity-100 transition-all" />
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