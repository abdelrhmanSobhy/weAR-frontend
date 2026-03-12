import { useState } from "react";
import {
  Search,
  ChevronDown,
  ChevronUp,
  Mail,
  Phone,
  MessageCircle,
} from "lucide-react";

const MOCK_FAQS = [
  {
    id: "1",
    category: "Getting Started",
    question: "How do I set up my Virtual Fitting Room?",
    answer:
      "To set up your Virtual Fitting Room, navigate to the Settings tab, select 'VFR Configuration', and follow the step-by-step wizard. You will need to upload your base 3D models or request our team to generate them from your product images.",
  },
  {
    id: "2",
    category: "Products & Inventory",
    question: "How can I bulk upload my products?",
    answer:
      "You can bulk upload products by going to the Inventory page and clicking the 'Export/Import CSV' button. Download the template, fill in your product details, barcodes, and stock levels, then upload the completed file.",
  },
  {
    id: "3",
    category: "Products & Inventory",
    question: "What image formats are supported for products?",
    answer:
      "We currently support high-resolution JPEG, PNG, and WEBP formats. For best 3D avatar mapping, we recommend uploading images with a solid white or transparent background.",
  },
  {
    id: "4",
    category: "Orders & Shipping",
    question: "How do I process a refund?",
    answer:
      "Navigate to the Orders page, search for the specific Order ID, open the order details, and click the 'Process Refund' button. You can choose to issue a full or partial refund.",
  },
  {
    id: "5",
    category: "Billing & Plans",
    question: "Can I upgrade or downgrade my plan at any time?",
    answer:
      "Yes, you can change your subscription plan at any time from the Pricing page. Upgrades are applied immediately, while downgrades will take effect at the start of your next billing cycle.",
  },
  {
    id: "6",
    category: "Billing & Plans",
    question: "Where can I find my billing invoices?",
    answer:
      "All your monthly and yearly invoices are stored in Settings > Billing History. You can download them as PDF files for your accounting records.",
  },
  {
    id: "7",
    category: "Technical Support",
    question:
      "The 3D avatar is not loading on my storefront, what should I do?",
    answer:
      "First, ensure that the product has been properly mapped to a 3D model in your Product Catalog. If the issue persists, check your API key integration or contact our support team immediately.",
  },
];

const CATEGORIES = [
  "All",
  "Getting Started",
  "Products & Inventory",
  "Orders & Shipping",
  "Billing & Plans",
  "Technical Support",
];

