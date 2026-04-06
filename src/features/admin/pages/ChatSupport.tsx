import { useState } from 'react';

import { MOCK_CHAT_LIST, MOCK_CHAT_MESSAGES } from '@/features/admin/constants/adminMocks';

import SearchIcon from '@/assets/search-normal.svg';
import AttachIcon from '@/assets/attach.svg';
import SendIcon from '@/assets/send.svg';
import TimeIcon from '@/assets/timeline.svg';
import MoreIcon from '@/assets/more.svg';
import CallIcon from '@/assets/call.svg';
import VideoIcon from '@/assets/videocall.svg';
import StarIcon from '@/assets/favorite.svg';
import SearchInChatIcon from '@/assets/search-status.svg';

export const ChatSupport = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState('All'); 
  const [msgInput, setMsgInput] = useState("");
  const [selectedChatId, setSelectedChatId] = useState(1);

  // 2. استخدام الموك كبيانات أولية
  const [chatList, setChatList] = useState(MOCK_CHAT_LIST);
  const [messages, setMessages] = useState<{ [key: number]: any[] }>(MOCK_CHAT_MESSAGES);

  const selectedChat = chatList.find(c => c.id === selectedChatId);
  const currentMessages = messages[selectedChatId] || [];

  const stats = [
    { label: "Active Conversations", value: chatList.filter(c => c.status === "Active").length },
    { label: "Pending Response", value: chatList.filter(c => c.status === "Pending").length },
    { label: "Avg Response Time", value: "8m 32s" },
    { label: "Resolved Today", value: chatList.filter(c => c.status === "Resolved").length }
  ];

  const handleSendMessage = () => {
    if (!msgInput.trim()) return;
    const newMsg = {
      id: Date.now(),
      text: msgInput,
      sender: "out",
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    setMessages({ ...messages, [selectedChatId]: [...currentMessages, newMsg] });
    setMsgInput("");
  };

  const handleFileUpload = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.onchange = (e: any) => {
      const file = e.target.files[0];
      if (file) alert(`Ready to upload: ${file.name}`);
    };
    input.click();
  };

  const getInitials = (name: string) => {
    if (!name) return "";
    const words = name.split(" ");
    return words.length === 1 ? words[0].charAt(0).toUpperCase() : (words[0].charAt(0) + words[1].charAt(0)).toUpperCase();
  };

  const filteredChats = chatList.filter(chat => {
    const matchesSearch = chat.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTab = activeTab === 'All' || chat.status === activeTab;
    return matchesSearch && matchesTab;
  });

  return (
    <div className="flex flex-col gap-1 animate-in fade-in duration-500 max-w-full overflow-hidden">
      <header className="chat-page-header font-['Hanuman'] px-1">
        <h1 className="text-[20px] sm:text-[22px] text-[#14181F] font-normal leading-tight">Chat Support</h1>
        <p className="text-xs sm:text-sm text-[#A89080] mb-4 sm:mb-[25px]">Communicate with brands and provide support</p>
      </header>

      <section className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 mb-[20px] sm:mb-[30px] font-['Hanuman'] px-1">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white border border-[#E5DFD8] rounded-2xl p-3 sm:p-5 md:px-6 flex flex-col justify-center shadow-sm min-w-0 h-[80px] sm:h-auto transition-all">
            <span className="text-[12px] sm:text-base md:text-lg text-[#A89080] mb-0.5 sm:mb-2 truncate" title={stat.label}>
              {stat.label}
            </span>
            <span className="text-[12px] sm:text-m md:text-lg text-[#3D3530] font-normal leading-none font-['Inter']">
              {stat.value}
            </span>
          </div>
        ))}
      </section>

      <section className="flex bg-white border-[1.744px] border-[#E5DFD8] rounded-[24px] overflow-hidden min-h-[600px] md:min-h-[800px] h-[calc(100vh-280px)] md:h-[calc(100vh-200px)] relative shadow-sm transition-all duration-300">
        
        {showSidebar && (
          <div className="fixed inset-0 bg-black/40 z-40 lg:hidden" onClick={() => setShowSidebar(false)} />
        )}

        <aside className={`
          absolute inset-y-0 left-0 z-50 w-[300px] sm:w-[350px] lg:w-[380px] bg-white border-r border-[#E5DFD8] flex flex-col transition-transform duration-300 ease-in-out
          lg:static lg:translate-x-0
          ${showSidebar ? 'translate-x-0' : '-translate-x-full'}
        `}>
          <div className="p-5 sm:p-6 border-b border-[#F6F2EE] flex flex-col gap-5">
            <div className="relative h-[45px] sm:h-[50px] w-full">
              <img src={SearchIcon} alt="search" className="absolute left-[15px] top-1/2 -translate-y-1/2 w-[18px] opacity-50" />
              <input 
                type="text" 
                placeholder="Search..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full h-full pl-11 pr-4 border border-[#E5DFD8] rounded-xl font-['Inter'] text-xs sm:text-sm outline-none focus:border-[#B6A092]"
              />
            </div>
            <div className="flex gap-2 sm:gap-2.5">
              {['All', 'Active', 'Pending'].map(tab => (
                <button 
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`flex-1 py-2 rounded-[14px] font-['Inter'] text-[11px] sm:text-sm cursor-pointer transition-colors ${activeTab === tab ? 'bg-[#B6A092] text-white' : 'bg-[#F5F1ED] text-[#6B5D52]'}`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <div className="flex-1 overflow-y-auto custom-scrollbar">
            {filteredChats.map(chat => (
              <div 
                key={chat.id} 
                onClick={() => { setSelectedChatId(chat.id); setShowSidebar(false); }}
                className={`flex p-5 sm:p-6 gap-4 border-b border-[#F6F2EE] cursor-pointer hover:bg-gray-50 transition-colors ${selectedChatId === chat.id ? 'bg-[#FEF9F2]' : ''}`}
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#B6A092] rounded-full flex items-center justify-center text-white font-['Inter'] text-lg sm:text-xl shrink-0 uppercase">
                  {getInitials(chat.name)}
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm sm:text-base text-[#3D3530] font-['Inter'] font-normal mb-1 truncate">{chat.name}</h4>
                  <p className="text-[10px] sm:text-xs text-[#A89080] font-['Inter'] truncate">{chat.msg}</p>
                  <span className="text-[9px] sm:text-[10px] text-[#A89080] block mt-3 sm:mt-4 font-['Inter']">{chat.time}</span>
                </div>
                <div className="flex flex-col items-end justify-between shrink-0">
                   <div className="h-6">
                    {chat.count > 0 && <span className="w-5 h-5 sm:w-6 sm:h-6 bg-[#B6A092] text-white rounded-full flex items-center justify-center text-[9px] sm:text-[10px] font-['Inter']">{chat.count}</span>}
                   </div>
                  <div className={`text-[10px] sm:text-[12px] px-2 sm:px-2.5 py-1 rounded-full font-['Inter']
                    ${chat.status === 'Active' ? 'text-[#008236] bg-[#DCFCE7]' : 
                      chat.status === 'Pending' ? 'text-[#A65F00] bg-[#FEF9C2]' : 
                      'text-[#364153] bg-[#F3F4F6]'}`}>
                    {chat.status}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </aside>

        <section className="flex-1 flex flex-col bg-white min-w-0">
          <header className="p-4 sm:p-5 md:px-8 border-b border-[#E5DFD8] flex justify-between items-center bg-white z-10">
            <div className="flex items-center gap-2 sm:gap-4 min-w-0">
              <button onClick={() => setShowSidebar(true)} className="lg:hidden text-2xl text-[#B6A092] p-1">☰</button>
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#B6A092] rounded-full flex items-center justify-center text-white text-base sm:text-xl uppercase shrink-0">
                {getInitials(selectedChat?.name || "")}
              </div>
              <div className="min-w-0">
                <h3 className="text-[15px] sm:text-xl text-[#3D3530] font-normal leading-none font-['Inter'] mb-1 truncate">{selectedChat?.name}</h3>
                <span className="text-[11px] sm:text-sm text-[#A89080] font-['Inter']">Active now</span>
              </div>
            </div>
            
            <div className="flex items-center gap-3 sm:gap-5 ml-2">
              {[
                { icon: CallIcon, label: "Call" },
                { icon: VideoIcon, label: "Video" },
                { icon: StarIcon, label: "Star" },
                { icon: SearchInChatIcon, label: "Search" },
                { icon: MoreIcon, label: "More" }
              ].map((act, i) => (
                <img 
                  key={i} src={act.icon} alt={act.label} 
                  className="w-[18px] sm:w-[22px] cursor-pointer hover:opacity-60 transition-opacity shrink-0" 
                  onClick={() => alert(`${act.label} functionality`)}
                />
              ))}
            </div>
          </header>

          <div className="flex-1 p-5 sm:p-8 overflow-y-auto flex flex-col gap-6 sm:gap-7 custom-scrollbar bg-white">
            {currentMessages.map((msg: any) => (
              <div key={msg.id} className={`max-w-[90%] sm:max-w-[75%] flex flex-col gap-2 ${msg.sender === 'out' ? 'self-end' : 'self-start'}`}>
                <div className={`rounded-[18px] p-3 sm:p-4 pb-8 sm:pb-9 relative font-['Inter'] text-[13px] sm:text-[15px] leading-relaxed shadow-sm
                  ${msg.sender === 'out' ? 'bg-[#C9A390] text-white rounded-br-none' : 'bg-[#F5F1ED] border border-[#E5DFD8] text-[#3D3530]'}`}>
                  {msg.text}
                  <div className={`absolute bottom-2.5 right-4 flex items-center gap-1 text-[10px] ${msg.sender === 'out' ? 'text-white/80' : 'text-[#A89080]'}`}>
                    <img src={TimeIcon} className={`w-3 ${msg.sender === 'out' ? 'brightness-0 invert' : ''}`} alt="" /> {msg.time}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <footer className="p-4 sm:p-5 md:px-8 border-t border-[#E5DFD8] bg-white">
            <div className="flex items-center gap-3 sm:gap-4">
              <button onClick={handleFileUpload} className="shrink-0 hover:scale-110 transition-transform">
                <img src={AttachIcon} alt="attach" className="w-5 sm:w-6.5" />
              </button>
              <div className="flex-1 bg-white border border-[#E5DFD8] rounded-[17.4px] px-4 sm:px-5 py-2.5 sm:py-3 focus-within:border-[#B6A092] transition-colors">
                <input 
                  type="text" 
                  placeholder="Type your message..." 
                  value={msgInput}
                  onChange={(e) => setMsgInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  className="w-full border-none outline-none text-xs sm:text-sm font-['Inter']"
                />
              </div>
              <button onClick={handleSendMessage} className="shrink-0 hover:scale-105 transition-transform active:opacity-70">
                <img src={SendIcon} alt="send" className="bg-[#C9A390] p-2.5 sm:p-3 rounded-xl w-10 sm:w-[45px]" />
              </button>
            </div>
          </footer>
        </section>
      </section>
    </div>
  );
};