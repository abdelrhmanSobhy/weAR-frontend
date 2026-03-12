import { useState } from "react";
import {
  Edit2,
  Trash2,
  ChevronLeft,
  ChevronRight,
  X,
  Plus,
} from "lucide-react";

const topsImg =
  "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=100";
const bottomsImg =
  "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=100";
const jacketsImg =
  "https://images.unsplash.com/photo-1576871333020-2210674ef827?w=100";

const baseData = [
  {
    name: "Tops & Shirts",
    desc: "Find your perfect fit across all upper wear. Visualize ...",
    date: "1/12/2025",
    status: "ACTIVE",
    img: topsImg,
  },
  {
    name: "Bottoms & Pants",
    desc: "Discover bottoms that complement your shape ...",
    date: "1/12/2025",
    status: "INACTIVE",
    img: bottomsImg,
  },
  {
    name: "Jackets",
    desc: "Try on one-piece wonders without the fitting room ...",
    date: "1/12/2025",
    status: "ACTIVE",
    img: jacketsImg,
  },
];

const INITIAL_CATEGORIES = Array.from({ length: 13 }).map((_, i) => {
  const base = baseData[i % 3];
  return {
    id: String(i + 1),
    name: base.name,
    description: base.desc,
    createdDate: base.date,
    status: base.status,
    image: base.img,
  };
});

