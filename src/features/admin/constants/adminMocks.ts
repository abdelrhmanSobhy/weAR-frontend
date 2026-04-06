
export const MOCK_DASHBOARD_STATS = [
  { label: 'Total Users', val: '12,458', trend: '+12.5%', up: true },
  { label: 'Active Brands', val: '247', trend: '+8.2%', up: true },
  { label: 'Virtual Try-Ons', val: '45.2K', trend: '+23.1%', up: true },
  { label: 'Revenue', val: '$144.6K', trend: '-2.4%', up: false },
];

export const MOCK_SECONDARY_STATS = [
  { label: 'Avg. Session Time', val: '8m 32s' },
  { label: 'Avatars Created', val: '9,234' },
  { label: 'Active Now', val: '1,847' },
  { label: 'Conversion Rate', val: '24.8%' },
];

export const MOCK_GROWTH_DATA = [
  { day: 'Mon', h: '40%', c: 'bg-[#949E96]' },
  { day: 'Tue', h: '60%', c: 'bg-[#D9C5B2]' },
  { day: 'Wed', h: '55%', c: 'bg-[#D9C5B2]' },
  { day: 'Thu', h: '85%', c: 'bg-[#9F8062]' },
  { day: 'Fri', h: '70%', c: 'bg-[#D9C5B2]' },
  { day: 'Sat', h: '90%', c: 'bg-[#D9C5B2]' },
  { day: 'Sun', h: '50%', c: 'bg-[#D9C5B2]' },
];

export const MOCK_TOP_BRANDS = [
  { name: 'Zara Fashion', growth: '+15%', val: '$24.5K', p: '80%', try: '12.4K' },
  { name: 'Local Boutique Co.', growth: '+22%', val: '$18.2K', p: '65%', try: '9.8K' },
  { name: 'Style Avenue', growth: '+8%', val: '$14.8K', p: '50%', try: '7.2K' },
  { name: 'Trendy Threads', growth: '+12%', val: '$11.3K', p: '40%', try: '5.6K' },
  { name: 'Urban Wear', growth: '+5%', val: '$8.9K', p: '30%', try: '4.1K' }
];

export const MOCK_DEVICE_USAGE = {
  summary: [
    { label: 'Desktop', p: '58.3%', u: '7,264 users' },
    { label: 'Mobile', p: '41.7%', u: '5,194 users' }
  ],
  platforms: [
    { l: 'iOS', v: '32%' },
    { l: 'Android', v: '28%' },
    { l: 'Windows', v: '24%' },
    { l: 'macOS', v: '16%' }
  ]
};

export const MOCK_ACTIVITIES = [
  { id: 1, title: 'New user registered', desc: 'Sarah Johnson created an avatar', time: '5 minutes ago', type: 'user' },
  { id: 2, title: 'Brand integration request', desc: 'Local Fashion House requested integration', time: '1 hour ago', type: 'brand' },
  { id: 3, title: '100+ virtual try-ons', desc: 'Milestone reached for Zara Fashion', time: '2 hours ago', type: 'tryon' },
  { id: 4, title: 'System update', desc: 'Avatar rendering engine updated to v2.3', time: '4 hours ago', type: 'system' }
];

export const MOCK_REGIONS = [
  { country: 'United States', code: 'US', users: '4,234', percent: '85%' },
  { country: 'United Kingdom', code: 'GB', users: '2,987', percent: '65%' },
  { country: 'Canada', code: 'CA', users: '1,876', percent: '50%' },
  { country: 'Australia', code: 'AU', users: '1,492', percent: '40%' },
  { country: 'Germany', code: 'DE', users: '1,245', percent: '30%' },
  { country: 'Others', code: 'UN', users: '624', percent: '15%' }
];

export const MOCK_CATEGORIES = [
  { name: 'Dresses', val: '15.2K', sub: 'Avg: 4m 32s', p: '90%' },
  { name: 'Tops & Shirts', val: '12.8K', sub: 'Avg: 3m 45s', p: '75%' },
  { name: 'Pants & Jeans', val: '9.4K', sub: 'Avg: 5m 12s', p: '60%' },
  { name: 'Outerwear', val: '5.6K', sub: 'Avg: 6m 23s', p: '40%' },
  { name: 'Accessories', val: '2.2K', sub: 'Avg: 2m 18s', p: '20%' }
];

export const MOCK_SYSTEM_HEALTH = [
  { label: 'API Response', value: '45ms' },
  { label: 'Server Load', value: '34%' },
  { label: 'Database', value: 'Online' }
];

