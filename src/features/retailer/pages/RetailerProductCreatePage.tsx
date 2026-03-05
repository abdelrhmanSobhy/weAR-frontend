import { useNavigate } from "react-router-dom";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AuthDebugPanel } from "@/features/retailer/components/AuthDebugPanel";
import { useCreateProductMutation } from "@/features/retailer/queries/products.queries";

const schema = z.object({
  name: z.string().min(2, "Name is required"),
  price: z.coerce.number().min(1, "Price must be >= 1"),
});

type FormValues = z.infer<typeof schema>;

export function RetailerProductCreatePage() {
  const nav = useNavigate();
  const m = useCreateProductMutation();

  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", price: 100 },
  });

  const onSubmit = async (v: FormValues) => {
    const created = await m.mutateAsync({ name: v.name, price: v.price });
    nav(`/retailer/products/${created.id}/edit`, { replace: true });
  };

  return (
    <div className="rounded border bg-white p-6">
      <h1 className="text-xl font-semibold">Create Product</h1>

      <form onSubmit={form.handleSubmit(onSubmit)} className="mt-4 space-y-3">
        <div>
          <label className="text-sm">Name</label>
          <input
            className="mt-1 w-full rounded border px-3 py-2"
            {...form.register("name")}
          />
          {form.formState.errors.name?.message ? (
            <p className="mt-1 text-sm text-red-600">
              {form.formState.errors.name.message}
            </p>
          ) : null}
        </div>

        <div>
          <label className="text-sm">Price</label>
          <input
            type="number"
            className="mt-1 w-full rounded border px-3 py-2"
            {...form.register("price")}
          />
          {form.formState.errors.price?.message ? (
            <p className="mt-1 text-sm text-red-600">
              {form.formState.errors.price.message}
            </p>
          ) : null}
        </div>

        <button
          type="submit"
          disabled={m.isPending}
          className="rounded bg-black px-3 py-2 text-sm text-white disabled:opacity-60"
        >
          {m.isPending ? "Saving..." : "Create"}
        </button>
      </form>

      <AuthDebugPanel />
    </div>
  );
}
