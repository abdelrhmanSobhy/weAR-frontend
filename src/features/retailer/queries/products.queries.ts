import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import type { ProductInput } from "@/features/retailer/types/product";
import {
  createProduct,
  getProduct,
  listProducts,
  updateProduct,
} from "@/features/retailer/api/products.api";

export const productsKeys = {
  all: ["retailer", "products"] as const,
  list: () => [...productsKeys.all, "list"] as const,
  detail: (id: string) => [...productsKeys.all, "detail", id] as const,
};

export function useProductsListQuery() {
  return useQuery({
    queryKey: productsKeys.list(),
    queryFn: listProducts,
  });
}

export function useProductQuery(id: string) {
  return useQuery({
    queryKey: productsKeys.detail(id),
    queryFn: () => getProduct(id),
    enabled: Boolean(id),
  });
}

export function useCreateProductMutation() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (input: ProductInput) => createProduct(input),
    onSuccess: async () => {
      await qc.invalidateQueries({ queryKey: productsKeys.all });
    },
  });
}

export function useUpdateProductMutation(id: string) {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (input: ProductInput) => updateProduct(id, input),
    onSuccess: async () => {
      await qc.invalidateQueries({ queryKey: productsKeys.all });
      await qc.invalidateQueries({ queryKey: productsKeys.detail(id) });
    },
  });
}
