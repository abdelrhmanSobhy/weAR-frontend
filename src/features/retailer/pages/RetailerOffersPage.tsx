import { useState } from "react";
import {
  Edit2,
  Trash2,
  ChevronLeft,
  ChevronRight,
  X,
  Plus,
} from "lucide-react";

const sweatShirtImg =
  "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=100";
const pantsImg =
  "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=100";
const jacketImg =
  "https://images.unsplash.com/photo-1576871333020-2210674ef827?w=100";

const INITIAL_OFFERS = [
  {
    id: "1",
    title: "Perfect Fit Sweatshirt",
    description: "Find your ideal fit with your avatar...",
    type: "Product",
    subType: "Sweatshirt",
    productName: "Polo Neck Sweatshirt",
    productId: "68a43b83e3d",
    discount: "200 EGP",
    discountType: "Fixed Amount",
    discountValue: "200",
    startDate: "2025-11-19",
    endDate: "2025-11-26",
    status: "ACTIVE",
    image: sweatShirtImg,
  },
  {
    id: "2",
    title: "Foundation Pants Deal",
    description: "Try on any pants virtually Get 15% off",
    type: "Category",
    subType: "Classic Pants",
    productName: "All Classic Pants",
    productId: "68a445gfs3d",
    discount: "120 EGP",
    discountType: "Fixed Amount",
    discountValue: "120",
    startDate: "2025-11-21",
    endDate: "2025-12-26",
    status: "ACTIVE",
    image: pantsImg,
  },
  {
    id: "3",
    title: "Winter Jacket Clearance",
    description: "Stay warm with 30% off winter jackets.",
    type: "Product",
    subType: "Outerwear",
    productName: "Denim Winter Jacket",
    productId: "88x99b83e3d",
    discount: "30%",
    discountType: "Percentage",
    discountValue: "30",
    startDate: "2025-12-01",
    endDate: "2025-12-15",
    status: "INACTIVE",
    image: jacketImg,
  },
  {
    id: "4",
    title: "Perfect Fit Sweatshirt 2",
    description: "Exclusive avatar fitting discount.",
    type: "Product",
    subType: "Sweatshirt",
    productName: "Polo Neck Sweatshirt",
    productId: "68a43b83e3d",
    discount: "150 EGP",
    discountType: "Fixed Amount",
    discountValue: "150",
    startDate: "2025-12-05",
    endDate: "2025-12-20",
    status: "ACTIVE",
    image: sweatShirtImg,
  },
  {
    id: "5",
    title: "Holiday Pants Bundle",
    description: "Buy 2 get 1 free on all classic pants",
    type: "Category",
    subType: "Classic Pants",
    productName: "All Classic Pants",
    productId: "68a445gfs3d",
    discount: "Buy 2 Get 1",
    discountType: "Custom",
    discountValue: "0",
    startDate: "2025-12-20",
    endDate: "2026-01-05",
    status: "ACTIVE",
    image: pantsImg,
  },
  {
    id: "6",
    title: "Spring Collection Preview",
    description: "Early access discount for members.",
    type: "Category",
    subType: "Spring Wear",
    productName: "Spring Collection",
    productId: "99a445gfs3d",
    discount: "10%",
    discountType: "Percentage",
    discountValue: "10",
    startDate: "2026-02-01",
    endDate: "2026-02-14",
    status: "INACTIVE",
    image: jacketImg,
  },
  {
    id: "7",
    title: "Basic Sweatshirt Promo",
    description: "Everyday comfort at a lower price.",
    type: "Product",
    subType: "Sweatshirt",
    productName: "Basic Sweatshirt",
    productId: "11a43b83e3d",
    discount: "50 EGP",
    discountType: "Fixed Amount",
    discountValue: "50",
    startDate: "2026-01-10",
    endDate: "2026-01-30",
    status: "ACTIVE",
    image: sweatShirtImg,
  },
  {
    id: "8",
    title: "Chino Pants Special",
    description: "Upgrade your workwear wardrobe.",
    type: "Product",
    subType: "Classic Pants",
    productName: "Khaki Chinos",
    productId: "22a445gfs3d",
    discount: "25%",
    discountType: "Percentage",
    discountValue: "25",
    startDate: "2026-03-01",
    endDate: "2026-03-15",
    status: "ACTIVE",
    image: pantsImg,
  },
  {
    id: "9",
    title: "Heavy Duty Jacket Sale",
    description: "End of season clearance.",
    type: "Product",
    subType: "Outerwear",
    productName: "Heavy Duty Jacket",
    productId: "33x99b83e3d",
    discount: "400 EGP",
    discountType: "Fixed Amount",
    discountValue: "400",
    startDate: "2026-03-15",
    endDate: "2026-03-30",
    status: "ACTIVE",
    image: jacketImg,
  },
  {
    id: "10",
    title: "Summer Sweatshirt",
    description: "Lightweight comfort for cool nights.",
    type: "Product",
    subType: "Sweatshirt",
    productName: "Light Sweatshirt",
    productId: "44a43b83e3d",
    discount: "100 EGP",
    discountType: "Fixed Amount",
    discountValue: "100",
    startDate: "2026-05-01",
    endDate: "2026-05-31",
    status: "INACTIVE",
    image: sweatShirtImg,
  },
  {
    id: "11",
    title: "Denim Pants Offer",
    description: "Try our new denim collection virtually.",
    type: "Category",
    subType: "Denim",
    productName: "All Denim Pants",
    productId: "55a445gfs3d",
    discount: "15%",
    discountType: "Percentage",
    discountValue: "15",
    startDate: "2026-06-01",
    endDate: "2026-06-30",
    status: "ACTIVE",
    image: pantsImg,
  },
  {
    id: "12",
    title: "Flash Sale Category",
    description: "New arrivals for 2026",
    type: "Category",
    subType: "Jackets",
    productName: "Winter Jacket",
    productId: "99x22b83e3d",
    discount: "500 EGP",
    discountType: "Fixed Amount",
    discountValue: "500",
    startDate: "2026-01-01",
    endDate: "2026-01-10",
    status: "ACTIVE",
    image: jacketImg,
  },
];