export const MOCK_BRANDS = [
  { id: 1, name: "Zara Fashion", email: "contact@zarafashion.com", status: "Active", products: "234", tryOns: "12.4K", date: "15/1/2026", statusKey: 'active' },
  { id: 2, name: "Local Boutique Co.", email: "hello@localboutique.com", status: "Active", products: "156", tryOns: "9.8K", date: "15/1/2026", statusKey: 'active' },
  { id: 3, name: "Style Avenue", email: "info@styleavenue.com", status: "Pending", products: "0", tryOns: "0", date: "15/1/2026", statusKey: 'pending' },
  { id: 4, name: "Trendy Threads", email: "support@trendythreads.com", status: "Active", products: "89", tryOns: "5.6K", date: "15/1/2026", statusKey: 'active' },
  { id: 5, name: "Urban Wear", email: "contact@urbanwear.com", status: "Inactive", products: "46", tryOns: "4.1K", date: "15/1/2026", statusKey: 'inactive' },
];

export const MOCK_USERS = [
  { id: 1, name: "Sarah Johnson", email: "sarah.j@email.com", avatarStatus: "Created", tryOns: 45, lastActive: "2 hours ago" },
  { id: 2, name: "Michael Chen", email: "michael.c@email.com", avatarStatus: "Created", tryOns: 32, lastActive: "1 day ago" },
  { id: 3, name: "Emma Williams", email: "emma.w@email.com", avatarStatus: "Not Created", tryOns: 0, lastActive: "3 days ago" },
  { id: 4, name: "James Rodriguez", email: "james.r@email.com", avatarStatus: "Created", tryOns: 67, lastActive: "5 hours ago" },
  { id: 5, name: "Olivia Brown", email: "olivia.b@email.com", avatarStatus: "Created", tryOns: 28, lastActive: "1 hour ago" },
  { id: 6, name: "Liam Wilson", email: "liam.w@email.com", avatarStatus: "Not Created", tryOns: 0, lastActive: "5 mins ago" },
];

export const MOCK_PLANS = [
  { 
    id: 1, 
    title: "Basic", 
    priceMonthly: 50, 
    priceYearly: 600, 
    desc: "A simple start for everyone", 
    featured: false, 
    features: [
      "Virtual Fitting Room with 3D Avatars",
      "Full AI Style Recommendations",
      "Product Catalog & Inventory Management",
      "Retailer Analytics Dashboard",
      "Return & Refund Management System",
      "Up to 250 active products",
      "Up to 1,000 monthly virtual try-ons",
      "5% platform commission on sales",
      "Email support (48-hour response)"
    ] 
  },
  { 
    id: 2, 
    title: "Standard", 
    priceMonthly: 150, 
    priceYearly: 1440, 
    desc: "For small to medium businesses", 
    featured: true, 
    features: [
      "Virtual Fitting Room with 3D Avatars",
      "Full AI Style Recommendations",
      "Product Catalog & Inventory Management",
      "Retailer Analytics Dashboard",
      "Return & Refund Management System",
      "Up to 1,000 active products",
      "Up to 10,000 monthly virtual try-ons",
      "3% platform commission on sales",
      "Advanced body analytics & fit insights",
      "Priority support (24-hour response)"
    ] 
  },
  { 
    id: 3, 
    title: "Enterprise", 
    priceMonthly: 300, 
    priceYearly: 3840, 
    desc: "Solution for big organizations", 
    featured: false, 
    features: [
      "Virtual Fitting Room with 3D Avatars",
      "Full AI Style Recommendations",
      "Product Catalog & Inventory Management",
      "Retailer Analytics Dashboard",
      "Return & Refund Management System",
      "Unlimited active products",
      "Unlimited monthly virtual try-ons",
      "1% platform commission on sales",
      "24/7 phone & chat support",
      "Onboarding & training sessions"
    ] 
  }
];

export const MOCK_SAAS_DATA = {
  id: 4, 
  title: "Enterprise", 
  priceMonthly: 5000, 
  priceYearly: 50000, 
  desc: "Solution for big organizations", 
  features: [
    "Virtual Fitting Room with 3D Avatars",
    "Full AI Style Recommendations",
    "Product Catalog & Inventory Management",
    "Retailer Analytics Dashboard",
    "Return & Refund Management System",
    "Unlimited active products",
    "Unlimited monthly virtual try-ons",
    "1% platform commission on sales",
    "24/7 phone & chat support",
    "Onboarding & training sessions",
    "100% White-Label Platform- Your branding, your domain",
    "Custom Mobile Applications- iOS & Android apps under your name",
    "Source Code Access",
    "Dedicated Development Team for custom features",
    "Remove all Platforms branding",
    "Priority 24/7 Support with SLAs"
  ]
};

export const MOCK_PLAN_STATS = [
  { label: "Total Subscribers", value: "247", trend: "+12.5%" },
  { label: "Monthly Revenue", value: "$19,143", trend: "+18.3%" },
  { label: "Active Plans", value: "3", trend: "0%" },
  { label: "Avg. Revenue/User", value: "$77.50", trend: "+5.2%" }
];

