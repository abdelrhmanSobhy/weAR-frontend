import type { Product, ProductInput } from "@/features/retailer/types/product";

const STORAGE_KEY = "wear-retailer-products";

function read(): Product[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    return JSON.parse(raw) as Product[];
  } catch {
    return [];
  }
}

function write(items: Product[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
}

function nowISO() {
  return new Date().toISOString();
}

// seed once (optional)
function ensureSeed() {
  const items = read();
  if (items.length > 0) return;
  const seeded: Product[] = [
    {
      id: "p1",
      name: "Basic T-Shirt",
      price: 299,
      createdAt: nowISO(),
      updatedAt: nowISO(),
    },
    {
      id: "p2",
      name: "Hoodie",
      price: 799,
      createdAt: nowISO(),
      updatedAt: nowISO(),
    },
  ];
  write(seeded);
}

export async function listProducts(): Promise<Product[]> {
  // TODO(BE): Replace with GET /retailer/products
  ensureSeed();
  return read();
}

export async function getProduct(id: string): Promise<Product | null> {
  // TODO(BE): Replace with GET /retailer/products/:id
  ensureSeed();
  return read().find((p) => p.id === id) ?? null;
}

export async function createProduct(input: ProductInput): Promise<Product> {
  // TODO(BE): Replace with POST /retailer/products
  ensureSeed();
  const items = read();
  const p: Product = {
    id: crypto.randomUUID(),
    name: input.name,
    price: input.price,
    createdAt: nowISO(),
    updatedAt: nowISO(),
  };
  const next = [p, ...items];
  write(next);
  return p;
}

export async function updateProduct(
  id: string,
  input: ProductInput,
): Promise<Product> {
  // TODO(BE): Replace with PUT /retailer/products/:id
  ensureSeed();
  const items = read();
  const idx = items.findIndex((p) => p.id === id);
  if (idx === -1) throw new Error("Product not found");

  const updated: Product = {
    ...items[idx],
    name: input.name,
    price: input.price,
    updatedAt: nowISO(),
  };

  const next = [...items];
  next[idx] = updated;
  write(next);
  return updated;
}
