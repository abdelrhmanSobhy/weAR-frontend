import { useState } from "react";
import { ChevronLeft } from "lucide-react";

import planDetailsImg from "@/assets/Dashboard/planDetails.webp";
import basicImg from "@/assets/auth/pricing/basic.webp";
import standardImg from "@/assets/auth/pricing/standard.webp";
import enterpriseImg from "@/assets/auth/pricing/enterprise.webp";
import saasImg from "@/assets/auth/pricing/saas.webp";

export function RetailerEditPricingPage() {
  const [currentView, setCurrentView] = useState<
    "overview" | "details" | "upgrade"
  >("overview");

  return (
    <div className="flex flex-col font-sans w-full max-w-full items-center">
      {currentView === "overview" && (
        <CurrentPlanView
          onViewDetails={() => setCurrentView("details")}
          onUpgrade={() => setCurrentView("upgrade")}
        />
      )}
      {currentView === "details" && (
        <PlanDetailsView
          onBack={() => setCurrentView("overview")}
          onUpgrade={() => setCurrentView("upgrade")}
        />
      )}
      {currentView === "upgrade" && (
        <UpgradePlanView onBack={() => setCurrentView("overview")} />
      )}
    </div>
  );
}

function CurrentPlanView({
  onViewDetails,
  onUpgrade,
}: {
  onViewDetails: () => void;
  onUpgrade: () => void;
}) {
  return (
    <div className="flex flex-col gap-6 w-full max-w-[1328px]">
      <h1
        className="text-[24px] md:text-[28px] font-bold text-[#B6A092]"
        style={{ fontFamily: '"PT Serif", serif' }}
      >
        Your Current Plan
      </h1>
      <div className="rounded-[24px] border border-[#E4DCD1] bg-white p-4 md:p-8 shadow-sm">
        <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center md:items-stretch">
          <div className="w-full md:w-[280px] h-[180px] shrink-0 rounded-[16px] overflow-hidden bg-[#FEF9F2]">
            <img
              src={standardImg}
              alt="Plan"
              className="w-full h-full object-cover mix-blend-multiply"
            />
          </div>

          <div className="flex flex-col justify-between flex-1 w-full">
            <div className="flex justify-between items-start">
              <div>
                <h2
                  className="text-[20px] font-bold text-[#C9A390]"
                  style={{ fontFamily: '"PT Serif", serif' }}
                >
                  Standard
                </h2>
                <p className="text-[14px] text-[#C9A390]/80 mt-1">
                  For small to medium businesses
                </p>
              </div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#E0F2E9] px-3 py-1 text-[11px] font-bold text-[#4CAF50]">
                ● ONGOING
              </span>
            </div>

            <div className="mt-4">
              <div className="flex gap-8 text-[13px] text-[#949E96]">
                <p>Plan Type: Monthly</p>
                <div className="flex gap-4">
                  <span>Start: 1/12/2025</span>
                  <span>End: 31/12/2025</span>
                </div>
              </div>
              <p className="text-[13px] text-[#949E96] mt-1">
                include full access to every platform feature.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mt-6 gap-4">
              <div className="flex items-start">
                <span className="text-[16px] font-bold text-[#C9A390] mt-1 mr-1">
                  $
                </span>
                <span
                  className="text-[42px] font-bold text-[#C9A390] leading-none"
                  style={{ fontFamily: '"PT Serif", serif' }}
                >
                  150
                </span>
                <span className="text-[14px] text-[#949E96] mb-1 ml-1">
                  /month
                </span>
              </div>
              <div className="flex gap-3 w-full sm:w-auto">
                <button
                  onClick={onUpgrade}
                  className="flex-1 sm:flex-none px-6 py-3 bg-[#B6A092] text-white text-[14px] font-bold rounded-[10px] hover:bg-[#9F8062] transition-colors"
                >
                  Upgrade Your Plan
                </button>
                <button
                  onClick={onViewDetails}
                  className="flex-1 sm:flex-none px-6 py-3 border border-[#E4DCD1] text-[#C9A390] text-[14px] font-bold rounded-[10px] hover:bg-[#FEF9F2] transition-colors"
                >
                  View Your Plan
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function PlanDetailsView({
  onBack,
  onUpgrade,
}: {
  onBack: () => void;
  onUpgrade: () => void;
}) {
  const features = [
    "Virtual Fitting Room with 3D Avatars",
    "Full AI Style Recommendations",
    "Product Catalog & Inventory Management",
    "Retailer Analytics Dashboard",
    "Return & Refund Management System",
    "Up to 1,000 active products",
    "Up to 10,000 monthly virtual try-ons",
    "3% platform commission on sales",
    "Advanced body analytics & fit insights",
    "Priority support (24-hour response)",
  ];

  return (
    <div className="flex flex-col gap-6 w-full items-center">
      <div className="w-full max-w-[1328px] flex justify-start">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-[#C9A390] hover:text-[#B6A092] font-bold w-fit transition-colors text-[18px]"
          style={{ fontFamily: '"PT Serif", serif' }}
        >
          <ChevronLeft size={20} /> Your Plan Details
        </button>
      </div>

      <div className="rounded-[24px] border border-[#E4DCD1] bg-white p-6 md:p-8 shadow-sm flex flex-col lg:flex-row gap-8 w-full max-w-[1328px] lg:h-[796px]">
        <div className="w-full lg:w-[420px] shrink-0 rounded-[24px] border border-[#E4DCD1] p-8 flex flex-col bg-white h-full shadow-sm">
          <div className="text-center mb-8 mt-4">
            <h3
              className="text-[24px] font-bold text-[#949E96]"
              style={{ fontFamily: '"PT Serif", serif' }}
            >
              Standard
            </h3>
            <p className="text-[13px] text-[#C9A390] mt-1">
              For small to medium businesses
            </p>
            <div className="flex items-start justify-center mt-8">
              <span className="text-[18px] font-bold text-[#949E96] mt-2 mr-1">
                $
              </span>
              <span
                className="text-[54px] font-bold text-[#949E96] leading-none"
                style={{ fontFamily: '"PT Serif", serif' }}
              >
                1440
              </span>
              <span className="text-[14px] text-[#949E96] mt-auto mb-2 ml-1">
                /Year
              </span>
            </div>
          </div>

          <div className="flex-1 flex flex-col gap-4 mb-8 px-2">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3"
                style={{
                  color: "rgba(0, 0, 0, 0.50)",
                  fontFeatureSettings: "'liga' off, 'clig' off",
                  fontFamily: "Hanuman, sans-serif",
                  fontSize: "14px",
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "120%",
                  letterSpacing: "0.14px",
                }}
              >
                <span className="text-[6px] mt-1.5 text-[#949E96]">●</span>
                <span>{feature}</span>
              </div>
            ))}
          </div>

          <button
            onClick={onUpgrade}
            className="w-full py-4 border border-[#E4DCD1] text-[#C9A390] text-[13px] font-bold tracking-widest rounded-[12px] hover:bg-[#FEF9F2] transition-colors uppercase mt-auto"
          >
            Upgrade
          </button>
        </div>

        <div className="flex-1 rounded-[24px] overflow-hidden bg-[#FEF9F2] h-full min-h-[400px] lg:min-h-0">
          <img
            src={planDetailsImg}
            alt="Plan Details"
            className="w-full h-full object-cover mix-blend-multiply"
          />
        </div>
      </div>
    </div>
  );
}