export const MOCK_CHAT_LIST = [
  { id: 1, name: "Zara Fashion", msg: "How do I upload product images?", time: "5m ago", status: "Active", count: 2 },
  { id: 2, name: "Local Boutique Co.", msg: "Thank you for your help!", time: "1h ago", status: "Resolved", count: 0 },
  { id: 3, name: "Style Avenue", msg: "Integration API not working", time: "2h ago", status: "Pending", count: 3 },
  { id: 4, name: "Trendy Threads", msg: "Can we schedule a demo?", time: "3h ago", status: "Active", count: 1 },
  { id: 5, name: "Urban Wear", msg: "Subscription upgrade question", time: "1d ago", status: "Resolved", count: 0 }
];

export const MOCK_CHAT_MESSAGES = {
  1: [
    { id: 1, text: "Hello, I need help with uploading product images to our catalog.", sender: "in", time: "10:30 AM" },
    { id: 2, text: "Hi! I'd be happy to help. You can upload images through the Brand Dashboard.", sender: "out", time: "10:32 AM" },
    { id: 3, text: "I tried that but getting an error message. The file size seems to be an issue.", sender: "in", time: "10:35 AM" },
    { id: 4, text: "The maximum file size is 5MB per image. Could you try resizing your images?", sender: "out", time: "10:36 AM" },
    { id: 5, text: "How do I upload product images?", sender: "in", time: "10:45 AM" }
  ],
  2: [{ id: 1, text: "Thank you for your help!", sender: "in", time: "9:00 AM" }],
  3: [{ id: 1, text: "Integration API not working", sender: "in", time: "Yesterday" }]
};

export const MOCK_ROLES = [
  { 
    id: 0, 
    title: "Super Admin", 
    users: 2, 
    desc: "Full access to all features", 
    permissions: [
      { name: "Dashboard Access", checked: true }, 
      { name: "Brand Management", checked: true }, 
      { name: "User Management", checked: true }, 
      { name: "Analytics & Reports", checked: true }, 
      { name: "Roles & Access Control", checked: true }, 
      { name: "Chat Support", checked: true }, 
      { name: "Subscription Management", checked: true }, 
      { name: "System Settings", checked: true }
    ] 
  },
  { 
    id: 1, 
    title: "Admin", 
    users: 5, 
    desc: "Manage brands and users", 
    permissions: [
      { name: "Dashboard Access", checked: true }, 
      { name: "Brand Management", checked: true }, 
      { name: "User Management", checked: true }, 
      { name: "Analytics & Reports", checked: true }, 
      { name: "Roles & Access Control", checked: true }, 
      { name: "Chat Support", checked: false }, 
      { name: "Subscription Management", checked: false }, 
      { name: "System Settings", checked: false }
    ] 
  },
  { 
    id: 2, 
    title: "Support Staff", 
    users: 8, 
    desc: "Handle customer support", 
    permissions: [
      { name: "Dashboard Access", checked: true }, 
      { name: "Brand Management", checked: false }, 
      { name: "User Management", checked: true }, 
      { name: "Analytics & Reports", checked: true }, 
      { name: "Roles & Access Control", checked: false }, 
      { name: "Chat Support", checked: true }, 
      { name: "Subscription Management", checked: false }, 
      { name: "System Settings", checked: false }
    ] 
  },
  { 
    id: 3, 
    title: "Analyst", 
    users: 3, 
    desc: "View analytics and reports", 
    permissions: [
      { name: "Dashboard Access", checked: true }, 
      { name: "Brand Management", checked: false }, 
      { name: "User Management", checked: false }, 
      { name: "Analytics & Reports", checked: true }, 
      { name: "Roles & Access Control", checked: false }, 
      { name: "Chat Support", checked: false }, 
      { name: "Subscription Management", checked: false }, 
      { name: "System Settings", checked: false }
    ] 
  }
];

export const MOCK_ADMIN_USERS = [
  { id: 1, name: "John Smith", email: "john.smith@wear.com", role: "Super Admin", lastActive: "2 hours ago", status: "Active" },
  { id: 2, name: "Sarah Wilson", email: "sarah.w@wear.com", role: "Admin", lastActive: "5 minutes ago", status: "Active" },
  { id: 3, name: "Mike Johnson", email: "mike.j@wear.com", role: "Support Staff", lastActive: "1 hour ago", status: "Active" },
  { id: 4, name: "Emily Davis", email: "emily.d@wear.com", role: "Analyst", lastActive: "3 hours ago", status: "Active" },
  { id: 5, name: "David Brown", email: "david.b@wear.com", role: "Admin", lastActive: "1 day ago", status: "Inactive" },
];