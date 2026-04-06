import { useState } from 'react';

import { MOCK_PLANS, MOCK_SAAS_DATA } from '@/features/admin/constants/adminMocks';

import UsersIcon from '@/assets/users.svg'; 
import ArrowIcon from '@/assets/revenue.svg'; 
import DollarIcon from '@/assets/dollarsign.svg'; 
import BoxIcon from '@/assets/box.svg'; 
import saasIllustration from '@/assets/Saas.png'; 

export const SubscriptionPlansPage = () => {
  const [activeTab, setActiveTab] = useState<'monthly' | 'yearly' | 'saas'>('monthly');
  
  const [plans, setPlans] = useState(MOCK_PLANS);
  const saasData = MOCK_SAAS_DATA;

  const [mode, setMode] = useState<'view' | 'edit' | 'create' | null>(null);
  const [selectedPlan, setSelectedPlan] = useState<any>(null);

  const stats = [
    { label: "Total Subscribers", value: "247", trend: "+12.5%", icon: UsersIcon },
    { label: "Monthly Revenue", value: "$19,143", trend: "+18.3%", icon: DollarIcon },
    { label: "Active Plans", value: plans.length.toString(), trend: "0%", icon: BoxIcon },
    { label: "Avg. Revenue/User", value: "$77.50", trend: "+5.2%", icon: ArrowIcon }
  ];

  const handleSavePlan = () => {
    if (mode === "create") setPlans([...plans, { ...selectedPlan, id: Date.now() }]);
    if (mode === "edit") setPlans(plans.map(p => p.id === selectedPlan.id ? selectedPlan : p));
    setMode(null);
    setSelectedPlan(null);
  };

  return (
    <div className="flex flex-col gap-6 p-2 md:p-1 animate-in fade-in duration-500 font-['Hanuman']">
      <header className="flex justify-between items-center px-1">
        <div>
          <h1 className="text-[22px] text-[#14181F] font-normal">Subscription plans</h1>
          <p className="text-[14px] text-[#A89080] mt-0.5">Manage pricing plans and subscriber access</p>
        </div>
        {mode === null && (
          <button onClick={() => { setSelectedPlan({title: "", desc: "", priceMonthly: 0, priceYearly: 0, features: ["Feature 1"]}); setMode("create"); }} className="bg-[#B6A092] text-white px-5 py-2.5 rounded-xl text-sm shadow-sm active:scale-95 transition-all">
            + Create New Plan
          </button>
        )}
      </header>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((stat, i) => (
          <div key={i} className="bg-white border-[1.5px] border-[#E5DFD8] rounded-[20px] p-7 shadow-sm ">
            <div className="flex justify-between items-center mb-4">
              <div className="w-16 h-16 bg-[#C4A88A]/10 rounded-xl flex items-center justify-center"><img src={stat.icon} className="w-8" /></div>
              <span className="text-[#00A63E] text-sm font-['Inter']">{stat.trend}</span>
            </div>
            <span className="text-lg text-[#A89080] block mb-5">{stat.label}</span>
            <span className="text-xl text-[#3D3530] font-['Inter']">{stat.value}</span>
          </div>
        ))}
      </section>

      <section className="flex flex-col items-center w-full mt-2">
        {mode !== null ? (
          <button onClick={() => setMode(null)} className="mb-6 text-[#B6A092] font-bold hover:underline flex items-center gap-2 self-start ml-4">← Back to plans</button>
        ) : (
          <div className="bg-[#FEF9F2] p-[2px] border border-[#E5DFD8] rounded-xl flex gap-1 w-full max-w-[600px] mb-8 font-['Inter']">
            {(['monthly', 'yearly', 'saas'] as const).map((tab) => (
              <button key={tab} onClick={() => setActiveTab(tab)} className={`flex-1 py-2.5 rounded-lg text-xs capitalize ${activeTab === tab ? 'bg-[#B6A092] text-white shadow-md' : 'text-[#B6A092]'}`}> {tab} </button>
            ))}
          </div>
        )}

        <div className={`flex flex-wrap gap-5 w-full max-w-[1300px] ${mode !== null ? 'justify-center' : 'justify-start'}`}>
          
          {(mode === "edit" || mode === "create") && selectedPlan && (
            <div className="flex-1 min-w-[300px] max-w-[420px] bg-white border border-[#B6A092] shadow-[0_0_10px_0_#B6A092] rounded-[18px] p-8 flex flex-col min-h-[600px] animate-in zoom-in">
              <input className="text-center bg-transparent text-lg font-bold text-[#949E96] border-b outline-none mb-3" value={selectedPlan.title} onChange={e => setSelectedPlan({...selectedPlan, title: e.target.value})} />
              <input className="text-center bg-transparent text-xs text-[#C9A390] border-b outline-none mb-4" value={selectedPlan.desc} onChange={e => setSelectedPlan({...selectedPlan, desc: e.target.value})} />
              <div className="flex justify-center items-start text-[#B6A092] mb-6">
                <span className="text-lg mt-1">$</span>
                <input 
                  type="number" 
                  className="w-24 text-center border-b outline-none text-4xl font-bold bg-transparent mx-1" 
                  value={activeTab === 'yearly' ? selectedPlan.priceYearly : selectedPlan.priceMonthly} 
                  onChange={e => {
                    const newVal = Number(e.target.value);
                    if (activeTab === 'yearly') {
                      setSelectedPlan({...selectedPlan, priceYearly: newVal});
                    } else {
                      setSelectedPlan({...selectedPlan, priceMonthly: newVal});
                    }
                  }} 
                />
              </div>
              <div className="flex-1 space-y-2 mb-6">
                {selectedPlan.features.slice(0, 10).map((feat: string, i: number) => (
                  <input key={i} className="w-full text-xs p-2 border rounded-lg outline-[#B6A092]" value={feat} onChange={e => {
                    const updated = [...selectedPlan.features];
                    updated[i] = e.target.value;
                    setSelectedPlan({...selectedPlan, features: updated});
                  }} />
                ))}
              </div>
              <button onClick={handleSavePlan} className="w-full bg-[#B6A092] text-white py-3 rounded-xl font-bold uppercase text-[10px] shadow-sm">Save Changes</button>
            </div>
          )}

          {mode === "view" && selectedPlan && (
            <div className="flex-1 min-w-[320px] max-w-[500px] bg-white border border-[#E4DCD1] rounded-[24px] p-10 flex flex-col min-h-[750px] animate-in slide-in-from-bottom-4 shadow-2xl">
              <div className="text-center">
                <h3 className="text-[#949E96] text-xl mb-1 tracking-widest ">{selectedPlan.title}</h3>
                <p className="text-[#C9A390] text-sm mb-6">{selectedPlan.desc}</p>
                <div className="flex justify-center items-start text-[#B6A092] mb-8">
                  <span className="text-[#1E1E1EB2] text-m mt-1">$</span>
                  <span className="text-5xl leading-none mx-1">{activeTab === 'yearly' ? selectedPlan.priceYearly : selectedPlan.priceMonthly}</span>
                  <span className="text-[14px] text-black/70 self-end mb-2">/{activeTab === 'monthly' || activeTab === 'saas' ? 'month' : 'year'}</span>
                </div>
              </div>
              <ul className="flex-1 space-y-4 mb-8">
                {selectedPlan.features.map((feat: string, i: number) => (
                  <li key={i} className="text-[13px] text-black/70 pl-6 relative leading-relaxed before:content-['•'] before:absolute before:left-0 before:text-[#C4A88A] before:text-2xl before:-top-1"> {feat} </li>
                ))}
              </ul>
              <button onClick={() => setMode(null)} className="w-full py-4 rounded-xl bg-[#FEF9F2] border border-[#E4D0D1] text-[#B6A092] text-xs uppercase hover:bg-[#B6A092] hover:text-white transition-all">Close Focus Preview</button>
            </div>
          )}

          {mode === null && activeTab !== 'saas' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
              {plans.map((plan) => (
                <div key={plan.id} className={`bg-white border rounded-[18px] p-8 flex flex-col h-[650px] relative transition-all ${plan.featured ? 'border-[#B6A092] shadow-[0_0_9px_0_#B6A092]' : 'border-[#E4DCD1]'}`}>
                  {plan.featured && <div className="absolute top-4 right-0 bg-[#B6A092] text-white px-5 py-1.5 text-[12px] font-['Inter'] [clip-path:polygon(100%_0,100%_100%,0_100%,15%_50%,0_0)] shadow-sm">Popular</div>}
                  <div className="text-center pt-2">
                    <h3 className="text-[#949E96] text-[17px] mb-1 mt-5 tracking-wide ">{plan.title}</h3>
                    <p className="text-[#C9A390] text-xs mb-4 h-8 leading-relaxed">{plan.desc}</p>
                    <div className="flex justify-center items-start text-[#B6A092] mt-2 mb-4">
                      <span className="text-[#1E1E1EB2] text-m mt-0">$</span>
                      <span className="text-4xl leading-none mx-0.5">{activeTab === 'yearly' ? plan.priceYearly : plan.priceMonthly}</span>
                      <span className="text-[12px] text-black/70 self-end mb-1">/{activeTab === 'yearly' ? 'year' : 'month'}</span>
                    </div>
                  </div>
                  <ul className="flex-1 space-y-2 my-4 list-none p-0 overflow-hidden">
                    {plan.features.slice(0, 9).map((feat, i) => (
                      <li key={i} className="text-xs text-black/60 pl-4 relative leading-[1.4] before:content-['•'] before:absolute before:left-0 before:text-[#E4D0D1] before:text-xl before:-top-0.5 truncate"> {feat} </li>
                    ))}
                    <li className="text-[10px] text-[#B6A092] mt-2 font-bold cursor-pointer hover:underline" onClick={() => { setSelectedPlan(plan); setMode("view"); }}>+ View all features</li>
                  </ul>
                  <div className="flex gap-2.5 mt-4">
                    <button onClick={() => { setSelectedPlan(plan); setMode("view"); }} className="flex-1 py-3 rounded-xl bg-[#FEF9F2] border border-[#E4D0D1] text-[#B6A092] text-[10px] font-bold uppercase transition-all shadow-sm">View Plan</button>
                    <button onClick={() => { setSelectedPlan(plan); setMode("edit"); }} className="flex-1 py-3 rounded-xl border border-[#E4D0D1] text-[#B6A092] text-[10px] font-bold uppercase hover:bg-[#B6A092] hover:text-white transition-all shadow-sm">Edit Plan</button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'saas' && mode === null && (
            <div className="flex flex-col lg:flex-row gap-6 w-full max-w-[1300px] items-stretch animate-in slide-in-from-bottom-5">
              <div className="flex-[1] bg-white border border-[#E4DCD1] shadow-[0_0_10px_0_#B6A092] rounded-[24px] p-8 flex flex-col min-h-[550px]">
                <div className="text-center">
                  <h3 className="text-[#949E96] text-[17px] tracking-wider ">{saasData.title}</h3>
                  <p className="text-[#C9A390] text-xs mt-1.5">{saasData.desc}</p>
                  <div className="flex justify-center items-start text-[#B6A092] mt-6 ">
                    <span className="text-m text-[#1E1E1EB2] mt-0">$</span>
                    <span className="text-4xl leading-none mx-0.5">{saasData.priceMonthly}</span>
                  </div>
                </div>
                <ul className="flex-1 space-y-2.5 my-8 list-none overflow-hidden">
                  {saasData.features.slice(0, 10).map((f, i) => (
                    <li key={i} className="text-xs text-black/50 pl-5 relative before:content-['•'] before:absolute before:left-0 before:text-[#E4D0D1] before:text-xl before:-top-0.5 truncate"> {f} </li>
                  ))}
                   <li className="text-[10px] text-[#B6A092] font-bold cursor-pointer hover:underline" onClick={() => { setSelectedPlan(saasData); setMode("view"); }}>+ Click "View Plan" for all 15 features</li>
                </ul>
                <div className="flex gap-2.5 pt-4">
                  <button onClick={() => { setSelectedPlan(saasData); setMode("view"); }} className="flex-1 py-3.5 rounded-xl bg-[#FEF9F2] border border-[#E4DCD1] text-[#B6A092] text-[10px] font-bold uppercase transition-all shadow-sm">View Plan</button>
                  <button onClick={() => { setSelectedPlan(saasData); setMode("edit"); }} className="flex-1 py-3.5 rounded-xl border border-[#E4D0D1] text-[#B6A092] text-[10px] font-bold uppercase hover:bg-[#B6A092] hover:text-white transition-all shadow-sm">Edit Plan</button>
                </div>
              </div>
              <div className="hidden lg:flex flex-[2] bg-[#F6F2EE] border border-[#E5DFD8] rounded-[24px] overflow-hidden">
                <img src={saasIllustration} alt="SaaS" className="w-full h-full object-cover transition-all duration-700 hover:scale-105" />
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};