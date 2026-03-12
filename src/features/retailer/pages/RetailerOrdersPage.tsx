import { useState } from "react";
import { Search } from "lucide-react";

const MOCK_ORDERS = [
  {
    id: "68ab0bebae",
    customer: "Omar Mahmoud",
    products: "Brown Polo T-shirt + Black\nClassic Pants",
    date: "10/12/2025",
    total: "2150",
    status: "Not processed",
    userType: "Registered",
  },
  {
    id: "68a5bb18ae",
    customer: "Abd Al-Rahman Ahmed",
    products: "White Shirt",
    date: "08/12/2025",
    total: "740",
    status: "Cancelled",
    userType: "Guest",
  },
  {
    id: "68a5bb03ae",
    customer: "Anas Ahmed",
    products: "Gray Classic Pants",
    date: "08/12/2025",
    total: "680",
    status: "Processing",
    userType: "Registered",
  },
  {
    id: "68a5babbae",
    customer: "Rayan Mohamed",
    products: "Black Leather Jacket",
    date: "06/12/2025",
    total: "1860",
    status: "Shipped",
    userType: "Guest",
  },
  {
    id: "68a5baa9ae",
    customer: "Marwan Ahmed",
    products: "Polo Neck Sweatshirt",
    date: "04/12/2025",
    total: "920",
    status: "Delivered",
    userType: "Registered",
  },
];

