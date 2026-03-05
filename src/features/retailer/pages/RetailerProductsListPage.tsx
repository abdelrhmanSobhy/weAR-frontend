import { Link } from "react-router-dom";
import { AuthDebugPanel } from "@/features/retailer/components/AuthDebugPanel";
import { useProductsListQuery } from "@/features/retailer/queries/products.queries";

export function RetailerProductsListPage() {
  const q = useProductsListQuery();

  return (
    <div className="rounded border bg-white p-6">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">Products</h1>
        <Link
          to="/retailer/products/new"
          className="rounded bg-black px-3 py-2 text-sm text-white"
        >
          + New
        </Link>
      </div>

      {q.isLoading ? <p className="mt-4 text-sm">Loading...</p> : null}
      {q.isError ? (
        <p className="mt-4 text-sm text-red-600">Failed to load products</p>
      ) : null}

      {q.data ? (
        <ul className="mt-4 list-disc pl-5">
          {q.data.map((p) => (
            <li key={p.id} className="my-1">
              <span className="font-medium">{p.name}</span> — {p.price} EGP{" "}
              <Link
                to={`/retailer/products/${p.id}/edit`}
                className="ml-2 text-sm text-blue-600 underline"
              >
                Edit
              </Link>
            </li>
          ))}
        </ul>
      ) : null}

      <AuthDebugPanel />
    </div>
  );
}