function UpgradePlanView({ onBack }: { onBack: () => void }) {
  const [billingCycle, setBillingCycle] = useState<
    "Monthly" | "Yearly" | "SaaS"
  >("Yearly");

  const plans = [
    {
      name: "Basic",
      desc: "A simple start for everyone",
      priceMonthly: 50,
      priceYearly: 500,
      priceSaas: 1000,
      img: basicImg,
      features: [
        "Virtual Fitting Room with 3D Avatars",
        "Full AI Style Recommendations",
        "Product Catalog & Inventory Management",
        "Retailer Analytics Dashboard",
        "Return & Refund Management System",
        "Up to 250 active products",
        "Up to 1,000 monthly virtual try-ons",
        "5% platform commission on sales",
        "Email support (48-hour response)",
      ],
    },
    {
      name: "Standard",
      desc: "For small to medium businesses",
      priceMonthly: 150,
      priceYearly: 1440,
      priceSaas: 2500,
      img: standardImg,
      isPopular: true,
      isCurrent: true,
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
        "Priority support (24-hour response)",
      ],
    },
    {
      name: "Enterprise",
      desc: "Solution for big organizations",
      priceMonthly: 300,
      priceYearly: 3840,
      priceSaas: 5000,
      img: enterpriseImg,
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
      ],
    },
  ];

  const getPrice = (plan: any) => {
    if (billingCycle === "Monthly") return plan.priceMonthly;
    if (billingCycle === "Yearly") return plan.priceYearly;
    return plan.priceSaas;
  };

  const getSuffix = () => {
    if (billingCycle === "Monthly") return "/month";
    if (billingCycle === "Yearly") return "/Year";
    return "";
  };

  return (
    <div className="flex flex-col gap-8 w-full max-w-[1328px]">
      <div className="flex items-center justify-between relative">
        <button
          onClick={onBack}
          className="text-[#949E96] hover:text-[#5C5550] font-bold text-[14px] tracking-widest uppercase flex items-center gap-1 absolute left-0 z-10"
        >
          <ChevronLeft size={16} /> Skip
        </button>

        <div className="w-full text-center">
          <h1
            className="text-[28px] md:text-[36px] font-bold text-[#B6A092]"
            style={{ fontFamily: '"PT Serif", serif' }}
          >
            {billingCycle === "SaaS"
              ? "SaaS / White-Label Solution"
              : "Subscription Plan"}
          </h1>
          <p className="text-[14px] text-[#949E96] mt-2">
            {billingCycle === "SaaS"
              ? "For businesses wanting their own standalone VFR platform"
              : "All plans include full access to every platform feature. choose the best plan fit your needs."}
          </p>
        </div>
      </div>

      <div className="mx-auto flex w-full max-w-[600px] rounded-[15px] bg-[#FEF9F2] border border-[#E4DCD1] p-1">
        {["Monthly", "Yearly", "SaaS"].map((cycle) => (
          <button
            key={cycle}
            onClick={() => setBillingCycle(cycle as any)}
            className={`flex-1 rounded-[12px] py-3 text-[14px] font-bold transition-all ${
              billingCycle === cycle
                ? "bg-[#C9A390] text-white shadow-sm"
                : "text-[#C9A390] hover:bg-white/50"
            }`}
          >
            {cycle}
          </button>
        ))}
      </div>

      {billingCycle === "SaaS" ? (
        <div className="flex flex-col lg:flex-row gap-6 mt-4 lg:h-[700px]">
          <div className="w-full lg:w-[380px] shrink-0 rounded-[20px] border border-[#C9A390] p-8 flex flex-col bg-white shadow-sm h-full overflow-hidden">
            <div className="text-center mb-8">
              <h3
                className="text-[20px] font-bold text-[#949E96]"
                style={{ fontFamily: '"PT Serif", serif' }}
              >
                Enterprise
              </h3>
              <p className="text-[12px] text-[#C9A390] mt-1">
                Solution for big organizations
              </p>
              <div className="flex items-start justify-center mt-6">
                <span className="text-[14px] font-bold text-[#949E96] mt-1 mr-1">
                  $
                </span>
                <span
                  className="text-[42px] font-bold text-[#949E96] leading-none"
                  style={{ fontFamily: '"PT Serif", serif' }}
                >
                  5000
                </span>
              </div>
            </div>
            <div className="flex-1 flex flex-col gap-4 mb-8">
              {plans[2].features.map((feature, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3"
                  style={{
                    color: "rgba(0, 0, 0, 0.50)",
                    fontFeatureSettings: "'liga' off, 'clig' off",
                    fontFamily: "Hanuman, sans-serif",
                    fontSize: "14px",
                    fontStyle: "normal",
                    fontWeight: 400,
                    lineHeight: "120%",
                    letterSpacing: "0.14px",
                  }}
                >
                  <span className="text-[6px] mt-1.5 text-[#C9A390]">●</span>
                  <span>{feature}</span>
                </div>
              ))}
            </div>
            <button className="w-full py-3 border border-[#E4DCD1] text-[#C9A390] text-[12px] font-bold tracking-widest rounded-[10px] hover:bg-[#FEF9F2] transition-colors uppercase mt-auto">
              Upgrade
            </button>
          </div>
          <div className="flex-1 rounded-[20px] overflow-hidden bg-[#FEF9F2] h-full min-h-[400px] lg:min-h-0">
            <img
              src={saasImg}
              alt="SaaS Details"
              className="w-full h-full object-cover mix-blend-multiply"
            />
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
          {plans.map((plan, idx) => (
            // التعديل هنا: إضافة overflow-hidden
            <div
              key={idx}
              className={`relative rounded-[20px] border p-6 flex flex-col bg-white overflow-hidden ${plan.isPopular ? "border-[#C9A390] shadow-md transform md:-translate-y-4" : "border-[#E4DCD1]"}`}
            >
              {plan.isPopular && (
                <div
                  className="absolute top-6 -right-2 bg-[#C9A390] text-white text-[12px] font-bold px-8 py-2 tracking-wider z-10 shadow-sm"
                  style={{
                    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%, 15% 50%)",
                  }}
                >
                  Popular
                </div>
              )}

              <div className="h-[120px] rounded-[12px] overflow-hidden bg-[#FEF9F2] mb-6">
                <img
                  src={plan.img}
                  alt={plan.name}
                  className="w-full h-full object-cover mix-blend-multiply"
                />
              </div>

              <div className="text-center mb-8">
                <h3
                  className="text-[20px] font-bold text-[#949E96]"
                  style={{ fontFamily: '"PT Serif", serif' }}
                >
                  {plan.name}
                </h3>
                <p className="text-[12px] text-[#C9A390] mt-1">{plan.desc}</p>
                <div className="flex items-start justify-center mt-4">
                  <span className="text-[14px] font-bold text-[#949E96] mt-1 mr-1">
                    $
                  </span>
                  <span
                    className="text-[42px] font-bold text-[#949E96] leading-none"
                    style={{ fontFamily: '"PT Serif", serif' }}
                  >
                    {getPrice(plan)}
                  </span>
                  <span className="text-[13px] text-[#949E96] mt-auto mb-1 ml-1">
                    {getSuffix()}
                  </span>
                </div>
              </div>

              <div className="flex-1 flex flex-col gap-4 mb-8 px-1">
                {plan.features.map((feature, fIdx) => (
                  <div
                    key={fIdx}
                    className="flex items-start gap-3"
                    style={{
                      color: "rgba(0, 0, 0, 0.50)",
                      fontFeatureSettings: "'liga' off, 'clig' off",
                      fontFamily: "Hanuman, sans-serif",
                      fontSize: "14px",
                      fontStyle: "normal",
                      fontWeight: 400,
                      lineHeight: "120%",
                      letterSpacing: "0.14px",
                    }}
                  >
                    <span className="text-[6px] mt-1.5 text-[#949E96]">●</span>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <button
                className={`w-full py-3 border text-[12px] font-bold tracking-widest rounded-[10px] uppercase mt-auto transition-colors ${plan.isCurrent ? "border-[#E4DCD1] text-[#949E96] bg-gray-50 cursor-default" : "border-[#E4DCD1] text-[#C9A390] hover:bg-[#FEF9F2]"}`}
              >
                {plan.isCurrent
                  ? "Your Current Plan"
                  : idx > 1
                    ? "Upgrade"
                    : "Select"}
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}