export function RetailerOrdersPage() {
  const [orders, setOrders] = useState(MOCK_ORDERS);
  const [searchTerm, setSearchTerm] = useState("");
  const [userFilter, setUserFilter] = useState("All Users");
  const [sortOrder, setSortOrder] = useState("Newest First");

  const getStatusStyle = (status: string) => {
    switch (status) {
      case "Not processed":
        return "bg-[#F5F5F5] text-[#5C5550]";
      case "Cancelled":
        return "bg-[#FFE4E4] text-[#F06161]";
      case "Processing":
        return "bg-[#FFF4E5] text-[#F2994A]";
      case "Shipped":
        return "bg-[#E5F0FF] text-[#2F80ED]";
      case "Delivered":
        return "bg-[#E0F2E9] text-[#4CAF50]";
      default:
        return "bg-gray-100 text-gray-500";
    }
  };

  const handleStatusChange = (id: string, newStatus: string) => {
    setOrders((prev) =>
      prev.map((order) =>
        order.id === id ? { ...order, status: newStatus } : order,
      ),
    );
  };

  const parseDate = (dateStr: string) => {
    const [day, month, year] = dateStr.split("/");
    return new Date(`${year}-${month}-${day}`).getTime();
  };

  let processedOrders = orders.filter(
    (order) =>
      order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.products.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  if (userFilter !== "All Users") {
    const type = userFilter === "Registered Users" ? "Registered" : "Guest";
    processedOrders = processedOrders.filter(
      (order) => order.userType === type,
    );
  }

  processedOrders.sort((a, b) => {
    if (sortOrder === "Highest Total") {
      return parseInt(b.total) - parseInt(a.total);
    } else {
      const dateA = parseDate(a.date);
      const dateB = parseDate(b.date);
      return sortOrder === "Newest First" ? dateB - dateA : dateA - dateB;
    }
  });

  const handleExportCSV = () => {
    const headers = [
      "Order ID",
      "Customer Name",
      "User Type",
      "Products",
      "Date",
      "Total Amount",
      "Status",
    ];

    const csvContent = [
      headers.join(","),
      ...processedOrders.map((order) => {
        // Clean up the products string (remove newlines and commas to avoid breaking the CSV format)
        const cleanProducts = order.products
          .replace(/\n/g, " ")
          .replace(/,/g, " ");
        return `"${order.id}","${order.customer}","${order.userType}","${cleanProducts}","${order.date}",${order.total},"${order.status}"`;
      }),
    ].join("\n");

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);
    link.setAttribute("href", url);
    link.setAttribute("download", "orders_export.csv");
    link.style.visibility = "hidden";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="flex flex-col gap-6 font-sans w-full max-w-full">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <h1
          className="text-[24px] md:text-[28px] font-bold text-[#B6A092]"
          style={{ fontFamily: '"PT Serif", serif' }}
        >
          All Orders
        </h1>
        <button
          onClick={handleExportCSV}
          className="bg-[#C9A390] hover:bg-[#B6A092] text-white rounded-[10px] h-[42px] px-8 text-[14px] font-bold transition-colors w-full sm:w-auto"
        >
          Export CSV
        </button>
      </div>

      <div className="rounded-[24px] border border-[#E4DCD1] bg-white p-4 md:p-8 shadow-sm overflow-hidden w-full">
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <input
              type="text"
              placeholder="Search by Order ID or Customer Name"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="h-[48px] w-full rounded-[10px] border border-[#E4DCD1] px-4 pl-12 text-[14px] outline-none focus:border-[#C9A390] placeholder:text-[#BFC7DE]"
            />
            <Search
              className="absolute left-4 top-1/2 -translate-y-1/2 text-[#BFC7DE]"
              size={18}
            />
          </div>
          <select
            value={userFilter}
            onChange={(e) => setUserFilter(e.target.value)}
            className="h-[48px] w-full md:w-[220px] rounded-[10px] border border-[#E4DCD1] px-4 text-[14px] text-[#949E96] bg-white outline-none focus:border-[#C9A390]"
          >
            <option value="All Users">All Users</option>
            <option value="Registered Users">Registered Users</option>
            <option value="Guests">Guests</option>
          </select>
          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            className="h-[48px] w-full md:w-[220px] rounded-[10px] border border-[#E4DCD1] px-4 text-[14px] text-[#949E96] bg-white outline-none focus:border-[#C9A390]"
          >
            <option value="Newest First">Newest First</option>
            <option value="Oldest First">Oldest First</option>
            <option value="Highest Total">Highest Total</option>
          </select>
        </div>

        <div className="w-full overflow-x-auto pb-4">
          <table className="w-full border-collapse min-w-[1000px]">
            <thead>
              <tr className="bg-[#FEF9F2]/50 border-y border-[#F0EDEB] text-left text-[12px] font-bold uppercase tracking-wider text-[#B6A092]">
                <th className="py-4 pl-4 w-[15%]">ORDER ID</th>
                <th className="py-4 w-[15%]">CUSTOMER</th>
                <th className="py-4 w-[25%]">PRODUCTS</th>
                <th className="py-4 w-[10%]">DATE</th>
                <th className="py-4 w-[10%]">TOTAL</th>
                <th className="py-4 w-[12%]">STATUS</th>
                <th className="py-4 pr-4 w-[13%]">ACTIONS</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#F0EDEB]">
              {processedOrders.length > 0 ? (
                processedOrders.map((order) => (
                  <tr
                    key={order.id}
                    className="group hover:bg-[#FDFCFB] transition-colors"
                  >
                    <td className="py-6 pl-4 text-[13px] font-bold text-[#5C5550]">
                      {order.id}
                    </td>
                    <td className="py-6 text-[13px] font-medium text-[#C9A390]">
                      {order.customer}
                    </td>
                    <td className="py-6 pr-4">
                      <p className="text-[13px] font-bold text-[#5C5550] whitespace-pre-line leading-relaxed">
                        {order.products}
                      </p>
                    </td>
                    <td className="py-6 text-[13px] font-medium text-[#949E96]">
                      {order.date}
                    </td>
                    <td className="py-6 text-[13px] font-medium text-[#949E96]">
                      {order.total}
                    </td>
                    <td className="py-6">
                      <span
                        className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[11px] font-bold whitespace-nowrap ${getStatusStyle(
                          order.status,
                        )}`}
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-current"></span>
                        {order.status}
                      </span>
                    </td>
                    <td className="py-6 pr-4">
                      <select
                        value={order.status}
                        onChange={(e) =>
                          handleStatusChange(order.id, e.target.value)
                        }
                        className="h-[36px] w-full rounded-[8px] border border-[#E4DCD1] bg-white px-3 text-[12px] font-medium text-[#949E96] outline-none focus:border-[#C9A390] transition-colors cursor-pointer appearance-none"
                        style={{
                          backgroundImage: `url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23949E96' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e")`,
                          backgroundRepeat: "no-repeat",
                          backgroundPosition: "right 10px center",
                          backgroundSize: "14px",
                        }}
                      >
                        <option value="Not processed">Not Processed</option>
                        <option value="Cancelled">Cancelled</option>
                        <option value="Processing">Processing</option>
                        <option value="Shipped">Shipped</option>
                        <option value="Delivered">Delivered</option>
                      </select>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={7} className="py-12 text-center text-[#949E96]">
                    No orders found matching your filters.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
