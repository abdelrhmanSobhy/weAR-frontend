import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import { AuthLayout } from "@/components/layout/AuthLayout";
import { AppLayout } from "@/components/layout/AppLayout";

// --- Auth Pages ---
import RetailerLoginPage from "@/features/auth/pages/RetailerLoginPage";
import RetailerSignupStep1Page from "@/features/auth/pages/RetailerSignupStep1Page";
import RetailerSignupStep2Page from "@/features/auth/pages/RetailerSignupStep2Page";
import RetailerPricingPage from "@/features/auth/pages/RetailerPricingPage";
import RetailerPaymentPage from "@/features/auth/pages/RetailerPaymentPage"; // <-- تم إضافة استيراد صفحة الدفع

// --- Guards ---
import { RequireAuth } from "../guards/RequireAuth";
import { RequireRole } from "../guards/RequireRole";

// --- Retailer Dashboard Pages ---
import { RetailerLayout } from "@/features/retailer/layouts/RetailerLayout";
import { RetailerDashboardPage } from "@/features/retailer/pages/RetailerDashboardPage";
import { RetailerProductsListPage } from "@/features/retailer/pages/RetailerProductsListPage";
import { RetailerProductCreatePage } from "@/features/retailer/pages/RetailerProductCreatePage";
import { RetailerProductEditPage } from "@/features/retailer/pages/RetailerProductEditPage";
import { RetailerSettingsPage } from "@/features/retailer/pages/RetailerSettingsPage";

// --- Common Pages ---
import { ComingSoonPage } from "@/features/common/pages/ComingSoonPage";

const router = createBrowserRouter([
  // ==========================================
  // Public Routes (Authentication & Onboarding)
  // ==========================================
  {
    element: <AuthLayout />,
    children: [
      { path: "/login", element: <Navigate to="/login/retailer" replace /> },
      { path: "/login/retailer", element: <RetailerLoginPage /> },

      { path: "/signup/retailer", element: <RetailerSignupStep1Page /> },
      { path: "/signup/retailer/step-2", element: <RetailerSignupStep2Page /> },
      { path: "/signup/retailer/pricing", element: <RetailerPricingPage /> },
      { path: "/signup/retailer/payment", element: <RetailerPaymentPage /> }, // <-- تم إضافة مسار الدفع هنا وإزالة التكرار

      { path: "/", element: <Navigate to="/login" replace /> },
    ],
  },

  // ==========================================
  // Protected Routes (Dashboard)
  // ==========================================
  {
    element: (
      <RequireAuth>
        <AppLayout />
      </RequireAuth>
    ),
    children: [
      {
        path: "/retailer",
        element: (
          <RequireRole role="retailer">
            <RetailerLayout />
          </RequireRole>
        ),
        children: [
          { index: true, element: <RetailerDashboardPage /> },
          { path: "products", element: <RetailerProductsListPage /> },
          { path: "products/new", element: <RetailerProductCreatePage /> },
          { path: "products/:id/edit", element: <RetailerProductEditPage /> },
          { path: "settings", element: <RetailerSettingsPage /> },
        ],
      },

      { path: "/customer", element: <ComingSoonPage /> },
      { path: "/admin", element: <ComingSoonPage /> },
    ],
  },

  { path: "*", element: <Navigate to="/login" replace /> },
]);

export const AppRouter = () => <RouterProvider router={router} />;
