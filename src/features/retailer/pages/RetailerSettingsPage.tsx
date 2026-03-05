import { AuthDebugPanel } from "@/features/retailer/components/AuthDebugPanel";

export function RetailerSettingsPage() {
  return (
    <div className="rounded border bg-white p-6">
      <h1 className="text-xl font-semibold">Retailer Settings</h1>
      <p className="mt-2 text-sm text-gray-600">Placeholder page.</p>
      <AuthDebugPanel />
    </div>
  );
}
