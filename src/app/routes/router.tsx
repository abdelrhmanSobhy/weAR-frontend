import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import { AuthLayout } from "@/components/layout/AuthLayout";
import { AppLayout } from "@/components/layout/AppLayout";

import RetailerLoginPage from "@/features/auth/pages/RetailerLoginPage";

import { RequireAuth } from "../guards/RequireAuth";
import { RequireRole } from "../guards/RequireRole";

import { RetailerLayout } from "@/features/retailer/layouts/RetailerLayout";
import { RetailerDashboardPage } from "@/features/retailer/pages/RetailerDashboardPage";
import { RetailerProductsListPage } from "@/features/retailer/pages/RetailerProductsListPage";
import { RetailerProductCreatePage } from "@/features/retailer/pages/RetailerProductCreatePage";
import { RetailerProductEditPage } from "@/features/retailer/pages/RetailerProductEditPage";
import { RetailerSettingsPage } from "@/features/retailer/pages/RetailerSettingsPage";

import { ComingSoonPage } from "@/features/common/pages/ComingSoonPage";

const router = createBrowserRouter([
  {
    element: <AuthLayout />,
    children: [
      { path: "/login", element: <Navigate to="/login/retailer" replace /> },
      { path: "/login/retailer", element: <RetailerLoginPage /> },
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

      // disabled for now
      { path: "/customer", element: <ComingSoonPage /> },
      { path: "/admin", element: <ComingSoonPage /> },
    ],
  },

  { path: "*", element: <Navigate to="/login" replace /> },
]);

export const AppRouter = () => <RouterProvider router={router} />;