export function RetailerCategoriesPage() {
  const [activeTab, setActiveTab] = useState<"view" | "create">("view");
  const [categories, setCategories] = useState(INITIAL_CATEGORIES);
  const [editingCategory, setEditingCategory] = useState<any>(null);
  const [deleteModal, setDeleteModal] = useState({
    isOpen: false,
    id: "",
    name: "",
  });

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = categories.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(categories.length / itemsPerPage);

  const confirmDelete = () => {
    setCategories(categories.filter((c) => c.id !== deleteModal.id));
    setDeleteModal({ isOpen: false, id: "", name: "" });
  };

  const handleCreateOrUpdate = (newCategory: any) => {
    if (editingCategory) {
      setCategories(
        categories.map((c) => (c.id === editingCategory.id ? newCategory : c)),
      );
    } else {
      setCategories([newCategory, ...categories]);
    }
    setEditingCategory(null);
    setActiveTab("view");
    setCurrentPage(1);
  };

  return (
    <div className="relative flex flex-col gap-6 font-sans w-full max-w-full">
      {deleteModal.isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">
          <div className="w-full max-w-[400px] rounded-[24px] bg-white p-6 md:p-8 text-center shadow-2xl">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-red-50 text-[#F06161]">
              <Trash2 size={32} />
            </div>
            <h3 className="text-[20px] font-bold text-[#5C5550]">
              Delete Category
            </h3>
            <p className="mt-2 text-[14px] text-[#949E96]">
              Are you sure you want to delete the category <br />
              <span className="font-bold text-[#5C5550]">
                "{deleteModal.name}"
              </span>
              ? This action cannot be undone.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <button
                onClick={confirmDelete}
                className="flex-1 rounded-[12px] bg-[#F06161] py-3 font-bold text-white hover:bg-red-600 transition-colors"
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

      <div className="flex flex-col sm:flex-row w-full gap-3 md:gap-4 p-2 bg-transparent">
        <button
          onClick={() => {
            setActiveTab("view");
            setEditingCategory(null);
            setCurrentPage(1);
          }}
          className="flex-1 py-3 text-[16px] md:text-[18px] font-bold transition-all rounded-[12px]"
          style={{
            backgroundColor: activeTab === "view" ? "#C9A390" : "#FEF9F2",
            color: activeTab === "view" ? "white" : "#B6A092",
            border: activeTab === "view" ? "none" : "1px solid #E4DCD1",
          }}
        >
          View Categories
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
          Create Category
        </button>
      </div>

      {activeTab === "view" ? (
        <div className="rounded-[24px] border border-[#E4DCD1] bg-white p-4 md:p-8 shadow-sm overflow-hidden w-full">
          <h2
            className="mb-6 md:mb-8 text-[20px] md:text-[24px] font-medium text-[#C9A390]"
            style={{ fontFamily: '"PT Serif", serif' }}
          >
            All Categories
          </h2>

          <div className="w-full overflow-x-auto pb-4">
            <table className="w-full border-collapse min-w-[800px]">
              <thead>
                <tr className="border-b border-[#F0EDEB] text-left text-[12px] font-bold text-[#C9A390] uppercase">
                  <th className="pb-4 pl-2 w-1/4">NAME</th>
                  <th className="pb-4 w-1/3">DESCRIPTION</th>
                  <th className="pb-4 w-1/6">CREATED</th>
                  <th className="pb-4 w-1/6">STATUS</th>
                  <th className="pb-4 pr-2 text-center w-auto">ACTIONS</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#F0EDEB]">
                {currentItems.map((category) => (
                  <tr
                    key={category.id}
                    className="group hover:bg-[#FDFCFB] transition-colors border-b border-[#F0EDEB] last:border-none"
                  >
                    <td className="py-4 md:py-5 pl-2">
                      <div className="flex items-center gap-3 md:gap-4">
                        <img
                          src={category.image}
                          className="h-10 w-10 md:h-12 md:w-12 rounded-[10px] object-cover border border-[#E4DCD1] shrink-0"
                        />
                        <span className="text-[13px] md:text-[14px] font-bold text-[#5C5550] whitespace-nowrap">
                          {category.name}
                        </span>
                      </div>
                    </td>
                    <td className="py-4 md:py-5 pr-4">
                      <p className="text-[11px] md:text-[12px] text-[#949E96] leading-tight line-clamp-2 max-w-[280px]">
                        {category.description}
                      </p>
                    </td>
                    <td className="py-4 md:py-5 text-[12px] md:text-[13px] font-bold text-[#5C5550] whitespace-nowrap">
                      {category.createdDate}
                    </td>
                    <td className="py-4 md:py-5">
                      <span
                        className={`inline-flex items-center rounded-full px-2 md:px-3 py-1 text-[9px] md:text-[10px] font-bold whitespace-nowrap ${category.status === "ACTIVE" ? "bg-[#E0F2E9] text-[#4CAF50]" : "bg-[#FFE4E4] text-[#F06161]"}`}
                      >
                        ● {category.status}
                      </span>
                    </td>
                    <td className="py-4 md:py-5 text-center">
                      <div className="flex justify-center gap-2 md:gap-3 text-[#BFC7DE]">
                        <button
                          onClick={() => {
                            setEditingCategory(category);
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
                              id: category.id,
                              name: category.name,
                            })
                          }
                          className="hover:text-[#F06161] transition-colors"
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
        <CreateCategoryForm
          initialData={editingCategory}
          onSave={handleCreateOrUpdate}
          onCancel={() => setActiveTab("view")}
        />
      )}
    </div>
  );
}

function CreateCategoryForm({ initialData, onSave, onCancel }: any) {
  const [formData, setFormData] = useState(
    initialData || { name: "", description: "", status: "ACTIVE", image: "" },
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
      createdDate:
        initialData?.createdDate || new Date().toLocaleDateString("en-GB"),
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
        {initialData ? "Edit Category" : "Create New Category"}
      </h2>

      <div>
        <label className={labelStyle}>Category Name *</label>
        <input
          type="text"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
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
          className={`${inputStyle} h-[80px] md:h-[120px] py-3 resize-none`}
          placeholder="Write a description ..."
        />
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
          className={`${inputStyle} w-full md:w-auto md:min-w-[150px] font-bold ${formData.status === "ACTIVE" ? "bg-[#E0F2E9] text-[#4CAF50]" : "bg-[#FFE4E4] text-[#F06161]"}`}
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
          {initialData ? "Update Category" : "Create Category"}
        </button>
      </div>
    </form>
  );
}
