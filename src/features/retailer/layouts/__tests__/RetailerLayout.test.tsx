import { describe, it, expect } from "vitest";
import { createMemoryRouter, RouterProvider } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import { RetailerLayout } from "@/features/retailer/layouts/RetailerLayout";
import "@testing-library/jest-dom";

describe("RetailerLayout", () => {
  it("renders sidebar links and outlet content", () => {
    const router = createMemoryRouter(
      [
        {
          path: "/retailer",
          element: <RetailerLayout />,
          children: [{ index: true, element: <div>Outlet Works</div> }],
        },
      ],
      { initialEntries: ["/retailer"] },
    );

    render(<RouterProvider router={router} />);

    expect(screen.getByText("Retailer Portal")).toBeInTheDocument();
    expect(screen.getByText("Dashboard")).toBeInTheDocument();
    expect(screen.getByText("Products")).toBeInTheDocument();
    expect(screen.getByText("Add Product")).toBeInTheDocument();
    expect(screen.getByText("Settings")).toBeInTheDocument();
    expect(screen.getByText("Outlet Works")).toBeInTheDocument();
  });
});
