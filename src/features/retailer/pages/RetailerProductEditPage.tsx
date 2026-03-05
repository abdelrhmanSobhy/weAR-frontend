import { useParams } from "react-router-dom";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AuthDebugPanel } from "@/features/retailer/components/AuthDebugPanel";
import {
  useProductQuery,
  useUpdateProductMutation,
} from "@/features/retailer/queries/products.queries";

const schema = z.object({
  name: z.string().min(2, "Name is required"),
  price: z.coerce.number().min(1, "Price must be >= 1"),
});

type FormValues = z.infer<typeof schema>;

export function RetailerProductEditPage() {
  const { id = "" } = useParams();
  const q = useProductQuery(id);
  const m = useUpdateProductMutation(id);

  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", price: 100 },
  });

  // hydrate form when data arrives
  if (
    q.data &&
    form.getValues("name") === "" &&
    form.formState.isDirty === false
  ) {
    form.reset({ name: q.data.name, price: q.data.price });
  }

  const onSubmit = async (v: FormValues) => {
    await m.mutateAsync({ name: v.name, price: v.price });
  };

  return (
    <div className="rounded border bg-white p-6">
      <h1 className="text-xl font-semibold">Edit Product</h1>
      <p className="mt-1 text-sm text-gray-600">id: {id}</p>

      {q.isLoading ? <p className="mt-4 text-sm">Loading...</p> : null}
      {q.data === null ? (
        <p className="mt-4 text-sm text-red-600">Product not found</p>
      ) : null}

      {q.data ? (
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
            {m.isPending ? "Saving..." : "Update"}
          </button>

          {m.isSuccess ? (
            <p className="text-sm text-green-700">Updated ✅</p>
          ) : null}
        </form>
      ) : null}

      <AuthDebugPanel />
    </div>
  );
}