export function RetailerHelpPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [expandedId, setExpandedId] = useState<string | null>("1");

  const filteredFaqs = MOCK_FAQS.filter((faq) => {
    const matchesSearch =
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      activeCategory === "All" || faq.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const toggleFaq = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="flex flex-col gap-8 font-sans w-full max-w-[1328px] mx-auto">
      <div className="flex flex-col items-center justify-center text-center bg-[#FEF9F2] rounded-[24px] border border-[#E4DCD1] p-10 md:p-16">
        <h1
          className="text-[32px] md:text-[42px] font-bold text-[#B6A092]"
          style={{ fontFamily: '"PT Serif", serif' }}
        >
          How can we help you today?
        </h1>
        <p className="text-[15px] text-[#949E96] mt-3 max-w-[600px]">
          Search our knowledge base or browse categories below to find answers
          to your questions, guides, and troubleshooting tips.
        </p>

        <div className="relative w-full max-w-[700px] mt-8 shadow-sm">
          <input
            type="text"
            placeholder="Search for answers, guides, or keywords..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="h-[60px] w-full rounded-[16px] border border-[#E4DCD1] px-6 pl-14 text-[16px] outline-none focus:border-[#C9A390] focus:ring-1 focus:ring-[#C9A390] transition-all bg-white"
          />
          <Search
            className="absolute left-5 top-1/2 -translate-y-1/2 text-[#C9A390]"
            size={22}
          />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 items-start">
        <div className="w-full lg:w-2/3 flex flex-col gap-6">
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2.5 rounded-full text-[13px] font-bold transition-colors border ${
                  activeCategory === category
                    ? "bg-[#C9A390] text-white border-[#C9A390]"
                    : "bg-white text-[#949E96] border-[#E4DCD1] hover:bg-[#FEF9F2] hover:text-[#C9A390]"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="flex flex-col gap-4">
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((faq) => (
                <div
                  key={faq.id}
                  className={`rounded-[16px] border transition-all duration-300 bg-white overflow-hidden ${
                    expandedId === faq.id
                      ? "border-[#C9A390] shadow-sm"
                      : "border-[#E4DCD1] hover:border-[#C9A390]/50"
                  }`}
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full flex items-center justify-between p-6 text-left"
                  >
                    <span
                      className={`text-[15px] font-bold pr-4 ${expandedId === faq.id ? "text-[#C9A390]" : "text-[#5C5550]"}`}
                    >
                      {faq.question}
                    </span>
                    <div
                      className={`shrink-0 flex items-center justify-center w-8 h-8 rounded-full transition-colors ${expandedId === faq.id ? "bg-[#FEF9F2] text-[#C9A390]" : "bg-gray-50 text-[#949E96]"}`}
                    >
                      {expandedId === faq.id ? (
                        <ChevronUp size={18} />
                      ) : (
                        <ChevronDown size={18} />
                      )}
                    </div>
                  </button>

                  <div
                    className={`transition-all duration-300 ease-in-out ${
                      expandedId === faq.id
                        ? "max-h-[500px] opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="p-6 pt-0 text-[14px] text-[#949E96] leading-relaxed border-t border-[#F0EDEB] mt-2">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-12 bg-white rounded-[16px] border border-[#E4DCD1]">
                <Search className="mx-auto text-[#E4DCD1] mb-4" size={48} />
                <h3 className="text-[18px] font-bold text-[#5C5550]">
                  No results found
                </h3>
                <p className="text-[14px] text-[#949E96] mt-2">
                  We couldn't find any articles matching "{searchTerm}".
                </p>
                <button
                  onClick={() => setSearchTerm("")}
                  className="mt-4 text-[#C9A390] font-bold text-[14px] hover:underline"
                >
                  Clear search
                </button>
              </div>
            )}
          </div>
        </div>

        <div className="w-full lg:w-1/3 flex flex-col gap-6 sticky top-6">
          <div className="rounded-[24px] border border-[#E4DCD1] bg-white p-8 shadow-sm flex flex-col">
            <h3
              className="text-[22px] font-bold text-[#B6A092] mb-2"
              style={{ fontFamily: '"PT Serif", serif' }}
            >
              Still need help?
            </h3>
            <p className="text-[14px] text-[#949E96] mb-8">
              If you couldn't find the answer you were looking for, our support
              team is ready to assist you.
            </p>

            <div className="flex flex-col gap-4">
              <a
                href="mailto:support@wear.com"
                className="flex items-center gap-4 p-4 rounded-[16px] border border-[#E4DCD1] hover:border-[#C9A390] hover:bg-[#FEF9F2] transition-colors group"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#FEF9F2] text-[#C9A390] group-hover:bg-[#C9A390] group-hover:text-white transition-colors">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="text-[14px] font-bold text-[#5C5550]">
                    Email Support
                  </h4>
                  <p className="text-[12px] text-[#949E96] mt-0.5">
                    support@wear.com
                  </p>
                </div>
              </a>

              <a
                href="tel:+14146875892"
                className="flex items-center gap-4 p-4 rounded-[16px] border border-[#E4DCD1] hover:border-[#C9A390] hover:bg-[#FEF9F2] transition-colors group"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#FEF9F2] text-[#C9A390] group-hover:bg-[#C9A390] group-hover:text-white transition-colors">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="text-[14px] font-bold text-[#5C5550]">
                    Call Us
                  </h4>
                  <p className="text-[12px] text-[#949E96] mt-0.5">
                    +1 (414) 687 - 5892
                  </p>
                </div>
              </a>

              <button className="flex items-center gap-4 p-4 rounded-[16px] border border-[#E4DCD1] hover:border-[#C9A390] hover:bg-[#FEF9F2] transition-colors group text-left">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#FEF9F2] text-[#C9A390] group-hover:bg-[#C9A390] group-hover:text-white transition-colors">
                  <MessageCircle size={20} />
                </div>
                <div>
                  <h4 className="text-[14px] font-bold text-[#5C5550]">
                    Live Chat
                  </h4>
                  <p className="text-[12px] text-[#949E96] mt-0.5">
                    Available 24/7
                  </p>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
