import { useState } from "react";
import { Search, Trash2, Edit2, ArrowUpDown } from "lucide-react";

const MOCK_INVENTORY = [
  {
    id: "68ab0bebae",
    name: "Brown Polo T-shirt",
    date: "10/12/2025",
    stock: 45,
    sold: 10,
    status: "ACTIVE",
  },
  {
    id: "68a5bb18ae",
    name: "White Shirt",
    date: "08/12/2025",
    stock: 23,
    sold: 12,
    status: "ACTIVE",
  },
  {
    id: "68a5bb03ae",
    name: "Gray Classic Pants",
    date: "08/12/2025",
    stock: 30,
    sold: 4,
    status: "ACTIVE",
  },
  {
    id: "68a5babbae",
    name: "Black Leather Jacket",
    date: "06/12/2025",
    stock: 50,
    sold: 25,
    status: "ACTIVE",
  },
  {
    id: "68a5baa9ae",
    name: "Polo Neck Sweatshirt",
    date: "04/12/2025",
    stock: 48,
    sold: 13,
    status: "ACTIVE",
  },
];

export function RetailerInventoryPage() {
  const [inventory, setInventory] = useState(MOCK_INVENTORY);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("All Products");
  const [sortOrder, setSortOrder] = useState("Newest First");
  const [deleteModal, setDeleteModal] = useState({
    isOpen: false,
    id: "",
    name: "",
  });

  const parseDate = (dateStr: string) => {
    const [day, month, year] = dateStr.split("/");
    return new Date(`${year}-${month}-${day}`).getTime();
  };

  let processedInventory = inventory.filter(
    (item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.id.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  if (filterType !== "All Products") {
    processedInventory = processedInventory.filter(
      (item) => item.status.toLowerCase() === filterType.toLowerCase(),
    );
  }

  processedInventory.sort((a, b) => {
    if (sortOrder === "Most Sold") return b.sold - a.sold;
    if (sortOrder === "Least Sold") return a.sold - b.sold;

    const dateA = parseDate(a.date);
    const dateB = parseDate(b.date);
    return sortOrder === "Newest First" ? dateB - dateA : dateA - dateB;
  });

  const confirmDelete = () => {
    setInventory(inventory.filter((item) => item.id !== deleteModal.id));
    setDeleteModal({ isOpen: false, id: "", name: "" });
  };

  const handleExportCSV = () => {
    const headers = [
      "Product Name",
      "Product ID",
      "Creation Date",
      "Stock",
      "Sold",
      "Status",
    ];
    const csvContent = [
      headers.join(","),
      ...processedInventory.map(
        (item) =>
          `"${item.name}","${item.id}","${item.date}",${item.stock},${item.sold},"${item.status}"`,
      ),
    ].join("\n");

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);
    link.setAttribute("href", url);
    link.setAttribute("download", "inventory_export.csv");
    link.style.visibility = "hidden";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="relative flex flex-col gap-6 font-sans w-full max-w-full">
      {deleteModal.isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">
          <div className="w-full max-w-[400px] rounded-[24px] bg-white p-6 md:p-8 text-center shadow-2xl">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#FFE4E4] text-[#F06161]">
              <Trash2 size={32} />
            </div>
            <h3 className="text-[20px] font-bold text-[#5C5550]">
              Delete Stock
            </h3>
            <p className="mt-2 text-[14px] text-[#949E96]">
              Are you sure you want to delete the Product <br /> Stock "
              <span className="font-bold text-[#5C5550]">
                {deleteModal.name}
              </span>
              "? This action cannot be undone.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <button
                onClick={confirmDelete}
                className="flex-1 rounded-[12px] bg-[#E53935] py-3 font-bold text-white hover:bg-red-700 transition-colors"
              >
                Delete
              </button>
              <button
                onClick={() =>
                  setDeleteModal({ isOpen: false, id: "", name: "" })
                }
                className="flex-1 rounded-[12px] border border-[#E4DCD1] py-3 font-bold text-[#949E96] hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <h1
          className="text-[24px] md:text-[28px] font-bold text-[#B6A092]"
          style={{ fontFamily: '"PT Serif", serif' }}
        >
          Inventory
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
              placeholder="Search by Product ID or Name"
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
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
            className="h-[48px] w-full md:w-[220px] rounded-[10px] border border-[#E4DCD1] px-4 text-[14px] text-[#949E96] bg-white outline-none focus:border-[#C9A390]"
          >
            <option value="All Products">All Products</option>
            <option value="ACTIVE">Active</option>
            <option value="INACTIVE">Inactive</option>
          </select>
          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            className="h-[48px] w-full md:w-[220px] rounded-[10px] border border-[#E4DCD1] px-4 text-[14px] text-[#949E96] bg-white outline-none focus:border-[#C9A390]"
          >
            <option value="Newest First">Newest First</option>
            <option value="Oldest First">Oldest First</option>
            <option value="Most Sold">Most Sold</option>
            <option value="Least Sold">Least Sold</option>
          </select>
        </div>

        <div className="w-full overflow-x-auto pb-4">
          <table className="w-full border-collapse min-w-[900px]">
            <thead>
              <tr className="bg-[#FEF9F2]/50 border-y border-[#F0EDEB] text-left text-[12px] font-bold uppercase tracking-wider text-[#B6A092]">
                <th className="py-4 pl-4 w-[25%]">PRODUCTS</th>
                <th className="py-4 w-[15%]">PRODUCT ID</th>
                <th className="py-4 w-[15%]">CREATION DATE</th>
                <th className="py-4 w-[10%] text-center">STOCK</th>
                <th className="py-4 w-[10%] text-center cursor-pointer hover:text-[#C9A390] transition-colors group">
                  <div
                    className="flex items-center justify-center gap-1"
                    onClick={() =>
                      setSortOrder(
                        sortOrder === "Most Sold" ? "Least Sold" : "Most Sold",
                      )
                    }
                  >
                    SOLD <ArrowUpDown size={14} className="text-[#D3C1B6]" />
                  </div>
                </th>
                <th className="py-4 w-[12%] text-center">STATUS</th>
                <th className="py-4 pr-4 w-[13%] text-center">ACTIONS</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#F0EDEB]">
              {processedInventory.length > 0 ? (
                processedInventory.map((item) => (
                  <tr
                    key={item.id}
                    className="group hover:bg-[#FDFCFB] transition-colors"
                  >
                    <td className="py-6 pl-4 text-[13px] font-bold text-[#5C5550]">
                      {item.name}
                    </td>
                    <td className="py-6 text-[13px] font-bold text-[#5C5550]">
                      {item.id}
                    </td>
                    <td className="py-6 text-[13px] font-medium text-[#949E96]">
                      {item.date}
                    </td>
                    <td className="py-6 text-[13px] font-medium text-[#949E96] text-center">
                      {item.stock}
                    </td>
                    <td className="py-6 text-[13px] font-medium text-[#949E96] text-center">
                      {item.sold}
                    </td>
                    <td className="py-6 text-center">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-[#E0F2E9] px-3 py-1.5 text-[10px] font-bold text-[#4CAF50] whitespace-nowrap">
                        ● {item.status}
                      </span>
                    </td>
                    <td className="py-6 pr-4 text-center">
                      <div className="flex justify-center gap-3 text-[#BFC7DE]">
                        <button className="hover:text-[#B6A092] transition-colors">
                          <Edit2 size={18} />
                        </button>
                        <button
                          onClick={() =>
                            setDeleteModal({
                              isOpen: true,
                              id: item.id,
                              name: item.name,
                            })
                          }
                          className="hover:text-[#E53935] transition-colors"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={7} className="py-12 text-center text-[#949E96]">
                    No inventory found matching your criteria.
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
