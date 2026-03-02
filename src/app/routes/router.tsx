import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import { AuthLayout } from "@/components/layout/AuthLayout";
import { AppLayout } from "@/components/layout/AppLayout";

import RetailerLoginPage from "@/features/auth/pages/RetailerLoginPage";

import { DashboardPage } from "@/features/retailer/pages/DashboardPage";
import { StorePage } from "@/features/customer/pages/StorePage";
import { TenantsPage } from "@/features/admin/pages/TenantsPage";

import { RequireAuth } from "../guards/RequireAuth";
import { RequireRole } from "../guards/RequireRole";

import { ComingSoonPage } from "@/features/common/pages/ComingSoonPage";

const router = createBrowserRouter([
  {
    element: <AuthLayout />,
    children: [
      // ✅ Fix 404: provide /login and /signup as entry points
      // TODO(UX): Later replace these redirects with a real "Choose account type" page.
      { path: "/login", element: <Navigate to="/login/retailer" replace /> },
      // { path: "/signup", element: <Navigate to="/signup/retailer" replace /> },

      { path: "/login/retailer", element: <RetailerLoginPage /> },
      // { path: "/signup/retailer", element: <RetailerSignupPage /> },

      // Optional: if someone visits "/", send them to login
      { path: "/", element: <Navigate to="/login" replace /> },
    ],
  },

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
            <DashboardPage />
          </RequireRole>
        ),
      },
      {
        path: "/customer",
        element: <ComingSoonPage />,
        // (
        //   <RequireRole role="customer">
        //     <StorePage />
        //   </RequireRole>
        // ),
      },
      {
        path: "/admin",
        element: <ComingSoonPage />,
        // (
        // //   <RequireRole role="admin">
        // //     <TenantsPage />
        // //   </RequireRole>
        // ),
      },
    ],
  },

  // Optional: catch-all -> send to /login (prevents random 404s)
  { path: "*", element: <Navigate to="/login" replace /> },
]);

export const AppRouter = () => <RouterProvider router={router} />;
