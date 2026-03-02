import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AuthLayout } from "@/components/layout/AuthLayout";
import { AppLayout } from "@/components/layout/AppLayout";

import { LoginPage } from "@/features/auth/pages/LoginPage";
import { SignupPage } from "@/features/auth/pages/SignupPage";

import { DashboardPage } from "@/features/retailer/pages/DashboardPage";
import { StorePage } from "@/features/customer/pages/StorePage";
import { TenantsPage } from "@/features/admin/pages/TenantsPage";

import { RequireAuth } from "../guards/RequireAuth";
import { RequireRole } from "../guards/RequireRole";

const router = createBrowserRouter([
  {
    element: <AuthLayout />,
    children: [
      { path: "/login", element: <LoginPage /> },
      { path: "/signup", element: <SignupPage /> },
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
        element: (
          <RequireRole role="customer">
            <StorePage />
          </RequireRole>
        ),
      },
      {
        path: "/admin",
        element: (
          <RequireRole role="admin">
            <TenantsPage />
          </RequireRole>
        ),
      },
    ],
  },
]);

export const AppRouter = () => <RouterProvider router={router} />;