export function RetailerOffersPage() {
  const [activeTab, setActiveTab] = useState<"view" | "create">("view");
  const [offers, setOffers] = useState(INITIAL_OFFERS);
  const [editingOffer, setEditingOffer] = useState<any>(null);
  const [deleteModal, setDeleteModal] = useState({
    isOpen: false,
    id: "",
    name: "",
  });

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = offers.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(offers.length / itemsPerPage);

  const confirmDelete = () => {
    setOffers(offers.filter((o) => o.id !== deleteModal.id));
    setDeleteModal({ isOpen: false, id: "", name: "" });
  };

  const handleCreateOrUpdate = (newOffer: any) => {
    if (editingOffer) {
      setOffers(offers.map((o) => (o.id === editingOffer.id ? newOffer : o)));
    } else {
      setOffers([newOffer, ...offers]);
    }
    setEditingOffer(null);
    setActiveTab("view");
    setCurrentPage(1);
  };

  return (
    <div className="relative flex flex-col gap-6 font-sans w-full max-w-full">
      {deleteModal.isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">
          <div className="w-full max-w-[400px] rounded-[24px] bg-white p-6 md:p-8 text-center shadow-2xl">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-red-50 text-red-500">
              <Trash2 size={32} />
            </div>
            <h3 className="text-[20px] font-bold text-[#5C5550]">
              Delete Offer
            </h3>
            <p className="mt-2 text-[14px] text-[#949E96]">
              Are you sure you want to delete the category <br />
              <span className="font-bold text-[#5C5550]">
                "{deleteModal.name}"
              </span>
              ?
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <button
                onClick={confirmDelete}
                className="flex-1 rounded-[12px] bg-red-600 py-3 font-bold text-white hover:bg-red-700 transition-colors"
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

      <div className="flex flex-col sm:flex-row w-full gap-3 md:gap-4">
        <button
          onClick={() => {
            setActiveTab("view");
            setEditingOffer(null);
            setCurrentPage(1);
          }}
          className="flex-1 py-3 text-[16px] md:text-[18px] font-bold transition-all rounded-[12px]"
          style={{
            backgroundColor: activeTab === "view" ? "#C9A390" : "#FEF9F2",
            color: activeTab === "view" ? "white" : "#B6A092",
            border: activeTab === "view" ? "none" : "1px solid #E4DCD1",
          }}
        >
          View Offers
        </button>
        <button
          onClick={() => setActiveTab("create")}
          className="flex-1 py-3 text-[16px] md:text-[18px] font-bold transition-all rounded-[12px]"
          style={{
            backgroundColor: activeTab === "create" ? "#C9A390" : "#FEF9F2",
            color: activeTab === "create" ? "white" : "#B6A092",
            border: activeTab === "create" ? "none" : "1px solid #E4DCD1",
          }}
        >
          {editingOffer ? "Edit Offer" : "Create Offer"}
        </button>
      </div>

      {activeTab === "view" ? (
        <div className="rounded-[24px] border border-[#E4DCD1] bg-white p-4 md:p-8 shadow-sm overflow-hidden w-full">
          <h2
            className="mb-6 md:mb-8 text-[20px] md:text-[24px] font-medium text-[#C9A390]"
            style={{ fontFamily: '"PT Serif", serif' }}
          >
            All Offers
          </h2>

          <div className="w-full overflow-x-auto pb-4">
            <table className="w-full border-collapse min-w-[900px]">
              <thead>
                <tr className="border-b border-[#F0EDEB] text-left text-[12px] font-bold text-[#C9A390] uppercase">
                  <th className="pb-4 pl-2">OFFER</th>
                  <th className="pb-4">OFFER TYPE</th>
                  <th className="pb-4">PRODUCT</th>
                  <th className="pb-4">DISCOUNT</th>
                  <th className="pb-4">VALIDITY</th>
                  <th className="pb-4">STATUS</th>
                  <th className="pb-4 pr-2 text-center">ACTIONS</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#F0EDEB]">
                {currentItems.map((offer) => (
                  <tr
                    key={offer.id}
                    className="group hover:bg-[#FDFCFB] transition-colors border-b border-[#F0EDEB] last:border-none"
                  >
                    <td className="py-4 md:py-5 pl-2">
                      <div className="flex items-center gap-3 md:gap-4">
                        <img
                          src={offer.image}
                          className="h-10 w-10 md:h-12 md:w-12 rounded-[10px] object-cover border border-[#E4DCD1] shrink-0"
                        />
                        <div className="flex flex-col min-w-[150px]">
                          <span className="text-[13px] md:text-[14px] font-bold text-[#5C5550] line-clamp-1">
                            {offer.title}
                          </span>
                          <span className="text-[10px] md:text-[11px] text-[#949E96] line-clamp-1">
                            {offer.description}
                          </span>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 md:py-5">
                      <div className="flex flex-col text-[12px] md:text-[13px] font-bold text-[#5C5550]">
                        <span>{offer.type}</span>
                        <span className="text-[10px] md:text-[11px] text-[#949E96] font-normal">
                          {offer.subType}
                        </span>
                      </div>
                    </td>
                    <td className="py-4 md:py-5">
                      <div className="flex flex-col text-[12px] md:text-[13px] font-bold text-[#5C5550]">
                        <span>{offer.productName}</span>
                        <span className="text-[10px] md:text-[11px] text-[#C9A390] font-normal">
                          ID: {offer.productId}
                        </span>
                      </div>
                    </td>
                    <td className="py-4 md:py-5 text-[13px] md:text-[14px] font-bold text-[#5C5550] whitespace-nowrap">
                      {offer.discount}
                    </td>
                    <td className="py-4 md:py-5">
                      <div className="flex flex-col text-[10px] md:text-[11px] text-[#5C5550] font-medium whitespace-nowrap">
                        <span>{offer.startDate}</span>
                        <span className="text-[#949E96]">
                          to {offer.endDate}
                        </span>
                      </div>
                    </td>
                    <td className="py-4 md:py-5">
                      <span
                        className={`inline-flex items-center rounded-full px-2 md:px-3 py-1 text-[9px] md:text-[10px] font-bold whitespace-nowrap ${offer.status === "ACTIVE" ? "bg-[#E0F2E9] text-[#4CAF50]" : "bg-gray-100 text-gray-500"}`}
                      >
                        ● {offer.status}
                      </span>
                    </td>
                    <td className="py-4 md:py-5 text-center">
                      <div className="flex justify-center gap-2 md:gap-3 text-[#BFC7DE]">
                        <button
                          onClick={() => {
                            setEditingOffer(offer);
                            setActiveTab("create");
                          }}
                          className="hover:text-[#B6A092] transition-colors"
                        >
                          <Edit2 size={16} md:size={18} />
                        </button>
                        <button
                          onClick={() =>
                            setDeleteModal({
                              isOpen: true,
                              id: offer.id,
                              name: offer.title,
                            })
                          }
                          className="hover:text-red-400 transition-colors"
                        >
                          <Trash2 size={16} md:size={18} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 flex items-center justify-between md:justify-end gap-2 overflow-x-auto">
            <button
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="flex shrink-0 h-9 w-9 md:h-10 md:w-10 items-center justify-center rounded-[8px] border border-[#E4DCD1] text-[#949E96] hover:bg-gray-50 disabled:opacity-50 transition-opacity"
            >
              <ChevronLeft size={18} />
            </button>
            <div className="flex gap-2">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (num) => (
                  <button
                    key={num}
                    onClick={() => setCurrentPage(num)}
                    className={`h-9 w-9 md:h-10 md:w-10 rounded-[8px] text-[13px] md:text-[14px] font-bold border transition-all shrink-0 ${currentPage === num ? "bg-[#C9A390] text-white border-[#C9A390]" : "text-[#949E96] border-[#E4DCD1] hover:bg-gray-50"}`}
                  >
                    {num}
                  </button>
                ),
              )}
            </div>
            <button
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="flex shrink-0 h-9 w-9 md:h-10 md:w-10 items-center justify-center rounded-[8px] border border-[#E4DCD1] text-[#949E96] hover:bg-gray-50 disabled:opacity-50 transition-opacity"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      ) : (
        <CreateOfferForm
          initialData={editingOffer}
          onSave={handleCreateOrUpdate}
          onCancel={() => setActiveTab("view")}
        />
      )}
    </div>
  );
}

function CreateOfferForm({ initialData, onSave, onCancel }: any) {
  const [formData, setFormData] = useState(
    initialData || {
      title: "",
      description: "",
      type: "Product",
      discountType: "Percentage",
      discountValue: "",
      startDate: "",
      endDate: "",
      status: "ACTIVE",
      image: "",
    },
  );

  const inputStyle =
    "h-[45px] md:h-[50px] w-full rounded-[10px] border border-[#E4DCD1] px-4 text-[13px] md:text-[14px] outline-none focus:border-[#C9A390]";
  const labelStyle =
    "mb-2 block text-[14px] md:text-[15px] font-medium text-[#949E96]";

  const handleSubmit = (e: any) => {
    e.preventDefault();
    onSave({
      ...formData,
      id: initialData?.id || Date.now().toString(),
      discount:
        formData.discountType === "Percentage"
          ? `${formData.discountValue}%`
          : `${formData.discountValue} EGP`,
      productName: initialData?.productName || "Polo Neck Sweatshirt",
      subType: formData.type === "Product" ? "Sweatshirt" : "Classic Pants",
      productId: initialData?.productId || "68a43b83e3d",
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-[24px] border border-[#E4DCD1] bg-white p-6 md:p-10 shadow-sm flex flex-col gap-5 md:gap-6 w-full"
    >
      <h2
        className="text-[20px] md:text-[24px] font-medium text-[#C9A390]"
        style={{ fontFamily: '"PT Serif", serif' }}
      >
        {initialData ? "Edit Offer" : "Create New Offer"}
      </h2>

      <div>
        <label className={labelStyle}>Title *</label>
        <input
          type="text"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          className={inputStyle}
          required
        />
      </div>

      <div>
        <label className={labelStyle}>Description</label>
        <textarea
          value={formData.description}
          onChange={(e) =>
            setFormData({ ...formData, description: e.target.value })
          }
          className={`${inputStyle} h-[80px] md:h-[100px] py-3 resize-none`}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
        <div>
          <label className={labelStyle}>Offer Type *</label>
          <select
            value={formData.type}
            onChange={(e) => setFormData({ ...formData, type: e.target.value })}
            className={inputStyle}
          >
            <option value="Product">Product</option>
            <option value="Category">Category</option>
          </select>
        </div>
        <div>
          <label className={labelStyle}>Product</label>
          <select className={inputStyle}>
            <option>Polo Neck Sweatshirt</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
        <div>
          <label className={labelStyle}>Discount Type *</label>
          <select
            value={formData.discountType}
            onChange={(e) =>
              setFormData({ ...formData, discountType: e.target.value })
            }
            className={inputStyle}
          >
            <option value="Percentage">Percentage</option>
            <option value="Fixed Amount">Fixed Amount</option>
          </select>
        </div>
        <div>
          <label className={labelStyle}>Discount Value *</label>
          <input
            type="text"
            value={formData.discountValue}
            onChange={(e) =>
              setFormData({ ...formData, discountValue: e.target.value })
            }
            className={inputStyle}
            required
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
        <div>
          <label className={labelStyle}>Start date *</label>
          <input
            type="date"
            value={formData.startDate}
            onChange={(e) =>
              setFormData({ ...formData, startDate: e.target.value })
            }
            className={inputStyle}
            required
          />
        </div>
        <div>
          <label className={labelStyle}>End date *</label>
          <input
            type="date"
            value={formData.endDate}
            onChange={(e) =>
              setFormData({ ...formData, endDate: e.target.value })
            }
            className={inputStyle}
            required
          />
        </div>
      </div>

      <div>
        <label className={labelStyle}>Cover Image *</label>
        <div className="rounded-[20px] border border-[#E4DCD1] p-4 md:p-6 bg-[#FEF9F2]/30">
          <div className="flex gap-4">
            {formData.image && (
              <div className="relative h-20 w-20 md:h-24 md:w-24 shrink-0">
                <img
                  src={formData.image}
                  className="h-full w-full rounded-[15px] object-cover border border-[#E4DCD1]"
                />
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, image: "" })}
                  className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-[#C9A390] text-white shadow-md"
                >
                  <X size={14} />
                </button>
              </div>
            )}
            <label className="flex h-20 w-20 md:h-24 md:w-24 shrink-0 cursor-pointer items-center justify-center rounded-[15px] border-2 border-dashed border-[#E4DCD1] text-[#E4DCD1] hover:bg-gray-50">
              <Plus size={32} />
              <input
                type="file"
                accept="image/*"
                onChange={(e) =>
                  e.target.files?.[0] &&
                  setFormData({
                    ...formData,
                    image: URL.createObjectURL(e.target.files[0]),
                  })
                }
                className="hidden"
              />
            </label>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-start gap-2">
        <label className={labelStyle}>Status *</label>
        <select
          value={formData.status}
          onChange={(e) =>
            setFormData({ ...formData, status: e.target.value as any })
          }
          className={`${inputStyle} w-full md:w-auto md:min-w-[150px] bg-[#E0F2E9] text-[#4CAF50] font-bold`}
        >
          <option value="ACTIVE">● ACTIVE</option>
          <option value="INACTIVE">● INACTIVE</option>
        </select>
      </div>

      <div className="flex flex-col sm:flex-row justify-end gap-3 md:gap-4 pt-4 md:pt-6">
        <button
          type="button"
          onClick={onCancel}
          className="h-[45px] md:h-[50px] w-full sm:w-auto px-10 md:px-12 rounded-[12px] border border-[#E4DCD1] text-[#949E96] font-bold hover:bg-gray-50 order-2 sm:order-1"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="h-[45px] md:h-[50px] w-full sm:w-auto px-10 md:px-12 rounded-[12px] bg-[#C9A390] text-white font-bold hover:opacity-90 order-1 sm:order-2"
        >
          {initialData ? "Update Offer" : "Create Offer"}
        </button>
      </div>
    </form>
  );
}
